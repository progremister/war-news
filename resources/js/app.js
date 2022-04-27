$(function() { 
 
    var header = $("#header"), 
        introH = $("#intro").innerHeight(), 
        scrollOffset = $(window).scrollTop(); 
 
 
    /** 
     *  Fixed header 
     * =========================*/ 
 
    checkScroll(scrollOffset); 
 
    $(window).on("scroll", function() { 
        scrollOffset = $(this).scrollTop(); 
 
        checkScroll(scrollOffset); 
    }); 
 
    function checkScroll(scrollOffset) { 
        if( scrollOffset >= introH ) { 
            header.addClass("fixed"); 
        } else { 
            header.removeClass("fixed"); 
        } 
    } 
 
    // /* Smooth scroll */ 
    // $("[data-scroll]").on("click", function(event) { 
    //     event.preventDefault(); 
 
    //     var $this = $(this), 
    //         blockId = $this.data('scroll'), 
    //         blockOffset = $(blockId).offset().top; 
 
    //     $("#nav a").removeClass("active"); 
    //     $this.addClass("active"); 
 
    //     $("html, body").animate({ 
    //         scrollTop:  blockOffset 
    //     }, 500); 
    // }); 
 
 
    /** 
     *  Menu navigation toggle 
     * ========================= */ 
 
    $("#nav_toggle").on("click", function(event) { 
        event.preventDefault(); 
 
        $(this).toggleClass("active"); 
        $("#nav").toggleClass("active"); 
    }); 
 

    /**
     * Form toggle
     */

//     // Toggle Function
// $('.toggle').click(function(){
//     // Switches the Icon
//     $(this).children('i').toggleClass('fa-pencil');
//     // Switches the forms  
//     $('.form').animate({
//       height: "toggle",
//       'padding-top': 'toggle',
//       'padding-bottom': 'toggle',
//       opacity: "toggle"
//     }, "slow");
//   });
 
    /** 
     *  Modals 
     * ========================= */ 
 
    const modalCall = $("[data-modal]"); 
    const modalClose = $("[data-close]"); 
 
    modalCall.on("click", function(event) { 
        event.preventDefault(); 
 
        let $this = $(this); 
        let modalId = $this.data('modal'); 
 
        $(modalId).addClass('show'); 
        $("body").addClass('no-scroll'); 
 
        setTimeout(function() { 
            $(modalId).find(".modal__dialog").css({ 
                transform: "scale(1)" 
            }); 
        }, 200); 
 
        worksSlider.slick('setPosition'); 
    }); 
 
 
    modalClose.on("click", function(event) { 
        event.preventDefault(); 
 
        let $this = $(this); 
        let modalParent = $this.parents('.modal'); 
 
        modalParent.find(".modal__dialog").css({ 
            transform: "scale(0)" 
        }); 
 
        setTimeout(function() { 
            modalParent.removeClass('show'); 
            $("body").removeClass('no-scroll'); 
        }, 200); 
    }); 
 
 
    $(".modal").on("click", function(event) { 
        let $this = $(this); 
 
        $this.find(".modal__dialog").css({ 
            transform: "scale(0)" 
        }); 
 
        setTimeout(function() { 
            $this.removeClass('show'); 
            $("body").removeClass('no-scroll'); 
        }, 200); 
    }); 
 
    $(".modal__dialog").on("click", function(event) { 
        event.stopPropagation(); 
    }); 
 
    /** 
     * Accordion collapse 
     * =================== */ 
 
    $("[data-collapse]").on("click", function(event) { 
        event.preventDefault(); 
 
        var $this = $(this), 
            blockId = $this.data('collapse'); 
 
        $this.toggleClass("active"); 
    }); 
 
    /** 
     * Modal currency dropdown 
     * ======================== */ 
 
     function updateSymbol(e)   { 
        var selected = $(".currency-selector option:selected"); 
        $(".currency-symbol").text(selected.data("symbol")) 
        $(".currency-amount").prop("placeholder", selected.data("placeholder")) 
        $('.currency-addon-fixed').text(selected.text()) 
      } 
       
      $(".currency-selector").on("change", updateSymbol) 
       updateSymbol() 

    
    /**
     * AJAX pagination
     */


    //  $.ajaxSetup({
    //     headers: {
    //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //     }
    // });
    
    //     $(document).on('click', '.pagination a', function(e){
    //         e.preventDefault();
    //         alert("click!");
    //         console.log($('meta[name="csrf-token"]').attr('content'));
    //          var page = $(this).attr('href').split('page=')[1];
    //          console.log(page);
    //          fetch_data(page);
    //     })
    
    //     async function fetch_data(page){
            
    //         // $.ajax({
    //         //     url: "/news/fetch_data?page="+page,
    //         //     success: function(posts) {
    //         //         console.log(posts);
    //         //         $('#news_pagination').html(posts);
    //         //     }
    //         // })
    //         let token = $('meta[name="csrf-token"]').attr('content');
    //         let resp = await fetch( "/news/fetch_data?page="+page, {
    //             method: "get",
    //             headers: {"X-CSRF-TOKEN": token}
    //     });
    //         if(resp.ok===true)
    //         {
    //             const data = await resp.text();
    //             console.log(data);
    //         }
    //         else
    //         console.log(resp.statusText);
    //     }
    
    
    /**
     * AJAX search
     */

    //  $.ajaxSetup({
    //     headers: {
    //       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //     }
    //   });

    //  $("#search_btn").on("click", function(event) { 
    //     event.preventDefault(); 
    //     $inputSearch = $("#search_bar").val();
    //     console.log("Text: " + $inputSearch);
    //     if($inputSearch != "") {
    //         $.ajax({
    //         method: "post",
    //         url: "news",
    //         data: JSON.stringify({
    //                 inputSearch: $inputSearch
    //             }),
    //             _token: '{{csrf_token()}}'
    //         ,
    //         headers: {
    //             'Accept': 'application/json',
    //             'Contemt-Type': 'application/json'
    //         },
    //         success: function(data){
    //             let searchResultAjax = "";
    //             data = JSON.parse(data);
    //             console.log(data);
    //             $()
    //         }
    //     })
    //     }
    // })
});