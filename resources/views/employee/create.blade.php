@extends('layouts.app')

@section('title', '従業員追加')

@section('content')
<h2>従業員追加</h2>

<form action="{{ route('employee.store') }}" method="POST">
    @csrf

    <label>姓</label>
    <input type="text" name="last_name" value="{{ old('last_name') }}" required><br>

    <label>名</label>
    <input type="text" name="first_name" value="{{ old('first_name') }}" required><br>

    <label>姓（カナ）</label>
    <input type="text" name="last_name_kana" value="{{ old('last_name_kana') }}"><br>

    <label>名（カナ）</label>
    <input type="text" name="first_name_kana" value="{{ old('first_name_kana') }}"><br>

    <label>郵便番号</label>
    <input type="text" name="zip_code" value="{{ old('zip_code') }}"><br>

    <label>都道府県</label>
    <select name="prefecture_code">
        <option value="">選択してください</option>
        @foreach ($prefectures as $pref)
            <option value="{{ $pref->id }}" {{ old('prefecture_code') == $pref->id ? 'selected' : '' }}>
                {{ $pref->name }}
            </option>
        @endforeach
    </select><br>

    <label>住所</label>
    <input type="text" name="address" value="{{ old('address') }}"><br>

    <label>電話番号</label>
    <input type="text" name="phone" value="{{ old('phone') }}"><br>

    <label>メールアドレス</label>
    <input type="email" name="email" value="{{ old('email') }}"><br>

    <label>生年月日</label>
    <select name="birth_year">
        <option value="">年</option>
        @for ($y = date('Y'); $y >= 1900; $y--)
            <option value="{{ $y }}"
                {{ old('birth_year', 2000) == $y ? 'selected' : '' }}>
                {{ $y }}
            </option>
        @endfor
    </select>年

    <select name="birth_month">
        <option value="">月</option>
        @for ($m = 1; $m <= 12; $m++)
            <option value="{{ $m }}" {{ old('birth_month') == $m ? 'selected' : '' }}>{{ $m }}</option>
        @endfor
    </select>月

    <select name="birth_day">
        <option value="">日</option>
        @for ($d = 1; $d <= 31; $d++)
            <option value="{{ $d }}" {{ old('birth_day') == $d ? 'selected' : '' }}>{{ $d }}</option>
        @endfor
    </select>日

    <button type="submit">追加</button>
</form>
@endsection
