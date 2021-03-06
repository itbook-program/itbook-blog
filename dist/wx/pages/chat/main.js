require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(749);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1a051c82_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(753);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(750)
  __webpack_require__(751)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a051c82"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1a051c82_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/chat/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a051c82", Component.options)
  } else {
    hotAPI.reload("data-v-1a051c82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 750:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_header_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_header_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_image_header_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_uuid__ = __webpack_require__(126);
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




var _id = Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["b" /* getUser */])();
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      headerIcon: __WEBPACK_IMPORTED_MODULE_0__assets_image_header_png___default.a,
      speakText: '',
      messages: [
        // {
        //   id: `msg-1`,
        //   message: '可滚动视图区域。使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        //   messageType: 0
        // }
      ],
      msg: '',
      lastId: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$socket.on(_id, function (msg) {
      var payload = msg.data.payload,
          target = msg.meta.target;

      _this.messages.push({
        id: payload.id,
        message: payload.message,
        messageType: 0,
        name: target
      });
      var len = _this.messages.length;
      try {
        _this.lastId = _this.messages[len - 1].id;
      } catch (error) {}
    });
  },

  methods: {
    sendConentHandle: function sendConentHandle() {
      this.$socket.emit('chat', {
        target: 'admin',
        source: _id,
        payload: {
          id: __WEBPACK_IMPORTED_MODULE_2_vue_uuid__["b" /* uuid */].v1(),
          message: this.speakText
        }
      });
      this.messages.push({
        id: __WEBPACK_IMPORTED_MODULE_2_vue_uuid__["b" /* uuid */].v1(),
        message: this.speakText,
        messageType: 1
      });
      this.speakText = '';
      var len = this.messages.length;
      try {
        this.lastId = this.messages[len - 1].id;
      } catch (error) {}
    }
  }
});

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chat-container"
  }, [_c('scroll-view', {
    staticClass: "chat-content__list",
    attrs: {
      "scroll-y": "",
      "scroll-with-animation": "",
      "scroll-into-view": _vm.lastId
    }
  }, [_c('div', {
    staticClass: "chat-content__wrapper"
  }, _vm._l((_vm.messages), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "chat-list__item"
    }, [_c('div', {
      staticClass: "chat-user__template",
      class: item.messageType === 1 ? 'chat-user__myself' : ''
    }, [_c('div', {
      staticClass: "chat-user__content"
    }, [_c('div', {
      staticClass: "chat-user__avatar"
    }, [(item.messageType === 1) ? _c('open-data', {
      staticClass: "user-avatar",
      attrs: {
        "type": "userAvatarUrl",
        "mpcomid": '0_' + index
      }
    }) : _c('image', {
      staticClass: "user-avatar",
      attrs: {
        "src": _vm.headerIcon
      }
    })], 1), _vm._v(" "), (item.messageType === 1) ? _c('open-data', {
      staticClass: "chat-user__name",
      attrs: {
        "type": "userNickName",
        "mpcomid": '1_' + index
      }
    }) : _c('div', {
      staticClass: "chat-user__name"
    }, [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _c('div', {
      staticClass: "chat-user__msg",
      attrs: {
        "id": item.id
      }
    }, [_vm._v(_vm._s(item.message))])])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "chat-footer__wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.speakText),
      expression: "speakText"
    }],
    staticClass: "chat-footer__input",
    attrs: {
      "cursor-spacing": 15,
      "placeholder-class": "chat-footer__text",
      "placeholder": "我来说两句",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.speakText)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.speakText = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "chat-footer__send",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.sendConentHandle
    }
  }, [_vm._v("发送")])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a051c82", esExports)
  }
}

/***/ })

},[748]);