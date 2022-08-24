(function ($) {

    "use strict";

        // PRE loader
        $(window).on ('load', function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });


        // Parallax Js
        function initParallax() {
          $('#home').parallax("50%", 50);
          $('#work').parallax("50%", 40);
          $('#about').parallax("50%", 20);
          $('#testimonial').parallax("50%", 30);
          $('#contact').parallax("50%", 10);
          }
        initParallax();


        // Owl Carousel
        var owl = $("#owl-testimonial");
          owl.owlCarousel({
            autoPlay: 6000,
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768,1],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            Speedfast: 200,
        }); 


        // CONTACT FORM
        $("#contact-form").submit(function (e) {
          e.preventDefault();
          var name = $("#cf-name").val();
          var email = $("#cf-email").val();
          var subject = $("#cf-subject").val();
          var message = $("#cf-message").val();
          var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

          function isValidEmail(emailAddress) {
              var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
              return pattern.test(emailAddress);
          };
          if (isValidEmail(email) && (message!='') && (name!='')) {
              $.ajax({
                  type: "POST",
                  url: "php/contact.php",
                  data: dataString,
                  success: function () {
                      $('.text-success').fadeIn(1000);
                      $('.text-danger').fadeOut(500);
                  }
              });
          }
          else {
              $('.text-danger').fadeIn(1000);
              $('.text-success').fadeOut(500);
          }
          return false;
        });


        // Back top
        $(window).on('scroll', function() {
          if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
              } else {
                $('.go-top').fadeOut(200);
            }
          });   
          // Animate the scroll to top
          $('.go-top').on('click', function(event) {
            event.preventDefault();
              $('html, body').animate({scrollTop: 0}, 300);
        })


})(jQuery);
