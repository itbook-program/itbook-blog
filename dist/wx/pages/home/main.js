require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(774);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a846fd6e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(783);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(775)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a846fd6e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a846fd6e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a846fd6e", Component.options)
  } else {
    hotAPI.reload("data-v-a846fd6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 775:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CustomHeader_index__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_search_png__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_search_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_image_search_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_swiperCover_png__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_swiperCover_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_image_swiperCover_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_like_png__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_like_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_image_like_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_image_header_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_image_header_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_image_header_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_image_view_png__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_image_view_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_image_view_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_article__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_login__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_user__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vuex__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_noLogin_vue__ = __webpack_require__(778);

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
//
//














/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    CustomHeader: __WEBPACK_IMPORTED_MODULE_1__components_CustomHeader_index__["a" /* default */],
    nologinView: __WEBPACK_IMPORTED_MODULE_12__components_noLogin_vue__["a" /* default */]
  },
  created: function created() {
    this.navBarTop();
  },
  mounted: function mounted() {
    var _this = this;
    var _id = this.userInfo._id;

    if (!Object(__WEBPACK_IMPORTED_MODULE_10__utils_auth__["a" /* getToken */])() || !Object(__WEBPACK_IMPORTED_MODULE_10__utils_auth__["b" /* getUser */])()) {
      this.noLogin = true;
      wx.hideTabBar({
        animation: true
      });
    } else if (!_id) {
      this.fetchUserInfo();
    }
    this.fetchArticle();
    // 小程序登陆态检查
    wx.checkSession({
      fail: function fail() {
        // session_key 已经失效，需要重新执行登录流程
        console.log('session_key失效');
        _this.loginAuth();
      }
    });
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_11_vuex__["c" /* mapState */])({
    userInfo: function userInfo(state) {
      return state.user.userInfo;
    },
    socket: function socket(state) {
      return state.chat.socket;
    }
  })),
  data: function data() {
    return {
      viewIcon: __WEBPACK_IMPORTED_MODULE_6__assets_image_view_png___default.a,
      likeIcon: __WEBPACK_IMPORTED_MODULE_4__assets_image_like_png___default.a,
      headerIcon: __WEBPACK_IMPORTED_MODULE_5__assets_image_header_png___default.a,
      swiperCover: __WEBPACK_IMPORTED_MODULE_3__assets_image_swiperCover_png___default.a,
      searchIcon: __WEBPACK_IMPORTED_MODULE_2__assets_image_search_png___default.a,
      navHeight: 0,
      navTop: 0,
      noLogin: false,
      listData: [],
      videoUrl: 'https://sr-1300007333.file.myqcloud.com/video/'
    };
  },
  onPullDownRefresh: function onPullDownRefresh() {
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 2000);
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_11_vuex__["b" /* mapMutations */])({
    setUserInfo: 'SET_USER_INFO'
  }), {
    fetchUserInfo: function fetchUserInfo() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_9__api_user__["b" /* getUserInfo */])({ id: Object(__WEBPACK_IMPORTED_MODULE_10__utils_auth__["b" /* getUser */])() }).then(function (user) {
        var code = user.code,
            data = user.data;

        if (code === 0) {
          _this2.setUserInfo(data);
          // 连接socket
          _this2.connentSocket();
        }
      });
    },
    fetchArticle: function fetchArticle() {
      var _this3 = this;

      Object(__WEBPACK_IMPORTED_MODULE_7__api_article__["a" /* getArticle */])().then(function (resData) {
        var code = resData.code,
            list = resData.data.list;

        if (code === 0) {
          console.log(list);
          _this3.listData = list;
        }
      });
    },
    navBarTop: function navBarTop() {
      var _wx$getMenuButtonBoun = wx.getMenuButtonBoundingClientRect(),
          height = _wx$getMenuButtonBoun.height,
          top = _wx$getMenuButtonBoun.top;

      this.navHeight = height;
      this.navTop = top;
    },
    detailHandle: function detailHandle(artItem) {
      var _id = artItem._id;

      this.$router.push({ path: '/pages/articleDetails/main', query: { id: _id } });
    },
    loginAuth: function loginAuth() {
      var _this = this;
      // 获取小程序code
      wx.login({
        success: function success(res) {
          if (res.code) {
            // 发起网络请求
            Object(__WEBPACK_IMPORTED_MODULE_8__api_login__["a" /* getWeChatLogin */])({ code: res.code }).then(function (resData) {
              var code = resData.code,
                  _resData$data = resData.data,
                  token = _resData$data.token,
                  user = _resData$data.user;

              if (code === 0) {
                Object(__WEBPACK_IMPORTED_MODULE_10__utils_auth__["c" /* setToken */])(token);
                Object(__WEBPACK_IMPORTED_MODULE_10__utils_auth__["d" /* setUser */])(user._id);
                _this.setUserInfo(user);
                // 连接socket
                _this.connentSocket();
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    },
    authUserInfo: function authUserInfo(res) {
      var _this4 = this;

      var _this = this;
      var _id = _this.userInfo._id;

      Object(__WEBPACK_IMPORTED_MODULE_9__api_user__["c" /* putUserById */])({ id: _id, reqData: res.userInfo }).then(function (reqData) {
        var code = reqData.code,
            data = reqData.data;

        if (code === 0) {
          _this.setUserInfo(data);
          // 连接socket
          _this.connentSocket();
          _this.noLogin = false;
          _this4.fetchArticle();
          wx.showTabBar({
            animation: true
          });
        }
      });
    },
    connentSocket: function connentSocket() {
      // 拿到用户_id
      var _id = Object(__WEBPACK_IMPORTED_MODULE_10__utils_auth__["b" /* getUser */])();
      try {
        this.$socket.emit('register', {
          target: _id,
          payload: {
            msg: '注册成功'
          }
        });

        this.$socket.on(_id, function (d) {
          console.log('home: ', d);
        });
      } catch (error) {
        console.log('注册失败');
      }
    }
  })
});

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWeChatLogin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__(23);



// 修改用户信息
function getWeChatLogin(_ref) {
  var code = _ref.code;

  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */].get('/weChat/login', {
      code: code
    }).then(function (res) {
      resolve(res);
    }).catch(function (e) {
      reject(e);
    });
  });
}

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_noLogin_vue__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1817b2c8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_noLogin_vue__ = __webpack_require__(782);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(779)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1817b2c8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_noLogin_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1817b2c8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_noLogin_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/components/noLogin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] noLogin.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1817b2c8", Component.options)
  } else {
    hotAPI.reload("data-v-1817b2c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 779:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CustomMask__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_login_bg_png__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_login_bg_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_image_login_bg_png__);
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
  props: {
    navTop: {
      type: Number,
      required: true
    }
  },
  components: {
    CustomMask: __WEBPACK_IMPORTED_MODULE_0__components_CustomMask__["a" /* default */]
  },
  data: function data() {
    return {
      loadingBg: __WEBPACK_IMPORTED_MODULE_1__assets_image_login_bg_png___default.a
    };
  },

  methods: {
    getUserInfo: function getUserInfo() {
      var _this = this;
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function success(res) {
                _this.$emit('authUserInfo', res);
              }
            });
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/login_bg.png";

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-container",
    style: ('padding-top:' + (_vm.navTop + 4) + 'px')
  }, [_c('img', {
    attrs: {
      "src": _vm.loadingBg
    }
  }), _vm._v(" "), _c('custom-mask', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "login-wrapper"
  }, [_c('div', {
    staticClass: "login-contaner__content"
  }, [_c('div', {
    staticClass: "content-title"
  }, [_vm._v("授权提醒")]), _vm._v(" "), _c('div', {
    staticClass: "content-info"
  }, [_vm._v("请授权登陆，去发现优秀的文章")])]), _vm._v(" "), _c('div', {
    staticClass: "login-contaner__button"
  }, [_c('div', {
    staticClass: "button-item"
  }, [_vm._v("取消")]), _vm._v(" "), _c('button', {
    staticClass: "button-item content-confrim",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("立即授权")])], 1)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1817b2c8", esExports)
  }
}

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.noLogin) ? _c('div', [_c('custom-header', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "header-search__container"
  }, [_c('div', {
    staticClass: "header-search__wrapper",
    style: ('height:' + _vm.navHeight + 'px')
  }, [_c('img', {
    staticClass: "header-container__search",
    attrs: {
      "src": _vm.searchIcon
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "header-container__input",
    attrs: {
      "placeholder": "输入感兴趣的关键词"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "ptf-mall__wrapper",
    style: ('margin-top:' + (_vm.navHeight + 40) + 'px')
  }, [_c('swiper', {
    staticClass: "ptf-mall__swiper",
    attrs: {
      "autoplay": true,
      "indicator-dots": false,
      "circular": true
    }
  }, [_c('swiper-item', {
    staticClass: "ptf-mall__swiperItem",
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('image', {
    staticClass: "slide-image",
    attrs: {
      "src": _vm.swiperCover
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "ptf-list__container"
  }, _vm._l((_vm.listData), function(artItem, index) {
    return _c('div', {
      key: index,
      staticClass: "ptf-list__wrapper",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.detailHandle(artItem)
        }
      }
    }, [_c('div', {
      staticClass: "list-item__title"
    }, [_vm._v(_vm._s(artItem.title))]), _vm._v(" "), _c('div', {
      staticClass: "list-item__content"
    }, [_c('div', {
      staticClass: "item-content__text"
    }, [_vm._v(_vm._s(artItem.contentText))]), _vm._v(" "), _c('div', {
      staticClass: "item-content__cover"
    }, [(artItem.resourceType === 1) ? _c('video', {
      attrs: {
        "play-btn-position": "center",
        "object-fit": "fill",
        "src": _vm.videoUrl + artItem.resource
      }
    }) : _vm._e(), _vm._v(" "), _c('img', {
      attrs: {
        "src": artItem.cover
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "list-item__opera"
    }, [_c('div', {
      staticClass: "item-opera__wrapper opera-item__name"
    }, [_c('div', {
      staticClass: "opera-opera__icon"
    }, [_c('img', {
      attrs: {
        "src": artItem.user.avatarUrl
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "opera-item__num opera-item__text"
    }, [_vm._v(_vm._s(artItem.user.nickName))])]), _vm._v(" "), _c('div', {
      staticClass: "item-opera__wrapper"
    }, [_c('div', {
      staticClass: "opera-opera__icon"
    }, [_c('img', {
      attrs: {
        "src": _vm.viewIcon
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "opera-item__num"
    }, [_vm._v(_vm._s(artItem.looks))])]), _vm._v(" "), _c('div', {
      staticClass: "item-opera__wrapper"
    }, [_c('div', {
      staticClass: "opera-opera__icon"
    }, [_c('img', {
      attrs: {
        "src": _vm.likeIcon
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "opera-item__num"
    }, [_vm._v(_vm._s(artItem.likes))])])])])
  }))], 1) : _c('nologin-view', {
    attrs: {
      "nav-top": _vm.navTop,
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "authUserInfo": _vm.authUserInfo
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a846fd6e", esExports)
  }
}

/***/ })

},[773]);