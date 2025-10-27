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
        Schema::create('m_prefecture', function (Blueprint $table) {
            $table->unsignedSmallInteger('id')->primary(); // JISコードをIDにする
            $table->string('name'); // 都道府県名
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('m_prefecture');
    }
};
