<footer class="footer">
    <div class="footer__inner">
        <div class="footer__credits">
            <div class="footer__copyright">
                &copy; 2022 - WarInUkraine team
            </div>

            <div class="footer__social">
                <a href="" target="_blank">
                    <img src="{{ asset("images/icons/telegram-white.svg")}}" height="18" alt="">
                </a>
            </div>
        </div>

        <nav class="footer__nav">
            <a class="footer__nav-link" href="{{ url('/') }}">Shelters</a>
            <a class="footer__nav-link" href="{{ route('news') }}">News</a>
            <a class="footer__nav-link  footer__nav-link--btn" href="{{ route('charity') }}">Charity</a>
        </nav>
    </div>
</footer>