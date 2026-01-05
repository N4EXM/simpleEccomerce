<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order_items extends Model
{
    
    protected $fillable = [
        'product_name',
        'quantity',
    ];

    protected $hidden = [
        'total',
        'unit_price',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'product_name' => 'string',
        'total' => 'decimal:2',
        'unit_price' => 'decimal:2',
        'quantity' => 'integer'
    ];

}
