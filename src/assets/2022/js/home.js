$(document).on('click', '.modal-close, .closeBtn', function() {
    $("body").removeClass("overflowHidden");
    $("#lightbox, .closeBtn").addClass("hidden");
	$(".newsAlert").removeClass("minimize");
	$(".newsAlert").addClass("active");
	$(".newsAlert").addClass("bounceAniamtion");
})