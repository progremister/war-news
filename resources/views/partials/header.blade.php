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
            <a class="nav__link" href="{{ url('/') }}">Укриття</a>
            <a class="nav__link" href="{{ route('news') }}">Новини</a>
            
            <div class="nav__link language">
                <img src="{{ asset("images/icons/globe.svg")}}" alt="">
                <a class="lang-drpdwn-btn">{{ App::getLocale() }}</a>
                <div class="dropdown-language">
                  <a href="/">Українська</a>
                  <a href="/">English</a>
                </div>
              </div>

            <a class="nav__link social__link" href="">
                <img src="{{ asset("images/icons/telegram-white.svg")}}" alt="">
            </a>
            @if(Auth::check())
                <div class="nav__link language">
                    <a class="lang-drpdwn-btn">{{ Auth::user()->username }}</a>
                    <div class="dropdown-language">
                      <a href="/">Профіль</a>
                      <a сlass="" href="{{ route('logout') }}"
                      onclick="event.preventDefault();
                                  document.getElementById('logout-form').submit();">
                        {{ __('Вийти') }}</a>
                    </div>
                  </div>
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none">
                @csrf
            </form>
            @else
            <a class="nav__link" href="{{ route('login') }}">
            Увійти 
            </a>
            @endif
            
            <a class="nav__link  nav__link--btn" href="{{ route('charity') }}">Допомогти</a>
        </nav>

        <button class="nav-toggle" id="nav_toggle" type="button">
            <span class="nav-toggle__item">Menu</span>
        </button>
    </div>
</header>