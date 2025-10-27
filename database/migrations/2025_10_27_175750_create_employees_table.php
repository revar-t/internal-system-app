<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id(); // 従業員ID
            $table->string('last_name'); // 姓
            $table->string('first_name'); // 名
            $table->string('last_name_kana'); // 姓（カナ）
            $table->string('first_name_kana'); // 名（カナ）
            $table->string('zip_code', 8)->nullable(); // 郵便番号
            $table->unsignedSmallInteger('prefecture_id')->nullable(); // 都道府県コード（JISコード）
            $table->string('address')->nullable(); // 住所（市町村以降）
            $table->string('phone')->nullable(); // 電話番号
            $table->string('email')->unique(); // メールアドレス
            $table->date('birthday')->nullable(); // 生年月日
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade'); // users.id と紐付け
            $table->timestamps(); // created_at, updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
