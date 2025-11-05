<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Api\AuthController;

// 認証API
Route::controller(AuthController::class)->group(function () {
    Route::post('/login', 'login');
    Route::middleware('auth:sanctum')->post('/logout', 'logout');
    // Route::middleware('auth:sanctum')->get('/user', 'user');
});

// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('/employees', [EmployeeController::class, 'index']);
//     Route::get('/employees/{id}', [EmployeeController::class, 'show']);
//     Route::post('/employees', [EmployeeController::class, 'store']);
//     Route::put('/employees/{id}', [EmployeeController::class, 'update']);
//     Route::delete('/employees/{id}', [EmployeeController::class, 'destroy']);
// });
