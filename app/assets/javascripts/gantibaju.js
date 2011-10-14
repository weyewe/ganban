$(document).ready(function(){
						   
	// TOP NAVIGATION MENU 
	$("#menu > div.has").hover(
		function(){
			$(".sub").hide(0);
			$(this).addClass("hovered");
			$(this).find("> .sub").animate({height: 'toggle'}, 100);
		},
		function(){
			$(this).removeClass("hovered");
			$(".sub").animate({opacity:1},300).fadeOut(500);
		}
	); 
	$("#menu > div.has ul li:last-child").css("background","none");
	
	// DISSOLVED INPUT MENU
	var inputs = $('p.dissolve > input.disinput, p.dissolve > texarea.disinput');
	inputs.val('');
	$(inputs).focus(function() {
		var vals = $(this).val();
		var fors = $(this).attr("id");
		var labels = $("p.dissolve > label.dislabel[for="+fors+"]");
		if (vals == "") {
			$(labels).animate({opacity: 0}, 200);
		}
	});
	$(inputs).blur(function() {
		var vals = $(this).val();
		var fors = $(this).attr('id');
		var labels = $("p.dissolve > label.dislabel[for="+fors+"]");
		if (vals == "") {
			$(labels).animate({opacity: 1}, 200);
		}
	});
	
	// SLIDE MORE
	$(".slide-image").hover(
		function(){$(this).find("> .zoom").fadeIn();},function(){$(this).find("> .zoom").hide();}
	);
	
	// SLIDER
	$("#slider-wrap").scrollable({circular: true}).navigator().autoscroll({interval: 5000});
	$("#kaos-slider-wrap").scrollable({circular: true}).navigator().autoscroll({interval: 5000});


        // SLIDE MORE FB
	$(".slide-image-FB").hover(
		function(){$(this).find("> .zoom").fadeIn();},function(){$(this).find("> .zoom").hide();}
	);

	// SLIDER FB
	$("#slider-wrapFB").scrollable({circular: true}).navigator().autoscroll({interval: 5000});
	

	
	// DESIGN VOTE NUMBERS
	var votenum = 1;
	$(".barate-icon a").each(function() {
		$(this).append('<em>' + votenum + '</em>');
		votenum += 1;
	});
	
	// PROFILES
	$("ul#profile-tabs").tabs("div#profile-panes > div.profile-pane", {effect: "fade"});
	var profile =  $("ul#profile-tabs").data("tabs");
	$(".profile-tab1").click(function(){profile.click(0);return false;});
	$(".profile-tab2").click(function(){profile.click(1);return false;});
  // $("a#ganti-avatar").fancybox({
  //  'titleShow' : false
  // });
	
	// STICKY FOOTER
	var footHeight = $("#footer").height();
	var mainPadding = footHeight + 20 +"px";
	var footMargin = footHeight+"px";
	$("#main").css("padding-bottom", mainPadding);
	$("#footer").css("margin-top", "-"+footMargin);
	
	// EQUAL HEIGHTS
	function equalHeight(group) {
		var tallest = 0;
		group.each(function() {
			var thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}	
	equalHeight($(".kaos"));
	equalHeight($(".design"));
	
	// COMMENTS
	$(".comment .children li:last-child").addClass("last");
	$("#commentform p").addClass("clearfix");
	
	// PENGIRIMAN
	//$("#accordion").tabs("#accordion div.pesanan", {tabs: 'h2', effect: 'slide', initialIndex: 0});
	
	// HABIS
	$("a.habis").click(function(){return false});
  // $("a#bataldlglink").fancybox({
  //            'autoDimensions'  : true,
  //                         'titleShow'    : false
  // 
  //  }
  //         );

        // PREORDER
       // var prow = '<tr class="preorders"><td><input class="text preordername" type="text" size="31" value=""/></td><td><select><option value="Cowok">Cowok</option><option value="Cewek">Cewek</option></select></td><td><select><option value="XS">XS</option><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="2XL">2XL</option><option value="3XL">3XL</option></select></td><td><input class="text" align="middle" type="text" size="5" value="1"/></td><td>&nbsp;</td></tr>';
       // $(".addrow").click(function(){
       //     $(prow).appendTo("#tableorder");
       //     return false;
      //  });
});
