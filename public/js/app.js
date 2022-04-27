/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

eval("$(function () {\n  var header = $(\"#header\"),\n      introH = $(\"#intro\").innerHeight(),\n      scrollOffset = $(window).scrollTop();\n  /** \n   *  Fixed header \n   * =========================*/\n\n  checkScroll(scrollOffset);\n  $(window).on(\"scroll\", function () {\n    scrollOffset = $(this).scrollTop();\n    checkScroll(scrollOffset);\n  });\n\n  function checkScroll(scrollOffset) {\n    if (scrollOffset >= introH) {\n      header.addClass(\"fixed\");\n    } else {\n      header.removeClass(\"fixed\");\n    }\n  } // /* Smooth scroll */ \n  // $(\"[data-scroll]\").on(\"click\", function(event) { \n  //     event.preventDefault(); \n  //     var $this = $(this), \n  //         blockId = $this.data('scroll'), \n  //         blockOffset = $(blockId).offset().top; \n  //     $(\"#nav a\").removeClass(\"active\"); \n  //     $this.addClass(\"active\"); \n  //     $(\"html, body\").animate({ \n  //         scrollTop:  blockOffset \n  //     }, 500); \n  // }); \n\n  /** \n   *  Menu navigation toggle \n   * ========================= */\n\n\n  $(\"#nav_toggle\").on(\"click\", function (event) {\n    event.preventDefault();\n    $(this).toggleClass(\"active\");\n    $(\"#nav\").toggleClass(\"active\");\n  });\n  /**\n   * Form toggle\n   */\n  //     // Toggle Function\n  // $('.toggle').click(function(){\n  //     // Switches the Icon\n  //     $(this).children('i').toggleClass('fa-pencil');\n  //     // Switches the forms  \n  //     $('.form').animate({\n  //       height: \"toggle\",\n  //       'padding-top': 'toggle',\n  //       'padding-bottom': 'toggle',\n  //       opacity: \"toggle\"\n  //     }, \"slow\");\n  //   });\n\n  /** \n   *  Modals \n   * ========================= */\n\n  var modalCall = $(\"[data-modal]\");\n  var modalClose = $(\"[data-close]\");\n  modalCall.on(\"click\", function (event) {\n    event.preventDefault();\n    var $this = $(this);\n    var modalId = $this.data('modal');\n    $(modalId).addClass('show');\n    $(\"body\").addClass('no-scroll');\n    setTimeout(function () {\n      $(modalId).find(\".modal__dialog\").css({\n        transform: \"scale(1)\"\n      });\n    }, 200);\n    worksSlider.slick('setPosition');\n  });\n  modalClose.on(\"click\", function (event) {\n    event.preventDefault();\n    var $this = $(this);\n    var modalParent = $this.parents('.modal');\n    modalParent.find(\".modal__dialog\").css({\n      transform: \"scale(0)\"\n    });\n    setTimeout(function () {\n      modalParent.removeClass('show');\n      $(\"body\").removeClass('no-scroll');\n    }, 200);\n  });\n  $(\".modal\").on(\"click\", function (event) {\n    var $this = $(this);\n    $this.find(\".modal__dialog\").css({\n      transform: \"scale(0)\"\n    });\n    setTimeout(function () {\n      $this.removeClass('show');\n      $(\"body\").removeClass('no-scroll');\n    }, 200);\n  });\n  $(\".modal__dialog\").on(\"click\", function (event) {\n    event.stopPropagation();\n  });\n  /** \n   * Accordion collapse \n   * =================== */\n\n  $(\"[data-collapse]\").on(\"click\", function (event) {\n    event.preventDefault();\n    var $this = $(this),\n        blockId = $this.data('collapse');\n    $this.toggleClass(\"active\");\n  });\n  /** \n   * Modal currency dropdown \n   * ======================== */\n\n  function updateSymbol(e) {\n    var selected = $(\".currency-selector option:selected\");\n    $(\".currency-symbol\").text(selected.data(\"symbol\"));\n    $(\".currency-amount\").prop(\"placeholder\", selected.data(\"placeholder\"));\n    $('.currency-addon-fixed').text(selected.text());\n  }\n\n  $(\".currency-selector\").on(\"change\", updateSymbol);\n  updateSymbol();\n  /**\n   * AJAX pagination\n   */\n  //  $.ajaxSetup({\n  //     headers: {\n  //         'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n  //     }\n  // });\n  //     $(document).on('click', '.pagination a', function(e){\n  //         e.preventDefault();\n  //         alert(\"click!\");\n  //         console.log($('meta[name=\"csrf-token\"]').attr('content'));\n  //          var page = $(this).attr('href').split('page=')[1];\n  //          console.log(page);\n  //          fetch_data(page);\n  //     })\n  //     async function fetch_data(page){\n  //         // $.ajax({\n  //         //     url: \"/news/fetch_data?page=\"+page,\n  //         //     success: function(posts) {\n  //         //         console.log(posts);\n  //         //         $('#news_pagination').html(posts);\n  //         //     }\n  //         // })\n  //         let token = $('meta[name=\"csrf-token\"]').attr('content');\n  //         let resp = await fetch( \"/news/fetch_data?page=\"+page, {\n  //             method: \"get\",\n  //             headers: {\"X-CSRF-TOKEN\": token}\n  //     });\n  //         if(resp.ok===true)\n  //         {\n  //             const data = await resp.text();\n  //             console.log(data);\n  //         }\n  //         else\n  //         console.log(resp.statusText);\n  //     }\n\n  /**\n   * AJAX search\n   */\n  //  $.ajaxSetup({\n  //     headers: {\n  //       'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n  //     }\n  //   });\n  //  $(\"#search_btn\").on(\"click\", function(event) { \n  //     event.preventDefault(); \n  //     $inputSearch = $(\"#search_bar\").val();\n  //     console.log(\"Text: \" + $inputSearch);\n  //     if($inputSearch != \"\") {\n  //         $.ajax({\n  //         method: \"post\",\n  //         url: \"news\",\n  //         data: JSON.stringify({\n  //                 inputSearch: $inputSearch\n  //             }),\n  //             _token: '{{csrf_token()}}'\n  //         ,\n  //         headers: {\n  //             'Accept': 'application/json',\n  //             'Contemt-Type': 'application/json'\n  //         },\n  //         success: function(data){\n  //             let searchResultAjax = \"\";\n  //             data = JSON.parse(data);\n  //             console.log(data);\n  //             $()\n  //         }\n  //     })\n  //     }\n  // })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzP2NlZDYiXSwibmFtZXMiOlsiJCIsImhlYWRlciIsImludHJvSCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsT2Zmc2V0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwiY2hlY2tTY3JvbGwiLCJvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJtb2RhbENhbGwiLCJtb2RhbENsb3NlIiwiJHRoaXMiLCJtb2RhbElkIiwiZGF0YSIsInNldFRpbWVvdXQiLCJmaW5kIiwiY3NzIiwidHJhbnNmb3JtIiwid29ya3NTbGlkZXIiLCJzbGljayIsIm1vZGFsUGFyZW50IiwicGFyZW50cyIsInN0b3BQcm9wYWdhdGlvbiIsImJsb2NrSWQiLCJ1cGRhdGVTeW1ib2wiLCJlIiwic2VsZWN0ZWQiLCJ0ZXh0IiwicHJvcCJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFXO0FBRVQsTUFBSUMsTUFBTSxHQUFHRCxDQUFDLENBQUMsU0FBRCxDQUFkO0FBQUEsTUFDSUUsTUFBTSxHQUFHRixDQUFDLENBQUMsUUFBRCxDQUFELENBQVlHLFdBQVosRUFEYjtBQUFBLE1BRUlDLFlBQVksR0FBR0osQ0FBQyxDQUFDSyxNQUFELENBQUQsQ0FBVUMsU0FBVixFQUZuQjtBQUtBO0FBQ0o7QUFDQTs7QUFFSUMsRUFBQUEsV0FBVyxDQUFDSCxZQUFELENBQVg7QUFFQUosRUFBQUEsQ0FBQyxDQUFDSyxNQUFELENBQUQsQ0FBVUcsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBVztBQUM5QkosSUFBQUEsWUFBWSxHQUFHSixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFNBQVIsRUFBZjtBQUVBQyxJQUFBQSxXQUFXLENBQUNILFlBQUQsQ0FBWDtBQUNILEdBSkQ7O0FBTUEsV0FBU0csV0FBVCxDQUFxQkgsWUFBckIsRUFBbUM7QUFDL0IsUUFBSUEsWUFBWSxJQUFJRixNQUFwQixFQUE2QjtBQUN6QkQsTUFBQUEsTUFBTSxDQUFDUSxRQUFQLENBQWdCLE9BQWhCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hSLE1BQUFBLE1BQU0sQ0FBQ1MsV0FBUCxDQUFtQixPQUFuQjtBQUNIO0FBQ0osR0F6QlEsQ0EyQlQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0o7QUFDQTs7O0FBRUlWLEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJRLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFVBQVNHLEtBQVQsRUFBZ0I7QUFDekNBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBWixJQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLFdBQVIsQ0FBb0IsUUFBcEI7QUFDQWIsSUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYSxXQUFWLENBQXNCLFFBQXRCO0FBQ0gsR0FMRDtBQVFBO0FBQ0o7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSTtBQUNKO0FBQ0E7O0FBRUksTUFBTUMsU0FBUyxHQUFHZCxDQUFDLENBQUMsY0FBRCxDQUFuQjtBQUNBLE1BQU1lLFVBQVUsR0FBR2YsQ0FBQyxDQUFDLGNBQUQsQ0FBcEI7QUFFQWMsRUFBQUEsU0FBUyxDQUFDTixFQUFWLENBQWEsT0FBYixFQUFzQixVQUFTRyxLQUFULEVBQWdCO0FBQ2xDQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFFQSxRQUFJSSxLQUFLLEdBQUdoQixDQUFDLENBQUMsSUFBRCxDQUFiO0FBQ0EsUUFBSWlCLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVcsT0FBWCxDQUFkO0FBRUFsQixJQUFBQSxDQUFDLENBQUNpQixPQUFELENBQUQsQ0FBV1IsUUFBWCxDQUFvQixNQUFwQjtBQUNBVCxJQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVTLFFBQVYsQ0FBbUIsV0FBbkI7QUFFQVUsSUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEJuQixNQUFBQSxDQUFDLENBQUNpQixPQUFELENBQUQsQ0FBV0csSUFBWCxDQUFnQixnQkFBaEIsRUFBa0NDLEdBQWxDLENBQXNDO0FBQ2xDQyxRQUFBQSxTQUFTLEVBQUU7QUFEdUIsT0FBdEM7QUFHSCxLQUpTLEVBSVAsR0FKTyxDQUFWO0FBTUFDLElBQUFBLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQixhQUFsQjtBQUNILEdBaEJEO0FBbUJBVCxFQUFBQSxVQUFVLENBQUNQLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFVBQVNHLEtBQVQsRUFBZ0I7QUFDbkNBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQUlJLEtBQUssR0FBR2hCLENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQSxRQUFJeUIsV0FBVyxHQUFHVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxRQUFkLENBQWxCO0FBRUFELElBQUFBLFdBQVcsQ0FBQ0wsSUFBWixDQUFpQixnQkFBakIsRUFBbUNDLEdBQW5DLENBQXVDO0FBQ25DQyxNQUFBQSxTQUFTLEVBQUU7QUFEd0IsS0FBdkM7QUFJQUgsSUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEJNLE1BQUFBLFdBQVcsQ0FBQ2YsV0FBWixDQUF3QixNQUF4QjtBQUNBVixNQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVVLFdBQVYsQ0FBc0IsV0FBdEI7QUFDSCxLQUhTLEVBR1AsR0FITyxDQUFWO0FBSUgsR0FkRDtBQWlCQVYsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZUSxFQUFaLENBQWUsT0FBZixFQUF3QixVQUFTRyxLQUFULEVBQWdCO0FBQ3BDLFFBQUlLLEtBQUssR0FBR2hCLENBQUMsQ0FBQyxJQUFELENBQWI7QUFFQWdCLElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLGdCQUFYLEVBQTZCQyxHQUE3QixDQUFpQztBQUM3QkMsTUFBQUEsU0FBUyxFQUFFO0FBRGtCLEtBQWpDO0FBSUFILElBQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCSCxNQUFBQSxLQUFLLENBQUNOLFdBQU4sQ0FBa0IsTUFBbEI7QUFDQVYsTUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVVSxXQUFWLENBQXNCLFdBQXRCO0FBQ0gsS0FIUyxFQUdQLEdBSE8sQ0FBVjtBQUlILEdBWEQ7QUFhQVYsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JRLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVNHLEtBQVQsRUFBZ0I7QUFDNUNBLElBQUFBLEtBQUssQ0FBQ2dCLGVBQU47QUFDSCxHQUZEO0FBSUE7QUFDSjtBQUNBOztBQUVJM0IsRUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJRLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFVBQVNHLEtBQVQsRUFBZ0I7QUFDN0NBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQUlJLEtBQUssR0FBR2hCLENBQUMsQ0FBQyxJQUFELENBQWI7QUFBQSxRQUNJNEIsT0FBTyxHQUFHWixLQUFLLENBQUNFLElBQU4sQ0FBVyxVQUFYLENBRGQ7QUFHQUYsSUFBQUEsS0FBSyxDQUFDSCxXQUFOLENBQWtCLFFBQWxCO0FBQ0gsR0FQRDtBQVNBO0FBQ0o7QUFDQTs7QUFFSyxXQUFTZ0IsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBMkI7QUFDeEIsUUFBSUMsUUFBUSxHQUFHL0IsQ0FBQyxDQUFDLG9DQUFELENBQWhCO0FBQ0FBLElBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0MsSUFBdEIsQ0FBMkJELFFBQVEsQ0FBQ2IsSUFBVCxDQUFjLFFBQWQsQ0FBM0I7QUFDQWxCLElBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCaUMsSUFBdEIsQ0FBMkIsYUFBM0IsRUFBMENGLFFBQVEsQ0FBQ2IsSUFBVCxDQUFjLGFBQWQsQ0FBMUM7QUFDQWxCLElBQUFBLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCZ0MsSUFBM0IsQ0FBZ0NELFFBQVEsQ0FBQ0MsSUFBVCxFQUFoQztBQUNEOztBQUVEaEMsRUFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JRLEVBQXhCLENBQTJCLFFBQTNCLEVBQXFDcUIsWUFBckM7QUFDQ0EsRUFBQUEsWUFBWTtBQUdmO0FBQ0o7QUFDQTtBQUdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0o7QUFDQTtBQUVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FqUEEsQ0FBRCIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7IFxuIFxuICAgIHZhciBoZWFkZXIgPSAkKFwiI2hlYWRlclwiKSwgXG4gICAgICAgIGludHJvSCA9ICQoXCIjaW50cm9cIikuaW5uZXJIZWlnaHQoKSwgXG4gICAgICAgIHNjcm9sbE9mZnNldCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTsgXG4gXG4gXG4gICAgLyoqIFxuICAgICAqICBGaXhlZCBoZWFkZXIgXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PSovIFxuIFxuICAgIGNoZWNrU2Nyb2xsKHNjcm9sbE9mZnNldCk7IFxuIFxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHsgXG4gICAgICAgIHNjcm9sbE9mZnNldCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7IFxuIFxuICAgICAgICBjaGVja1Njcm9sbChzY3JvbGxPZmZzZXQpOyBcbiAgICB9KTsgXG4gXG4gICAgZnVuY3Rpb24gY2hlY2tTY3JvbGwoc2Nyb2xsT2Zmc2V0KSB7IFxuICAgICAgICBpZiggc2Nyb2xsT2Zmc2V0ID49IGludHJvSCApIHsgXG4gICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoXCJmaXhlZFwiKTsgXG4gICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7IFxuICAgICAgICB9IFxuICAgIH0gXG4gXG4gICAgLy8gLyogU21vb3RoIHNjcm9sbCAqLyBcbiAgICAvLyAkKFwiW2RhdGEtc2Nyb2xsXVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiBcbiAgICAvLyAgICAgdmFyICR0aGlzID0gJCh0aGlzKSwgXG4gICAgLy8gICAgICAgICBibG9ja0lkID0gJHRoaXMuZGF0YSgnc2Nyb2xsJyksIFxuICAgIC8vICAgICAgICAgYmxvY2tPZmZzZXQgPSAkKGJsb2NrSWQpLm9mZnNldCgpLnRvcDsgXG4gXG4gICAgLy8gICAgICQoXCIjbmF2IGFcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7IFxuICAgIC8vICAgICAkdGhpcy5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgXG4gXG4gICAgLy8gICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBcbiAgICAvLyAgICAgICAgIHNjcm9sbFRvcDogIGJsb2NrT2Zmc2V0IFxuICAgIC8vICAgICB9LCA1MDApOyBcbiAgICAvLyB9KTsgXG4gXG4gXG4gICAgLyoqIFxuICAgICAqICBNZW51IG5hdmlnYXRpb24gdG9nZ2xlIFxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gXG4gXG4gICAgJChcIiNuYXZfdG9nZ2xlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuIFxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpOyBcbiAgICAgICAgJChcIiNuYXZcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7IFxuICAgIH0pOyBcbiBcblxuICAgIC8qKlxuICAgICAqIEZvcm0gdG9nZ2xlXG4gICAgICovXG5cbi8vICAgICAvLyBUb2dnbGUgRnVuY3Rpb25cbi8vICQoJy50b2dnbGUnKS5jbGljayhmdW5jdGlvbigpe1xuLy8gICAgIC8vIFN3aXRjaGVzIHRoZSBJY29uXG4vLyAgICAgJCh0aGlzKS5jaGlsZHJlbignaScpLnRvZ2dsZUNsYXNzKCdmYS1wZW5jaWwnKTtcbi8vICAgICAvLyBTd2l0Y2hlcyB0aGUgZm9ybXMgIFxuLy8gICAgICQoJy5mb3JtJykuYW5pbWF0ZSh7XG4vLyAgICAgICBoZWlnaHQ6IFwidG9nZ2xlXCIsXG4vLyAgICAgICAncGFkZGluZy10b3AnOiAndG9nZ2xlJyxcbi8vICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICd0b2dnbGUnLFxuLy8gICAgICAgb3BhY2l0eTogXCJ0b2dnbGVcIlxuLy8gICAgIH0sIFwic2xvd1wiKTtcbi8vICAgfSk7XG4gXG4gICAgLyoqIFxuICAgICAqICBNb2RhbHMgXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PSAqLyBcbiBcbiAgICBjb25zdCBtb2RhbENhbGwgPSAkKFwiW2RhdGEtbW9kYWxdXCIpOyBcbiAgICBjb25zdCBtb2RhbENsb3NlID0gJChcIltkYXRhLWNsb3NlXVwiKTsgXG4gXG4gICAgbW9kYWxDYWxsLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuIFxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpOyBcbiAgICAgICAgbGV0IG1vZGFsSWQgPSAkdGhpcy5kYXRhKCdtb2RhbCcpOyBcbiBcbiAgICAgICAgJChtb2RhbElkKS5hZGRDbGFzcygnc2hvdycpOyBcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpOyBcbiBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICAkKG1vZGFsSWQpLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKS5jc3MoeyBcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMSlcIiBcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfSwgMjAwKTsgXG4gXG4gICAgICAgIHdvcmtzU2xpZGVyLnNsaWNrKCdzZXRQb3NpdGlvbicpOyBcbiAgICB9KTsgXG4gXG4gXG4gICAgbW9kYWxDbG9zZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiBcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTsgXG4gICAgICAgIGxldCBtb2RhbFBhcmVudCA9ICR0aGlzLnBhcmVudHMoJy5tb2RhbCcpOyBcbiBcbiAgICAgICAgbW9kYWxQYXJlbnQuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpLmNzcyh7IFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDApXCIgXG4gICAgICAgIH0pOyBcbiBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICBtb2RhbFBhcmVudC5yZW1vdmVDbGFzcygnc2hvdycpOyBcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTsgXG4gICAgICAgIH0sIDIwMCk7IFxuICAgIH0pOyBcbiBcbiBcbiAgICAkKFwiLm1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7IFxuIFxuICAgICAgICAkdGhpcy5maW5kKFwiLm1vZGFsX19kaWFsb2dcIikuY3NzKHsgXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMClcIiBcbiAgICAgICAgfSk7IFxuIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdzaG93Jyk7IFxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpOyBcbiAgICAgICAgfSwgMjAwKTsgXG4gICAgfSk7IFxuIFxuICAgICQoXCIubW9kYWxfX2RpYWxvZ1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgfSk7IFxuIFxuICAgIC8qKiBcbiAgICAgKiBBY2NvcmRpb24gY29sbGFwc2UgXG4gICAgICogPT09PT09PT09PT09PT09PT09PSAqLyBcbiBcbiAgICAkKFwiW2RhdGEtY29sbGFwc2VdXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuIFxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLCBcbiAgICAgICAgICAgIGJsb2NrSWQgPSAkdGhpcy5kYXRhKCdjb2xsYXBzZScpOyBcbiBcbiAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7IFxuICAgIH0pOyBcbiBcbiAgICAvKiogXG4gICAgICogTW9kYWwgY3VycmVuY3kgZHJvcGRvd24gXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09ICovIFxuIFxuICAgICBmdW5jdGlvbiB1cGRhdGVTeW1ib2woZSkgICB7IFxuICAgICAgICB2YXIgc2VsZWN0ZWQgPSAkKFwiLmN1cnJlbmN5LXNlbGVjdG9yIG9wdGlvbjpzZWxlY3RlZFwiKTsgXG4gICAgICAgICQoXCIuY3VycmVuY3ktc3ltYm9sXCIpLnRleHQoc2VsZWN0ZWQuZGF0YShcInN5bWJvbFwiKSkgXG4gICAgICAgICQoXCIuY3VycmVuY3ktYW1vdW50XCIpLnByb3AoXCJwbGFjZWhvbGRlclwiLCBzZWxlY3RlZC5kYXRhKFwicGxhY2Vob2xkZXJcIikpIFxuICAgICAgICAkKCcuY3VycmVuY3ktYWRkb24tZml4ZWQnKS50ZXh0KHNlbGVjdGVkLnRleHQoKSkgXG4gICAgICB9IFxuICAgICAgIFxuICAgICAgJChcIi5jdXJyZW5jeS1zZWxlY3RvclwiKS5vbihcImNoYW5nZVwiLCB1cGRhdGVTeW1ib2wpIFxuICAgICAgIHVwZGF0ZVN5bWJvbCgpIFxuXG4gICAgXG4gICAgLyoqXG4gICAgICogQUpBWCBwYWdpbmF0aW9uXG4gICAgICovXG5cblxuICAgIC8vICAkLmFqYXhTZXR1cCh7XG4gICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcbiAgICBcbiAgICAvLyAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYWdpbmF0aW9uIGEnLCBmdW5jdGlvbihlKXtcbiAgICAvLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiY2xpY2shXCIpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSk7XG4gICAgLy8gICAgICAgICAgdmFyIHBhZ2UgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKS5zcGxpdCgncGFnZT0nKVsxXTtcbiAgICAvLyAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlKTtcbiAgICAvLyAgICAgICAgICBmZXRjaF9kYXRhKHBhZ2UpO1xuICAgIC8vICAgICB9KVxuICAgIFxuICAgIC8vICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaF9kYXRhKHBhZ2Upe1xuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAvLyAkLmFqYXgoe1xuICAgIC8vICAgICAgICAgLy8gICAgIHVybDogXCIvbmV3cy9mZXRjaF9kYXRhP3BhZ2U9XCIrcGFnZSxcbiAgICAvLyAgICAgICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihwb3N0cykge1xuICAgIC8vICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhwb3N0cyk7XG4gICAgLy8gICAgICAgICAvLyAgICAgICAgICQoJyNuZXdzX3BhZ2luYXRpb24nKS5odG1sKHBvc3RzKTtcbiAgICAvLyAgICAgICAgIC8vICAgICB9XG4gICAgLy8gICAgICAgICAvLyB9KVxuICAgIC8vICAgICAgICAgbGV0IHRva2VuID0gJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcbiAgICAvLyAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZmV0Y2goIFwiL25ld3MvZmV0Y2hfZGF0YT9wYWdlPVwiK3BhZ2UsIHtcbiAgICAvLyAgICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgLy8gICAgICAgICAgICAgaGVhZGVyczoge1wiWC1DU1JGLVRPS0VOXCI6IHRva2VufVxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgICAgIGlmKHJlc3Aub2s9PT10cnVlKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLnRleHQoKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3Auc3RhdHVzVGV4dCk7XG4gICAgLy8gICAgIH1cbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBBSkFYIHNlYXJjaFxuICAgICAqL1xuXG4gICAgLy8gICQuYWpheFNldHVwKHtcbiAgICAvLyAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gICQoXCIjc2VhcmNoX2J0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAvLyAgICAgJGlucHV0U2VhcmNoID0gJChcIiNzZWFyY2hfYmFyXCIpLnZhbCgpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlRleHQ6IFwiICsgJGlucHV0U2VhcmNoKTtcbiAgICAvLyAgICAgaWYoJGlucHV0U2VhcmNoICE9IFwiXCIpIHtcbiAgICAvLyAgICAgICAgICQuYWpheCh7XG4gICAgLy8gICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIm5ld3NcIixcbiAgICAvLyAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaW5wdXRTZWFyY2g6ICRpbnB1dFNlYXJjaFxuICAgIC8vICAgICAgICAgICAgIH0pLFxuICAgIC8vICAgICAgICAgICAgIF90b2tlbjogJ3t7Y3NyZl90b2tlbigpfX0nXG4gICAgLy8gICAgICAgICAsXG4gICAgLy8gICAgICAgICBoZWFkZXJzOiB7XG4gICAgLy8gICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgICAgICAgICAgICAnQ29udGVtdC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG4gICAgLy8gICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdEFqYXggPSBcIlwiO1xuICAgIC8vICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vICAgICAgICAgICAgICQoKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gfSlcbn0pOyJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYXBwLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz9hODBiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;