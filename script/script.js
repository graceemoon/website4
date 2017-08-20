// $('.landing').click(function(){
// 	// $(this).toggleClass('.remove-landing');
// 	$('.landing').fadeOut('slow');
// })


$('.landing').click(function(){
  $('.landing').fadeOut(400, function() {
    $(this).remove();
  })
})


// $('.about-button').click(function() {
// 	$('html, body').animate({
// 		scrollTop: $('.about').offset().top
// 	}, 400);
// });


$(function() {
    $(".projects").toggle(function() {
        $(this).next(".submenu").slideDown(200);
    }, function() {
        $(this).next(".submenu").slideUp(200);
    });
});

