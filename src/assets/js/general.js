var $ = jQuery.noConflict();
$(document).ready(function(){
		// Init ScrollMagic
		var controller = new ScrollMagic.Controller();
		// Scene intro - pin the intro section
		var tween = TweenMax.to(".background-container", 1, {scale:2, opacity:0, ease:Linear.easeNone});
		var pinSceneIntro = new ScrollMagic.Scene({
			
			triggerHook: 0,
			duration: '100%'		
		})
        
	  

		// Scene 1 - pin the second section
		var pinScene01 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: '100%'		
		})
		.setPin('#slide01 .pin-wrapper')
		.addIndicators()
		.addTo(controller)
		;

		// Scene 2 - pin the third section
		var pinScene02 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: '200%'
		})
		.setPin('#slide02 .pin-wrapper')
		.addTo(controller)
		;

		// Scene 3 - pin the fourth section
		var pinScene03 = new ScrollMagic.Scene({
			triggerElement: '#slide02',
			triggerHook: 0,
			duration: '200%'
		})
		.setPin('#slide03 .pin-wrapper')
		.addTo(controller)
		;

		// Scene 4 - pin the fifth section
		var pinScene04 = new ScrollMagic.Scene({
			triggerElement: '#slide03',
			triggerHook: 0,
			duration: '200%'
		})
		.setPin('#slide04 .pin-wrapper')
		.addTo(controller)
		;

        // Scene 5 - pin the fifth section
		var pinScene05 = new ScrollMagic.Scene({
			triggerElement: '#slide04',
			triggerHook: 0,
			duration: '200%'
		})
		.setPin('#slide05 .pin-wrapper')
		.addTo(controller)
		;

        // Scene 6 - pin the fifth section
		var pinScene06 = new ScrollMagic.Scene({
			triggerElement: '#slide05',
			triggerHook: 0,
			duration: '100%'
		})
		.setPin('#slide06 .pin-wrapper')
		.addTo(controller)
		;

		// Scene 6 - pin the fifth section
		var pinScene07 = new ScrollMagic.Scene({
			triggerElement: '#slide06',
			triggerHook: 0,
			duration: '100%'
		})
		.setPin('#slide07 .pin-wrapper')
		.addTo(controller)
		;
		

        $(".is-dotted-bx").click(function () {
            $(this).toggleClass("is-open"), $(".lft-nav").toggleClass("in-menu-open");
        })
        
});



// =========    OWL CAROUSEL SLIDER ANIMATION CODE JS    ========= 
$(document).ready(function(){
    $('.content-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            },
            1400:{
                items:4
            }
        }
    })

    $(document).ready(function() {
        var owl = $('.testimonial-carousel');
        owl.owlCarousel({
          stagePadding: 350,
          margin: 30,
          items: 1,
          loop: true,
          dots: true,
          nav: false,
          responsive: {
            320: {
              items: 1,
              stagePadding: 0
            },
            767: {
              items: 1,
              stagePadding: 0
            },
            1000: {
              items: 1,
              stagePadding: 220
            }
			,
            1500: {
              items: 1,
              stagePadding: 420
            }
          }
        })
      })
});

$(document).ready(function() {
    $(".show-hide-pass").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye" );
            $('#show_hide_password i').removeClass( "icon-open-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye" );
            $('#show_hide_password i').addClass( "icon-open-eye" );
        }
    });
});
$(document).ready(function() {
    $(".show-hide-pass").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password-login input').attr("type") == "text"){
            $('#show_hide_password-login input').attr('type', 'password');
            $('#show_hide_password-login i').addClass( "fa-eye" );
            $('#show_hide_password-login i').removeClass( "icon-open-eye" );
        }else if($('#show_hide_password-login input').attr("type") == "password"){
            $('#show_hide_password-login input').attr('type', 'text');
            $('#show_hide_password-login i').removeClass( "fa-eye" );
            $('#show_hide_password-login i').addClass( "icon-open-eye" );
        }
    });
});