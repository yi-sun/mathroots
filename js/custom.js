$(document).on('scroll', function (e) {
    $('.navbar').css('background-color', 'rgba(0, 0, 0, ' + $(document).scrollTop() / 100 + ')');
});


$('body').scrollspy({
    target: '.bs-docs-sidebar'
})

$('#sidebar').affix({
    offset: {     
      top: $('#sidebar').offset().top
    }
});
