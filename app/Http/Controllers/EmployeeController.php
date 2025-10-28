<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
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
            'user_id' => 'nullable|exists:users,id',
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

        // 保存
        Employee::create($validated);

        return redirect()->route('employee.index')->with('success', '従業員を追加しました');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
