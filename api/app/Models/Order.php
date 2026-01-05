<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    
    protected $fillable = [
        'status',
        'notes',
        'pending'
    ];

    protected $hidden = [
        'order_number',
        'subtotal',
        'shipping',
        'total',
        'shipping_address',
        'billing_address',
        'payment_method',
        'payment_status',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        
    ];

}
