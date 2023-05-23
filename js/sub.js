import productList from './product_data.js';

$(document).ready(function () {
    var imgItems = document.querySelectorAll('.category_img li');
    var textItems = document.querySelectorAll('.category_text li');
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 80) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    imgItems.forEach(function (item, index) {
        item.addEventListener('mouseover', function () {
            textItems[index].classList.add('hovered');
            imgItems[index].classList.add('hovered');
        });
        item.addEventListener('mouseout', function () {
            textItems[index].classList.remove('hovered');
            imgItems[index].classList.remove('hovered');
        });
    });

    textItems.forEach(function (item, index) {
        item.addEventListener('mouseover', function () {
            imgItems[index].classList.add('hovered');
            textItems[index].classList.add('hovered');
        });
        item.addEventListener('mouseout', function () {
            imgItems[index].classList.remove('hovered');
            textItems[index].classList.remove('hovered');
        });
    });

    $(".footer_person").click(function () {
        $(".fa-chevron-down").toggle();
        $(".fa-chevron-up").toggle();
        $(".footer_person_info").toggle();
    });

    function createMainBoxes(productData) {
        const $mainContainer = $(".main_container");
    
        for (let i = 0; i < 12 && i < productData.length; i++) {
            const product = productData[i];
    
            let $mainBox = $('<div class="main_box"></div>');
    
            if(product.best){
                $mainBox.append('<div class="best">BEST</div>');
            }
            if(product.deliver){
                $mainBox.append('<div class="deliver">당일배송</div>');
            }
    
            $mainBox.append(`<img src="${product.src}" alt="">`);
            $mainBox.append('<div class="textbox"></div>');
    
            $mainContainer.append($mainBox);
        }
    }
    
    createMainBoxes(productList);
});