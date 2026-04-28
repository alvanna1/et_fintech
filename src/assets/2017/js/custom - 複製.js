$(document).ready(function () {
    if ($('#videoBGStill').length) {
        var desktopVideo = ' <video style="display:none;" id="videoBG" class="videoBackground" playsinline autoplay muted loop><source src="http://webhost.etnet.com.hk/ads/ETNet/201712/header_bg.mp4" type="video/mp4"></video>';
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

});

$(window).scroll(function () {

    $('.scroll_icon').css('opacity', 1 - $(window).scrollTop() / 100);

    if ($('.videoBackground').length) {
        var widnowValue = -50 - $(window).scrollTop() / 100;
        var scaleValueW = 1 - $(window).scrollTop() / 15000;
        var leadintopValue = 1 - $(window).scrollTop() / 5;
        var leadinBtntopValue = 1 - $(window).scrollTop() / 2;
        var scaleValue = scaleValueW + ',' + scaleValueW;
        $('.videoBackground').css('transform', 'translate(-50%,' + widnowValue + '%)' + 'scale(' + scaleValue + ')');
        $('.leadin h1').css('transform', 'translate(0%,' + leadintopValue + '%)');
        $('.leadin .btn').css('transform', 'translate(0%,' + leadinBtntopValue + '%)');
    } else {
        /* it doesn't exist */
    }

    /*if ($(window).scrollTop() > 101) {
        $('.navbar').addClass('fixedTop');
    } else {
        $('.navbar').removeClass('fixedTop');
    }*/
});

$(window).on('mousewheel DOMMouseScroll', function (e) {
    var dir,
        amt = 300;

    e.preventDefault();
    if (e.type === 'mousewheel') {
        dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
    } else {
        dir = e.originalEvent.detail < 0 ? '-=' : '+=';
    }

    $('html, body').stop().animate({
        scrollTop: dir + amt
    }, 100, 'easeOutSine');
})

$(window).resize(function () {
    $(".menuitemMobile").fadeOut();
});

$(document).ready(function () {
    $('a').attr('ontouchstart', 'return true;');

    $('#menuToggle').click(function () {
        /*e.preventDefault();*/
        $('.menuitemMobile').fadeToggle();
        $('.navbar').toggleClass('menuOpen');
        $('body').toggleClass('lock');
    });

    $('#expandList > li > ul').hide();
    $('#expandList li h2 a').click(function (e) {
        e.preventDefault();
        $(this).parent().parent().toggleClass('open');
        $(this).parent().siblings('ul').slideToggle();
    });
    
    //ColorBox Control
    $('#cboxOverlay').append( "<button type='button' id='cboxClose'>close</button>" );
    
    if ($(window).width() > 1000) {
    $('.colorBox').colorbox({
    fixed: true,
    scalePhotos: true,
    opacity: 0.95,
    speed: 200,
    maxHeight: '80%',
    closeButton: false
    });
        
    $('.colorBoxVideo').colorbox({
    iframe: true,
    fixed: true,
    width: 1000, 
    height: 563,
    opacity: 0.95,
    speed: 200,
    closeButton: false,
    href:function(){
    var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
    if (videoId && videoId[1]) {
        return 'http://youtube.com/embed/'+videoId[1]+'?disablekb=1&hl=en&fs=0&rel=0&autoplay=1';
    }
    }
    });
    
    $('#zh .colorBoxVideo').colorbox({
    iframe: true,
    fixed: true,
    width: 1000, 
    height: 563,
    opacity: 0.95,
    speed: 200,
    closeButton: false,
    href:function(){
    var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
    if (videoId && videoId[1]) {
        return 'http://youtube.com/embed/'+videoId[1]+'?disablekb=1&hl=zh&fs=0&rel=0&autoplay=1';
    }
    }
    });
        
    }else{
    $('.colorBox').remove();
    }
    
});
