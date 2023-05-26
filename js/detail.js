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
});