import $ from 'jquery';

$(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle(); 
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            oppacity: 'toggle',
            height: 'toggle'
        }, 2000); 
    });
});
