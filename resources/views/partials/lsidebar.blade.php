<div id="lsidebar">
        <div class="box">
            <h2>@lang('main.pages')</h2>
            <ul>
                <li><a href="/">@lang('main.shelters_title'))</a></li>
                <li><a href="{{ route('news') }}">@lang('main.news_title')</a></li>
                <li><a href="{{ route('charity') }}">@lang('main.charity_title')</a></li>
            </ul>
        </div>
    
        <div class="box">
            <h2>@lang('main.tags')</h2>

            <ul name="category_id">
                <li><a href="{{ route('news') }}">@lang('main.all')</a></li>
                @foreach($categories as $category)
                    <li><a href="/news?category_id={{ $category->id}}" value="{{$category->id}}">{{ $category->name }}</a></li>
                @endforeach
            </ul>
        </div>
    
        <div class="box">
            <h2>@lang('main.dates')</h2>
            <ul>
                <li><a href="/news?date=05.2022">@lang('main.may')</a></li>
                <li><a href="/news?date=04.2022">@lang('main.april')</a></li>
                <li><a href="/news?date=03.2022">@lang('main.march')</a></li>
                <li><a href="/news?date=02.2022">@lang('main.february')</a></li>
            </ul>
        </div>
    </div>