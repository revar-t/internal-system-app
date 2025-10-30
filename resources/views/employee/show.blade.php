@extends('layouts.app')

@section('title', '従業員詳細')

@section('content')
    <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">従業員詳細</h2>

        <div class="space-y-4 bg-white p-6 rounded shadow">
            <div>
                <strong>姓：</strong> {{ $employee->last_name }}
            </div>
            <div>
                <strong>名：</strong> {{ $employee->first_name }}
            </div>
            <div>
                <strong>姓（カナ）：</strong> {{ $employee->last_name_kana }}
            </div>
            <div>
                <strong>名（カナ）：</strong> {{ $employee->first_name_kana }}
            </div>
            <div>
                <strong>郵便番号：</strong> {{ $employee->zip_code }}
            </div>
            <div>
                <strong>都道府県：</strong> {{ $employee->prefecture->name ?? '' }}
            </div>
            <div>
                <strong>住所：</strong> {{ $employee->address }}
            </div>
            <div>
                <strong>電話番号：</strong> {{ $employee->phone }}
            </div>
            <div>
                <strong>メールアドレス：</strong> {{ $employee->email }}
            </div>
            <div>
                <strong>生年月日：</strong> {{ $employee->birthday }}
            </div>
        </div>

        <div class="pt-6 flex space-x-4">
            <a href="{{ route('employee.edit', $employee->id) }}"
                class="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                編集
            </a>

            <form action="{{ route('employee.destroy', $employee->id) }}" method="POST"
                onsubmit="return confirm('本当に削除しますか？');">
                @csrf
                @method('DELETE')
                <button type="submit"
                    class="px-6 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    削除
                </button>
            </form>
        </div>
    </div>
@endsection
