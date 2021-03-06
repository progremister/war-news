@extends('layouts.main')


@section('title')
    @lang('main.shelters_title')
@endsection

@section('body')
<div class="shelters">
    <div class="page__title">
        @lang('main.shelters_page_title')
    </div>
    <div class="accordion">
        <div class="accordion__item" data-collapse="#kyiv">
            <div class="accordion__header">
                <div class="accordion__title">@lang('main.Kyiv')</div>
            </div>
            <div class="accordion__content" id="kyiv">
                <iframe src="https://www.google.com/maps/d/embed?mid=1nv3QreO1QS5_AmRRNLHXu7u99sKJ6JRR&ehbc=2E312F"></iframe>
            </div>
        </div>
    
        <div class="accordion__item" data-collapse="#kharkiv_obl">
            <div class="accordion__header">
                <div class="accordion__title">@lang('main.Kharkiv_Region')</div>
            </div>
            <div class="accordion__content" id="kharkiv_obl">
                <iframe src="https://www.google.com/maps/d/embed?mid=16g3PB0LSZYAsrrAuiXZuxEBVaN0&ehbc=2E312F"></iframe>  
            </div>
        </div>
    
        <div class="accordion__item" data-collapse="#sumy">
            <div class="accordion__header">
                <div class="accordion__title">@lang('main.Sumy')</div>
            </div>
            <div class="accordion__content" id="sumy">
                <iframe src="https://www.google.com/maps/d/embed?mid=1U6JH6sTiCW37oU3nITeUTx5C5-k&ehbc=2E312F"></iframe> 
            </div>
        </div>

        <div class="accordion__item" data-collapse="#odesa">
            <div class="accordion__header">
                <div class="accordion__title">@lang('main.Odesa')</div>
            </div>
            <div class="accordion__content" id="odesa">
                <iframe src="https://www.google.com/maps/d/embed?mid=1f7Nswyb-hXG0wkFDhyGYFbrANok&hl=ru&ehbc=2E312F"></iframe>
            </div>
        </div>

        <div class="accordion__item" data-collapse="#dnipro">
            <div class="accordion__header">
                <div class="accordion__title">@lang('main.Dnipro')</div>
            </div>
            <div class="accordion__content" id="dnipro">
                <iframe src="https://www.google.com/maps/d/embed?mid=13J-I9D2DjeipXo64zycJE-aOwiw&ehbc=2E312F"></iframe>
            </div>
        </div>

        <div class="accordion__item" data-collapse="#kryvyi_rih">
            <div class="accordion__header">
                <div class="accordion__title">@lang('main.Kryvyi_Rih')</div>
            </div>
            <div class="accordion__content" id="kryvyi_rih">
                <iframe src="https://www.google.com/maps/d/embed?mid=16h3FUytKBRktZ7y_FMwLC-jdfg4oeXsS&ehbc=2E312F"></iframe> 
            </div>
        </div>

        <div class="accordion__item" data-collapse="#poltava">
            <div class="accordion__header">
                <div class="accordion__title">@lang('main.Poltava')</div>
            </div>
            <div class="accordion__content" id="poltava">
                <iframe src="https://www.google.com/maps/d/embed?mid=10wBVAAKCTHdPXYODiUbhjTTrJoY&ehbc=2E312F"></iframe>
            </div>
        </div>
    </div>
</div>
@endsection