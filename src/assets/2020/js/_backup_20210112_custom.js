var lastScroll = 0;
var delta = 5;
var logoAnimationRunning = false;
var navHeight = $('.navbar').outerHeight();
var navPos = -navHeight;
var IECheck = false;
var mobileCheck = false;

function isMobile(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		mobileCheck = true;
	}else  // If another browser, return 0 {}

    return false;
}

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        IECheck = true;
    }
    else  // If another browser, return 0 {}

    return false;
}

function logoAnimation() {
	var alogo = '<img class="alogo" src="images/logo.gif" alt="FinTech Awards 2020">';
	var alogoZh = '<img class="alogo" src="../images/logo.gif" alt="FinTech Awards 2020">';
	var url = location.pathname;
	var logoPath = alogo;
	
	if(url.indexOf('/zh/') > -1) {
    logoPath = alogoZh
  	}
	
	if (logoAnimationRunning == false) {
		setTimeout(function () {
			$('.slogo').fadeTo("fast", 0, function () {
				logoAnimationRunning = true;
				$('.slogo').after(logoPath);
				setTimeout(function () {
					$('.slogo').fadeTo("fast", 1, function () {
						$('.alogo').remove();
						setTimeout(function () {
							logoAnimationRunning = false;
						}, 30000);
					});
				}, 3000);
			});
		}, 1000);
	} else {}
};

function scrolling(){
	var st = $(this).scrollTop();
	if(Math.abs(lastScroll - st) <= delta)return;
		if (st < lastScroll){
        // Scroll Up
		if (lastScroll - st > navHeight){
			$('.navbar').css('top', '0');
		} else {
			if (navPos > 0){
				navPos = 0;
				logoAnimation();
				$('body').addClass('sticky');
			} else {
				$('.navbar').css('top', navPos);
				navPos = navPos + delta;
			}
		}
    } else {
		// Scroll Down
		$('body').removeClass('sticky');
		if (navPos > -navHeight){
			$('.navbar').css('top', navPos);
			navPos = navPos - delta;
		}else{
			$('.navbar').css('top', -navHeight + delta);
		}
		
    }
  
    lastScroll = st;
	    
}

function videoBackgroundajust(){
	if(mobileCheck== false){
			$('.videoBackground').css('transform', 'translate(-50%,' + skyValue + '%)');
		}else{
			$('.videoBackground').css('transform', 'translate(-59%,' + skyValue + '%)');
	}
}

$(window).scroll(function () {
	$('.scroll_icon').css('opacity', 1 - $(window).scrollTop() / 100);
	if ($('.videoBackground').length) {
		var skyValue = -50 - $(window).scrollTop() / -200;
		var scaleValueW = 1 - $(window).scrollTop() / 15000;
		var leadintopValue = 1 - $(window).scrollTop() / 40;
		var leadinBtntopValue = 1 - $(window).scrollTop() / 1;
		var scaleValue = scaleValueW + ',' + scaleValueW;
		videoBackgroundajust();
		$('.leadin .row > div').css('transform', 'translate(0%,' + leadintopValue + '%)');
		$('.leadin .btn').css('transform', 'translate(0%,' + leadinBtntopValue + '%)');
		
	} else {
		/* it doesn't exist */
	};
	
	/* New Scroll */
	if (IECheck == false){
		if(mobileCheck== false){
			scrolling();
		}else{
		}
	}
});

$(window).resize(function () {
	$('.mobilemenuitemContainer').removeClass('Open');
	$('.mobilemenuitemContainer .logo').removeClass('Open');
	$('body').removeClass('lock');
	videoBackgroundajust();
});

$(document).ready(function () {
	isMobile();
	msieversion();
	if (IECheck == false){
        $('.navbar').addClass('sticky');
		if(mobileCheck== false){
			$('.navbar').css('top', -navHeight + 5);
		}else{
			//$('.navbar').css('top', '0');
		}
	}else{};
	
	
	$('a').attr('ontouchstart', 'return true;');

	$('#menuToggle').click(function (e) {
		e.preventDefault();
		logoAnimation();
		logoAnimationRunning = 1
		$('.mobilemenuitemContainer').toggleClass('Open');
		$('.mobilemenuitemContainer .logo').toggleClass('Open');
		$('body').toggleClass('lock');
	});
	
	$('.newsAlert .later').click(function (e) {
		e.preventDefault();
		$('.newsAlert').removeClass('active');
		$('.newsAlert').addClass("minimize");
	});
	
	$('.newsAlert h1').click(function (e) {
		e.preventDefault();
		$('.newsAlert').removeClass('minimize');
		$('.newsAlert').addClass("active")
	});

	$('#expandList > li > ul').hide();
	$('#pageWinners #expandList li h2 a').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().toggleClass('open');
		$(this).parent().siblings('ul').slideToggle();
	});

	//ColorBox Control
	$('#cboxOverlay').append("<button type='button' id='cboxClose'>close</button>");

	if ($("body").is("#pageHighlights")) {
		if ($(window).width() > 1000) {
			$('.colorBox').colorbox({
				fixed: true,
				scalePhotos: true,
				opacity: 1,
				speed: 200,
				maxHeight: '80%',
				closeButton: false
			});

			$('.colorBoxVideo').colorbox({
				iframe: true,
				fixed: true,
				width: 1000,
				height: 563,
				opacity: 1,
				speed: 200,
				closeButton: false,
				href: function () {
					var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
					if (videoId && videoId[1]) {
						return 'https://youtube.com/embed/' + videoId[1] + '?disablekb=1&hl=en&fs=0&rel=0&autoplay=1';
					}
				}
			});

			$('#zh .colorBoxVideo').colorbox({
				iframe: true,
				fixed: true,
				width: 1000,
				height: 563,
				opacity: 1,
				speed: 200,
				closeButton: false,
				href: function () {
					var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
					if (videoId && videoId[1]) {
						return 'https://youtube.com/embed/' + videoId[1] + '?disablekb=1&hl=zh-TW&fs=0&rel=0&autoplay=1';
					}
				}
			});

		} else {
			$(".colorBox").removeClass("colorBox cboxElement").attr("download", "Photo").removeAttr("ontouchstart");;
			
		}
	}

});

$(window).on("load", function () {
	$(".newsAlert").addClass("active").delay(20000);
});
