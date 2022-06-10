<header class="header" id="header">
    <div class="header__inner">
        <a class="header__logo" href="{{ url('/') }}">
            {{ config('app.name', 'Laravel') }}
        </a>
        <nav class="nav" id="nav">
            <form class="nav__link" id="search" method="get" action="{{ route("news")}}">
                <label for="search">Search for stuff</label>
                <input id="search_bar" type="search" placeholder="Search..." autofocus required id="search"  name="search" />
                <button type="submit" id="search_btn">Go</button>    
              </form>
            <a class="nav__link" href="{{ url('/') }}">@lang('main.shelters_title')</a>
            <a class="nav__link" href="{{ route('news') }}">@lang('main.news_title')</a>
            
            <div class="nav__link language">
                <img src="{{ asset("images/icons/globe.svg")}}" alt="">
                <a class="lang-drpdwn-btn">{{ App::getLocale() }}</a>
                <div class="dropdown-language">
                  <a href="{{ route('locale', 'ua') }}">Українська</a>
                  <a href="{{ route('locale', 'en') }}">English</a>
                </div>
              </div>

            <a class="nav__link social__link" href="https://t.me/dm_kolos">
                <img src="{{ asset("images/icons/telegram-white.svg")}}" alt="">
            </a>
            @if(Auth::check())
                <div class="nav__link language">
                    <a class="lang-drpdwn-btn">{{ Auth::user()->username }}</a>
                    <div class="dropdown-language">
                      <a href="" style="pointer-events: none;">@lang('main.profile')</a>
                      <a сlass="" href="{{ route('logout') }}"
                      onclick="event.preventDefault();
                                  document.getElementById('logout-form').submit();">
                        {{ __ ( 'main.log_out') }}</a>
                    </div>
                  </div>
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none">
                @csrf
            </form>
            @else
            <a class="nav__link" href="{{ route('login') }}">
            @lang('main.login_title') 
            </a>
            @endif
            
            <a class="nav__link  nav__link--btn" href="{{ route('charity') }}">@lang('main.charity_title')</a>
        </nav>

        <button class="nav-toggle" id="nav_toggle" type="button">
            <span class="nav-toggle__item">Menu</span>
        </button>
    </div>
</header>