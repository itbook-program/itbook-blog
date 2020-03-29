require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([18],{

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(939);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d6f7a342_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(942);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(940)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d6f7a342"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d6f7a342_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/withdrawal/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d6f7a342", Component.options)
  } else {
    hotAPI.reload("data-v-d6f7a342", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 940:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CustomCells_index__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CustomButtons_index__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_withdraw__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_event__ = __webpack_require__(42);
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






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    CustomCells: __WEBPACK_IMPORTED_MODULE_3__components_CustomCells_index__["a" /* default */],
    CustomButtons: __WEBPACK_IMPORTED_MODULE_4__components_CustomButtons_index__["a" /* default */]
  },
  data: function data() {
    return {
      amount: '',
      info: {},
      poundage: 0,
      type: 'waiting'
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_7_vuex__["c" /* mapState */])({
    userInfo: function userInfo(state) {
      return state.user.userInfo;
    }
  })),
  mounted: function mounted() {
    this.fetchData();
    this.fetchRecordData();
    __WEBPACK_IMPORTED_MODULE_6__utils_event__["a" /* default */].$on('bankDataUpdate', this.fetchData);
  },
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_6__utils_event__["a" /* default */].$off('bankDataUpdate', this.fetchData);
  },

  methods: {
    fetchRecordData: function fetchRecordData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _id, _ref, list;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _id = _this.userInfo._id;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_withdraw__["b" /* getWithdrawRecord */])({ user: _id });

              case 3:
                _ref = _context.sent;
                list = _ref.data.list;

                if (list && list.user) {
                  _this.type = 'loading';
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    fetchData: function fetchData() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _id, _ref2, code, list;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _id = _this2.userInfo._id;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_withdraw__["a" /* getWithdraw */])({ user: _id });

              case 3:
                _ref2 = _context2.sent;
                code = _ref2.code;
                list = _ref2.data.list;

                if (code === 0) {
                  _this2.info = list;
                }

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    confirmHandle: function confirmHandle() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var _id, user, _ref3, code;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _id = _this3.info._id;
                user = _this3.userInfo._id;
                _context3.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_withdraw__["d" /* postWithdrawRecord */])({ _id: _id, user: user, amount: _this3.amount, poundage: _this3.poundage });

              case 4:
                _ref3 = _context3.sent;
                code = _ref3.code;

                if (code === 0) {
                  // 已经提交提现申请
                  _this3.$router.go(-1);
                }
                console.log(_id, user, _this3.amount, _this3.poundage);

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    modifyHandle: function modifyHandle() {
      var _info = this.info,
          bankName = _info.bankName,
          bankNumber = _info.bankNumber;

      this.$router.push({ path: '/pages/bindBankCard/main', query: { bankName: bankName, bankNumber: bankNumber } });
    }
  }
});

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "withdrawal-container"
  }, [_c('div', {
    staticClass: "withdrawal-content__list"
  }, [_c('custom-cells', {
    attrs: {
      "title": "我的银行卡",
      "type": "title",
      "click-methods": _vm.modifyHandle,
      "content": _vm.info.bankName ? '修改' : '添加',
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.info.bankName) ? _c('custom-cells', {
    attrs: {
      "title": "开户行",
      "type": "text",
      "content": _vm.info.bankName || '',
      "mpcomid": '1'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.info.bankNumber) ? _c('custom-cells', {
    attrs: {
      "title": "帐号",
      "type": "text",
      "content": _vm.info.bankNumber,
      "mpcomid": '2'
    }
  }) : _vm._e(), _vm._v(" "), _c('custom-cells', {
    attrs: {
      "title": "我的账户",
      "type": "title",
      "mpcomid": '3'
    }
  }), _vm._v(" "), (_vm.info.user) ? _c('custom-cells', {
    attrs: {
      "title": "账户余额",
      "type": "text",
      "content": ("¥" + (_vm.info.user.amount || '')),
      "mpcomid": '4'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.info.user) ? _c('custom-cells', {
    attrs: {
      "title": "可提现金额",
      "type": "text",
      "content": ("¥" + (_vm.info.user.amount || '')),
      "mpcomid": '5'
    }
  }) : _vm._e(), _vm._v(" "), _c('custom-cells', {
    attrs: {
      "title": "提现金额",
      "type": "input",
      "placeholder": "请输入金额",
      "eventid": '0',
      "mpcomid": '6'
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }), _vm._v(" "), _c('custom-cells', {
    attrs: {
      "title": "手续费",
      "type": "title",
      "is-disabled": "",
      "content": "¥0.00",
      "mpcomid": '7'
    }
  })], 1), _vm._v(" "), _c('custom-buttons', {
    attrs: {
      "disabled": _vm.type === 'loading' ? true : false,
      "click-methods": _vm.confirmHandle,
      "text": "提 现",
      "mpcomid": '8'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d6f7a342", esExports)
  }
}

/***/ })

},[938]);