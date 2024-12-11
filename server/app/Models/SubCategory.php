<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;
    protected $table = 'sub_categories';
    protected $fillable = ['name', 'image', 'status', 'category_id'];
    public function product(){
        return $this->hasMany(Product::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

     // Một SubCategory có nhiều Product
     public function products()
     {
         return $this->hasMany(Product::class);
     }
}
