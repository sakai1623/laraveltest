@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>社員管理</h1>
@endsection

@section('content')
<div class="container" style="padding:20px;">
    <div id="employee"></div>
    <script defer src="/js/app.js"></script>
    {{-- <script defer src="/js/employee.js"></script> --}}
</div>
@endsection
