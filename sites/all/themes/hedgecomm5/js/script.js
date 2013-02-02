jQuery(document).ready(function($) {

	// javascript
	$('.columns-inner #content-column').jScrollPane({
	  scrollbarWidth: 25,
		scrollbarMargin: 10,
		verticalGutter: 50,
		dragMinHeight: 72,
		dragMaxHeight: 72
	});
	
	// lengte van de strepen onderaan +/- fixen
	var hoogte = $(window).height();
	if (hoogte > 771) {
	  var delta = hoogte - 771;
	  $('#push').css('height', delta);
	}
	
	// uniform sexy forms voor select
	$('select').uniform();
	
	// border-bottom-color animatie gewone links
	$('#columns a:not(.btn,.icon)').hover(function() {
		$(this).stop().animate({borderBottomColor: '#000000', color: '#000000'}, 250);
	}, function() {
		$(this).stop().animate({borderBottomColor: '#ceb2B2', color: '#360808'}, 250);
	});
	
});