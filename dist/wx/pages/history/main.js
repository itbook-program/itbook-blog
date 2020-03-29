require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(765);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_74aff780_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(772);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(766)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74aff780"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_74aff780_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/history/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74aff780", Component.options)
  } else {
    hotAPI.reload("data-v-74aff780", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 766:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_looks__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CustomReachBottom__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(145);
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
    CustomReachBottom: __WEBPACK_IMPORTED_MODULE_2__components_CustomReachBottom__["a" /* default */]
  },
  data: function data() {
    return {
      looksData: [],
      currentPage: 1,
      pageSize: 10,
      count: 1
    };
  },
  mounted: function mounted() {
    var payload = {
      pageSize: this.pageSize,
      ussrId: Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["b" /* getUser */])()
    };
    this.fetchData(payload, true);
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.currentPage = 1;
    var payload = {
      pageSize: this.pageSize,
      ussrId: Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["b" /* getUser */])()
    };
    this.fetchData(payload, true);
  },
  onReachBottom: function onReachBottom() {
    if (!(this.currentPage * this.pageSize < this.count)) {
      return false;
    }
    var nextPage = this.currentPage + 1;
    var payload = {
      pageSize: this.pageSize,
      currentPage: nextPage,
      ussrId: Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["b" /* getUser */])()
    };
    this.fetchData(payload);
  },

  methods: {
    fetchData: function fetchData(payload) {
      var _this = this;

      var clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      Object(__WEBPACK_IMPORTED_MODULE_0__api_looks__["a" /* getLooks */])(payload).then(function (resData) {
        var code = resData.code,
            _resData$data = resData.data,
            list = _resData$data.list,
            count = _resData$data.count,
            currentPage = _resData$data.currentPage;
        // 格式化时间

        list.forEach(function (element) {
          element.updateAt = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* formatTime */])(element.updateAt);
        });
        if (code === 0) {
          if (clean) {
            _this.looksData = list;
          } else {
            _this.looksData = _this.looksData.concat(list);
          }
          _this.currentPage = currentPage;
          _this.count = count;
        }
      });
    }
  }
});

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_201fd9f3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(771);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(769)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-201fd9f3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_201fd9f3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/CustomReachBottom/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-201fd9f3", Component.options)
  } else {
    hotAPI.reload("data-v-201fd9f3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 769:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    count: {
      type: String,
      required: true
    },
    currentPage: {
      type: String,
      required: true
    },
    pageSize: {
      type: String,
      default: '10'
    }
  },
  data: function data() {
    return {
      isLoading: true
    };
  },

  computed: {
    chooseText: function chooseText() {
      return this.currentPage * this.pageSize < this.count;
    }
  }
});

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loadMore-container"
  }, [_vm._v("\n  " + _vm._s(_vm.chooseText ? '内容加载中...' : '内容加载完成') + "\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-201fd9f3", esExports)
  }
}

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ptf-history__container"
  }, [_vm._l((_vm.looksData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "ptf-history__item"
    }, [_c('div', {
      staticClass: "ptf-history__title"
    }, [_vm._v(_vm._s(item.article.title))]), _vm._v(" "), _c('div', {
      staticClass: "ptf-history__user"
    }, [_c('div', {
      staticClass: "history-user__name"
    }, [_vm._v(_vm._s(item.user.nickName))]), _vm._v(" "), _c('div', {
      staticClass: "history-user__date"
    }, [_vm._v(_vm._s(item.updateAt))])])])
  }), _vm._v(" "), _c('custom-reach-bottom', {
    attrs: {
      "currentPage": _vm.currentPage,
      "count": _vm.count,
      "mpcomid": '0'
    }
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-74aff780", esExports)
  }
}

/***/ })

},[764]);