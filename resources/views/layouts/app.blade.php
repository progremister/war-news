<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">


</head>
<body>
        <header class="header" id="header">
            <div class="header__inner">
            <a class="header__logo" href="{{ url('/') }}">
                {{ config('app.name', 'Laravel') }}
            </a>
            <nav class="nav" id="nav">
                <a class="nav__link" href="/register">Sign Up</a>
                <a class="nav__link" href="/login">Sign In</a>
                
                <a class="nav__link" href="/">Back</a>

            
                <!-- Left Side Of Navbar -->
                
                
                <!-- Right Side Of Navbar -->
                    <!-- Authentication Links -->
                    {{-- @guest('admin')
                            @if (Route::has('login'))

                            <a class="nav__link" href="{{ route('register') }}">{{ __('Register') }}</a>

                            @endif

                            @if (Route::has('register'))
                            <a class="nav__link" href="{{ route('login') }}">{{ __('Login') }}</a>

                            @endif
                        {{-- @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest --}}
            </nav>
            <button class="nav-toggle" id="nav_toggle" type="button">
                <span class="nav-toggle__item">Menu</span>
            </button>
        </div>
    </header>

    <div class="container">
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="{{ asset('../js/app.js') }}"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

</html>
