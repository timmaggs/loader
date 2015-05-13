$(document).ready(function() {
	$('body').delay(5000).queue(function(){
		$(this).addClass("loaded").dequeue();
	});
	/*$(".loader").delay(8000).queue(function(){
		$(this).addClass("kill").dequeue();
		$('.content').addClass("show");
	});*/
});