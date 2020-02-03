function preload(arrayOfImages) {
	$(arrayOfImages).each(function () {
		$('<img />').attr('src',this).appendTo('body').css('display','none');
	});
}
$(document).ready(function(){

	preload([
		'images/header/social-icon-twitter-hover.png',
		'images/header/social-icon-vk-hover.png',
		'images/header/social-icon-fb-hover.png',
		'images/menu/bulle-active.jpg'
	]);
	
	$('#yam-menu-top').superfish();
	
	$('.secondary-menu ul.slider').bxSlider({
		auto: false,
		slideWidth: 180,
		maxSlides: 4,
		moveSlides: 1,
		pager: false,
		slideMargin: 30
	});		
	
	$('.gallery-container .gallery').bxSlider({
		auto: false,
		slideWidth: 749,
		maxSlides: 1,
		moveSlides: 1,
		pager: false,
		slideMargin: 0,
		onSliderLoad: function (currentSlide) {          
			window.currentSlide = currentSlide;
			$('.slidercaption').html($('.gallery li img:last').attr('title')); 
		},
		onSlideAfter: function (currentSlide) {
			window.currentSlide = currentSlide;
		   $('.slidercaption').html(currentSlide.find('img').attr('title'));
		}		
	});	
	
	$('.blog-slider').bxSlider({
		auto: false,
		slideWidth: 398,
		maxSlides: 2,
		moveSlides: 1,
		pager: false,
		slideMargin: 22
	});	

	/*
	$('.staff-member').each(function() {
		
		var imageWidth = $(this).find('img').width();
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			$(this).find('.staff-desc').width(parseFloat(660 - imageWidth));
		} else {
			$(this).find('.staff-desc').width(parseFloat(850 - imageWidth));
		}
		
		
	});
	*/

	$("a.fancybox").fancybox();	
	
	$('.full-size').click(function(){ window.currentSlide.find('a.fancybox').trigger('click'); });
	
	$('.secondary-menu ul.slider li').hover(function(){ 
		$(this).find('img').attr('src', $(this).find('img').attr('rel_hover'));
	}, function(){
		$(this).find('img').attr('src', $(this).find('img').attr('rel'));
	});
	
    $('.input-wrap input').focus(function() {
		$(this).parent().css('border-color', '#94846e');
		$(this).css('border-color', '#94846e');
    });
    $('.input-wrap input').blur(function() {
		$(this).parent().css('border-color', '#bdbab4');
		$(this).css('border-color', '#bdbab4');
    });	
	
    $('.textarea-wrap textarea').focus(function() {
		$(this).parent().find('img').css('border-color', '#94846e');
		$(this).css('border-color', '#94846e');
    });
    $('.textarea-wrap textarea').blur(function() {
		$(this).parent().find('img').css('border-color', '#bdbab4');
		$(this).css('border-color', '#bdbab4');
    });	
	
	//aside has position absolute, fixing the flawback:
	var asideH = $('aside').height();
	$('.page-center-wrapper').css('min-height', parseFloat(asideH+150));
	
});