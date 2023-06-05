// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/product_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var productList = [{
  id: "product1",
  name: "LED전구 디밍 F-LED 3D TREE",
  price: 30000,
  src: "./img/1111.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product2",
  name: "IK 시리즈 SNOWMAN22 SOLID Table Stand",
  price: 230000,
  src: "./img/1112.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product3",
  name: "IK 시리즈 SNOWBALL22 SOLID Table Stand",
  price: 210000,
  src: "./img/1113.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product4",
  name: "IK 시리즈 FONDUE16 Table Stand KYOBO BOOK Edition",
  price: 280000,
  src: "./img/1114.jpg",
  best: true,
  deliver: true,
  new: true
}, {
  id: "product5",
  name: "IK 시리즈 TRIANGLE120 A Pendant",
  price: 390000,
  src: "./img/1115.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product6",
  name: "IK 시리즈 TRIANGLE120 B Pendant",
  price: 390000,
  src: "./img/1116.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product7",
  name: "IK 시리즈 MAGRITTE40 Pendant",
  price: 380000,
  src: "./img/1117.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product8",
  name: "IK 시리즈 MAGRITTE40 Pendant",
  price: 380000,
  src: "./img/1118.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product9",
  name: "클래식전구 ST64 (25w, 40w, E26)",
  price: 6500,
  src: "./img/1119.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product10",
  name: "장식용전구 S45 (10w, E14)",
  price: 1200,
  src: "./img/1120.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product11",
  name: "삼파장전구 EL (11w, E26)",
  price: 2700,
  src: "./img/1121.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product12",
  name: "가드닝전구 LED PG PAR30 (11w, E26, 실내용)",
  price: 20000,
  src: "./img/1122.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product13",
  name: "할로겐전구 G9 (28w, 42w)",
  price: 2000,
  src: "./img/1123.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product14",
  name: "산업용전구 IR125 RED(250w, 하드글래스 열전구)",
  price: 6000,
  src: "./img/1124.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product15",
  name: "LED전구 F-LED TUBE R (3.5w, E26, Dimmable)",
  price: 14000,
  src: "./img/1125.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product16",
  name: "LED 전구 Spherical E14 (5.7w)",
  price: 5000,
  src: "./img/1126.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product17",
  name: "CFL 전구 Twin Tube 2-Pin (18w)",
  price: 7500,
  src: "./img/1127.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product18",
  name: "할로겐 전구 Capsule G4 (20w)",
  price: 3000,
  src: "./img/1128.jpg",
  best: true,
  deliver: false,
  new: false
}, {
  id: "product19",
  name: "LED 전구 Classic A60 E27 (8.5w)",
  price: 9000,
  src: "./img/1129.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product20",
  name: "CFL 전구 Triple Tube 4-Pin (26w)",
  price: 8500,
  src: "./img/1130.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product21",
  name: "LED 전구 Classic B35 E14 (5.7w)",
  price: 7000,
  src: "./img/1131.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product22",
  name: "산업용전구 MR16 GU5.3 (35w)",
  price: 6500,
  src: "./img/1132.jpg",
  best: true,
  deliver: false,
  new: false
}, {
  id: "product23",
  name: "LED 전구 F-LED TUBE R (14w, E26, Dimmable)",
  price: 17000,
  src: "./img/1133.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product24",
  name: "LED 전구 Classic ST64 E27 (7.5w)",
  price: 10000,
  src: "./img/1134.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product25",
  name: "할로겐 전구 Capsule GY6.35 (50w)",
  price: 3500,
  src: "./img/1135.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product26",
  name: "LED 전구 Classic A70 E27 (10w)",
  price: 11000,
  src: "./img/1136.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product27",
  name: "산업용전구 AR111 G53 (50w)",
  price: 7000,
  src: "./img/1137.jpg",
  best: true,
  deliver: false,
  new: false
}, {
  id: "product28",
  name: "CFL 전구 Twin Tube 4-Pin (13w)",
  price: 6500,
  src: "./img/1138.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product29",
  name: "LED 전구 Spherical E27 (6w)",
  price: 6000,
  src: "./img/1139.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product30",
  name: "할로겐 전구 Capsule G9 (40w)",
  price: 3200,
  src: "./img/1140.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product31",
  name: "LED 전구 F-LED TUBE R (18w, E26, Dimmable)",
  price: 18000,
  src: "./img/1141.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product32",
  name: "산업용전구 IR125 RED(400w, 하드글래스 열전구)",
  price: 8000,
  src: "./img/1142.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product33",
  name: "CFL 전구 Triple Tube 2-Pin (20w)",
  price: 7500,
  src: "./img/1143.jpg",
  best: true,
  deliver: false,
  new: false
}, {
  id: "product34",
  name: "LED 전구 Classic B35 E14 (7w)",
  price: 8000,
  src: "./img/1144.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product35",
  name: "할로겐 전구 Capsule GY6.35 (75w)",
  price: 4000,
  src: "./img/1145.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product36",
  name: "LED 전구 Spherical E14 (7w)",
  price: 5500,
  src: "./img/1146.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product37",
  name: "CFL 전구 Twin Tube 2-Pin (23w)",
  price: 8000,
  src: "./img/1147.jpg",
  best: true,
  deliver: false,
  new: false
}, {
  id: "product38",
  name: "할로겐 전구 Capsule G4 (30w)",
  price: 3500,
  src: "./img/1148.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product39",
  name: "LED 전구 Classic A60 E27 (11w)",
  price: 9500,
  src: "./img/1149.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product40",
  name: "CFL 전구 Triple Tube 4-Pin (32w)",
  price: 9000,
  src: "./img/1150.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product41",
  name: "LED 전구 Classic B35 E14 (8.5w)",
  price: 8500,
  src: "./img/1151.jpg",
  best: true,
  deliver: false,
  new: false
}, {
  id: "product42",
  name: "산업용전구 MR16 GU5.3 (50w)",
  price: 7000,
  src: "./img/1152.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product43",
  name: "LED 전구 F-LED TUBE R (21w, E26, Dimmable)",
  price: 20000,
  src: "./img/1153.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product44",
  name: "LED 전구 Classic ST64 E27 (10w)",
  price: 11500,
  src: "./img/1154.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product45",
  name: "할로겐 전구 Capsule GY6.35 (100w)",
  price: 4500,
  src: "./img/1155.jpg",
  best: true,
  deliver: false,
  new: true
}, {
  id: "product46",
  name: "LED 전구 Classic B35 E14 (9.5w)",
  price: 9000,
  src: "./img/1156.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product47",
  name: "산업용전구 MR16 GU10 (75w)",
  price: 8000,
  src: "./img/1157.jpg",
  best: true,
  deliver: false,
  new: false
}, {
  id: "product48",
  name: "LED 전구 F-LED TUBE R (22w, E26, Dimmable)",
  price: 21000,
  src: "./img/1158.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product49",
  name: "LED 전구 Classic ST64 E27 (12w)",
  price: 12000,
  src: "./img/1159.jpg",
  best: true,
  deliver: false,
  new: true
}, {
  id: "product50",
  name: "할로겐 전구 Capsule GY6.35 (125w)",
  price: 5000,
  src: "./img/1160.jpg",
  best: false,
  deliver: true,
  new: false
}, {
  id: "product51",
  name: "LED 전구 Classic A60 E27 (12.5w)",
  price: 10000,
  src: "./img/1161.jpg",
  best: true,
  deliver: true,
  new: true
}, {
  id: "product52",
  name: "CFL 전구 Quad Tube 4-Pin (42w)",
  price: 10000,
  src: "./img/1162.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product53",
  name: "LED 전구 Classic B35 E14 (10.5w)",
  price: 9000,
  src: "./img/1163.jpg",
  best: true,
  deliver: false,
  new: false
}, {
  id: "product54",
  name: "산업용전구 MR16 GU10 (100w)",
  price: 9000,
  src: "./img/1164.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product55",
  name: "LED 전구 F-LED TUBE R (24w, E26, Dimmable)",
  price: 22000,
  src: "./img/1165.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product56",
  name: "LED 전구 Classic ST64 E27 (14w)",
  price: 13000,
  src: "./img/1166.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product57",
  name: "할로겐 전구 Capsule GY6.35 (150w)",
  price: 5500,
  src: "./img/1167.jpg",
  best: true,
  deliver: false,
  new: true
}, {
  id: "product58",
  name: "LED 전구 Classic A60 E27 (13.5w)",
  price: 11000,
  src: "./img/1168.jpg",
  best: false,
  deliver: true,
  new: false
}, {
  id: "product59",
  name: "CFL 전구 Five Tube 4-Pin (52w)",
  price: 11000,
  src: "./img/1169.jpg",
  best: true,
  deliver: false,
  new: true
}, {
  id: "product60",
  name: "LED 전구 Classic B35 E14 (11.5w)",
  price: 10000,
  src: "./img/1170.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product61",
  name: "산업용전구 MR16 GU10 (125w)",
  price: 10000,
  src: "./img/1171.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product62",
  name: "LED 전구 F-LED TUBE R (26w, E26, Dimmable)",
  price: 24000,
  src: "./img/1172.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product63",
  name: "LED 전구 Classic ST64 E27 (16w)",
  price: 15000,
  src: "./img/1173.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product64",
  name: "할로겐 전구 Capsule GY6.35 (175w)",
  price: 6000,
  src: "./img/1174.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product65",
  name: "LED 전구 Classic A60 E27 (15w)",
  price: 12000,
  src: "./img/1175.jpg",
  best: false,
  deliver: true,
  new: true
}, {
  id: "product66",
  name: "CFL 전구 Six Tube 4-Pin (60w)",
  price: 12000,
  src: "./img/1176.jpg",
  best: true,
  deliver: false,
  new: true
}, {
  id: "product67",
  name: "LED 전구 Classic B35 E14 (12.5w)",
  price: 11000,
  src: "./img/1177.jpg",
  best: false,
  deliver: true,
  new: false
}, {
  id: "product68",
  name: "산업용전구 MR16 GU10 (150w)",
  price: 11000,
  src: "./img/1178.jpg",
  best: true,
  deliver: false,
  new: true
}, {
  id: "product69",
  name: "LED 전구 F-LED TUBE R (28w, E26, Dimmable)",
  price: 26000,
  src: "./img/1179.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product70",
  name: "LED 전구 Classic ST64 E27 (18w)",
  price: 17000,
  src: "./img/1180.jpg",
  best: false,
  deliver: false,
  new: true
}, {
  id: "product71",
  name: "할로겐 전구 Capsule GY6.35 (200w)",
  price: 6500,
  src: "./img/1181.jpg",
  best: true,
  deliver: true,
  new: false
}, {
  id: "product72",
  name: "LED 전구 Classic A60 E27 (16.5w)",
  price: 13000,
  src: "./img/1182.jpg",
  best: false,
  deliver: true,
  new: true
}];
var _default = productList;
exports.default = _default;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _product_data = _interopRequireDefault(require("./product_data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var bannerImg = $('.main_visual img');
var bannerImgCount = bannerImg.length;
var bannerImageWidth = 1420;
var slides = document.querySelectorAll(".slide");
var slideContainer = document.querySelector(".new_arrival_contents");
var progressBar = document.querySelector(".progress");
var prevSlideButton = document.querySelector('#prevSlide');
var nextSlideButton = document.querySelector('#nextSlide');
var imageElements = document.querySelectorAll('.slide img');
var bannerAuto;
var bannerCurrentIndex = 0;
var slideIndex = 0;
var startX;
var distance;
var autoSlide;
imageElements.forEach(function (img) {
  img.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });
});
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 80) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });
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
function bannerPlay() {
  clearInterval(bannerAuto); // 추가: 이전 setInterval을 명확하게 제거
  bannerAuto = setInterval(function () {
    updateSlide((bannerCurrentIndex + 1) % bannerImgCount);
  }, 2000);
}
function updateSlide(index) {
  bannerImg.each(function (i) {
    $(this).css('left', (i - index) * bannerImageWidth + 'px');
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
  var progressPercent = slideIndex / slides.length * 100;
  document.querySelector('.progress').style.left = "".concat(progressPercent, "%");
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
  slideContainer.style.transform = "translateX(".concat(-slideIndex * slides[0].clientWidth, "px)");
  updateProgressBar();
}
function showNextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slideContainer.style.transform = "translateX(".concat(-slideIndex * slides[0].clientWidth, "px)");
  updateProgressBar();
}
function startAutoSlide() {
  autoSlide = setInterval(showNextSlide, 2000);
}
function stopAutoSlide() {
  clearInterval(autoSlide);
}
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var recommendListItems = document.querySelectorAll('.recommend_list li');
var recommendProgress = document.querySelector('.recommend_progress');
var recommendMainImages = document.querySelectorAll('.recommend_main img');
var recommendSideImages = document.querySelectorAll('.recommend_side img');
var leftPositions = ['-18px', '108px', '240px', '378px', '512px'];
function updateSideImages(startIndex) {
  recommendSideImages.forEach(function (img, index) {
    var product = _product_data.default[startIndex + index];
    if (product) {
      img.src = product.src;
    }
  });
}
updateSideImages(6);
recommendMainImages.forEach(function (img, index) {
  img.style.display = index === 0 ? 'block' : 'none';
});
recommendListItems.forEach(function (item, index) {
  item.addEventListener('click', function () {
    recommendProgress.style.left = leftPositions[index];
    recommendMainImages.forEach(function (img) {
      return img.style.display = 'none';
    });
    recommendMainImages[index].style.display = 'block';
    var startIndex = index * 6;
    updateSideImages(startIndex);
  });
});
$(".footer_person").click(function () {
  $(".fa-chevron-down").toggle();
  $(".fa-chevron-up").toggle();
  $(".footer_person_info").toggle();
});
$(window).on('load', function () {
  setFlowBanner();
});
function setFlowBanner() {
  var $wrap = $('.rolling');
  var $list = $('.rolling .insta_picture');
  var wrapWidth = $wrap.width();
  var listWidth = $list.width();
  var speed = 92;
  var $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct();
  function flowBannerAct() {
    if (listWidth < wrapWidth) {
      var listCount = Math.ceil(wrapWidth * 2 / listWidth);
      for (var i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.find('.insta_picture').css({
      'animation': "".concat(listWidth / speed, "s linear infinite flowRolling")
    });
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
prevSlideButton.addEventListener("mouseleave", startAutoSlide);
nextSlideButton.addEventListener("mouseleave", startAutoSlide);
startAutoSlide();
updateProgressBar();
},{"./product_data.js":"js/product_data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50590" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map