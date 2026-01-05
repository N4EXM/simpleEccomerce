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

    public function products() {
        return $this->belongsToMany(Product::class)
        ->withPivot('');
    }

}


