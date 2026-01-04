<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'sale_price',
        'stock_quantity',
        'is_active',
        'is_featured'
    ];

    protected $hidden = [

    ];

    protected $casts = [
        
    ];

}
