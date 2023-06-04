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
})({"js/qa.js":[function(require,module,exports) {
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
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50183" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/qa.js"], null)
//# sourceMappingURL=/qa.7691b5af.js.map