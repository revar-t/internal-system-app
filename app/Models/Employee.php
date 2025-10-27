<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    /** @use HasFactory<\Database\Factories\EmployeeFactory> */
    use HasFactory;
    public function prefecture()
    {
        return $this->belongsTo(Prefecture::class, 'prefecture_id', 'id');
    }

}
