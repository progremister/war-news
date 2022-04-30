@extends('layouts.news_layout')


@section('title')
    News
@endsection

@section('news-content')

<!-- News Content -->

    <div id="content">

        {{-- <div class="box">
            <div class="buffer">
                <h1 class="title">Featured Video</h1>
                <iframe src="https://www.youtube.com/embed/dLItUhk5WRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div>
        </div>   --}}

        <div class="box news">
            <ul class="homelist">
            <h1 class="title">News</h1>
                @include('partials.pagination_data')
            </ul>
        </div>
    </div>
    
@endsection
