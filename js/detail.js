import productList from './product_data.js';

$(document).ready(function () {

    $(".lnb > div:first-child").mouseenter(function () {
        $(".lnb .shop_menu ul").css('height', '1000px');
        $(".lnb .our_story_menu ul").css('height', '0');
    });
    $(".lnb .shop_menu").mouseleave(function () {
        $(".lnb .shop_menu ul").css('height', '0px');
    });
    $(".lnb > div:nth-child(2)").mouseenter(function () {
        $(".lnb .our_story_menu ul").css('height', '80px');
        $(".lnb .shop_menu ul").css('height', '0px');
    });
    $(".lnb .our_story_menu").mouseleave(function () {
        $(".lnb .our_story_menu ul").css('height', '0');
    });
    $('.left_menu div').click(function() {
        $('.left_menu div').removeClass('focus');
        $(this).addClass('focus');


        const index = $('.left_menu div').index(this);


        $('.left_contents > div').css('display', 'none');


        if(index == 0) {
            $('.left_contents > div:eq(0)').css('display', 'block');
            $('.left_contents > div:eq(1)').css('display', 'block');
        } else if (index == 1) {
            $('.left_contents > div:eq(2)').css('display', 'block');
        } else if (index == 2) {
            $('.left_contents > div:eq(3)').css('display', 'block');
        } else if (index == 3) {
            $('.left_contents > div:eq(4)').css('display', 'block');
        }

    });

    $('.main_img').append(`<img src="${productList[0].src}" />`);
    var contentHeight = $('.left_contents_detail').height(); 

    $('#readMore').click(function() {
        if ($('.left_contents_detail').height() == contentHeight) { 
            $('.left_contents_detail').css('height', 'auto'); 
            $(this).text('접기'); 
        } else { 
            $('.left_contents_detail').css('height', contentHeight + 'px'); 
            $(this).text('상품설명 더보기'); 
        }
    });
    $('.left_menu div').first().click();
});

