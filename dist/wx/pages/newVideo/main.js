require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(854);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0f0dc8a5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(859);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(855)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0f0dc8a5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0f0dc8a5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/newVideo/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f0dc8a5", Component.options)
  } else {
    hotAPI.reload("data-v-0f0dc8a5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 855:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_event__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_upload_js__ = __webpack_require__(857);
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
      videoUrl: 'https://sr-1300007333.file.myqcloud.com/video/',
      cos: '',
      onProgress: '',
      videoPath: ''
    };
  },
  mounted: function mounted() {},
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_0__utils_event__["a" /* default */].$emit('checkVideo', this.videoPath);
    this.videoPath = '';
    this.onProgress = '';
    this.cos = '';
  },

  methods: {
    saveHandle: function saveHandle() {
      if (this.videoPath) {
        this.videoPath = '';
        this.onProgress = '';
        return false;
      }
      this.uploader();
    },
    uploader: function uploader() {
      var _this = this;

      wx.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: 'back',
        success: function success(res) {
          var tempFilePath = res.tempFilePath;

          Object(__WEBPACK_IMPORTED_MODULE_1__utils_upload_js__["a" /* default */])({
            type: 'video',
            fileName: tempFilePath,
            onProgress: function onProgress(info) {
              var percent = info.percent;

              _this.onProgress = (percent * 100).toFixed(2) + '%';
            },
            onSuccess: function onSuccess(fileName) {
              _this.videoPath = fileName;
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_secret_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_upload_js__ = __webpack_require__(858);



var _this = this;



var COS = __webpack_require__(100);

var uploadToOss = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
    var type = _ref2.type,
        fileName = _ref2.fileName,
        _onProgress = _ref2.onProgress,
        onSuccess = _ref2.onSuccess;

    var _ref3, data, SecretId, SecretKey, cos, fileNameTmp;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_3__api_upload_js__["a" /* getOssSecret */])();

          case 2:
            _ref3 = _context.sent;
            data = _ref3.data;
            SecretId = data.SecretId, SecretKey = data.SecretKey;
            cos = new COS({
              SecretId: SecretId,
              SecretKey: SecretKey
            });
            fileNameTmp = Object(__WEBPACK_IMPORTED_MODULE_2__utils_secret_js__["a" /* Encrypt */])(fileName);

            cos.postObject({
              Bucket: 'sr-1300007333',
              Region: 'ap-chengdu',
              Key: type + '/' + fileNameTmp,
              FilePath: fileName,
              onProgress: function onProgress(info) {
                return _onProgress && _onProgress(info);
              }
            }, function (err, data) {
              console.log(err || data);
              if (!err) {
                // 加速域名
                return onSuccess && onSuccess(fileNameTmp, data);
              }
            });

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function uploadToOss(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (uploadToOss);

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOssSecret;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__(23);



// 修改用户信息
function getOssSecret() {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */].get('/ossSecret').then(function (res) {
      resolve(res);
    }).catch(function (e) {
      reject(e);
    });
  });
}

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video-container"
  }, [_c('div', {
    staticClass: "video-wrap"
  }, [(!_vm.videoPath) ? _c('div', {
    staticClass: "video-noConent"
  }, [_vm._v("\n      " + _vm._s(!_vm.onProgress ? '视频未上传' : '上传进度:' + _vm.onProgress) + "\n    ")]) : _c('video', {
    staticClass: "video-wrap__controls",
    attrs: {
      "src": _vm.videoUrl + _vm.videoPath
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "video-footer"
  }, [_c('div', {
    staticClass: "video-opera"
  }, [_c('div', {
    staticClass: "video-opera__submit",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.saveHandle
    }
  }, [_vm._v("\n        " + _vm._s(_vm.videoPath ? '删除视频' : '上传视频') + "\n      ")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f0dc8a5", esExports)
  }
}

/***/ })

},[853]);