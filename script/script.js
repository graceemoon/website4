$('.landing').click(function(){
	// this.addClass('.remove-landing')
	$('.landing').fadeOut('slow');
})


$('.about-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.about').offset().top
	}, 400);
});