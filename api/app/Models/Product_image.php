<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product_image extends Model
{
    
    protected $fillable = [
        'image_path',
        'is_default',
        'sort_order'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'image_path' => 'string',
        'is_default' => 'boolean',
        'sort_order' => 'integer'
    ];

    public function product() {
        return $this->belongsTo(Product::class);
    }

}
