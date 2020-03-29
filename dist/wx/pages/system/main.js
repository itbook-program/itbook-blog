require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([20],{

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(929);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3c8bd2d9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(932);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(930)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3c8bd2d9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3c8bd2d9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/system/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c8bd2d9", Component.options)
  } else {
    hotAPI.reload("data-v-3c8bd2d9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 930:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  components: {},
  data: function data() {
    return {
      startTime: '',
      endTime: '',
      listData: [{
        name: '小程序版本',
        value: 'V1.0.0'
      }, {
        name: '关于我们',
        value: ''
      }, {
        name: '反馈留言',
        value: ''
      }, {
        name: '联系客服',
        value: '028-88888888'
      }, {
        name: '用户协议',
        value: ''
      }, {
        name: '退出登陆',
        value: ''
      }]
    };
  },
  onUnload: function onUnload() {},

  methods: {
    touchstartHandle: function touchstartHandle(e) {
      var timeStamp = e.timeStamp;

      this.startTime = timeStamp;
    },
    touchendHandle: function touchendHandle(e) {
      var timeStamp = e.timeStamp;

      this.endTime = timeStamp;
    },
    switchHandle: function switchHandle(index, item) {
      switch (index) {
        case 0:
          // TODO
          break;
        case 1:
          // TODO
          break;
        case 2:
          this.$router.push({ path: '/pages/feedback/main' });
          break;
        case 3:
          if (this.endTime - this.startTime < 350) {
            wx.makePhoneCall({
              phoneNumber: item.value
            });
          }
          break;
        case 4:
          // TODO
          break;
        case 5:
          // TODO
          break;
        default:
          // TODO
          break;
      }
    },
    longTapHandle: function longTapHandle() {
      this.$router.push({ path: '/pages/live/main' });
    }
  }
});

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "system-container"
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "system-content__wrap",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.switchHandle(index, item)
        },
        "touchstart": _vm.touchstartHandle,
        "touchend": _vm.touchendHandle,
        "longtap": function($event) {
          _vm.longTapHandle(index, item)
        }
      }
    }, [_c('div', {
      staticClass: "system-wrap__item"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "system-wrap__item item-value"
    }, [(item.name === '联系客服') ? _c('span', {
      staticClass: "item-telNumber"
    }, [_vm._v(_vm._s(item.value))]) : _c('span', {
      staticClass: "item-normal"
    }, [_vm._v(_vm._s(item.value))])])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3c8bd2d9", esExports)
  }
}

/***/ })

},[928]);