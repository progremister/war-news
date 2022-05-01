<div id="lsidebar">
        <div class="box">
            <h2>Сторінки</h2>
            <ul>
                <li><a href="/">Укриття</a></li>
                <li><a href="{{ route('news') }}">Новини</a></li>
                <li><a href="{{ route('charity') }}">Благодійність</a></li>
            </ul>
        </div>
    
        <div class="box">
            <h2>Теги</h2>

            <ul name="category_id">
                <li><a href="{{ route('news') }}">Всі</a></li>
                @foreach($categories as $category)
                    <li><a href="/news?category_id={{ $category->id}}" value="{{$category->id}}">{{ $category->name }}</a></li>
                @endforeach
            </ul>
        </div>
    
        <div class="box">
            <h2>Місяці</h2>
            <ul>
                <li><a href="/news?date=05.2022">Травень 2022</a></li>
                <li><a href="/news?date=04.2022">Квітень 2022</a></li>
                <li><a href="/news?date=03.2022">Березень 2022</a></li>
                <li><a href="/news?date=02.2022">Лютий 2022</a></li>
                <li><a href="/news?date=01.2022">Січень 2022</a></li>
            </ul>
        </div>
    </div>