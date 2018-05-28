$(document).ready(function() {

    $('.js--section-intro').waypoint(function(direction) {

        if(direction == "down") 
        {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
    }); 

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

      var flag = 0;

      $('.menu,.close').click(function() {

        var nav = $('.main-nav');
        var icon = $('.menu');

        nav.slideToggle(200);

        if (flag == 0) {
            $('.menu').hide(1);
            $('.close').show(1);
            flag = 1;
        }else{
            $('.close').hide(1);
            $('.menu').show(1);
            flag = 0;
        }

      });

      $('.js--wp-1').waypoint(function(direction) {

        $('.js--wp-1').addClass('animate fadeIn');
        },{
        offset: '50%'
      });

      $('.js--wp-2').waypoint(function(direction) {

        $('.js--wp-2').addClass('animate fadeInRight');
        },{
        offset: '50%'
      });

      $('.js--wp-3').waypoint(function(direction) {

        $('.js--wp-3').addClass('animate pulse');
        },{
        offset: '50%'
      });

      $('.js--wp-4').waypoint(function(direction) {

        $('.js--wp-4').addClass('animate fadeIn');
        },{
        offset: '50%'
      });

      $('.js--wp-5').waypoint(function(direction) {

        $('.js--wp-5').addClass('animate fadeIn');
        },{
        offset: '50%'
      });

      $('.js--wp-6').waypoint(function(direction) {

        $('.js--wp-6').addClass('animate fadeIn');
        },{
        offset: '50%'
      });

      $('.js--wp-7').waypoint(function(direction) {

        $('.js--wp-7').addClass('animate fadeInUpBig');
        },{
        offset: '75%'
      });
      

});