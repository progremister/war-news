@if ($paginator->hasPages())
   <div class="pagination">
        @if ($paginator->onFirstPage())
            <a class="disabled" style="display: none"><span>&laquo;</span></a>
        @else
            <a href="{{ $paginator->previousPageUrl() }}" rel="prev">&laquo;</a>
        @endif


    
        @foreach ($elements as $element)
        
            @if (is_string($element))
                <a class="disabled"><span>{{ $element }}</span></a>
            @endif


        
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <a class="active"><span>{{ $page }}</span></a>
                    @else
                        <a href="{{ $url }}">{{ $page }}</a>
                    @endif
                @endforeach
            @endif
        @endforeach


        
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" rel="next">&raquo;</a>
        @else
            <a class="disabled" style="display: none"><span>&raquo;</span></a>
        @endif
    </div>
@endif 