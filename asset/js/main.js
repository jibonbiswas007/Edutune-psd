(function($) {
    "use strict";
    jQuery(document).ready(function($){
      $('#menu').slicknav({
        label: 'MENU ',
        duration: 700,
        brand: '<h3><a href="index.html"><img src="asset/img/logo.png" alt=""></a></h3>',
        easingOpen: 'easeOutBounce',
        easingClose: 'easeInOutBounce'
      });
    	// Iframe Js
    	$('.video-play-btn').magnificPopup({
    		type: 'iframe'
    	});
    	var footerHeight = $('.site-footer').height();
    	$('.site-main-wrapper').css('margin-bottom', footerHeight + 'px');
        $('.count').counterUp({
            delay: 10,
            time: 1500
        });

        // Nice Select Js
        $('select').niceSelect();

        // Gmap3 Js
        $('#map')
              .gmap3({
                center:[22.7898141,89.2546341],
                zoom:10,
                scrollwheel:false,
                mapTypeId: "shadeOfGrey", // to select it directly
                mapTypeControlOptions: {
                  mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                }
              })
              .marker({
                position: [22.7898141,89.2546341],
                icon: 'http://maps.google.com/mapfiles/marker_green.png'
              })
              .styledmaptype(
                "shadeOfGrey",
                [
                  {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#ffffff"},{"lightness":40}]},
                  {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#8A754E"},{"lightness":16}]},
                  {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"on"}]},
                  {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#EEEEEE"},{"lightness":20}]},
                  {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#F5F5F5"},{"lightness":17},{"weight":1.2}]},
                  {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
                  {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
                  {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#F0E5C8"},{"lightness":17}]},
                  {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#F0E5C8"},{"lightness":29},{"weight":0.2}]},
                  {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#F0E5C8"},{"lightness":18}]},
                  {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":16}]},
                  {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
                  {"featureType":"water","elementType":"geometry","stylers":[{"color":"#C8D7D4"},{"lightness":17}]}
                ],
                {name: "Shades of Grey"}
              );
        
    });
    
    jQuery(window).load(function(){
          $('.preloader').fadeOut(5000);
    });
    
    
}(jQuery));