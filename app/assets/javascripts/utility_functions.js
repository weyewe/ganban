$(document).ready(function(){
  
  var SubMenutimer;
	var last_o;
	
	
  function sortir(targ,selObj,restore){ //v3.0
    eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
    if (restore) selObj.selectedIndex=0;
  }
  
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
	
	
	function openSubMenu(o){
		cancelSubMenuClose();

		if(last_o) $(last_o).parent().find("div").hide();

		last_o = o;
		$(o).parent().find("div").show();
	}

	function closeSubMenu(){
		SubMenutimer = setTimeout("close()",500);
	}

	function cancelSubMenuClose(){
		clearTimeout(SubMenutimer);
	}


	function close(){
		$(last_o).parent().find("div").hide();
	}
	




  function addToCartClick(id, size, number) {
    if (number == ''|| number == 0){ number = 1;}
    jQuery.post("http://www.gantibaju.com/sessioncart.php",{
      act:"add",
      id:id,
      size:size,
      number:number
    }, function(xml) {      // 
          // numberOfItem = jQuery("numberOfItem",xml).text();
          // jQuery('#topcart-status').html('<span ><%= image_tag "cart_flat.png", :height => "20", :style=>"margin-bottom: -5px;" %></span> ' +numberOfItem+ ' Pesanan :) <span >
          // <%= image_tag "menu_open.gif" %></span>');
          // jQuery('#tambahcartdlg').html('<h3 class="judul">Mau Langsung Checkout Sekarang Aja?</h3><div class="clear" style="height: 15px;"></div><p class="dialog-buttons clearfix"><a href="http://www.gantibaju.com//invoice.php" title="Cekout" class="dash dash1"><span>checkout Sekarang</span></a><a class="dash dash2 fancyclose" onclick="$.fancybox.close();" title="Jangan" href="#divsize"><span>Lanjut Belanja</span></a></p>');
          //     
          console.log("This is awesome");
    });

  }

  function clearCartClick(){
    //if (number == ''|| number == 0){ number = 1;}

    jQuery.post("http://www.gantibaju.com/sessioncart.php",{
      act:"batal"
    },function(xml) {      // 
          // numberOfItem = 0;//jQuery("numberOfItem",xml).text();
          // //jQuery('#topcart-status strong').text(numberOfItem);
          // jQuery('#topcart-status').html('<span ><img height="20" style="margin-bottom: -5px;" src="http://www.gantibaju.com/images/cart_flat.png" /></span> ' +numberOfItem+ ' Pesanan :) <span ><img src="http://www.gantibaju.com/images/menu_open.gif" /></span>');
          // jQuery('#tambahcartdlg').html('<h3 class="judul">Cart Belanja Kosong..</h3><p>Silahkan Pilih dan klik ukuran kaos untuk memasukkan ke Cart! </p><div class="clear" style="height: 15px;"></div><p class="dialog-buttons clearfix"><a class="dash dash2 fancyclose"  onclick="$.fancybox.close();" title="Kembali Belanja" href="#divsize"><span>OK!</span></a></p>');
          // //jQuery('#keranjangku').html();
          // $.fancybox.close();
          // jQuery('#checkout-title').html('');
    console.log("This is awesome");

    });

  }
  function closewarningmessage(){

    jQuery("#warningmsg").html('');
    //return true;
  }

  function breadcrumb(urlbread){
    jQuery("#breadcrumbspan").html(urlbread);
  }


  var baseUrl = "http://www.gantibaju.com/";
  var usingCart = true;
  var targetChange, topPosition;


  function updatePrice(size, shirtid, targetId) {
    targetChange = targetId;
    objAJAX = createXMLHttpRequest();
    objAJAX.onreadystatechange = setPrice;
    objAJAX.open("GET", "http://www.gantibaju.com/shirtdata.php?size="+size+"&shirtid="+shirtid, true);
    objAJAX.send(null);
  }

  function setClickCount(id){
    objAJAX = createXMLHttpRequest();
    objAJAX.onreadystatechange = setPrice;
    objAJAX.open("GET", "http://www.gantibaju.com/banner.php?action=click&id="+id, true);
    objAJAX.send(null);
  }
  function setPrice() {
    if (objAJAX.readyState == 4) {
      if (objAJAX.status == 200) {
        document.getElementById(targetChange).innerHTML =  objAJAX.responseText;
      }
    }
  }

  function showLogin(){
    document.getElementById('objLogin').style.display="block";
    document.getElementById('objForgotPass').style.display="none";
    document.getElementById('action').value="login";
  }
  function showForgetPass(){
    document.getElementById('objLogin').style.display="none";
    document.getElementById('objForgotPass').style.display="block";
    document.getElementById('action').value="forgotpass";
  }
  function loginwithFB(){
    jQuery.post("http://www.gantibaju.com/formlogin.php",{
      FB : 1,
      reflink : 1,
      headreq : 1
    },function(xml) {

      jQuery('#usermenu').html(xml);


    });

  }
  function SetLanguage(lang){
    jQuery.post("http://www.gantibaju.com/chooselanguage.php",{
      lang : lang

    },function(xml) {
      window.location=xml;
      //jQuery('#usermenu').html(xml);


    });

  }


  function resetNotification(){
    jQuery.post("http://www.gantibaju.com/resetnotification.php",{

    },function(xml) {

      jQuery('#countnotif').css('display','none');


    });

  }




	
	
	
});