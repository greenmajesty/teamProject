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
    $('.left_menu div').click(function () {
        $('.left_menu div').removeClass('focus');
        $(this).addClass('focus');


        const index = $('.left_menu div').index(this);


        $('.left_contents > div').css('display', 'none');


        if (index == 0) {
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

    let contentHeight1 = $('.left_contents_detail').height();
    let contentHeight2 = $('.left_contents_review').height();

    $('#readMore').click(function () {
        if ($('.left_contents_detail').height() == contentHeight1) {
            $('.left_contents_detail').css('height', 'auto');
            $(this).text('접기');
        } else {
            $('.left_contents_detail').css('height', 1000 + 'px');
            $(this).text('상품설명 더보기');
        }
    });
    $('#reviewMore').click(function () {
        if ($('.left_contents_review').height() == contentHeight2) {
            $('.left_contents_review').css('height', 'auto');
            $(this).text('접기');
        } else {
            $('.left_contents_review').css('height', 1000 + 'px');
            $(this).text('리뷰 더보기');
        }
    });

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    
// 아이디 가리기 기능을 함수로 분리
function maskId(idDiv) {
  let idText = idDiv.textContent.trim();
  let maskedText = idText.slice(0, 3) + '*'.repeat(idText.length - 3);
  idDiv.textContent = maskedText;
}

// 기존 아이디 가리기 코드 실행
let idDivs = document.querySelectorAll('.id');
idDivs.forEach(maskId);

document.getElementById('submit-review').addEventListener('click', function() {
    const stars = document.getElementById('stars').value;
    const id = document.getElementById('id').value;
    const option = document.getElementById('option').value;
    const review = document.getElementById('review').value;

    if (!id.trim() || !review.trim()) {
        alert("ID와 리뷰를 모두 입력해주세요.");
        return;
    }

    const date = new Date().toLocaleDateString(); // 현재 날짜

    const newReview = document.createElement('div');
    newReview.className = 'review_main';
    newReview.innerHTML = `
        <div class="star">${'★'.repeat(stars)}</div>
        <div class="id">${id}</div>
        <div class="date">${date}</div>
        <div class="option">옵션 : ${option}</div>
        </br>
        <div class="main_review">${review}</div>
    `;

    const idDiv = newReview.querySelector('.id');
    maskId(idDiv);  // 새 리뷰에 아이디 가리기 기능 적용

    document.querySelector('.left_contents_review .review_main_container').prepend(newReview); // 리뷰를 가장 처음에 추가
});

    document.querySelector('.review_write').addEventListener('click', function() {
        const form = document.getElementById('review-form');
        if (form.style.display === 'none') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });

//별 나타내기
let starDivs = document.querySelectorAll('.star');
starDivs.forEach(starDiv => {
  let numberOfStars = parseInt(starDiv.textContent, 10);
  let stars = '★'.repeat(numberOfStars);
  starDiv.textContent = stars;
});




    const counterElement = document.getElementById("counter");
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const sumElement = document.querySelector('.sum');
    const priceElement = document.querySelector('.detail_additional_price');
    const price = Number(priceElement.innerText.replace(/[^0-9]/g, ''));

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    minusButton.addEventListener("click", function () {
        let count = parseInt(counterElement.innerText);
        if (count > 1) {
            counterElement.innerText = count - 1;
        }
        checkButtonStatus();
        updateSum();
    });

    plusButton.addEventListener("click", function () {
        let count = parseInt(counterElement.innerText);
        counterElement.innerText = count + 1;
        checkButtonStatus();
        updateSum();
    });

    function updateSum() {
        let count = parseInt(counterElement.innerText);
        sumElement.innerText = numberWithCommas(count * price) + "원";
    }

    function checkButtonStatus() {
        let count = parseInt(counterElement.innerText);
        minusButton.disabled = count <= 1;
    }

    checkButtonStatus();
    updateSum();

    $('.open1').slideUp(0);
    $('.open2').slideUp(0);
    $('.open3').slideUp(0);
    let guideStatus1 = false;
    let guideStatus2 = false;
    let guideStatus3 = false;

    $('.detail_guide').click(function () {
        if (guideStatus1) {
            $('.open1').slideUp(200, function () {
                $('.detail_guide2').css('border-top', 'none');
            });
            guideStatus1 = false;
        } else {
            $('.open1').slideDown(200, function () {
                $('.detail_guide2').css('border-top', '1px solid #707070');
            });
            guideStatus1 = true;
        }
    });
    $('.detail_guide2').click(function () {
        if (guideStatus2) {
            $('.open2').slideUp(200, function () {
                $('.detail_guide3').css('border-top', 'none');
            });
            guideStatus2 = false;
        } else {
            $('.open2').slideDown(200, function () {
                $('.detail_guide3').css('border-top', '1px solid #707070');
            });
            guideStatus2 = true;
        }
    });
    $('.detail_guide3').click(function () {
        if (guideStatus3) {
            $('.open3').slideUp(200, function () {});
            guideStatus3 = false;
        } else {
            $('.open3').slideDown(200, function () {
                $('.open3').css('border-bottom', '1px solid #707070');
            });
            guideStatus3 = true;
        }
    });

    $('.left_menu div').first().click();
});