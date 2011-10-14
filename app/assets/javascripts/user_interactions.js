$(document).ready(function(){
  jQuery('ul.menu-top').superfish({delay: 0});
  
  $(".mainbar").ready(function() {
		$(".staticMenu dt a").click(function() {

			$(".staticMenu dd ul").not($(this).parents(".staticMenu").find("ul")).hide();
			$(".staticMenu dt a").not($(this)).removeClass("selected");
			$(this).parents(".staticMenu").find("ul").toggle();

			if($(this).parents(".staticMenu").find("ul").css("display") == "none"){
				$(this).removeClass("selected");
			}else{
				$(this).addClass("selected");
			}

		});
                $("#notif").click(function() {
                                resetNotification();
                            });

		$(".staticMenu dd ul li a").click(function() {
			var text = $(this).html();
			//$(".staticMenu dt a span").html(text);
			$(".staticMenu dd ul").hide();
		});

		$(document).bind('click', function(e) {
			var $clicked = $(e.target);
			if (! $clicked.parents().hasClass("staticMenu")){
				$(".staticMenu dd ul").hide();
				$(".staticMenu dt a").removeClass("selected");
			}

		});
	});
	
	$("#notif").click(function() {
    resetNotification();
  });
  
  
  $('.headmenu1').addClass("on");
  

  
  
});