@extends('layouts.main')

@section('body')

    <!-- Left Sidebar -->
    @include('partials.lsidebar')

    <!-- News Content-->
    @yield('news-content')

    <!-- Right Sidebar -->
    @include('partials.rsidebar')

@endsection