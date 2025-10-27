<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $employees = [
            [
                'last_name' => '佐藤',
                'first_name' => '太郎',
                'last_name_kana' => 'サトウ',
                'first_name_kana' => 'タロウ',
                'zip_code' => '1000001',
                'prefecture_id' => 13, // 東京都
                'address' => '千代田区千代田1-1',
                'phone' => '090-1234-5678',
                'email' => 'taro.sato@example.com',
                'birthday' => '1990-01-01',
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'last_name' => '鈴木',
                'first_name' => '花子',
                'last_name_kana' => 'スズキ',
                'first_name_kana' => 'ハナコ',
                'zip_code' => '1500001',
                'prefecture_id' => 13, // 東京都
                'address' => '渋谷区神宮前1-1',
                'phone' => '080-9876-5432',
                'email' => 'hanako.suzuki@example.com',
                'birthday' => '1992-05-10',
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'last_name' => '高橋',
                'first_name' => '次郎',
                'last_name_kana' => 'タカハシ',
                'first_name_kana' => 'ジロウ',
                'zip_code' => '5300001',
                'prefecture_id' => 27, // 大阪府
                'address' => '大阪市北区梅田1-1',
                'phone' => '070-2468-1357',
                'email' => 'jiro.takahashi@example.com',
                'birthday' => '1988-09-15',
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('employees')->insert($employees);
    }
}
