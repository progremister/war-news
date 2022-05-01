<div id="lsidebar">
        <div class="box">
            <h2>Pages</h2>
            <ul>
                <li><a href="/">Shelters</a></li>
                <li><a href="{{ route('news') }}">News</a></li>
                <li><a href="{{ route('charity') }}">Charity</a></li>
            </ul>
        </div>
    
        <div class="box">
            <h2>Tags</h2>

            <ul name="category_id">
                <li><a href="{{ route('news') }}">All</a></li>
                @foreach($categories as $category)
                    <li><a href="/news?category_id={{ $category->id}}" value="{{$category->id}}">{{ $category->name }}</a></li>
                @endforeach
            </ul>
        </div>
    
        <div class="box">
            <h2>Dates</h2>
            <ul>
                <li><a href="/news?date=05.2022">May 2022</a></li>
                <li><a href="/news?date=04.2022">April 2022</a></li>
                <li><a href="/news?date=03.2022">March 2022</a></li>
                <li><a href="/news?date=02.2022">February 2022</a></li>
                <li><a href="/news?date=01.2022">January 2022</a></li>
            </ul>
        </div>
    </div>