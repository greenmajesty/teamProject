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
  src: "./js/img/1111.jpg",
  best: true,
  deliver: true
}, {
  id: "product2",
  name: "IK 시리즈 SNOWMAN22 SOLID Table Stand",
  price: 230000,
  src: "../img/1112.jpg",
  best: true,
  deliver: true
}, {
  id: "product3",
  name: "IK 시리즈 SNOWBALL22 SOLID Table Stand",
  price: 210000,
  src: "../img/1113.jpg",
  best: true,
  deliver: true
}, {
  id: "product4",
  name: "IK 시리즈 FONDUE16 Table Stand KYOBO BOOK Edition",
  price: 280000,
  src: "../img/1114.jpg",
  best: true,
  deliver: true
}, {
  id: "product5",
  name: "IK 시리즈 TRIANGLE120 A Pendant",
  price: 390000,
  src: "../img/1115.jpg",
  best: false,
  deliver: false
}, {
  id: "product6",
  name: "IK 시리즈 TRIANGLE120 B Pendant",
  price: 390000,
  src: "../img/1116.jpg",
  best: false,
  deliver: false
}, {
  id: "product7",
  name: "IK 시리즈 MAGRITTE40 Pendant",
  price: 380000,
  src: "../img/1117.jpg",
  best: false,
  deliver: false
}, {
  id: "product8",
  name: "IK 시리즈 MAGRITTE40 Pendant",
  price: 380000,
  src: "../img/1117.jpg",
  best: false,
  deliver: false
}, {
  id: "product9",
  name: "클래식전구 ST64 (25w, 40w, E26)",
  price: 6500,
  src: "../img/1118.jpg",
  best: false,
  deliver: false
}, {
  id: "product10",
  name: "장식용전구 S45 (10w, E14)",
  price: 1200,
  src: "../img/1119.jpg",
  best: false,
  deliver: false
}, {
  id: "product11",
  name: "삼파장전구 EL (11w, E26)",
  price: 2700,
  src: "../img/1120.jpg",
  best: false,
  deliver: false
}, {
  id: "product12",
  name: "가드닝전구 LED PG PAR30 (11w, E26, 실내용)",
  price: 20000,
  src: "../img/1121.jpg",
  best: false,
  deliver: false
}, {
  id: "product13",
  name: "할로겐전구 G9 (28w, 42w)",
  price: 2000,
  src: "../img/1122.jpg",
  best: false,
  deliver: false
}, {
  id: "product14",
  name: "산업용전구 IR125 RED(250w, 하드글래스 열전구)",
  price: 6000,
  src: "../img/1123.jpg",
  best: false,
  deliver: false
}, {
  id: "product15",
  name: "LED전구 F-LED TUBE R (3.5w, E26, Dimmable)",
  price: 14000,
  src: "../img/1125.jpg",
  best: false,
  deliver: false
}];
var _default = productList;
exports.default = _default;
},{}],"js/sub.js":[function(require,module,exports) {
"use strict";

var _product_data = _interopRequireDefault(require("./product_data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
    var $mainContainer = $(".main_container");
    for (var i = 0; i < 12 && i < productData.length; i++) {
      var product = productData[i];
      var $mainBox = $('<div class="main_box"></div>');
      if (product.best) {
        $mainBox.append('<div class="best">BEST</div>');
      }
      if (product.deliver) {
        $mainBox.append('<div class="deliver">당일배송</div>');
      }
      $mainBox.append("<img src=\"".concat(product.src, "\" alt=\"\">"));
      $mainBox.append('<div class="textbox"></div>');
      $mainContainer.append($mainBox);
    }
  }
  createMainBoxes(_product_data.default);
});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57251" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub.js"], null)
//# sourceMappingURL=/sub.3e71813d.js.map