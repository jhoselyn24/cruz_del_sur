var ww = document.body.clientWidth;
$(document).ready(function() {
	$(".nav-menu li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	adjustMenu();
});
$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});
var adjustMenu = function() {
	if (ww < 999) {
		// $(".responsive_menu_icon").css("display", "block");
		$(".navbar-toggler").click(function(e) {
		// e.preventDefault();
		$(".nav-menu li").removeClass('hoverr');
	});
		$('a.parent').each(function(){
			var s = $(this).clone().wrap('<p>').parent().html();
			$(this).siblings('.sub-menu').prepend(s);
			$(".sub-menu > a").wrap('<li class="unique-mobile-class"></li>').removeClass('parent');
			$(".unique-mobile-class + .unique-mobile-class").remove();
			// console.log(s);
		});
		$(".nav-menu li").unbind('mouseenter mouseleave');
		$(".nav-menu li a.parent").unbind('click').bind('click', function(e) {
		// must be attached to anchor element to prevent bubbling
		e.preventDefault();
		$(".unique-mobile-class + .unique-mobile-class").remove();
		$(this).parent("li").toggleClass("hoverr");
	});
	} else {
		$(".nav-menu li").bind('mouseenter mouseleave');
		$(".unique-mobile-class").remove();
	}
}

