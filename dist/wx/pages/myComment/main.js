require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([24],{

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(836);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_127ba882_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(839);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(837)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-127ba882"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_127ba882_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/myComment/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-127ba882", Component.options)
  } else {
    hotAPI.reload("data-v-127ba882", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 837:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_header_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_header_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_image_header_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_comment__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_push__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(24);



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
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      headerIcon: __WEBPACK_IMPORTED_MODULE_3__assets_image_header_png___default.a,
      userComment: []
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["c" /* mapState */])({
    userInfo: function userInfo(state) {
      return state.user.userInfo;
    }
  })),
  mounted: function mounted() {
    var type = this.$route.query.type;

    if (type && type === 'message') {
      this.fetachMessDaeta();
    } else {
      this.fetchCommentData();
    }
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
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_push__["a" /* getPush */])({ userId: _id, type: 'comments' });

              case 3:
                _ref = _context.sent;
                list = _ref.data.list;

                _this.userComment = list;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    fetchCommentData: function fetchCommentData() {
      var _this2 = this;

      var _id = this.userInfo._id;

      Object(__WEBPACK_IMPORTED_MODULE_4__api_comment__["c" /* postCommentsByUser */])({
        user: _id
      }).then(function (comment) {
        var list = comment.data.list,
            code = comment.code;

        console.log(code, list);
        _this2.userComment = list;
      });
    }
  }
});

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment-container"
  }, _vm._l((_vm.userComment), function(userItem, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      staticClass: "comment-container__item"
    }, [_c('div', {
      staticClass: "comment-wrapper__avatar"
    }, [(userItem.critics && userItem.critics.avatarUrl) ? _c('img', {
      attrs: {
        "src": userItem.critics.avatarUrl
      }
    }) : (userItem.content.critics && userItem.content.critics.avatarUrl) ? _c('img', {
      attrs: {
        "src": userItem.content.critics.avatarUrl
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "comment-wrapper__content"
    }, [_c('div', {
      staticClass: "comment-wrapper__text"
    }, [(userItem.content && userItem.content.content) ? _c('span', [_vm._v(_vm._s(userItem.content.content))]) : (userItem.content) ? _c('span', [_vm._v(_vm._s(userItem.content))]) : _vm._e()]), _vm._v(" "), (userItem.article) ? _c('div', {
      staticClass: "comment-wrapper__info"
    }, [_c('div', {
      staticClass: "comment-wrapper__title"
    }, [(userItem.article) ? _c('span', [_vm._v(_vm._s(userItem.article.title))]) : (userItem.content.article) ? _c('span', [_vm._v(_vm._s(userItem.content.article.title))]) : _vm._e()]), _vm._v(" "), (userItem.article && userItem.article.user && userItem.article.user.nickName) ? _c('div', {
      staticClass: "comment-wrapper__name"
    }, [_vm._v(_vm._s(userItem.article.user.nickName))]) : (userItem.content && userItem.content.article && userItem.content.article.user && userItem.content.article.user.nickName) ? _c('div', {
      staticClass: "comment-wrapper__name"
    }, [_vm._v(_vm._s(userItem.content.article.user.nickName))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "comment-wrapper__opera"
    }, [_c('div', {
      staticClass: "comment-opera__num"
    }, [_vm._v("评论 (\n            "), (userItem.comments) ? _c('span', [_vm._v("(" + _vm._s(userItem.comments.length) + ")")]) : (userItem.content.comments) ? _c('span', [_vm._v(_vm._s(userItem.content.comments.length))]) : _vm._e(), _vm._v("\n            )")]), _vm._v(" "), _c('div', {
      staticClass: "comment-opera__wrapper"
    }, [_c('div', {
      staticClass: "comment-opera__del"
    }, [_vm._v("删除")]), _vm._v(" "), _c('div', {
      staticClass: "comment-opera__time"
    }, [_vm._v(_vm._s(userItem.updateTime))])])]), _vm._v(" "), ((userItem.comments && userItem.comments.length > 0) || (userItem.content.comments && userItem.content.comments.length > 0)) ? _c('div', _vm._l((userItem.content.comments), function(commentItem, commIndex) {
      return _c('div', {
        key: commIndex,
        staticClass: "comment-wrapper__other"
      }, [_c('div', {
        staticClass: "comment-other__user"
      }, [_c('div', {
        staticClass: "other-user__item"
      }, [(commentItem.critics && commentItem.critics.nickName) ? _c('div', {
        staticClass: "comment-other__name"
      }, [_vm._v("\n                  " + _vm._s(commentItem.critics.nickName) + "\n                  "), (commentItem.byCritics && commentItem.byCritics.nickName) ? _c('span', {
        staticClass: "comment-other__reply"
      }, [_vm._v("\n                    回复\n                  ")]) : _vm._e(), _vm._v("\n                  " + _vm._s(commentItem.byCritics ? commentItem.byCritics.nickName : '') + ":\n                ")]) : _vm._e(), _vm._v(" "), _c('div', {
        staticClass: "comment-other__content"
      }, [_vm._v(_vm._s(commentItem.content))])])]), _vm._v(" "), _c('div', {
        staticClass: "comment-other__opera"
      }, [_vm._v("回复")])])
    })) : _vm._e()])])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-127ba882", esExports)
  }
}

/***/ })

},[835]);