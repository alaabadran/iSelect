/*global define */
define(['jquery'], function ($) {
    'use strict';
    $('.selectable').on('click', function (e){
        e.preventDefault();
        console.log('El clicked');
        var $el = $(this);
        if($el.hasClass('iselect')){
            $el.removeClass('iselect');
            $el.find('input').attr('checked', false);
        } else {
            $el.addClass('iselect');
            $el.find('input').attr('checked', true);
        }
    });
});