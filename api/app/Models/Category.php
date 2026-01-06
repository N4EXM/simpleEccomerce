<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    protected $fillable = [
        'name',
        'slug',
        'description'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'parent_id' => 'integer'
    ];

    // Parent category (for hierarchical categories)
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    // Child categories
    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    // Products in this category (many-to-many)
    public function products()
    {
        return $this->belongsToMany(Product::class, 'category_product');
    }


}


