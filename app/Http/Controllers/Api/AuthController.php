<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


/**
 * @tags 認証API
 */
class AuthController extends Controller
{
    /**
     * ログイン
     *
     * ユーザーの認証を行い、アクセストークンを返します。
     *
     * @unauthenticated
     */
    public function login(Request $request)
    {
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
            'user' => new UserResource($user),
        ]);
    }

    /**
     * ログアウト
     *
     * ログアウト操作を行う
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }

    /**
     * ログインユーザー情報
     *
     * ログイン情報を取得する
     */
    public function user(Request $request)
    {
        return $request->user();
    }
}
