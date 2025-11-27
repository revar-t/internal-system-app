<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    if (Auth::check()) {
        // ログイン済みならReactアプリに遷移
        return view('app');
    }

    // 未ログインならログイン画面へ
    return redirect()->route('login');
});

// Reactアプリ用 catch-all ルート
Route::middleware(['auth'])->get('/{any}', function () {
    return view('app');
})->where('any', '^(?!.*docs/api).+$');

require __DIR__.'/auth.php';
