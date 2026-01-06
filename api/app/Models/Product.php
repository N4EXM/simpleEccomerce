<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'sale_price',
        'is_active',
        'is_featured'
    ];

    protected $hidden = [
        'stock_quantity',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'sale_price' => 'decimal:2',
        'stock_quantity' => 'integer',
        'is_active' => 'boolean',
        'is_featured' => 'boolean'
    ];

    // relationships
    public function categories() {
        return $this->belongsToMany(Category::class);
    }

    public function images() {
        return $this->hasMany(Product_image::class);
    } 

    public function reviews() {
        return $this->hasMany(Review::class);
    }

    public function order_items() {
        return $this->hasMany(Order_items::class);
    }

    // functions

            


}
