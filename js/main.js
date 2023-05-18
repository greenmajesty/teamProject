$(function () {

            function newAleft() {
                $('.new_arrival .new_arrival_contents').animate({
                    left: 1180 * -1
                }, 500, function () {
                    $(this).children('li:first').insertAfter($(this).children('li:last'));
                    $(this).css('left', 0);
                    state = false
                });
            }

            function newAright() {
                $('new_arriaval .new_arrival_contents li:last').insertBefore($('new_arriaval .new_arrival_contents li:first'));
                $('new_arriaval .new_arrival_contents').css('left', 1180 * -1);
                $('new_arriaval .new_arrival_contents').animate({
                    left: 0
                }, 500, function () {
                    state = false;
                })
            }
        })