var lastScroll = 0;
var logoAnimationRunning = 0;

function logoAnimation() {
	var alogo = '<img class="alogo" src="images/logo.gif" alt="FinTech Awards 2019">';
	var alogoZh = '<img class="alogo" src="../images/logo.gif" alt="FinTech Awards 2019">';
	var url = location.pathname;
	var logoPath = alogo;
	
	if(url.indexOf('/zh/') > -1) {
    logoPath = alogoZh
  	}
	
	if (logoAnimationRunning == 0) {
		setTimeout(function () {
			$('.slogo').fadeTo("fast", 0, function () {
				$('.slogo').after(logoPath);
				setTimeout(function () {
					$('.slogo').fadeTo("fast", 1, function () {
						$('.alogo').remove();
						setTimeout(function () {
							logoAnimationRunning = 0
						}, 30000);
					});
				}, 4500);
			});
		}, 1000);
	} else {}
};


$(window).scroll(function () {

	$('.scroll_icon').css('opacity', 1 - $(window).scrollTop() / 100);

	if ($('.videoBackground').length) {
		var skyValue = -50 - $(window).scrollTop() / -200;
		var bakground_buildingValue = -50 - $(window).scrollTop() / -60;
		var buildingValue = -50 - $(window).scrollTop() / -150;
		var harbourValue = -50 - $(window).scrollTop() / -80;
		var trafficBackValue = -50 - $(window).scrollTop() / -100;
		var trafficFrontValue = -50 - $(window).scrollTop() / -80;
		var waterValue = -50 - $(window).scrollTop() / -50;
		var scaleValueW = 1 - $(window).scrollTop() / 15000;
		var leadintopValue = 1 - $(window).scrollTop() / 40;
		var leadinBtntopValue = 1 - $(window).scrollTop() / 2;
		var scaleValue = scaleValueW + ',' + scaleValueW;
		$('.videoBackground.sky').css('transform', 'translate(-50%,' + skyValue + '%)');
		$('.videoBackground.bakground_building').css('transform', 'translate(-50%,' + bakground_buildingValue + '%)');
		$('.videoBackground.building').css('transform', 'translate(-50%,' + buildingValue + '%)');
		$('.videoBackground.traffic_back').css('transform', 'translate(-50%,' + trafficBackValue + '%)');
		$('.videoBackground.traffic_front').css('transform', 'translate(-50%,' + trafficFrontValue + '%)');
		$('.videoBackground.harbour').css('transform', 'translate(-50%,' + harbourValue + '%)');
		$('.videoBackground.water').css('transform', 'translate(-50%,' + waterValue + '%)');
		$('.leadin .row > div').css('transform', 'translate(0%,' + leadintopValue + '%)');
		$('.leadin .btn').css('transform', 'translate(0%,' + leadinBtntopValue + '%)');
	} else {
		/* it doesn't exist */
	};

	if ($('.navbar').hasClass('menuOpen')) {} else {
		var st = $(this).scrollTop();
		if (Math.abs(lastScroll - st) <= 5)
			return;

		if (st < lastScroll) {
			logoAnimation();
			logoAnimationRunning = 1
			$('body').removeClass('stickyLeave');
			$('body').addClass('sticky');
		} else {
			$('body').addClass('stickyLeave');
			$('body').removeClass('sticky');
		}
		lastScroll = st;

		if (st < 50) {
			logoAnimation();
			logoAnimationRunning = 1
			$('body').removeClass('sticky');
			$('body').removeClass('stickyLeave');
		}
	}
});

$(window).resize(function () {
	$('.navbar').removeClass('menuOpen');
	$('body').removeClass('lock');
});

$(document).ready(function () {
	$('a').attr('ontouchstart', 'return true;');

	$('#menuToggle').click(function (e) {
		e.preventDefault();
		logoAnimation();
		logoAnimationRunning = 1
		$('.navbar').toggleClass('menuOpen');
		$('body').toggleClass('lock');
		navigator.vibrate(100);
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
	//$(".newsAlert").addClass("minimize").delay(20000);
});
