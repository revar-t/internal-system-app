<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// APIログイン
Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required','email'],
        'password' => ['required'],
    ]);

    if (!Auth::attempt($credentials)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $user = $request->user();
    $token = $user->createToken('api-token')->plainTextToken;

    return response()->json([
        'message' => 'Login successful',
        'token' => $token,
        'user' => $user,
    ]);
});

// APIログアウト
Route::middleware('auth:sanctum')->post('/logout', function (Request $request) {
    // 現在のアクセストークンを削除
    $request->user()->currentAccessToken()->delete();

    return response()->json(['message' => 'Logged out successfully']);
});

// ログインユーザー取得
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
