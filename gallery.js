//currently doesnt support adding padding or margin to .mygallery

$(document).ready(function () {
//set initinal values
	var thisID = '#'+$(".mygallery li:first").attr('id')

	var nextID = $(thisID).next().attr('id');
	var prevID = $(thisID).prev().attr('id');

	$(".next").attr("href",'#'+nextID)
	$(".prev").attr("href",'#'+prevID)


//thumbnails and navigation-buttons
	$('.thumbnails li a, .navigation a').click(function() {
		event.preventDefault();
		var thisID = $(this).attr('href');
		console.log(thisID)
		var itemPosition = $('.mygallery li'+thisID).position();
		var listPosition = $('.mygallery').position()
		var position = itemPosition['left']-listPosition['left']
		$(".mygallery li").animate({
			margin: "0 "+position+"px 0 "+(position*-1)+"px"
		},400);

	//update navigation
		var nextID = $(thisID).next().attr('id');
		var prevID = $(thisID).prev().attr('id');
	
		$(".next").attr("href",'#'+nextID)
		$(".prev").attr("href",'#'+prevID)
	
	//Hide navigation on first and last
		if ($(thisID).is("li:first-child")){
			$(".prev").css("display","none");
		}		
		else {
			$(".prev").css("display","inline");
		};
	
		if ($(thisID).is("li:last-child")){
			$(".next").css("display","none");
		}
		else {
			$(".next").css("display","inline");
		};

	});
});

