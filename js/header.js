$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 900) {
        $('#header').fadeIn();
    } else {
        $('#header').fadeOut();
    }
});