$(function() {
    $('nav a').click(function() {
        $('a.active').removeClass('active');
        $(this).addClass('active');
        return false;
    });
});
