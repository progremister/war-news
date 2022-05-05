<div class="posts__page" id="news_pagination">
    @if ($posts->count() > 0)
        @foreach($posts as $post)
            <li> 
                <a href="/{{ $post->url_key }}">
                    @if ($post->image_path != null)
                        <img src="{{ asset("$post->image_path")  }}" alt="{{ $post->title}}" />
                    @endif
                </a> 
                <a href="/{{ $post->url_key }}" class="title">{{ $post->__('title')}}</a>
                <p>{{ $post->__('description')}}</p>
                <h2 class="post__date" >{{ $post->created_at}}</h2>
            </li>
        @endforeach
    </div>
    {!! $posts -> withQueryString() -> links('vendor.pagination.custom-pagination') !!}
    @else
        <h2>@lang('main.nothing_found')</h2>
    @endif