require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([23],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(861);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3dd3f842_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(864);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(862)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3dd3f842"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3dd3f842_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/notice/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dd3f842", Component.options)
  } else {
    hotAPI.reload("data-v-3dd3f842", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 862:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_header_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_header_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_image_header_png__);
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
  data: function data() {
    return {
      headerIcon: __WEBPACK_IMPORTED_MODULE_0__assets_image_header_png___default.a
    };
  }
});

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment-container"
  }, [_c('div', {
    staticClass: "comment-container__item"
  }, [_c('div', {
    staticClass: "comment-wrapper__avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.headerIcon
    }
  })]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "comment-container__item"
  }, [_c('div', {
    staticClass: "comment-wrapper__avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.headerIcon
    }
  })]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('div', {
    staticClass: "comment-container__item"
  }, [_c('div', {
    staticClass: "comment-wrapper__avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.headerIcon
    }
  })]), _vm._v(" "), _vm._m(2)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment-wrapper__content"
  }, [_c('div', {
    staticClass: "comment-wrapper__user"
  }, [_c('div', {
    staticClass: "comment-user__username"
  }, [_vm._v("版本更新")]), _vm._v(" "), _c('div', {
    staticClass: "comment-user__time"
  }, [_vm._v("19.04.30 16:45")])]), _vm._v(" "), _c('div', {
    staticClass: "comment-wrapper__info"
  }, [_vm._v("\n        本次更新要点：\n        1、本次版本更新修复了已知的缺陷；\n        2、新增了官方活动；\n        3、重新设计了推荐算法。\n        下个版本计划：\n        1、举行打榜活动;\n        2、优化部分逻辑。\n      ")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment-wrapper__content"
  }, [_c('div', {
    staticClass: "comment-wrapper__user"
  }, [_c('div', {
    staticClass: "comment-user__username"
  }, [_vm._v("活动通知")]), _vm._v(" "), _c('div', {
    staticClass: "comment-user__time"
  }, [_vm._v("19.04.30 16:45")])]), _vm._v(" "), _c('div', {
    staticClass: "comment-wrapper__info"
  }, [_vm._v("\n        全新的插书签活动开始了，阅读文章，打赏任 意书签，就可参与官方周边纪念物抽奖活动，快 快来参与吧。\n        "), _c('div', {
    staticClass: "active-link"
  }, [_vm._v("活动详情点击本消息查看>>")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment-wrapper__content"
  }, [_c('div', {
    staticClass: "comment-wrapper__user"
  }, [_c('div', {
    staticClass: "comment-user__username"
  }, [_vm._v("文章审核通知")]), _vm._v(" "), _c('div', {
    staticClass: "comment-user__time"
  }, [_vm._v("19.04.30 16:45")])]), _vm._v(" "), _c('div', {
    staticClass: "comment-wrapper__text"
  }, [_vm._v("\n        恭喜你的文章通过了审核。\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "comment-wrapper__info"
  }, [_vm._v("\n        博客系统设计--小程序设计\n      ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3dd3f842", esExports)
  }
}

/***/ })

},[860]);