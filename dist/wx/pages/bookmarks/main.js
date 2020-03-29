require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([29],{

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(422);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b81fdbae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(428);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(423)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b81fdbae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b81fdbae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/bookmarks/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b81fdbae", Component.options)
  } else {
    hotAPI.reload("data-v-b81fdbae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 423:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CustomTabs__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CustomBookMarks__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_user__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_except__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex__ = __webpack_require__(24);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    CustomTabs: __WEBPACK_IMPORTED_MODULE_3__components_CustomTabs__["a" /* default */],
    listItem: __WEBPACK_IMPORTED_MODULE_4__components_CustomBookMarks__["a" /* default */]
  },
  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_7_vuex__["c" /* mapState */])({
    userInfo: function userInfo(state) {
      return state.user.userInfo;
    }
  })),
  mounted: function mounted() {
    this.fetchUserInfo();
    this.fetchException();
  },
  data: function data() {
    return {
      tabIndex: 0,
      user: {},
      spending: {},
      income: {},
      tabs: [{
        key: 0,
        value: '收入'
      }, {
        key: 1,
        value: '支出'
      }]
    };
  },

  methods: {
    fetchException: function fetchException() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _id, _ref, _ref$data, _ref$data$count, spCount, inCount, _ref$data$list, spending, income;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _id = _this.userInfo._id;
                _context.t0 = console;
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_6__api_except__["a" /* getExcept */])({ userId: _id });

              case 4:
                _context.t1 = _context.sent;

                _context.t0.log.call(_context.t0, _context.t1);

                _context.next = 8;
                return Object(__WEBPACK_IMPORTED_MODULE_6__api_except__["a" /* getExcept */])({ userId: _id });

              case 8:
                _ref = _context.sent;
                _ref$data = _ref.data;
                _ref$data$count = _ref$data.count;
                spCount = _ref$data$count.spCount;
                inCount = _ref$data$count.inCount;
                _ref$data$list = _ref$data.list;
                spending = _ref$data$list.spending;
                income = _ref$data$list.income;

                console.log(spCount, inCount);
                _this.spending = spending;
                _this.income = income;

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    fetchUserInfo: function fetchUserInfo() {
      var _this2 = this;

      var _id = this.userInfo._id;

      Object(__WEBPACK_IMPORTED_MODULE_5__api_user__["b" /* getUserInfo */])({ id: _id }).then(function (user) {
        var code = user.code,
            data = user.data;

        if (code === 0) {
          _this2.user = data;
        }
      });
    },
    checkedItem: function checkedItem(index, items) {
      this.tabIndex = index;
    },
    withdrawalHandle: function withdrawalHandle() {
      console.log('申请提现');
      this.$router.push({ path: '/pages/withdrawal/main' });
    }
  }
});

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bookmarks-container"
  }, [_c('div', {
    staticClass: "user-card"
  }, [_c('div', {
    staticClass: "user-card__title"
  }, [_vm._v("我的书签")]), _vm._v(" "), _c('div', {
    staticClass: "user-card__balance"
  }, [_vm._v(_vm._s(_vm.user.amount)), _c('span', {
    staticClass: "card-balance__text"
  }, [_vm._v("书签")])]), _vm._v(" "), _c('div', {
    staticClass: "user-card__btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.withdrawalHandle
    }
  }, [_vm._v("提现")])]), _vm._v(" "), _c('custom-tabs', {
    attrs: {
      "tabs": _vm.tabs,
      "activedIndex": 0,
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "checkedItem": _vm.checkedItem
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tab-items"
  }, [(_vm.tabIndex === 0) ? _c('div', [_c('list-item', {
    attrs: {
      "marksData": _vm.income,
      "mpcomid": '1'
    }
  })], 1) : (_vm.tabIndex === 1) ? _c('div', [_c('list-item', {
    attrs: {
      "marksData": _vm.spending,
      "mpcomid": '2'
    }
  })], 1) : _vm._e()])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b81fdbae", esExports)
  }
}

/***/ })

},[421]);