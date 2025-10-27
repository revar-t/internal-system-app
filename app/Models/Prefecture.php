<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prefecture extends Model
{
    protected $table = 'm_prefecture'; // テーブル名
    public $timestamps = true;         // created_at / updated_at を使う
}
