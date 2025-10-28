<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    /** @use HasFactory<\Database\Factories\EmployeeFactory> */
    use HasFactory;

    protected $fillable = [
        'last_name',
        'first_name',
        'last_name_kana',
        'first_name_kana',
        'zip_code',
        'prefecture_id',
        'address',
        'phone',
        'email',
        'birthday',
        'user_id',
    ];

    public function prefecture()
    {
        return $this->belongsTo(Prefecture::class, 'prefecture_id', 'id');
    }

}
