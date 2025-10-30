@extends('layouts.app')

@section('title', '従業員一覧')

@section('content')
<div class="flex items-center justify-between mb-6">
    <h2 class="text-2xl font-semibold text-gray-800">従業員一覧</h2>
    <a href="{{ route('employee.create') }}"
       class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium
              rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-blue-500">
        新規従業員追加
    </a>
</div>

<div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 border">
        <thead class="bg-gray-50">
            <tr>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">氏名</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">郵便番号</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">住所</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">電話番号</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">メールアドレス</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">生年月日</th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            @foreach ($employees as $employee)
            <tr class="hover:bg-gray-50 cursor-pointer"
                onclick="window.location='{{ route('employee.show', $employee->id) }}'">
                <td class="px-4 py-2 text-sm text-gray-700">{{ $employee->id }}</td>
                <td class="px-4 py-2 text-sm text-gray-700">{{ $employee->last_name }} {{ $employee->first_name }}</td>
                <td class="px-4 py-2 text-sm text-gray-700">{{ $employee->zip_code }}</td>
                <td class="px-4 py-2 text-sm text-gray-700">{{ optional($employee->prefecture)->name }} {{ $employee->address }}</td>
                <td class="px-4 py-2 text-sm text-gray-700">{{ $employee->phone }}</td>
                <td class="px-4 py-2 text-sm text-gray-700">{{ $employee->email }}</td>
                <td class="px-4 py-2 text-sm text-gray-700">{{ $employee->birthday }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
