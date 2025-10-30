<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Employee;
use App\Models\Prefecture;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::all();
        return view('employee.index', compact('employees'));
    }

    /**
     * 新規作成フォームを表示
     */
    public function create()
    {
        $prefectures = Prefecture::all(); // 都道府県リスト取得
        return view('employee.create', compact('prefectures'));
    }

    /**
     * フォームから送信されたデータを保存
     */
    public function store(Request $request)
    {
        // バリデーション
        $validated = $request->validate([
            'last_name' => 'required|string|max:255',
            'first_name' => 'required|string|max:255',
            'last_name_kana' => 'nullable|string|max:255',
            'first_name_kana' => 'nullable|string|max:255',
            'zip_code' => 'nullable|string|max:10',
            'prefecture_id' => 'nullable|integer|exists:m_prefecture,id',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'birth_year'  => 'required|integer',
            'birth_month' => 'required|integer',
            'birth_day'   => 'required|integer',
            'password' => 'required|min:8',
        ]);

        // 年/月/日を結合して birthday カラム用に変換
        $validated['birthday'] = sprintf(
            '%04d-%02d-%02d',
            $validated['birth_year'],
            $validated['birth_month'],
            $validated['birth_day']
        );

        // 不要な birth_* を削除
        unset($validated['birth_year'], $validated['birth_month'], $validated['birth_day']);

        // トランザクション開始
        DB::transaction(function () use ($validated) {

            // 1. User作成
            $user = User::create([
                'email' => $validated['email'],
                'password' => $validated['password'],
            ]);

            // 2. Employee作成
            Employee::create([
                'last_name' => $validated['last_name'],
                'first_name' => $validated['first_name'],
                'last_name_kana' => $validated['last_name_kana'] ?? null,
                'first_name_kana' => $validated['first_name_kana'] ?? null,
                'zip_code' => $validated['zip_code'] ?? null,
                'prefecture_id' => $validated['prefecture_id'] ?? null,
                'address' => $validated['address'] ?? null,
                'phone' => $validated['phone'] ?? null,
                'email' => $validated['email'] ?? null,
                'birthday' => $validated['birthday'], // ← ここを修正
                'user_id' => $user->id,
            ]);
        }); // ここでトランザクション終了。例外が出れば自動ロールバック

        return redirect()->route('employee.index')->with('success', '従業員を追加しました');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // IDに対応する従業員を取得（存在しなければ404）
        $employee = Employee::with('prefecture', 'user')->findOrFail($id);

        return view('employee.show', compact('employee'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $employee = Employee::findOrFail($id);
        $prefectures = Prefecture::all();

        // 生年月日を分割（birthdayがnullでない場合のみ）
        if ($employee->birthday) {
            $birthday = explode('-', $employee->birthday);
            $employee->birth_year  = $birthday[0];
            $employee->birth_month = $birthday[1];
            $employee->birth_day   = $birthday[2];
        } else {
            $employee->birth_year  = null;
            $employee->birth_month = null;
            $employee->birth_day   = null;
        }

        return view('employee.edit', compact('employee', 'prefectures'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $employee = Employee::findOrFail($id);
        $validated = $request->validate([
            'last_name' => 'required|string|max:255',
            'first_name' => 'required|string|max:255',
            'zip_code' => 'nullable|string|max:10',
            'prefecture_id' => 'nullable|integer|exists:m_prefecture,id',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255|unique:users,email,' . ($employee->user_id ?? 'NULL'),
            'birth_year'  => 'required|integer',
            'birth_month' => 'required|integer',
            'birth_day'   => 'required|integer',
        ]);

        $validated['birthday'] = sprintf(
            '%04d-%02d-%02d',
            $validated['birth_year'],
            $validated['birth_month'],
            $validated['birth_day']
        );

        unset($validated['birth_year'], $validated['birth_month'], $validated['birth_day']);

        DB::transaction(function () use ($validated, $employee) {

            // 1. Employee更新
            $employee->update([
                'last_name' => $validated['last_name'],
                'first_name' => $validated['first_name'],
                'zip_code' => $validated['zip_code'] ?? null,
                'prefecture_id' => $validated['prefecture_id'] ?? null,
                'address' => $validated['address'] ?? null,
                'phone' => $validated['phone'] ?? null,
                'email' => $validated['email'] ?? null,
                'birthday' => $validated['birthday'],
            ]);

            // 2. Userも更新（メールアドレスが変更された場合）
            if ($employee->user) { // user_idがセットされている場合
                $employee->user->update([
                    'email' => $validated['email'], // 同期
                ]);
            }
        });

        return redirect()->route('employee.index')->with('success', '従業員情報を更新しました');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $employee = Employee::findOrFail($id);
        $employee->delete();

        return redirect()->route('employee.index')->with('success', '従業員を削除しました');
    }
}
