require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_uuid__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(305);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__webpack_require__(306));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_uuid__["a" /* default */]);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(292);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(291)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2c44996", Component.options)
  } else {
    hotAPI.reload("data-v-b2c44996", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 291:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    var logs = void 0;
    if (global.mpvuePlatform === 'my') {
      logs = global.mpvue.getStorageSync({ key: 'logs' }).data || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = global.mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync('logs', logs);
    }
  },
  mounted: function mounted() {
    // 建立一个socket连接
    var io = __webpack_require__(293);
    var socket = io('http://localhost:7001');
    socket.on('connect', function () {
      __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$socket = socket;
      console.log('连接成功');
    });
  }
});

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_user__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_chat__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex_dist_logger__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex_dist_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuex_dist_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_article__ = __webpack_require__(299);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
var debug = "development" !== 'production';
var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    user: __WEBPACK_IMPORTED_MODULE_2__modules_user__["a" /* default */],
    chat: __WEBPACK_IMPORTED_MODULE_3__modules_chat__["a" /* default */],
    article: __WEBPACK_IMPORTED_MODULE_6__modules_article__["a" /* default */]
  },
  getters: __WEBPACK_IMPORTED_MODULE_4__getters__["a" /* default */],
  strict: debug,
  plugins: debug ? [__WEBPACK_IMPORTED_MODULE_5_vuex_dist_logger___default()()] : []
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var user = {
  state: {
    userInfo: {}
  },
  mutations: {
    SET_USER_INFO: function SET_USER_INFO(state, info) {
      state.userInfo = info;
    }
  },
  actions: {}
};

/* harmony default export */ __webpack_exports__["a"] = (user);

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var chat = {
  state: {
    socket: null
  },
  mutations: {
    CONNENT_SOCKET: function CONNENT_SOCKET(state, socket) {
      state.socket = socket;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (chat);

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
  signalBar: function signalBar(state) {
    return state.app.signalBar;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var article = {
  state: {
    article: null
  },
  mutations: {
    SET_ARTICLE: function SET_ARTICLE(state, article) {
      state.article = article;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (article);

/***/ })

},[289]);