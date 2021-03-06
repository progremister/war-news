@extends('layouts.main')


@section('title')
    @lang('main.charity_title')
@endsection


@section('body')
    <div class="charity">


        @foreach($donates as $donate)
        <div class="charity__item">
            <div class="charity__photo" @if($donate->id % 2 == 0 ) style="order: 2; margin-left: 2rem;" @endif>
                <img src="{{ asset("$donate->image_path") }}" alt="{{ $donate->title }}">
            </div>

            <div class="charity__content">
                <div class="charity__title">{{ $donate->__('title') }}</div>
                    <div class="charity__content--inner">
                    <div class="charity__text">
                        <p>{!! $donate->__('content') !!}</p>
                    </div>
                    <div class="charity__btn btn--black" data-modal="#donate">@lang('main.donate')</div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <!-- Modal -->
    @include('partials.modal')
    
</div>
@endsection
