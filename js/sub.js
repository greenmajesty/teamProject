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

    let currentPage = 1;
    const itemsPerPage = 12;  // 한 페이지에 표시할 항목의 수
    
    function createMainBoxes(productData, page) {
        const $mainContainer = $(".main_container");
        $mainContainer.empty();  // 현재 페이지의 내용을 지웁니다.
    
        const start = (page - 1) * itemsPerPage;  // 시작 인덱스
        const end = start + itemsPerPage;  // 끝 인덱스
    
        // 시작과 끝 인덱스 사이의 데이터만 가져옵니다.
        const pageItems = productData.slice(start, end);
        
        for (let i = 0; i < pageItems.length; i++) {
            const product = pageItems[i];
            let $mainBox = $(`<a href="detail.html?id=${product.id}" class="main_box"></a>`);
    
            if(product.best){
                $mainBox.append('<div class="best">BEST</div>');
            }
            if(product.deliver){
                $mainBox.append('<div class="deliver">당일배송</div>');
            }
    
            $mainBox.append(`<img src="${product.src}" alt="">`);
            
            let $textBox = $('<div class="textbox"></div>');
            $textBox.append(`<div class="product_name">${product.name}</div>`);
            $textBox.append(`<div class="product_price">${product.price}원</div>`);
            
            $mainBox.append($textBox);
    
            $mainContainer.append($mainBox);
        }
    }
    

// 가장 첫 페이지와 마지막 페이지 번호를 변수에 할당합니다.
const firstPage = 1;
const lastPage = Math.ceil(productList.length / itemsPerPage);

// 페이지 버튼 클릭 이벤트
$(".pagenation > div").click(function() {
    const $this = $(this);
    const buttonText = $this.text();

    $(".pagenation > div").removeClass('now_page');

    switch (buttonText) {
        case "<<":
            currentPage = firstPage;
            break;
        case "<":
            if (currentPage > firstPage) { // 현재 페이지가 첫 페이지보다 크면
                currentPage--;
            }
            break;
        case ">":
            if (currentPage < lastPage) { // 현재 페이지가 마지막 페이지보다 작으면
                currentPage++;
            }
            break;
        case ">>":
            currentPage = lastPage;
            break;
        default:
            const pageNo = parseInt(buttonText, 10);
            if (!isNaN(pageNo)) {
                currentPage = pageNo;
            }
    }
    $(".pagenation > div").eq(currentPage + 1).addClass('now_page');
    createMainBoxes(productList, currentPage);
});
    
    createMainBoxes(productList, currentPage);
});