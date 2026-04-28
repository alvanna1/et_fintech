var lastScroll = 0;
var logoAnimationRunning = 0;

function logoAnimation() {
	var alogo = '<img class="alogo" src="images/logo.gif" alt="FinTech Awards 2018">';
	if (logoAnimationRunning == 0) {
		setTimeout(function () {
			$('.slogo').fadeTo("fast", 0, function () {
				$('.slogo').after(alogo);
				setTimeout(function () {
					$('.slogo').fadeTo("fast", 1, function () {
						$('.alogo').remove();
						setTimeout(function () {
							logoAnimationRunning = 0
						}, 30000);
					});
				}, 6000);
			});
		}, 1000);
	} else {}
};

function asideHeadingStickyLeave() {
	if ($(window).width() > 990) {
		$('aside.innerPage').css({
			"transform": "translate(0px,-85px)"
		});
	} else {}
};

function asideHeadingSticky() {
	if ($(window).width() > 990) {
		$('aside.innerPage').css({
			"transform": "translate(0px,0px)"
		});
	} else {}
};


$(window).scroll(function () {

	$('.scroll_icon').css('opacity', 1 - $(window).scrollTop() / 100);

	if ($('.videoBackground').length) {
		var widnowValue = -50 - $(window).scrollTop() / 100;
		var scaleValueW = 1 - $(window).scrollTop() / 15000;
		var leadintopValue = -1 - $(window).scrollTop() / 2;
		var leadinBtntopValue = 1 - $(window).scrollTop() / 2;
		var scaleValue = scaleValueW + ',' + scaleValueW;
		$('.videoBackground').css('transform', 'translate(-50%,' + widnowValue + '%)');
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
			asideHeadingSticky();
		} else {
			$('body').addClass('stickyLeave');
			$('body').removeClass('sticky');
			asideHeadingStickyLeave();
		}
		lastScroll = st;

		if (st < 50) {
			logoAnimation();
			logoAnimationRunning = 1
			$('body').removeClass('sticky');
			$('body').removeClass('stickyLeave');
			asideHeadingSticky();
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

	$('#expandList > li > ul').hide();
	$('#pageWinners #expandList li h2 a').click(function (e) {
		e.preventDefault();
		$('#pageWinners #expandList > li').removeClass('open');
		$('#pageWinners #expandList > li > ul').slideUp();
		$(this).parent().parent().toggleClass('open');
		$(this).parent().siblings('ul').slideToggle();
	});

	if ($('#videoBGStill').length) {
		var desktopVideo = ' <video style="display:none;" id="videoBG" class="videoBackground" playsinline autoplay muted loop><source src="http://webhost.etnet.com.hk/videos/projects/20190311_fintech_awards/header_bg.mp4?v201801111003" type="video/mp4"></video>';
		var loadingBar = ' <div id="loadingBar" class="loadingBar"></div>';
		var time = 1;

		$("#videoBGStill").after(desktopVideo);

		$("body").after(loadingBar);
		var vid = document.getElementById("videoBG");
		var interval = setInterval(function () {
			if (time <= 10) {
				if (vid.readyState >= 4) {
					$("#videoBG").fadeIn();
					$('#videoBG').get(0).play();
					$("#loadingBar").fadeOut();
					$("#loadingBar").remove();
					clearInterval(interval);
					stop();
				}
				time++;
			} else {
				clearInterval(interval);
				$("#videoBG").remove();
				$("#loadingBar").fadeOut();
				$("#loadingBar").remove();
			}
		}, 2000);
	} else {
		/* it doesn't exist */
	}

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

});
