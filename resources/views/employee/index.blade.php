@extends('layouts.app')

@section('title', '従業員一覧')

@section('content')
<h2>従業員一覧</h2>

<table border="1" cellpadding="8" cellspacing="0">
    <thead>
        <tr>
            <th>ID</th>
            <th>氏名</th>
            <th>郵便番号</th>
            <th>住所</th>
            <th>電話番号</th>
            <th>メールアドレス</th>
            <th>生年月日</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($employees as $employee)
        <tr>
            <td>{{ $employee->id }}</td>
            <td>{{ $employee->last_name }} {{ $employee->first_name }}</td>
            {{-- <td>{{ $employee->last_name_kana }}</td> --}}
            {{-- <td>{{ $employee->first_name_kana }}</td> --}}
            <td>{{ $employee->zip_code }}</td>
            <td>{{ optional($employee->prefecture)->name }} {{ $employee->address }}</td>
            <td>{{ $employee->phone }}</td>
            <td>{{ $employee->email }}</td>
            <td>{{ $employee->birthday }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
