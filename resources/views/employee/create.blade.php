@extends('layouts.app')

@section('title', '従業員追加')

@section('content')
    <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">従業員追加</h2>

        <form action="{{ route('employee.store') }}" method="POST" class="space-y-4">
            @csrf

            <div>
                <label class="block text-sm font-medium text-gray-700">姓</label>
                <input type="text" name="last_name" value="{{ old('last_name') }}" required
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">名</label>
                <input type="text" name="first_name" value="{{ old('first_name') }}" required
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">姓（カナ）</label>
                <input type="text" name="last_name_kana" value="{{ old('last_name_kana') }}"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">名（カナ）</label>
                <input type="text" name="first_name_kana" value="{{ old('first_name_kana') }}"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">郵便番号</label>
                <input type="text" name="zip_code" value="{{ old('zip_code') }}"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">都道府県</label>
                <select name="prefecture_id"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option value="">選択してください</option>
                    @foreach ($prefectures as $pref)
                        <option value="{{ $pref->id }}" {{ old('prefecture_id') == $pref->id ? 'selected' : '' }}>
                            {{ $pref->name }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">住所</label>
                <input type="text" name="address" value="{{ old('address') }}"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">電話番号</label>
                <input type="text" name="phone" value="{{ old('phone') }}"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">メールアドレス</label>
                <input type="email" name="email" value="{{ old('email') }}"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">パスワード</label>
                <input type="password" name="password"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="8文字以上で入力">
            </div>


            <div>
                <label class="block text-sm font-medium text-gray-700">生年月日</label>
                <div class="flex space-x-2 mt-1">
                    <select name="birth_year"
                        class="block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option value="">年</option>
                        @for ($y = date('Y'); $y >= 1900; $y--)
                            <option value="{{ $y }}" {{ old('birth_year', 2000) == $y ? 'selected' : '' }}>
                                {{ $y }}
                            </option>
                        @endfor
                    </select>

                    <select name="birth_month"
                        class="block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option value="">月</option>
                        @for ($m = 1; $m <= 12; $m++)
                            <option value="{{ $m }}" {{ old('birth_month') == $m ? 'selected' : '' }}>
                                {{ $m }}</option>
                        @endfor
                    </select>

                    <select name="birth_day"
                        class="block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option value="">日</option>
                        @for ($d = 1; $d <= 31; $d++)
                            <option value="{{ $d }}" {{ old('birth_day') == $d ? 'selected' : '' }}>
                                {{ $d }}</option>
                        @endfor
                    </select>
                </div>
            </div>

            <div class="pt-4 flex justify-center">
                <button type="submit"
                    class="px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    追加
                </button>
            </div>
        </form>
    </div>
@endsection
