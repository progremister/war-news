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
     * Language Dropdown
     * $(document).ready(function () {

                // Show dropdown
                $('.selected').click(function () {
                    $('.custom-sel').addClass('show-sel');
                    $('.custom-sel a').removeClass('hidden');
                });

                // Hide dropdown when not focused
                $('.custom-sel').focusout(function () {
                    $('.custom-sel').removeClass('show-sel');
                    $('.custom-sel a:not(:first)').addClass('hidden');
                }).blur(function () {
                    $('.custom-sel').removeClass('show-sel');
                    $('.custom-sel a:not(:first)').addClass('hidden');
                });

            });
     */


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

});