@extends('layouts.news_layout')


@section('title')
    @lang('main.post_title')
@endsection

@section('news-content')
    <!-- Post Content -->
    <div id="content">
        <!-- begin post -->
        <div class="box">
            <div class="buffer">
                <h3> {{ $post->title}} </h3>
                <h2 style="margin-left: 1rem;">{{ $post->created_at}}</h2>
                <div class="content">
                    @if ($post->image_path != null)
                        <img class="aligncenter" src="{{ asset("$post->image_path") }}" width="700" height="450" alt="{{ $post->content}}" />
                    @endif
                    {!! $post->content !!}
                </div>
                <a href="/news" class="charity__btn btn--black" style="margin: 0 auto 1rem">@lang('main.back')</a>
            </div>
        </div>
    <!-- end post -->
    </div>
@endsection