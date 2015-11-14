//hover mobile
//// Add no-touch class to body for mobile touch events and toggle hover class on elements that need it
//	if ("ontouchstart" in document.documentElement) {
//		document.documentElement.className += " touch";
//	}
//	
//	// Add and remove no-hover class to <li>'s for mobile hover events
//	jQuery('.touch .mytouch').each(function() {
//		var div = jQuery(this);
//		
//		div.hover(function() {
//			div.removeClass('no-hover');
//		});
//		
//		jQuery('*').not(div).bind('click', function() {
//			div.addClass('no-hover');
//		});
//		
//	});
$('mytouch').on("touchstart", function (e) {
    'use strict'; //satisfy code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('mytouch').not(this).removeClass('hover');
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});

//add video
$(function() {
 
$('.myclosebtn').click(function(){
        $('.myvideoa').get(0).pause();
        $('.myvideob').get(0).pause();
        $('.myvideoc').get(0).pause();
        $('.myvideod').get(0).pause();
        $('.myvideoe').get(0).pause();
        $('.myvideof').get(0).pause();
        $('.myvideog').get(0).pause();
        $('.myvideoh').get(0).pause();
        $('.myvideoi').get(0).pause();
        $('.myvideoj').get(0).pause();
	    $('.myvideok').get(0).pause();

    });
});

$(function(){

  "use strict";

  var topoffset = 50; //variable for menu height
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height(); //get the height of the window
  var randSlide = Math.floor(Math.random()*slideqty);

  $('#featured .item').eq(randSlide).addClass('active');


  $('.fullheight').css('height', wheight); //set to window tallness  


  //replace IMG inside carousels with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness  
  });

  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#featured') {
    $('header nav').addClass('inbody');
    
  } else {
    $('header nav').removeClass('inbody');
  }
    
    //add animated class mission
    if(hash == '#mymission') {
        $('#mymission .missionani').addClass('animated bounceInDown');
        
    }else{
        $('#mymission .missionani').removeClass('animated bounceInDown');
    }
    //add animated class service
    if(hash =='#myservice'){
        $('#myservice .serviceani').addClass('animated bounceInDown');
    }else {
        $('#myservice .serviceani').removeClass('animated bounceInDown');
    }
    //add animated class work
    if(hash =='#myportfolio'){
        $('#myportfolio .portfolioani').addClass('animated bounceInDown');
    }else {
        $('#myportfolio .portfolioani').removeClass('animated bounceInDown');
    }
    //add animated class project
     if(hash =='#testimonials'){
        $('#testimonials .projectani').addClass('animated bounceInDown');
    }else {
        $('#testimonials .projectani').removeClass('animated bounceInDown');
    }
    //add animated class find
    if(hash =='#mycontact'){
        $('#mycontact .find').addClass('animated bounceInDown');
    }else {
        $('#mycontact .find').removeClass('animated bounceInDown');
    }
    
    $(function() {
    //add bg color mission
    var mystate = true;
     if((mystate)&&(hash == '#mymission')){
        $( "#mymission" ).animate({
          backgroundColor: "#000 "
        },1000);
     }else{
        $( "#mymission" ).animate({
          backgroundColor: "#fff"
        },1000);
         
     }
    //add bg color service
    if((mystate)&&(hash == '#myservice')){
        $( "#myservice" ).animate({
          backgroundColor: "#000 "
        },1000);
     }else{
        $( "#myservice" ).animate({
          backgroundColor: "#fff"
        },1000);
         
     }
    //add bg color portfolio
    if((mystate)&&(hash == '#myportfolio')){
        $( "#myportfolio" ).animate({
          backgroundColor: "#000 "
        },1000);
     }else{
        $( "#myportfolio" ).animate({
          backgroundColor: "#fff"
        },1000);
         
     }
    //add bg color project
    if((mystate)&&(hash == '#testimonials')){
        $( "#testimonials" ).animate({
          backgroundColor: "#000 "
        },1000);
     }else{
        $( "#testimonials" ).animate({
          backgroundColor: "#fff"
        },1000);
         
     }
    //add bg color find
    if((mystate)&&(hash == '#mycontact')){
        $( "#mycontact" ).animate({
          backgroundColor: "#000 "
        },1000);
     }else{
        $( "#mycontact" ).animate({
          backgroundColor: "#fff"
        },1000);
         
     }

    mystate=!mystate;
});
  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    //scrollspy fire inbody
    if(hash !== '#featured') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
      
    //scrollspy fire animation mission
    if(hash == '#mymission') {
        $('#mymission .missionani').addClass('animated bounceInDown');
        
    } else{
        $('#mymission .missionani').removeClass('animated bounceInDown');

    }
    //scrollspy fire animation service  
    if(hash =='#myservice'){
        $('#myservice .serviceani').addClass('animated bounceInDown');
    }else {
        $('#myservice .serviceani').removeClass('animated bounceInDown');
    }
    //scrollspy fire animation work
    if(hash =='#myportfolio'){
        $('#myportfolio .portfolioani').addClass('animated bounceInDown');
    }else {
        $('#myportfolio .portfolioani').removeClass('animated bounceInDown');
    }
    //scrollspy fire animation project
     if(hash =='#testimonials'){
        $('#testimonials .projectani').addClass('animated bounceInDown');
    }else {
        $('#testimonials .projectani').removeClass('animated bounceInDown');
    }
    //scrollspy fire animation find
    if(hash =='#mycontact'){
        $('#mycontact .find').addClass('animated bounceInDown');
    }else {
        $('#mycontact .find').removeClass('animated bounceInDown');
    }
      
    //scrollspy fire bg color mission
    var state = true;
    if((hash == '#mymission')&&(state)){
        $( "#mymission" ).animate({
          backgroundColor: "#000 "
        },1000);
        } else {
          $( "#mymission" ).animate({
          backgroundColor: "#fff"
          },1000);
        }
    if((hash == '#myservice')&&(state)){
        $( "#myservice" ).animate({
          backgroundColor: "#000 "
        },1000);
        } else {
          $( "#myservice" ).animate({
          backgroundColor: "#fff"
          },1000);
        }
    if((hash == '#myportfolio')&&(state)){
        $( "#myportfolio" ).animate({
          backgroundColor: "#000 "
        },1000);
        } else {
          $( "#myportfolio" ).animate({
          backgroundColor: "#fff"
          },1000);
        }
    if((state)&&(hash == '#testimonials')){
        $( "#testimonials" ).animate({
          backgroundColor: "#000 "
        },1000);
      }else{
        $( "#testimonials" ).animate({
          backgroundColor: "#fff"
        },1000);
         
     }
    if((state)&&(hash == '#mycontact')){
        $( "#mycontact" ).animate({
          backgroundColor: "#000 "
        },1000);
      }else{
        $( "#mycontact" ).animate({
          backgroundColor: "#fff"
        },1000);
         
     }
      state= !state;
      
  });

  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  //Automatically generate carousel indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
    if (i === randSlide) {
      insertText += ' class="active" ';
    }
    insertText += '></li>';
    $('#featured ol').append(insertText);
  }

  $('.carousel').carousel({
    pause: false
  });

});

//typed start
$(function () {
	$(".typed").typed({
		strings: ["I am Wenbo Liu, ", "A creative developer ! ", "I make my ideas come true, ", "I make your ideas come true, ", "I make our ideas come true !"],
		contentType: 'html',
		typeSpeed: 100,
		startDelay: 0,
		// backspacing speed
		backSpeed: 0,
		// time before backspacing
		backDelay: 700,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// call when done callback function
		callback: function () {},
		// starting callback function before each string
		preStringTyped: function () {},
		//callback for every typed string
		onStringTyped: function () {},
		// callback for reset
		resetCallback: function () {}
	});
});

$(document).ready(function () {
	//logo color
	var randomLinks = $('.circle');
	var original = randomLinks.css('color');
	randomLinks.hover(function () { //mouseover
		var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css("background-color", col);
	}, function () { //mouseout
		//$(this).css("background-color", "white");
	});
	//logo color end
    
   
        
});
