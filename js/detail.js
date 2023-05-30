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
            $('.left_contents > div:eq(4)').css('display', 'block');
        } else if (index == 3) {
            $('.left_contents > div:eq(5)').css('display', 'block');
        }

    });

    $('.main_img').append(`<img src="${productList[0].src}" />`);

   let contentHeight = $('.left_contents_detail').height(); 

    $('#readMore').click(function() {
        if ($('.left_contents_detail').height() == contentHeight) { 
            $('.left_contents_detail').css('height', 'auto'); 
            $(this).text('접기'); 
        } else { 
            $('.left_contents_detail').css('height', 1000 + 'px'); 
            $(this).text('상품설명 더보기'); 
        }
    });
    $('.open1').slideUp(0);
    $('.open2').slideUp(0);
    $('.open3').slideUp(0);
    let guideStatus1 = false;
    let guideStatus2 = false;
    let guideStatus3 = false;

    $('.detail_guide').click(function(){
        if(guideStatus1){
            $('.open1').slideUp(200, function() {
                $('.detail_guide2').css('border-top', 'none');
            });
            guideStatus1 = false;
        } else {
            $('.open1').slideDown(200, function() {
                $('.detail_guide2').css('border-top', '1px solid #707070');
            });
            guideStatus1 = true;
        }
    });
    $('.detail_guide2').click(function(){
        if(guideStatus2){
            $('.open2').slideUp(200, function() {
                $('.detail_guide3').css('border-top', 'none');
            });
            guideStatus2 = false;
        } else {
            $('.open2').slideDown(200, function() {
                $('.detail_guide3').css('border-top', '1px solid #707070');
            });
            guideStatus2 = true;
        }
    });
    $('.detail_guide3').click(function(){
        if(guideStatus3){
            $('.open3').slideUp(200, function() {
            });
            guideStatus3 = false;
        } else {
            $('.open3').slideDown(200, function() {
                $('.open3').css('border-bottom', '1px solid #707070');
            });
            guideStatus3 = true;
        }
    });

    $('.left_menu div').first().click();
});

