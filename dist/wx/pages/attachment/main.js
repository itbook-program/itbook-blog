require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([32],{

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(388);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73024d66_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(391);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(389)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73024d66"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73024d66_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/attachment/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73024d66", Component.options)
  } else {
    hotAPI.reload("data-v-73024d66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 389:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_secret_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_event__ = __webpack_require__(42);
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



var COS = __webpack_require__(100);
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      attachType: null,
      attachData: [],
      fileType: ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf']
    };
  },
  mounted: function mounted() {
    this.cos = new COS({
      SecretId: 'AKID3FCuNhXbAVbSshzhphK2VifNp0HMPsIS',
      SecretKey: '5AzZuzoM0NZWDerseCYrwlKpBJ7iBPO8'
    });
    var _$route$query = this.$route.query,
        type = _$route$query.type,
        attach = _$route$query.attach;

    this.attachType = type;
    try {
      this.attachData = JSON.parse(attach);
    } catch (error) {
      this.attachData = [];
    }
  },
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_1__utils_event__["a" /* default */].$emit('checkAttach', this.attachData);
    this.attachData = [];
  },

  methods: {
    delAttachHandle: function delAttachHandle(delItem) {
      this.attachData = this.attachData.filter(function (item) {
        return delItem.fileName !== item.fileName;
      });
    },

    /**
     * 预览图片文件
     */
    preAttachHandle: function preAttachHandle(item) {
      wx.previewImage({
        urls: [item.path] // 需要预览的图片http链接列表
      });
    },

    /**
    * 文件下载，判断类型，如果文件类型支持预览，则提示预览信息
    */
    downAttachHandle: function downAttachHandle(item) {
      wx.downloadFile({
        url: item.path,
        success: function success(res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          if (res.statusCode === 200) {
            var tempFilePath = res.tempFilePath;

            if (this.fileType.indexOf(item.type) > 0) {
              wx.openDocument({
                filePath: tempFilePath,
                success: function success(res) {
                  console.log('打开文档成功');
                }
              });
            }
          }
        }
      });
    },
    chooseHandle: function chooseHandle() {
      var _this = this;
      wx.chooseMessageFile({
        count: 10,
        type: 'file',
        success: function success(res) {
          var tempFiles = res.tempFiles;
          // 上传附件到云端

          tempFiles.forEach(function (item) {
            item.fileName = Object(__WEBPACK_IMPORTED_MODULE_0__utils_secret_js__["a" /* Encrypt */])(item.name + item.size + item.time);
            item.size = (item.size / 1000000).toFixed(2);
            _this.saveToCloud(item);
          });
          _this.attachData = tempFiles;
        }
      });
    },
    saveToCloud: function saveToCloud(item) {
      var _this = this;
      _this.cos.postObject({
        Bucket: 'sr-1300007333',
        Region: 'ap-chengdu',
        Key: 'attach/' + item.fileName,
        FilePath: item.path,
        onProgress: function onProgress(info) {
          var percent = info.percent;

          _this.onProgress = (percent * 100).toFixed(2) + '%';
        }
      }, function (err, data) {
        console.log(err || data);
        if (!err) {
          // 判断是否上传成功
          // _this.videoUrl = 'https://sr-1300007333.file.myqcloud.com/attach/' + item.fileName
        }
      });
    }
  }
});

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "article-container"
  }, [_c('div', {
    staticClass: "article-attachment"
  }, _vm._l((_vm.attachData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "attach-item"
    }, [_c('div', {
      staticClass: "attach-item__header"
    }, [_c('div', {
      staticClass: "attach-item__text"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "attach-item__text"
    }, [_vm._v(_vm._s(item.size) + " MB")])]), _vm._v(" "), (!_vm.attachType) ? _c('div', {
      staticClass: "attach-item__text item-info",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.delAttachHandle(item)
        }
      }
    }, [_vm._v("删除")]) : _vm._e(), _vm._v(" "), (_vm.attachType) ? _c('div', {
      staticClass: "attach-item__text item-info",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.preAttachHandle(item)
        }
      }
    }, [_vm._v("预览")]) : _vm._e(), _vm._v(" "), (_vm.attachType) ? _c('div', {
      staticClass: "attach-item__text item-info",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.downAttachHandle(item)
        }
      }
    }, [_vm._v("下载")]) : _vm._e()])
  })), _vm._v(" "), (!_vm.attachType) ? _c('div', {
    staticClass: "ptf-release__footer"
  }, [_c('div', {
    staticClass: "ptf-release__opera"
  }, [_c('div', {
    staticClass: "release-opera__submit",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.chooseHandle
    }
  }, [_vm._v("添加附件")])])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73024d66", esExports)
  }
}

/***/ })

},[387]);