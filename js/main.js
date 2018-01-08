$(document).ready(function(){

$(window).scroll(function(){
	if ($(window).scrollTop() > 724) {
		$('.navbar').addClass('fixed-top');
	}
	if ($(window).scrollTop() < 725) {
		$('.navbar').removeClass('fixed-top');
	}
});

var scrollLink = $('.scroll');

//smooth scrolling 

scrollLink.click(function(e) {
	e.preventDefault();
	$('body, html').animate({
		scrollTop: $(this.hash).offset().top
	}, 1000 );
});

// Active links highlight

$(window).scroll(function() {
	var scrollbarLocation = $(this).scrollTop();

	scrollLink.each(function() {

		var sectionOffset = $(this.hash).offset().top
		if ( sectionOffset <= scrollbarLocation ) {
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		};

	});

});

// section-features animation

//Heading 
$('.js-wp-1').waypoint(function(direction) {
	$('.js-wp-1').addClass('animated fadeInUp') 
	}, {offset: '40%'
});


//left icon 
$('.js-wp-2').waypoint(function(direction) {
	$('.js-wp-2').addClass('animated fadeInLeft') 
	}, {offset: '40%'
});

//both middle icons 
$('.js-wp-3').waypoint(function(direction) {
	$('.js-wp-3').addClass('animated fadeInUp') 
	}, {offset: '40%'
});

//right icon 
$('.js-wp-4').waypoint(function(direction) {
	$('.js-wp-4').addClass('animated fadeInRight') 
	}, {offset: '40%'
});

//section offers animation

// first block
//date 
$('.js-od-1').waypoint(function(direction) {
	$('.js-od-1').addClass('animated bounceInUp') 
	}, {offset: '40%'
});       

//pannel
$('.js-op-1').waypoint(function(direction) {
	$('.js-op-1').addClass('animated fadeInLeft') 
	}, {offset: '40%'
}); 

//second block 

//date 
$('.js-od-2').waypoint(function(direction) {
	$('.js-od-2').addClass('animated bounceInUp') 
	}, {offset: '40%'
});

//pannel
$('.js-op-2').waypoint(function(direction) {
	$('.js-op-2').addClass('animated fadeInRight') 
	}, {offset: '40%'
});

//third block 

//date
$('.js-od-3').waypoint(function(direction) {
	$('.js-od-3').addClass('animated bounceInUp') 
	}, {offset: '40%'
});

//pannel 
$('.js-op-3').waypoint(function(direction) {
	$('.js-op-3').addClass('animated fadeInLeft') 
	}, {offset: '40%'
});


});


