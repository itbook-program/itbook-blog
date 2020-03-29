require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(944);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26c52db2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(948);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(945)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26c52db2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26c52db2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/writerApply/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26c52db2", Component.options)
  } else {
    hotAPI.reload("data-v-26c52db2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 945:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CustomCells_index__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CustomButtons_index__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_writer__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_auth__ = __webpack_require__(30);
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
    CustomCells: __WEBPACK_IMPORTED_MODULE_0__components_CustomCells_index__["a" /* default */],
    CustomButtons: __WEBPACK_IMPORTED_MODULE_1__components_CustomButtons_index__["a" /* default */]
  },
  data: function data() {
    return {
      isWriter: false,
      formData: {
        user: Object(__WEBPACK_IMPORTED_MODULE_3__utils_auth__["b" /* getUser */])(),
        userName: '',
        IDCard: '',
        phone: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_2__api_writer__["a" /* getWriterById */])(this.formData.user).then(function (resData) {
      var code = resData.code,
          data = resData.data;

      if (code === 0) {
        var userName = data.userName,
            IDCard = data.IDCard,
            phone = data.phone,
            isWriter = data.user.isWriter;

        console.log(userName, IDCard, phone);
        _this.isWriter = isWriter;
        _this.formData.userName = userName;
        _this.formData.IDCard = IDCard;
        _this.formData.phone = phone;
      }
    });
  },
  onUnload: function onUnload() {
    this.formData = {
      user: Object(__WEBPACK_IMPORTED_MODULE_3__utils_auth__["b" /* getUser */])(),
      userName: '',
      IDCard: '',
      phone: ''
    };
  },

  methods: {
    confirmHandle: function confirmHandle() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_2__api_writer__["b" /* postWriter */])(this.formData).then(function (resData) {
        _this2.$router.back();
      });
    }
  }
});

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = postWriter;
/* harmony export (immutable) */ __webpack_exports__["a"] = getWriterById;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_request__ = __webpack_require__(23);




// 提交用户信息
function postWriter(payload) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_2__utils_request__["a" /* default */].post('/v1/writer', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, payload)).then(function (res) {
      resolve(res);
    }).catch(function (e) {
      reject(e);
    });
  });
}

// 修改用户信息
function getWriterById(id) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_2__utils_request__["a" /* default */].get('/v1/writer/' + id).then(function (res) {
      resolve(res);
    }).catch(function (e) {
      reject(e);
    });
  });
}

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "withdrawal-container"
  }, [_c('div', {
    staticClass: "withdrawal-content__list"
  }, [_c('custom-cells', {
    attrs: {
      "title": "个人信息",
      "type": "title",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('custom-cells', {
    attrs: {
      "title": "姓名",
      "readOnly": _vm.isWriter,
      "type": "text",
      "placeholder": "请输入姓名",
      "eventid": '0',
      "mpcomid": '1'
    },
    model: {
      value: (_vm.formData.userName),
      callback: function($$v) {
        _vm.formData.userName = $$v
      },
      expression: "formData.userName"
    }
  }), _vm._v(" "), _c('custom-cells', {
    attrs: {
      "title": "身份证号码",
      "readOnly": _vm.isWriter,
      "inputMaxlength": 18,
      "type": "text",
      "placeholder": "请输入身份证号码",
      "eventid": '1',
      "mpcomid": '2'
    },
    model: {
      value: (_vm.formData.IDCard),
      callback: function($$v) {
        _vm.formData.IDCard = $$v
      },
      expression: "formData.IDCard"
    }
  }), _vm._v(" "), _c('custom-cells', {
    attrs: {
      "title": "手机号码",
      "readOnly": _vm.isWriter,
      "type": "text",
      "placeholder": "请输入手机号码",
      "eventid": '2',
      "mpcomid": '3'
    },
    model: {
      value: (_vm.formData.phone),
      callback: function($$v) {
        _vm.formData.phone = $$v
      },
      expression: "formData.phone"
    }
  })], 1), _vm._v(" "), (!_vm.isWriter) ? _c('custom-buttons', {
    attrs: {
      "click-methods": _vm.confirmHandle,
      "text": "提 交",
      "mpcomid": '4'
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26c52db2", esExports)
  }
}

/***/ })

},[943]);