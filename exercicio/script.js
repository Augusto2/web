$(document).ready(function(e){
$("#hoje a").click(function(e){
		e.preventDefault();
		var href=$(this).attr('href');	
		$("#hoje").load(href+" #hoje");
	});
})
