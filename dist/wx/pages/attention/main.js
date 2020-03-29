require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([17],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(393);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2feb07ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(400);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(394)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2feb07ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2feb07ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/attention/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2feb07ec", Component.options)
  } else {
    hotAPI.reload("data-v-2feb07ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 394:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CustomTags_index__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_header_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_header_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_image_header_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_attention__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_push__ = __webpack_require__(101);
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
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    CustomTags: __WEBPACK_IMPORTED_MODULE_3__components_CustomTags_index__["a" /* default */]
  },
  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_7_vuex__["c" /* mapState */])({
    userInfo: function userInfo(state) {
      return state.user.userInfo;
    }
  })),
  mounted: function mounted() {
    var type = this.$route.query.type;

    if (type && type === 'message') {
      this.fetachMessDaeta();
    } else {
      this.fetchAttenData();
    }
  },
  data: function data() {
    return {
      headerIcon: __WEBPACK_IMPORTED_MODULE_4__assets_image_header_png___default.a,
      attenList: []
    };
  },

  methods: {
    fetachMessDaeta: function fetachMessDaeta() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _id, _ref, list;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _id = _this.userInfo._id;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_6__api_push__["a" /* getPush */])({ userId: _id, type: 'focus' });

              case 3:
                _ref = _context.sent;
                list = _ref.data.list;

                _this.attenList = list;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    fetchAttenData: function fetchAttenData() {
      var _this2 = this;

      var _id = this.userInfo._id;

      Object(__WEBPACK_IMPORTED_MODULE_5__api_attention__["a" /* getAttention */])({ userId: _id }).then(function (resData) {
        var code = resData.code,
            data = resData.data;
        var list = data.list;

        if (code === 0) {
          _this2.attenList = list;
        }
      });
    },
    cancelHandle: function cancelHandle() {
      console.log('取消关注');
    }
  }
});

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAttention;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__(23);



function getAttention(payload) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */].get('/v1/attention', payload).then(function (res) {
      resolve(res);
    }).catch(function (e) {
      reject(e);
    });
  });
}

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "attention-container"
  }, _vm._l((_vm.attenList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "attention-container__item"
    }, [_c('div', {
      staticClass: "attention-wrapper__user"
    }, [_c('div', {
      staticClass: "attiontion-user__avatar"
    }, [(item.user) ? _c('img', {
      attrs: {
        "src": item.user.avatarUrl
      }
    }) : (item.receiver) ? _c('img', {
      attrs: {
        "src": item.receiver.avatarUrl
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "attention-user__info"
    }, [_c('div', {
      staticClass: "user-info__name"
    }, [(item.user) ? _c('span', [_vm._v(_vm._s(item.user.nickName))]) : (item.receiver) ? _c('span', [_vm._v(_vm._s(item.receiver.nickName))]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "user-info__date"
    }, [(item.user || item.receiver) ? _c('span', [_vm._v(_vm._s(item.updateAt))]) : _vm._e()])])]), _vm._v(" "), _c('div', {
      staticClass: "attention-wrapper__operation"
    }, [_c('custom-tags', {
      attrs: {
        "title": "已关注",
        "type": "attent-active",
        "eventid": '0_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": _vm.cancelHandle
      }
    })], 1)])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2feb07ec", esExports)
  }
}

/***/ })

},[392]);