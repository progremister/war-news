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
            <a class="nav__link" href="{{ url('/') }}">Shelters</a>
            <a class="nav__link" href="{{ route('news') }}">News</a>
            
            <a class="nav-link sl-nav" href="#">
                <img src="{{ asset("images/icons/globe.svg")}}" alt="">
                <ul>
                    <li><b>en</b>
                        <ul>
                            <li><i class="sl-flag flag-ua">
                                    <div id="ukrainian"></div>
                                </i> <span class="active">Українська</span></li>
                            <li><i class="sl-flag flag-usa">
                                    <div id="english"></div>
                                </i> <span>English</span></li>
                            <li><i class="sl-flag flag-rus">
                                    <div id="russian"></div>
                                </i> <span>Русский</span></li>
                        </ul>
                    </li>
                </ul>
            </a>

            <a class="nav__link social__link" href="">
                <img src="{{ asset("images/icons/telegram-white.svg")}}" alt="">
            </a>
            <a class="nav-link sl-nav" href="{{ route('login') }}">
            @if(Auth::check())
                <ul>
                    <li ><b style="text-transform: none">{{ Auth::user()->username}}</b>
                        <ul>
                            <li><i class="sl-flag flag-ua">
                                    <div id="edit_profile"></div>
                                </i> <span class="active">Edit profile</span></li>
                            <li><i class="sl-flag flag-rus">
                                    <div id="logout"></div>
                                </i><span class="" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                                </span></li>
                        </ul>
                    </li>
                </ul>
            </a>

                {{-- <ul class="profile-wrapper">
                    <li>
                        <div class="profile">
                            <img src="http://gravatar.com/avatar/0e1e4e5e5c11835d34c0888921e78fd4?s=80" />
                            <a href="http://swimbi.com" class="name">{{ Auth::user()->username }}</a>
                            
                            <ul class="menu">
                                <li><a href="#">Edit</a></li>
                                <li><a href="#">Change Password</a></li>
                                <li><a class="" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                                </a></li>
                            </ul>
                        </div>
                    </li>
                </ul>  --}}

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none">
                @csrf
            </form>
            @else
            Log In 
            </a>
            @endif
            
            <a class="nav__link  nav__link--btn" href="{{ route('charity') }}">Charity</a>
        </nav>

        <button class="nav-toggle" id="nav_toggle" type="button">
            <span class="nav-toggle__item">Menu</span>
        </button>
    </div>
</header>