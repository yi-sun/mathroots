$(document).on('scroll', function (e) {
    $('.navbar').css('background-color', 'rgba(0, 0, 0, ' + $(document).scrollTop() / 100 + ')');
});
