<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attribute_value extends Model
{
    protected $fillable = [
        'value'
    ];

    protected $casts = [
        'value' => 'string'
    ];  
}
