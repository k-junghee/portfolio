$(function(){
	//main_visual
	// $('.main_visual').css('height',$(window).height());
	

    //menu_scroll
    $('.work').on('click', function(){
    	 var offset = $(".news_wrap").offset();
        $('html, body').animate({scrollTop : offset.top}, 800);
         
    });
	//scroll top
	$( window ).scroll( function() {
		if ( $( this ).scrollTop() > 200 ) {
			$( '.top_move' ).fadeIn();
		} else {
			$( '.top_move' ).fadeOut();
		}
	} );
	$( '.top_move' ).click( function() {
		$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
		return false;
	} );

    // function fnMove(seq){
    //     var offset = $(".news_wrap" + seq).offset();
    //     $('html, body').animate({scrollTop : offset.top}, 400);
    // }


	/*news tab
	$(".list_wrap").hide();
	$(".list_wrap").first().show();
	$('.news_category ul li a').on('click',function(event){
		$('.news_category ul li a').removeClass('on');
		$(this).addClass('on');
		$('.list_wrap').hide();
		var onTab = $(this).parent().index() + 1;
		$('.list_wrap0'+onTab).show();
	});*/

	/*news 준비중입니다
	$(".list_img_on").hide();
	$(document).on("click",".show_list li a", function(){
		var thisOn = $(this).hasClass('on');
		$(".show_list li a").removeClass('on');
		$(".list_img_on").hide();
		if(thisOn){
			$(this).removeClass('on');
			$(".list_img_on").hide();
		}else{
			$(this).addClass('on');
			$(this).children($(".list_img_on")).show();
		}
	});*/


	//news메뉴 morebtn
	$(".hide_list").hide();
	$(document).on("click",".more01 a",function(){
		$(".hide_list01").fadeIn();
		$(".more01").hide();
    });
	
	//news detail _ list btn
	$(window).scroll(function(){
	  var targetPercentage = 25;
	  var targetID = ".list_btn";
	  //Window Math
	  var scrollTo = $(window).scrollTop(),
		  docHeight = $(document).height(),
		  windowHeight = $(window).height();
		  scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
	  //네비바 보이기
	  if(scrollPercent > targetPercentage) {
		$(targetID).css({ position:'fixed', top:"20px"});
	  } else {
		$(targetID).css({ position:'absolute',top:"334px" });
	  }
	}).trigger('scroll');

	//contact_프로젝트정보 _ checkBox
	$(document).on("click",".check_list>li>a",function(){
		var thisOn = $(this).hasClass('on');
		$(this).addClass('on');
		if(thisOn){
			$(this).removeClass('on');
		}
	});

	
	/*work _ 이미지 띄우기
	$(".wi01").hide();
	$(".wi02").hide();
	$(".wi03").hide();
	$(window).load(function() {// 로딩되기 시작할때
		$(".wi01").fadeIn();
		$(".wi02").fadeIn(2000);
		$(".wi03").fadeIn(3000);
		//work _ 마우스오버
		$(".works_on").hide();
		$(function(){
		  $('.works_con li a').mouseenter(function(){
			$(this).children(".works_on").show();
		  });
		  $('.works_con li a').mouseleave(function(){
			$(".works_on").hide();
		  });
		});
});*/

//about 스크롤
	$(window).scroll(function(){
	  var sec = $("body").attr("class");
	  console.log(sec);
	 /* var scrollTo = $(window).scrollTop(),
		  con01 = $("#sec1").offset().top();
		console.log(con01);
	  if(scrollTo = con01) {
		  alert();
	  } else {
	  }*/
	});
	
	$(".section_con01 .p01").hide();
	$(document).ready(function(){
		$(".section_con01 .p01").fadeIn();
	});

//popup
$('.cm_pop').hide();
$('.contactme').on('click', function(){
	$('.cm_pop').fadeIn();
});
$('.close_btn').on('click', function(){
	$('.cm_pop').fadeOut();
});

//25 sub page
var winHeight = $(window).innerHeight();	
$('.sub_wrap .con_bg').css("height", winHeight);
$('.sub_wrap .sub_cont').css("top", winHeight);

let lastScroll = 0;
$(window).scroll(function(){
	let scrollTop = $(this).scrollTop();
	if(scrollTop > lastScroll) {
		// down
		$('.sub_wrap .con_bg').css({"opacity": "0.3",  "transition-duration": "2s"});
	} else {
		// up
		$('.sub_wrap .con_bg').css({"opacity": "1",  "transition-duration": "2s"});
	}
	lastScroll = scrollTop;
});




});


