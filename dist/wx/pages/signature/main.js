require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([21],{

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(924);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3a4bbb24_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(927);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(925)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3a4bbb24"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3a4bbb24_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/signature/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a4bbb24", Component.options)
  } else {
    hotAPI.reload("data-v-3a4bbb24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 925:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CustomButtons_index__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_auth__ = __webpack_require__(30);
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
    CustomButton: __WEBPACK_IMPORTED_MODULE_0__components_CustomButtons_index__["a" /* default */]
  },
  data: function data() {
    return {
      signText: ''
    };
  },
  onUnload: function onUnload() {
    this.signText = '';
  },

  methods: {
    changeSignHandle: function changeSignHandle() {
      var _this = this;

      var id = Object(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getUser */])();
      var sign = this.signText;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_user__["d" /* putUserSign */])(id, sign).then(function (resData) {
        var code = resData.code;

        if (code === 0) {
          _this.$router.back();
        }
      });
    }
  }
});

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "signature-container"
  }, [_c('div', {
    staticClass: "signature-content__container"
  }, [_c('div', {
    staticClass: "signature-content__title"
  }, [_vm._v("个性签名")]), _vm._v(" "), _c('div', {
    staticClass: "signature-content__text"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.signText),
      expression: "signText"
    }],
    attrs: {
      "type": "textarea",
      "maxlength": 100,
      "placeholder": "请输入签名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.signText)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.signText = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "signature-content__button"
  }, [_c('custom-button', {
    attrs: {
      "click-methods": _vm.changeSignHandle,
      "text": "提 交",
      "mpcomid": '0'
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a4bbb24", esExports)
  }
}

/***/ })

},[923]);