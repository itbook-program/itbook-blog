require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(873);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_646ba8fd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(878);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(874)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-646ba8fd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_646ba8fd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/preArticle/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-646ba8fd", Component.options)
  } else {
    hotAPI.reload("data-v-646ba8fd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 874:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CustomHeader_index__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_header_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_header_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_image_header_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_preArticle_attachment_png__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_preArticle_attachment_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_image_preArticle_attachment_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_preArticle_location_png__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_preArticle_location_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_image_preArticle_location_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CustomMask__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_article__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_event__ = __webpack_require__(42);

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
    CustomHeader: __WEBPACK_IMPORTED_MODULE_1__components_CustomHeader_index__["a" /* default */],
    CustomMask: __WEBPACK_IMPORTED_MODULE_5__components_CustomMask__["a" /* default */]
  },
  data: function data() {
    return {
      headerIcon: __WEBPACK_IMPORTED_MODULE_2__assets_image_header_png___default.a,
      locationIcon: __WEBPACK_IMPORTED_MODULE_4__assets_image_preArticle_location_png___default.a,
      attachmentIcon: __WEBPACK_IMPORTED_MODULE_3__assets_image_preArticle_attachment_png___default.a,
      isExcept: false,
      customNum: '',
      isCustom: false,
      isComment: false,
      articleDetail: {},
      locationInfo: '',
      attachInfo: [],
      videoUrl: 'https://sr-1300007333.file.myqcloud.com/video/'
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["c" /* mapState */])({
    article: function article(state) {
      return state.article.article;
    }
  })),
  mounted: function mounted() {
    console.log(this.article);
    __WEBPACK_IMPORTED_MODULE_9__utils_event__["a" /* default */].$on('checkLocation', this.checkLocation);
    __WEBPACK_IMPORTED_MODULE_9__utils_event__["a" /* default */].$on('checkAttach', this.checkAttach);
  },
  beforeDestroy: function beforeDestroy() {
    __WEBPACK_IMPORTED_MODULE_9__utils_event__["a" /* default */].$off('checkLocation', this.checkLocation);
    __WEBPACK_IMPORTED_MODULE_9__utils_event__["a" /* default */].$off('checkAttach', this.checkAttach);
  },

  methods: {
    editHandle: function editHandle() {
      this.$router.go(-1);
    },
    richReplace: function richReplace(data) {
      // 去除 富文本格式
      data = data.replace(/(\n)/g, ';');
      data = data.replace(/(\t)/g, '');
      data = data.replace(/(\r)/g, '');
      data = data.replace(/<\/?[^>]*>/g, '');
      data = data.replace(/\s*/g, '');
      return data;
    },
    saveHandle: function saveHandle() {
      var _this = this;

      // 处理图片或视频当做封面
      var _article = this.article,
          ops = _article.detail.delta.ops,
          videoPath = _article.videoPath,
          audioPath = _article.audioPath;

      console.log(this.article);
      var cover = '';
      ops.forEach(function (element) {
        if (element.insert && element.insert.image) {
          cover = element.insert.image;
          return false;
        }
      });
      // 处理视频
      // 处理音频
      // 处理文字内容
      var contentText = this.richReplace(this.article.detail.text);
      var resourceType = null;
      var resource = null;
      if (videoPath) {
        resourceType = 1;
        cover = videoPath;
        resource = videoPath;
      } else if (audioPath) {
        resourceType = 2;
        resource = audioPath;
      }

      var temReq = {
        resource: resource,
        resourceType: resourceType,
        user: Object(__WEBPACK_IMPORTED_MODULE_8__utils_auth__["b" /* getUser */])(),
        cover: cover,
        title: this.article.title,
        attachs: this.attachInfo,
        location: this.locationInfo,
        content: this.article.detail.html,
        contentText: contentText
      };
      Object(__WEBPACK_IMPORTED_MODULE_7__api_article__["c" /* postArticle */])(temReq).then(function (resData) {
        var code = resData.code;

        if (code === 0) {
          __WEBPACK_IMPORTED_MODULE_9__utils_event__["a" /* default */].$emit('releaseSuccess');
          _this.$router.push({ path: '/pages/release/main', isTab: true });
        }
      });
    },
    checkAttach: function checkAttach(data) {
      this.attachInfo = data;
    },
    checkLocation: function checkLocation(data) {
      this.locationInfo = data;
    },
    loactionHandle: function loactionHandle() {
      this.$router.push({ path: '/pages/positioning/main' });
    },
    attachHandle: function attachHandle() {
      this.$router.push({ path: '/pages/attachment/main' });
    }
  }
});

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJklEQVRYR+3WS+iUZRQG8J/drNSSKFpEgYILl7ktcWFECC0iUYtudiEtTVI0rYy0yFuKGVl0t5tRLmxdBF0I2waVq6CClkp0s7SUJ84H0+T8v5nvv3DjB8MMM++8z+Wc57zvBKf4mXCK8Z0mMB4HzsJVmI+rcUWV8wd8gX34DMfGKnNXApPxKO7FVPxZr5A6B3n/GS9hA34dRKILgQuxE7fgOD7CWziIizET1+IanIFX8SB+PxmJUQlMwS7ciiPYiOfwW9/m5+O+Uh8SS7BnvASi/JlSHvB12I2/B9h7JrZiBb7BHBzuXzusA/3K1+J5BORKzMZX1Xy99b4cX1afpCyfdyHQqzzNFvAovwCbsAhpyrjyMe7HjwV0Lt7HPNx5sjK0OdCrPOCP4NkCfAELK2bf41Jkfb5P/dOgScSLuB3Lql/+Y8JYBPqVJ3ZpwIDE/gU4ii2VijuwAwdwXcUwzbgfc3EXXh+2BLE3YIlav/J0/U0FnhRs49+RnrynPJ8WgT8wvQilRCGV34ZyIDX7AH/VwGmUx/4G/MlSn5il0x/H2VhTjuRzyC3H16OmIA5E3XdVt0n1fnORCljsjvKVRXJi9cfD5U4sfxppxHvwRvXFUA5kURT8Uw3X5D81D/j2GrcNeJotpUkJsiYdH/AQT1NmXUr5v6ctBXEi4Jl8KUejPLM+TZmNQzRNGfCsidrNBf5arfmly1kQ8Mz822rjx3pqu742DpHEbHUpXFqz4bw6A0JwIHhIDXIgEy6ZD1AszXucSJ1D5IFS/jJWFcFk/wkkelGeA2jgKdg4MojAtIrPRQWebs7Mvx7v1YBpTrnY3qQgDZfvW5W3EcglYy++7YtPCKUsIRMX0lhNIwZ8aOVtBFLLzPs3cXdZ3PwnZWjK1xvBkZS3EcjszoYf4gZkqvU+id1DdSTn88jK2wjMwic1B26sW0/zn8QuJ95T1ZSdlLcRSIzeLvU/1bmQQyXRTM4zjrOms/I2Avl9Bl6py0ZutolU4pmDJdEMeMqQy2fnp20SXlaKF+MSHKrr1bt4py4hncHHGkTj2nSUP7c5MMpendaeJnACoIjAIfKPP90AAAAASUVORK5CYII="

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD9klEQVRYR8XXVah1VRQF4O+3C2zEQBGxsF7seBBbsVsRscVuMREURcVEEWzsDuxGsBXERBERRQU7wMJkXOaWfQ771P9y59O9a68Ya8wxx1xnhmmOGdN8vkkBLIt1sDGWw0L4Fz/gYzyHl/HpuBcbF8ASOAw7YwXMUgf/VQfNxtRl/sEHuBo34OdRQEYByPctcSFWwqz4CO/ibXxZBy+O1bEqlsefeB7H4Z1hIIYByC0PwAVYAF/gUtyHT4qB9t7ZKynaCcdgyUrLUXisY/7U2kEAMr4VbsLCeBWH1q1D87AI8DVwVenlc+yLZ7sWDQKwSC1YrSjcsW7T3iMHzVUDv1f+29/Dxl1YE29hU3zbD2IQgJNxDn7DrniitTAHZ9NtsH6NR/kP440+IGsV/fPjtEpnD4YuACmt5GztUvPhaNQ+J47HsVgQv1Ya58V3uAQX4Y86JaKNbo7A6yXo7/uF08/KJri/BqODF1sTIqjzq7yy8dMIqL2xO+ZG2Lu8tWaDulCGkspnRgHIIZcVnSnB3CyR8koqIsqDKr/NXknLHiW8zN+iyjXfw+jjSDqO7gPXWQWp+RMK9dYttDngttps+6r19mVmx4NF8164o/Xx0aqq7H3SKAauw/64F7u0JsdUkt/kOX93xcWlj+gkfzdxT7no9eUt/3/oEuEViPCeLNRN3Yf2WOwt2GcAgPhGvh2Ma2pO0hNRb44rS5BDAZyCc/Fa0ZlGk0jJZaOoeNuy4zaOVaoUk/OI96X6mGqJBlJVp+K8USmIlcZAvi7U8f1EchwG4mpv4szqfCnRlYvy9XAjDmlpJGYWAItht7LyoQykoTyCpXEgookm0hXzf1wttf5+eUTTmlOW6R9pUk3k/2urf4SZD0cxMAcimtAcHaR2YzhNhOK05u0KZMY/w0OV47bRzIMHsBnuxJ79TWmQFUf9N5etxmSySX8kt8vUYAD0OFyN74Bbyy1j6WG2JwYBCPKwEMrSCeP7jSF1YOkcimHlwLygooE8ZtpMTi0a9h6IhebmoTwGckaH+QwCE8GejROLmRhXUxVjMZBJqd90xDhX2u1+uHvM64fuPMnSrvOgOb2jXY9kIBPSRpPDpOCrajo9zaQDUJpZ1qTsIswY00+DgI96E2Zd3oJJxYr1LAsTTw3YMGrPzfMce6/y3lN244qwf96GuB1L4ZvqaklH+1Uc2tNFF62nW+o/D5ShMQ4DzQYblROGkV+QnpH8JqKTPDryMHmh2nWe5yNjEgDZLGnIodFERPpKnbAu/q5ekJ4fXxgrJgXQCPOssun56pQfq03nlTTyx0gb2cwAyPrUeUzqyNosvT9mk59pE8XMApjokGGTpx3AfziU1yHlGs+kAAAAAElFTkSuQmCC"

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "article-container"
  }, [_c('div', {
    staticClass: "article-content__container"
  }, [_c('div', {
    staticClass: "article-content__wrapper"
  }, [_c('div', {
    staticClass: "article-container__title"
  }, [_vm._v(_vm._s(_vm.article.title))]), _vm._v(" "), _c('div', {
    staticClass: "video-wrap"
  }, [(_vm.article.videoPath) ? _c('video', {
    staticClass: "video-wrap__controls",
    attrs: {
      "src": _vm.videoUrl + _vm.article.videoPath
    }
  }) : _vm._e()]), _vm._v(" "), _c('ql-container', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('ql-editor', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "article-content",
    domProps: {
      "innerHTML": _vm._s(_vm.article.detail.html)
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "article-attachment"
  }, [_c('div', {
    staticClass: "attach-item",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.loactionHandle
    }
  }, [_c('div', {
    staticClass: "attach-item__header"
  }, [_c('div', {
    staticClass: "attach-item__image"
  }, [_c('image', {
    attrs: {
      "src": _vm.locationIcon
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "attach-item__text"
  }, [_vm._v("地点")])]), _vm._v(" "), (_vm.locationInfo.title) ? _c('div', {
    staticClass: "attach-item__text item-info"
  }, [_vm._v(_vm._s(_vm.locationInfo.title))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "attach-item",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.attachHandle
    }
  }, [_c('div', {
    staticClass: "attach-item__header"
  }, [_c('div', {
    staticClass: "attach-item__image"
  }, [_c('image', {
    attrs: {
      "src": _vm.attachmentIcon
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "attach-item__text"
  }, [_vm._v("附件")])]), _vm._v(" "), (_vm.attachInfo.length > 0) ? _c('div', {
    staticClass: "attach-item__text item-info"
  }, [_vm._v("共 " + _vm._s(_vm.attachInfo.length) + " 件")]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "ptf-release__footer"
  }, [_c('div', {
    staticClass: "ptf-release__opera"
  }, [_c('div', {
    staticClass: "release-opera__save",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.editHandle
    }
  }, [_vm._v("编辑")]), _vm._v(" "), _c('div', {
    staticClass: "release-opera__submit",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.saveHandle
    }
  }, [_vm._v("提交审核")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-646ba8fd", esExports)
  }
}

/***/ })

},[872]);