<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPromotion extends Model
{
    use HasFactory;
    protected $table = 'user_promotions';
    protected $fillable=[
        'user_id',
        'promotion_id',
    ];

    public function promotion(){
        return $this->belongsTo(Promotion::class);
    }
}
