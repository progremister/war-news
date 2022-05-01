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

eval("$(function () {\n  var header = $(\"#header\"),\n      introH = $(\"#intro\").innerHeight(),\n      scrollOffset = $(window).scrollTop();\n  /** \n   *  Fixed header \n   * =========================*/\n\n  checkScroll(scrollOffset);\n  $(window).on(\"scroll\", function () {\n    scrollOffset = $(this).scrollTop();\n    checkScroll(scrollOffset);\n  });\n\n  function checkScroll(scrollOffset) {\n    if (scrollOffset >= introH) {\n      header.addClass(\"fixed\");\n    } else {\n      header.removeClass(\"fixed\");\n    }\n  }\n  /** \n   *  Menu navigation toggle \n   * ========================= */\n\n\n  $(\"#nav_toggle\").on(\"click\", function (event) {\n    event.preventDefault();\n    $(this).toggleClass(\"active\");\n    $(\"#nav\").toggleClass(\"active\");\n  });\n  /**\n   * Form toggle\n   */\n\n  /** \n   *  Modals \n   * ========================= */\n\n  var modalCall = $(\"[data-modal]\");\n  var modalClose = $(\"[data-close]\");\n  modalCall.on(\"click\", function (event) {\n    event.preventDefault();\n    var $this = $(this);\n    var modalId = $this.data('modal');\n    $(modalId).addClass('show');\n    $(\"body\").addClass('no-scroll');\n    setTimeout(function () {\n      $(modalId).find(\".modal__dialog\").css({\n        transform: \"scale(1)\"\n      });\n    }, 200);\n    worksSlider.slick('setPosition');\n  });\n  modalClose.on(\"click\", function (event) {\n    event.preventDefault();\n    var $this = $(this);\n    var modalParent = $this.parents('.modal');\n    modalParent.find(\".modal__dialog\").css({\n      transform: \"scale(0)\"\n    });\n    setTimeout(function () {\n      modalParent.removeClass('show');\n      $(\"body\").removeClass('no-scroll');\n    }, 200);\n  });\n  $(\".modal\").on(\"click\", function (event) {\n    var $this = $(this);\n    $this.find(\".modal__dialog\").css({\n      transform: \"scale(0)\"\n    });\n    setTimeout(function () {\n      $this.removeClass('show');\n      $(\"body\").removeClass('no-scroll');\n    }, 200);\n  });\n  $(\".modal__dialog\").on(\"click\", function (event) {\n    event.stopPropagation();\n  });\n  /**\n   * Language Dropdown\n   * $(document).ready(function () {\n               // Show dropdown\n              $('.selected').click(function () {\n                  $('.custom-sel').addClass('show-sel');\n                  $('.custom-sel a').removeClass('hidden');\n              });\n               // Hide dropdown when not focused\n              $('.custom-sel').focusout(function () {\n                  $('.custom-sel').removeClass('show-sel');\n                  $('.custom-sel a:not(:first)').addClass('hidden');\n              }).blur(function () {\n                  $('.custom-sel').removeClass('show-sel');\n                  $('.custom-sel a:not(:first)').addClass('hidden');\n              });\n           });\n   */\n\n  /** \n   * Accordion collapse \n   * =================== */\n\n  $(\"[data-collapse]\").on(\"click\", function (event) {\n    event.preventDefault();\n    var $this = $(this),\n        blockId = $this.data('collapse');\n    $this.toggleClass(\"active\");\n  });\n  /** \n   * Modal currency dropdown \n   * ======================== */\n\n  function updateSymbol(e) {\n    var selected = $(\".currency-selector option:selected\");\n    $(\".currency-symbol\").text(selected.data(\"symbol\"));\n    $(\".currency-amount\").prop(\"placeholder\", selected.data(\"placeholder\"));\n    $('.currency-addon-fixed').text(selected.text());\n  }\n\n  $(\".currency-selector\").on(\"change\", updateSymbol);\n  updateSymbol();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzP2NlZDYiXSwibmFtZXMiOlsiJCIsImhlYWRlciIsImludHJvSCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsT2Zmc2V0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwiY2hlY2tTY3JvbGwiLCJvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJtb2RhbENhbGwiLCJtb2RhbENsb3NlIiwiJHRoaXMiLCJtb2RhbElkIiwiZGF0YSIsInNldFRpbWVvdXQiLCJmaW5kIiwiY3NzIiwidHJhbnNmb3JtIiwid29ya3NTbGlkZXIiLCJzbGljayIsIm1vZGFsUGFyZW50IiwicGFyZW50cyIsInN0b3BQcm9wYWdhdGlvbiIsImJsb2NrSWQiLCJ1cGRhdGVTeW1ib2wiLCJlIiwic2VsZWN0ZWQiLCJ0ZXh0IiwicHJvcCJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFXO0FBRVQsTUFBSUMsTUFBTSxHQUFHRCxDQUFDLENBQUMsU0FBRCxDQUFkO0FBQUEsTUFDSUUsTUFBTSxHQUFHRixDQUFDLENBQUMsUUFBRCxDQUFELENBQVlHLFdBQVosRUFEYjtBQUFBLE1BRUlDLFlBQVksR0FBR0osQ0FBQyxDQUFDSyxNQUFELENBQUQsQ0FBVUMsU0FBVixFQUZuQjtBQUtBO0FBQ0o7QUFDQTs7QUFFSUMsRUFBQUEsV0FBVyxDQUFDSCxZQUFELENBQVg7QUFFQUosRUFBQUEsQ0FBQyxDQUFDSyxNQUFELENBQUQsQ0FBVUcsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBVztBQUM5QkosSUFBQUEsWUFBWSxHQUFHSixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFNBQVIsRUFBZjtBQUVBQyxJQUFBQSxXQUFXLENBQUNILFlBQUQsQ0FBWDtBQUNILEdBSkQ7O0FBTUEsV0FBU0csV0FBVCxDQUFxQkgsWUFBckIsRUFBbUM7QUFDL0IsUUFBSUEsWUFBWSxJ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Q0FBRCxDQUF3QlEsRUFBeEIsQ0FBMkIsUUFBM0IsRUFBcUNxQixZQUFyQztBQUNDQSxFQUFBQSxZQUFZO0FBRWxCLENBMUpBLENBQUQiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkgeyBcbiBcbiAgICB2YXIgaGVhZGVyID0gJChcIiNoZWFkZXJcIiksIFxuICAgICAgICBpbnRyb0ggPSAkKFwiI2ludHJvXCIpLmlubmVySGVpZ2h0KCksIFxuICAgICAgICBzY3JvbGxPZmZzZXQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7IFxuIFxuIFxuICAgIC8qKiBcbiAgICAgKiAgRml4ZWQgaGVhZGVyIFxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT0qLyBcbiBcbiAgICBjaGVja1Njcm9sbChzY3JvbGxPZmZzZXQpOyBcbiBcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7IFxuICAgICAgICBzY3JvbGxPZmZzZXQgPSAkKHRoaXMpLnNjcm9sbFRvcCgpOyBcbiBcbiAgICAgICAgY2hlY2tTY3JvbGwoc2Nyb2xsT2Zmc2V0KTsgXG4gICAgfSk7IFxuIFxuICAgIGZ1bmN0aW9uIGNoZWNrU2Nyb2xsKHNjcm9sbE9mZnNldCkgeyBcbiAgICAgICAgaWYoIHNjcm9sbE9mZnNldCA+PSBpbnRyb0ggKSB7IFxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKFwiZml4ZWRcIik7IFxuICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcyhcImZpeGVkXCIpOyBcbiAgICAgICAgfSBcbiAgICB9IFxuIFxuICAgIC8qKiBcbiAgICAgKiAgTWVudSBuYXZpZ2F0aW9uIHRvZ2dsZSBcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09ICovIFxuIFxuICAgICQoXCIjbmF2X3RvZ2dsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiBcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTsgXG4gICAgICAgICQoXCIjbmF2XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpOyBcbiAgICB9KTsgXG4gXG5cbiAgICAvKipcbiAgICAgKiBGb3JtIHRvZ2dsZVxuICAgICAqL1xuIFxuICAgIC8qKiBcbiAgICAgKiAgTW9kYWxzIFxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gXG4gXG4gICAgY29uc3QgbW9kYWxDYWxsID0gJChcIltkYXRhLW1vZGFsXVwiKTsgXG4gICAgY29uc3QgbW9kYWxDbG9zZSA9ICQoXCJbZGF0YS1jbG9zZV1cIik7IFxuIFxuICAgIG1vZGFsQ2FsbC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiBcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTsgXG4gICAgICAgIGxldCBtb2RhbElkID0gJHRoaXMuZGF0YSgnbW9kYWwnKTsgXG4gXG4gICAgICAgICQobW9kYWxJZCkuYWRkQ2xhc3MoJ3Nob3cnKTsgXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKCduby1zY3JvbGwnKTsgXG4gXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgJChtb2RhbElkKS5maW5kKFwiLm1vZGFsX19kaWFsb2dcIikuY3NzKHsgXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIgXG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH0sIDIwMCk7IFxuIFxuICAgICAgICB3b3Jrc1NsaWRlci5zbGljaygnc2V0UG9zaXRpb24nKTsgXG4gICAgfSk7IFxuIFxuIFxuICAgIG1vZGFsQ2xvc2Uub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkgeyBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7IFxuICAgICAgICBsZXQgbW9kYWxQYXJlbnQgPSAkdGhpcy5wYXJlbnRzKCcubW9kYWwnKTsgXG4gXG4gICAgICAgIG1vZGFsUGFyZW50LmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKS5jc3MoeyBcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwKVwiIFxuICAgICAgICB9KTsgXG4gXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgbW9kYWxQYXJlbnQucmVtb3ZlQ2xhc3MoJ3Nob3cnKTsgXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7IFxuICAgICAgICB9LCAyMDApOyBcbiAgICB9KTsgXG4gXG4gXG4gICAgJChcIi5tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpOyBcbiBcbiAgICAgICAgJHRoaXMuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpLmNzcyh7IFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDApXCIgXG4gICAgICAgIH0pOyBcbiBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnc2hvdycpOyBcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTsgXG4gICAgICAgIH0sIDIwMCk7IFxuICAgIH0pOyBcbiBcbiAgICAkKFwiLm1vZGFsX19kaWFsb2dcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkgeyBcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IFxuICAgIH0pOyBcbiBcblxuICAgIC8qKlxuICAgICAqIExhbmd1YWdlIERyb3Bkb3duXG4gICAgICogJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gU2hvdyBkcm9wZG93blxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3RlZCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmN1c3RvbS1zZWwnKS5hZGRDbGFzcygnc2hvdy1zZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmN1c3RvbS1zZWwgYScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIEhpZGUgZHJvcGRvd24gd2hlbiBub3QgZm9jdXNlZFxuICAgICAgICAgICAgICAgICQoJy5jdXN0b20tc2VsJykuZm9jdXNvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuY3VzdG9tLXNlbCcpLnJlbW92ZUNsYXNzKCdzaG93LXNlbCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuY3VzdG9tLXNlbCBhOm5vdCg6Zmlyc3QpJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0pLmJsdXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuY3VzdG9tLXNlbCcpLnJlbW92ZUNsYXNzKCdzaG93LXNlbCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuY3VzdG9tLXNlbCBhOm5vdCg6Zmlyc3QpJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgKi9cblxuXG4gICAgLyoqIFxuICAgICAqIEFjY29yZGlvbiBjb2xsYXBzZSBcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09ICovIFxuIFxuICAgICQoXCJbZGF0YS1jb2xsYXBzZV1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkgeyBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksIFxuICAgICAgICAgICAgYmxvY2tJZCA9ICR0aGlzLmRhdGEoJ2NvbGxhcHNlJyk7IFxuIFxuICAgICAgICAkdGhpcy50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTsgXG4gICAgfSk7IFxuIFxuICAgIC8qKiBcbiAgICAgKiBNb2RhbCBjdXJyZW5jeSBkcm9wZG93biBcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT0gKi8gXG4gXG4gICAgIGZ1bmN0aW9uIHVwZGF0ZVN5bWJvbChlKSAgIHsgXG4gICAgICAgIHZhciBzZWxlY3RlZCA9ICQoXCIuY3VycmVuY3ktc2VsZWN0b3Igb3B0aW9uOnNlbGVjdGVkXCIpOyBcbiAgICAgICAgJChcIi5jdXJyZW5jeS1zeW1ib2xcIikudGV4dChzZWxlY3RlZC5kYXRhKFwic3ltYm9sXCIpKSBcbiAgICAgICAgJChcIi5jdXJyZW5jeS1hbW91bnRcIikucHJvcChcInBsYWNlaG9sZGVyXCIsIHNlbGVjdGVkLmRhdGEoXCJwbGFjZWhvbGRlclwiKSkgXG4gICAgICAgICQoJy5jdXJyZW5jeS1hZGRvbi1maXhlZCcpLnRleHQoc2VsZWN0ZWQudGV4dCgpKSBcbiAgICAgIH0gXG4gICAgICAgXG4gICAgICAkKFwiLmN1cnJlbmN5LXNlbGVjdG9yXCIpLm9uKFwiY2hhbmdlXCIsIHVwZGF0ZVN5bWJvbCkgXG4gICAgICAgdXBkYXRlU3ltYm9sKCkgXG5cbn0pOyJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYXBwLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

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