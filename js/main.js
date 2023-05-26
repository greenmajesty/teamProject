
        
        const bannerImg = $('.main_visual img')
        const bannerImgCount = bannerImg.length;
        const bannerImageWidth = 1420;
        const slides = document.querySelectorAll(".slide");
        const slideContainer = document.querySelector(".new_arrival_contents");
        const progressBar = document.querySelector(".progress");
        const prevSlideButton = document.querySelector('#prevSlide')
        const nextSlideButton = document.querySelector('#nextSlide')
        const imageElements = document.querySelectorAll('.slide img');

        let bannerAuto;
        let bannerCurrentIndex = 0;
        let slideIndex = 0;
        let startX;
        let distance;
        let autoSlide;



        imageElements.forEach((img) => {
            img.addEventListener('dragstart', (e) => {
                e.preventDefault();
            });
        });

        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= 80) {
                    $('.header').addClass('fixed')
                } else {
                    $('.header').removeClass('fixed')
                }
            })
        })

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

        

        function bannerPlay() {
            clearInterval(bannerAuto); // 추가: 이전 setInterval을 명확하게 제거
            bannerAuto = setInterval(function () {
                updateSlide((bannerCurrentIndex + 1) % bannerImgCount);
            }, 2000);
        }

        function updateSlide(index) {
            bannerImg.each(function (i) {
                $(this).css('left', ((i - index) * bannerImageWidth) + 'px');
            });
            $(".dot").removeClass("active");
            $("#dot" + index).addClass("active");
            bannerCurrentIndex = index;
        }

        $('#mainPrevButton').click(function () {
            clearInterval(bannerAuto);
            updateSlide((bannerCurrentIndex - 1 + bannerImgCount) % bannerImgCount);
            bannerPlay();
        });

        $('#mainNextButton').click(function () {
            clearInterval(bannerAuto);
            updateSlide((bannerCurrentIndex + 1) % bannerImgCount);
            bannerPlay();
        });

        $('.main_visual').hover(function () {
            clearInterval(bannerAuto);
        }, function () {
            bannerPlay();
        });
        $(".dot").each(function (index) {
            $(this).click(function () {
                clearInterval(bannerAuto);
                updateSlide(index);
                bannerPlay();
            });
        });

        bannerPlay();

        function updateProgressBar() {
            const progressPercent = (slideIndex / (slides.length)) * 100;
            document.querySelector('.progress').style.left = `${progressPercent}%`;
        }

        function handleDragStart(e) {
            startX = e.clientX;
        }

        function handleDragEnd(e) {
            distance = startX - e.clientX;
            if (distance > 0) {
                showNextSlide();
            } else if (distance < 0) {
                showPrevSlide();
            }
        }

        function showPrevSlide() {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
            slideContainer.style.transform = `translateX(${-slideIndex * slides[0].clientWidth}px)`;
            updateProgressBar();
        }

        function showNextSlide() {
            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            slideContainer.style.transform = `translateX(${-slideIndex * slides[0].clientWidth}px)`;
            updateProgressBar();
        }

        function startAutoSlide() {
            autoSlide = setInterval(showNextSlide, 2000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlide);
        }


        $(".footer_person").click(function () {
            $(".fa-chevron-down").toggle();
            $(".fa-chevron-up").toggle();
            $(".footer_person_info").toggle();
        });


        $(window).on('load', function () {
            setFlowBanner();  
        })
        
        function setFlowBanner(){
            const $wrap = $('.rolling');
            const $list = $('.rolling .insta_picture');
            let wrapWidth = $wrap.width();
            let listWidth = $list.width();
            const speed = 92; //1초에 몇픽셀 이동하는지 설정
        
            //리스트 복제
            let $clone = $list.clone();
            $wrap.append($clone);
            flowBannerAct()
        
            //배너 실행 함수
            function flowBannerAct() {
                //무한 반복을 위해 리스트를 복제 후 배너에 추가
                if (listWidth < wrapWidth) {
                    const listCount = Math.ceil(wrapWidth * 2 / listWidth);
                    for (let i = 2; i < listCount; i++) {
                        $clone = $clone.clone();
                        $wrap.append($clone);
                    }
                }
                $wrap.find('.insta_picture').css({ 'animation': `${listWidth / speed}s linear infinite flowRolling` }); 
            } 
        }



        slideContainer.addEventListener("mousedown", handleDragStart);
        slideContainer.addEventListener("mouseup", handleDragEnd);
        slideContainer.addEventListener("mouseenter", stopAutoSlide);
        slideContainer.addEventListener("mouseleave", startAutoSlide);
        document.getElementById("prevSlide").addEventListener("click", showPrevSlide);
        document.getElementById("nextSlide").addEventListener("click", showNextSlide);
        prevSlideButton.addEventListener("mouseenter", stopAutoSlide);
        nextSlideButton.addEventListener("mouseenter", stopAutoSlide);
        prevSlideButton.addEventListener("mouseleave",
            startAutoSlide);
        nextSlideButton.addEventListener("mouseleave",
            startAutoSlide);
        startAutoSlide();
        updateProgressBar();