(function ($) {

  "use strict";

  /*----------------------------------|| Loader ||----------------------------------------------*/

  $(window).load(function () {
    $('#loader').fadeOut(800);
  });

  /*----------------------------------|| Loader End ||----------------------------------------------*/

  /*----------------------------------|| Navigation Dropdown ||----------------------------------------------*/


  $(document).ready(function () {
    $('.dropdown-submenu a.dropdown_lnk').on("click ", function (e) {
      $('#corporateList').css('display', 'none')
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });

  $(document).ready(function () {
    $('.dropdown-submenu a.dropdown_lnk2').on("click ", function (e) {
      $('#schoolList').css('display', 'none')
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });


  /*----------------------------------|| Navigation Dropdown End ||----------------------------------------------*/


  /*----------------------------------|| On Scroll Method ||----------------------------------------------*/

  $(window).scroll(function () {
    var $scroll_pos = 0;
    $scroll_pos = $(window).scrollTop();
    if ($scroll_pos >= 30) {
      $('#navigation').addClass('color_navigation');
    } else {
      $('#navigation').removeClass('color_navigation');
    }
  });


  /*----------------------------------|| On Scroll Method End ||----------------------------------------------*/



})(jQuery);

