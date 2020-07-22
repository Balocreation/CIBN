//  Preloader
jQuery(window).on("load", function() {
    $('#preloader').fadeOut(500);
    $('#app').addClass('show');
});

(function($) {

  'use strict';

    //  Header Fixed
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.navigation').addClass("animated fadeInDown fixed"), 3000;
        } else {
            $('.navigation').removeClass("animated fadeInDown fixed"), 3000;
        }
    });

    // Custom Selectbox
    $('.drop-menu').click(function() {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropeddown').slideToggle(300);
    });
    $('.drop-menu').focusout(function() {
        $(this).removeClass('active');
        $(this).find('.dropeddown').slideUp(300);
    });
    $('.drop-menu .dropeddown li').click(function() {
        $(this).parents('.drop-menu').find('span').text($(this).text());
        $(this).parents('.drop-menu').find('input').attr('value', $(this).attr('id'));
    });

    // File Upload 
    $(".file-upload-wrapper").on("change", ".file-upload-field", function() {
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
    });

    // Explore
    $('.explore-items').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // Partners
    $('.partner-items').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // Events
    $('.events-slider').slick({
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(document).ready(function() {
      $('.floating-button').on('click',
          function(e) {
              e.preventDefault();
              $(this).toggleClass('open');
              if ($(this).children('.fas').hasClass('fa-plus')) {
                  $(this).children('.fas').removeClass('fa-plus');
                  $(this).children('.fas').addClass('fa-times');
              } else if ($(this).children('.fa').hasClass('fa-times')) {
                  $(this).children('.fas').removeClass('fa-times');
                  $(this).children('.fas').addClass('fa-plus');
              }
              $('.floating-menu').stop().slideToggle("milliseconds", "linear");
          }
      );
      $(this).on('click', function(e) {
          var container = $(".floating-button");

          // if the target of the click isn't the container nor a descendant of the container
          if (!container.is(e.target) && $('.floating').has(e.target).length === 0) {
              if (container.hasClass('open')) {
                  container.removeClass('open');
              }
              if (container.children('.fas').hasClass('fa-times')) {
                  container.children('.fas').removeClass('fa-times');
                  container.children('.fas').addClass('fa-plus');
              }
              $('.floating-menu').hide();
          }
      });
    });

    $('.navbar-toggler').on('click', function() {
      $('#mobile-nav, .mobile-overlay').addClass('show');
      $('body').css('overflow', 'hidden');
    });
    $('.mobile-overlay, .close-sidebar').on('click', function() {
        $('#mobile-nav, .mobile-overlay').removeClass('show');
        $('body').css('overflow', 'auto');
    });

    $('.nav-item.dropdown').on('click', function() {
      $(this).find('.mobile-nav-drop').toggleClass('show-it');
    });

    $(function() {
      $('#success-modal-one').modal('show');
    });
    
    $(document).ready(function() {
        $('.collapse.show a[href="' + location.pathname.split("/")[1] + '"]').addClass('active');
    });

})(jQuery);