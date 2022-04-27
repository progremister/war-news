@extends('layouts.news-layout')


@section('title')
    Post
@endsection

@section('news-content')
    <!-- Post Content -->
    <div id="content">
        <!-- begin post -->
        <div class="box">
            <div class="buffer">
                <h3> {{ $post->title}} </h3>
                <h2 style="margin-left: 1rem;">{{ $post->published_date}}</h2>
                <div class="content">
                    @if ($post->image_path != null)
                        <img class="aligncenter" src="{{ asset("$post->image_path") }}" width="700" height="450" alt="{{ $post->content}}" />
                    @endif
                    <p>{{ $post->content}}</p>
                </div>
                <a href="/news" class="charity__btn btn--black" style="margin: 0 auto 1rem">Back</a>
            </div>
        </div>
    <!-- end post -->
    </div>
@endsection