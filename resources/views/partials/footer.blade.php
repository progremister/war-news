<footer class="footer">
    <div class="footer__inner">
        <div class="footer__credits">
            <div class="footer__copyright">
                &copy; 2022 - WarInUkraine team
            </div>

            <div class="footer__social">
                <a href="https://t.me/dm_kolos" target="_blank">
                    <img src="{{ asset("images/icons/telegram-white.svg")}}" height="18" alt="">
                </a>
            </div>
        </div>

        <nav class="footer__nav">
            <a class="footer__nav-link" href="{{ url('/') }}">@lang('main.shelters_title')</a>
            <a class="footer__nav-link" href="{{ route('news') }}">@lang('main.news_title')</a>
            <a class="footer__nav-link  footer__nav-link--btn" href="{{ route('charity') }}">@lang('main.charity_title')</a>
        </nav>
    </div>
</footer>