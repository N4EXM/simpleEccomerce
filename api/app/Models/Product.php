<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'quantity',
        'sku',
        'status',
        'discount_percentage',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'price' => 'decimal:2',
        'quantity' => 'integer',
        'status' => 'boolean',
        'discount_percentage' => 'decimal:2',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'final_price',
        'has_discount',
        'discount_amount',
        'is_in_stock',
        'is_active',
    ];

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($product) {
            if (empty($product->slug)) {
                $product->slug = \Str::slug($product->name);
            }
            
            if (empty($product->sku)) {
                $product->sku = 'PROD-' . strtoupper(\Str::random(8));
            }
        });
    }

    /**
     * Relationships
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    /**
     * Scopes
     */
    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    public function scopeInStock($query)
    {
        return $query->where('quantity', '>', 0);
    }

    public function scopeWithDiscount($query)
    {
        return $query->where('discount_percentage', '>', 0);
    }

    public function scopeSearch($query, $search)
    {
        return $query->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%")
                    ->orWhere('sku', 'like', "%{$search}%");
    }

    /**
     * Accessors & Mutators
     */

    /**
     * Get the final price after discount.
     */
    protected function finalPrice(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->price - ($this->price * ($this->discount_percentage / 100)),
        );
    }

    /**
     * Check if product has discount.
     */
    protected function hasDiscount(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->discount_percentage > 0,
        );
    }

    /**
     * Get discount amount in currency.
     */
    protected function discountAmount(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->price * ($this->discount_percentage / 100),
        );
    }

    /**
     * Check if product is in stock.
     */
    protected function isInStock(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->quantity > 0,
        );
    }

    /**
     * Alias for status (for consistency with other models).
     */
    protected function isActive(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->status,
        );
    }

    /**
     * Helper Methods
     */

    /**
     * Get primary image URL.
     */
    public function getPrimaryImageUrl()
    {
        $image = $this->images()->first();
        return $image ? asset('storage/' . $image->image_path) : asset('images/default-product.png');
    }

    /**
     * Get all image URLs.
     */
    public function getAllImageUrls()
    {
        return $this->images->map(function ($image) {
            return asset('storage/' . $image->image_path);
        });
    }

    /**
     * Update product stock quantity.
     */
    public function updateStock($quantity, $operation = 'decrease')
    {
        if ($operation === 'decrease') {
            $this->decrement('quantity', $quantity);
        } elseif ($operation === 'increase') {
            $this->increment('quantity', $quantity);
        } elseif ($operation === 'set') {
            $this->update(['quantity' => $quantity]);
        }
        
        return $this;
    }

    /**
     * Check if product has enough stock.
     */
    public function hasEnoughStock($quantity = 1)
    {
        return $this->quantity >= $quantity;
    }

    /**
     * Get average rating from reviews.
     */
    public function averageRating()
    {
        // Note: Your reviews table doesn't have rating column yet
        // If you add it later, uncomment this:
        // return $this->reviews()->avg('rating') ?? 0;
        
        return 0; // Placeholder until you add rating column
    }

    /**
     * Get total reviews count.
     */
    public function reviewsCount()
    {
        return $this->reviews()->count();
    }

    /**
     * Get related products (same categories).
     */
    public function relatedProducts($limit = 4)
    {
        return self::whereHas('categories', function ($query) {
                $query->whereIn('categories.id', $this->categories->pluck('id'));
            })
            ->where('id', '!=', $this->id)
            ->active()
            ->inStock()
            ->limit($limit)
            ->get();
    }

    /**
     * Apply discount to product.
     */
    public function applyDiscount($percentage)
    {
        $this->update(['discount_percentage' => max(0, min(100, $percentage))]);
        return $this;
    }

    /**
     * Remove discount from product.
     */
    public function removeDiscount()
    {
        $this->update(['discount_percentage' => 0]);
        return $this;
    }

    /**
     * Toggle product status.
     */
    public function toggleStatus()
    {
        $this->update(['status' => !$this->status]);
        return $this;
    }

    /**
     * Get discount percentage for display.
     */
    public function getDiscountDisplay()
    {
        return $this->has_discount ? round($this->discount_percentage) . '% OFF' : null;
    }
}