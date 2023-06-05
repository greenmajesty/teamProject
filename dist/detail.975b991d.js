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
},{}],"js/qa.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var qaList = [{
  id: "ngelism",
  title: "딥그린에 화이트 조명부분으로도 가능할까요?",
  date: 20230309,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: false
}, {
  id: "2045hytun",
  title: "조명상부는 재질이 유리인가요? 플라스틱인가요?",
  date: 20230307,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: false
}, {
  id: "chanchan",
  title: "배달은 언제쯤 가능한가요?",
  date: 20230307,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: false
}, {
  id: "flowerBloom",
  title: "상품의 품질 보증 기간은 어떻게 되나요?",
  date: 20230301,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: false
}, {
  id: "oceanWave",
  title: "배송이 늦어질 경우 어떻게 해야 하나요?",
  date: 20230302,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: false
}, {
  id: "starTwinkle",
  title: "기타 질문: 상품의 사이즈 정보가 정확한가요?",
  date: 20230303,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "sunrise",
  title: "비밀글입니다. 상품의 세부 사항에 대해 문의하고 싶습니다.",
  date: 20230304,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: true
}, {
  id: "nightSky",
  title: "배송지 변경은 어떻게 할 수 있나요?",
  date: 20230305,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: false
}, {
  id: "wildForest",
  title: "비밀글입니다. 배송에 대한 질문이 있습니다.",
  date: 20230335,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: true
}, {
  id: "silentLake",
  title: "기타 질문: 상품에 대한 후기를 어디서 볼 수 있나요?",
  date: 20230336,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "greenMeadow",
  title: "비밀글입니다. 상품 설명에 이해가 가지 않는 부분이 있습니다.",
  date: 20230337,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: true
}, {
  id: "blueOcean",
  title: "배송 진행 상황은 어떻게 확인할 수 있나요?",
  date: 20230338,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: false
}, {
  id: "desertMirage",
  title: "기타 질문: 상품의 사용 방법에 대한 동영상이 있나요?",
  date: 20230339,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "winterFrost",
  title: "상품이 방수 기능이 있나요?",
  date: 20230311,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: false
}, {
  id: "autumnLeaf",
  title: "배송 추적 번호는 어떻게 알 수 있나요?",
  date: 20230312,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: false
}, {
  id: "summerSunset",
  title: "기타 질문: 상품의 배터리 수명은 어떻게 되나요?",
  date: 20230313,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "springBreeze",
  title: "비밀글입니다. 상품 관련하여 문의드립니다.",
  date: 20230314,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: true
}, {
  id: "cosmicStar",
  title: "포장 상태는 어떻게 되나요?",
  date: 20230315,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: false
}, {
  id: "forestStream",
  title: "기타 질문: 상품의 부품 교체는 가능한가요?",
  date: 20230316,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "mountainPeak",
  title: "제품의 소재는 무엇인가요?",
  date: 20230335,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: false
}, {
  id: "skyBlue",
  title: "배송 시 배송비는 어떻게 청구되나요?",
  date: 20230336,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: false
}, {
  id: "sunnyYellow",
  title: "기타 질문: 이 제품에 대한 리뷰는 어디에서 볼 수 있나요?",
  date: 20230337,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "sunsetRed",
  title: "비밀글입니다. 배송에 대한 문의드립니다.",
  date: 20230338,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: true
}, {
  id: "moonlightSilver",
  title: "제품이 환불 가능한가요?",
  date: 20230339,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: false
}, {
  id: "starlightPlatinum",
  title: "기타 질문: 이 제품의 설치는 어떻게 하나요?",
  date: 20230340,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "rainbow",
  title: "비밀글입니다. 제품에 대한 상세 문의드립니다.",
  date: 20230341,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: true
}, {
  id: "whiteSnow",
  title: "제품 배송은 어느 지역까지 가능한가요?",
  date: 20230342,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: false
}, {
  id: "blackNight",
  title: "기타 질문: 이 제품의 보증기간은 어떻게 되나요?",
  date: 20230343,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "silverMoon",
  title: "비밀글입니다. 배송 관련하여 문의드립니다.",
  date: 20230344,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: true
}, {
  id: "goldenSun",
  title: "제품은 어떤 색상이 있나요?",
  date: 20230345,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: false
}, {
  id: "copperLeaf",
  title: "기타 질문: 이 제품은 어떤 재질로 만들어졌나요?",
  date: 20230346,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "bronzeStatue",
  title: "비밀글입니다. 제품에 대해 문의드립니다.",
  date: 20230347,
  product_qa: true,
  deliver_qa: false,
  guitar_qa: false,
  secret: true
}, {
  id: "steelBridge",
  title: "배송 일정은 어떻게 되나요?",
  date: 20230348,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: false
}, {
  id: "aluminumFoil",
  title: "기타 질문: 이 제품의 충전 시간은 어떻게 되나요?",
  date: 20230349,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}, {
  id: "titaniumFrame",
  title: "비밀글입니다. 배송에 대해 문의드립니다.",
  date: 20230350,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: true
}, {
  id: "titaniumFrame",
  title: "비밀글입니다. 배송에 대해 문의드립니다.",
  date: 20230350,
  product_qa: false,
  deliver_qa: true,
  guitar_qa: false,
  secret: true
}, {
  id: "aluminumFoil",
  title: "기타 질문: 이 제품의 충전 시간은 어떻게 되나요?",
  date: 20230349,
  product_qa: false,
  deliver_qa: false,
  guitar_qa: true,
  secret: false
}];
var _default = qaList;
exports.default = _default;
},{}],"js/detail.js":[function(require,module,exports) {
"use strict";

var _product_data = _interopRequireDefault(require("./product_data.js"));
var _qa = _interopRequireDefault(require("./qa.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
    var index = $('.left_menu div').index(this);
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
  $('.main_img').append("<img src=\"".concat(_product_data.default[0].src, "\" />"));
  var contentHeight1 = $('.left_contents_detail').height();
  var contentHeight2 = $('.left_contents_review').height();
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
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  // 아이디 가리기 기능을 함수로 분리
  function maskId(idDiv) {
    var idText = idDiv.textContent.trim();
    var maskedText = idText.slice(0, 3) + '*'.repeat(idText.length - 3);
    idDiv.textContent = maskedText;
  }

  // 기존 아이디 가리기 코드 실행
  var idDivs = document.querySelectorAll('.id');
  idDivs.forEach(maskId);
  document.getElementById('submit-review').addEventListener('click', function () {
    var stars = document.getElementById('stars').value;
    var id = document.getElementById('id').value;
    var option = document.getElementById('option').value;
    var review = document.getElementById('review').value;
    if (!id.trim() || !review.trim()) {
      alert("ID와 리뷰를 모두 입력해주세요.");
      return;
    }
    var date = new Date().toLocaleDateString(); // 현재 날짜

    var newReview = document.createElement('div');
    newReview.className = 'review_main';
    newReview.innerHTML = "\n        <div class=\"star\">".concat('★'.repeat(stars), "</div>\n        <div class=\"id\">").concat(id, "</div>\n        <div class=\"date\">").concat(date, "</div>\n        <div class=\"option\">\uC635\uC158 : ").concat(option, "</div>\n        </br>\n        <div class=\"main_review\">").concat(review, "</div>\n    ");
    var idDiv = newReview.querySelector('.id');
    maskId(idDiv); // 새 리뷰에 아이디 가리기 기능 적용

    document.querySelector('.left_contents_review .review_main_container').prepend(newReview); // 리뷰를 가장 처음에 추가
  });

  document.querySelector('.review_write').addEventListener('click', function () {
    var form = document.getElementById('review-form');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });

  //별 나타내기
  var starDivs = document.querySelectorAll('.star');
  starDivs.forEach(function (starDiv) {
    var numberOfStars = parseInt(starDiv.textContent, 10);
    var stars = '★'.repeat(numberOfStars);
    starDiv.textContent = stars;
  });

  //동적으로 리스트 나타내기
  var qaBox = document.querySelector('.qa_body_qabox');
  var itemsPerPage = 7;
  var currentPage = 1;
  var currentCategory = 'ALL'; // Default category

  function displayPage(page) {
    // Clear the box
    qaBox.innerHTML = '';
    var itemsToShow = _qa.default; // Default to all items

    if (currentCategory !== 'ALL') {
      itemsToShow = _qa.default.filter(function (item) {
        switch (currentCategory) {
          case '상품문의':
            return item.product_qa;
          case '배송문의':
            return item.deliver_qa;
          case '기타':
            return item.guitar_qa;
          default:
            return true;
        }
      });
    }
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var itemsToDisplay = itemsToShow.slice(startIndex, endIndex);
    itemsToDisplay.forEach(function (item) {
      var ul = document.createElement('ul');
      var li1 = document.createElement('li');
      li1.textContent = '답변완료';
      var li2 = document.createElement('li');
      li2.textContent = item.title;
      var li3 = document.createElement('li');
      var maskedId = item.id.substring(0, 3).padEnd(item.id.length, '*');
      li3.textContent = maskedId;
      var li4 = document.createElement('li');
      li4.textContent = item.date.toString();
      ul.append(li1, li2, li3, li4);
      qaBox.appendChild(ul);
    });
  }
  // Handle category buttons
  var categoryButtons = document.querySelectorAll('.qa_category ul li');
  categoryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Update current category
      currentCategory = button.textContent;

      // Display first page of the selected category
      currentPage = 1;
      displayPage(currentPage);

      // Update focus class
      buttons.forEach(function (btn) {
        return btn.classList.remove('focus');
      });
      buttons[currentPage + 1].classList.add('focus');
    });
  });

  // Handle pagination buttons
  var buttons = document.querySelectorAll('.pagination div');
  buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      // Remove focus class from the current page button
      buttons[currentPage + 1].classList.remove('focus');
      if (index === 0) {
        // "<<"
        currentPage = 1;
      } else if (index === 1) {
        // "<"
        if (currentPage > 1) {
          currentPage--;
        }
      } else if (index === buttons.length - 1) {
        // ">>"
        currentPage = Math.ceil(_qa.default.length / itemsPerPage);
      } else if (index === buttons.length - 2) {
        // ">"
        if (currentPage < Math.ceil(_qa.default.length / itemsPerPage)) {
          currentPage++;
        }
      } else {
        // "1", "2", "3", ...
        currentPage = index - 1;
      }

      // Add focus class to the current page button
      buttons[currentPage + 1].classList.add('focus');
      displayPage(currentPage);
    });
  });

  // Display initial page
  displayPage(currentPage);
  // Add focus class to the first page button
  buttons[2].classList.add('focus');
  var counterElement = document.getElementById("counter");
  var minusButton = document.getElementById("minus");
  var plusButton = document.getElementById("plus");
  var sumElement = document.querySelector('.sum');
  var priceElement = document.querySelector('.detail_additional_price');
  var price = Number(priceElement.innerText.replace(/[^0-9]/g, ''));
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  minusButton.addEventListener("click", function () {
    var count = parseInt(counterElement.innerText);
    if (count > 1) {
      counterElement.innerText = count - 1;
    }
    checkButtonStatus();
    updateSum();
  });
  plusButton.addEventListener("click", function () {
    var count = parseInt(counterElement.innerText);
    counterElement.innerText = count + 1;
    checkButtonStatus();
    updateSum();
  });
  function updateSum() {
    var count = parseInt(counterElement.innerText);
    sumElement.innerText = numberWithCommas(count * price) + "원";
  }
  function checkButtonStatus() {
    var count = parseInt(counterElement.innerText);
    minusButton.disabled = count <= 1;
  }
  checkButtonStatus();
  updateSum();
  $('.open1').slideUp(0);
  $('.open2').slideUp(0);
  $('.open3').slideUp(0);
  var guideStatus1 = false;
  var guideStatus2 = false;
  var guideStatus3 = false;
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
},{"./product_data.js":"js/product_data.js","./qa.js":"js/qa.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail.js"], null)
//# sourceMappingURL=/detail.975b991d.js.map