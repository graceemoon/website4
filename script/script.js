// $('.landing').click(function(){
// 	// $(this).toggleClass('.remove-landing');
// 	$('.landing').fadeOut('slow');
// })


// $('.landing').click(function(){
//   $('.landing').fadeOut(400, function() {
//     $(this).remove();
//   })
// })



$(.about).click(function() {
	let aboutPage = $(.about-page); 
	aboutPage.animate( {
		opacity: '0.4',
		z-index: '99',
	});
	
})