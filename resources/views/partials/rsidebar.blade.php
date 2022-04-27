<div id="rsidebar">

    <div class="box">
        <div class="buffer">
            <h2>Latest Posts</h2>
            <ul>
                @foreach ($latestPosts as $post)
                <li><a href="/{{ $post->url_key }}">{{ $post->title}}</a></li>
                @endforeach 
            </ul>
        </div>
    </div>
</div>