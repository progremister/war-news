<div id="rsidebar">

    <div class="box">
        <div class="buffer">
            <h2>@lang('main.latest_posts')</h2>
            <ul>
                @foreach ($latestPosts as $post)
                <li><a href="/{{ $post->url_key }}">{{ $post->__('title')}}</a></li>
                @endforeach 
            </ul>
        </div>
    </div>
</div>