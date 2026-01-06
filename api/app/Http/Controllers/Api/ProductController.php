<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    
    public function getProducts(Product $product) {

        $products = $product
                    ->products()

    }

}
