require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(308);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_dc37d454_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(386);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(309)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dc37d454"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_dc37d454_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/articleDetails/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc37d454", Component.options)
  } else {
    hotAPI.reload("data-v-dc37d454", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 309:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CustomHeader_index__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CustomMask__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_image_header_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_image_header_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_image_header_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_image_article_attach_png__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_image_article_attach_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_image_article_attach_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_image_article_location_png__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_image_article_location_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_image_article_location_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_comment__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_article__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_likes__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_focus__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_looks__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_except__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_crypto_js__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_crypto_js__);



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
//
//
//
//
//














/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    CustomHeader: __WEBPACK_IMPORTED_MODULE_3__components_CustomHeader_index__["a" /* default */],
    CustomMask: __WEBPACK_IMPORTED_MODULE_4__components_CustomMask__["a" /* default */]
  },
  data: function data() {
    return {
      defaultExcept: [{
        key: 0,
        value: 1
      }, {
        key: 1,
        value: 10
      }, {
        key: 2,
        value: 5
      }, {
        key: 3,
        value: 20
      }],
      locationIcon: __WEBPACK_IMPORTED_MODULE_7__assets_image_article_location_png___default.a,
      attachIcon: __WEBPACK_IMPORTED_MODULE_6__assets_image_article_attach_png___default.a,
      headerIcon: __WEBPACK_IMPORTED_MODULE_5__assets_image_header_png___default.a,
      isExcept: false,
      customNum: '',
      isCustom: false,
      isComment: false,
      articleDetail: {},
      articleId: '',
      commentText: '',
      articleComment: [],
      commentObj: {},
      videoUrl: 'https://sr-1300007333.file.myqcloud.com/video/',
      maskActive: 0,
      exceptMoney: 100,
      danmuList: [],
      durationTime: '',
      currentTime: ''
    };
  },

  watch: {
    durationTime: function durationTime(val, oldVal) {
      console.log(val, oldVal, this);
      // 构造弹幕数组
      var danmuListArr = [];
      this.articleComment.forEach(function (element) {
        var temp = {};
        temp.text = element.content;
        temp.time = element.time | Math.floor(Math.random() * (1 - val) + val);
        danmuListArr.push(temp);
      });
      this.danmuList = danmuListArr;
    }
  },
  mounted: function mounted() {
    var id = this.$route.query.id;

    this.articleId = id;
    // 获取文章信息
    this.fetchDetailData(id);
    // 获取文章评论
    this.fetchComments(id);
  },

  methods: {
    fetchDetailData: function fetchDetailData(id) {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_9__api_article__["b" /* getArticleById */])(id).then(function (detailData) {
        var data = detailData.data;

        console.log(data);
        _this2.articleDetail = data;
        _this2.looksHandle(data);
      });
    },
    locationHandle: function locationHandle(address) {
      var _address$location = address.location,
          lat = _address$location.lat,
          lng = _address$location.lng;

      wx.openLocation({
        latitude: lat,
        longitude: lng,
        scale: 18
      });
    },
    attachHanlde: function attachHanlde(item) {
      console.log('预览附件', item);
      var attach = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(item);
      this.$router.push({ path: '/pages/attachment/main', query: { type: 'download', attach: attach } });
    },
    videoChangeHandle: function videoChangeHandle(e) {
      var _e$mp$detail = e.mp.detail,
          duration = _e$mp$detail.duration,
          currentTime = _e$mp$detail.currentTime;

      this.durationTime = parseInt(duration);
      this.currentTime = parseInt(currentTime);
    },
    fetchComments: function fetchComments(articleId) {
      var _this3 = this;

      Object(__WEBPACK_IMPORTED_MODULE_8__api_comment__["b" /* postCommentsById */])(articleId).then(function (resComm) {
        var code = resComm.code,
            list = resComm.data.list;

        if (code === 0) {
          _this3.articleComment = list;
        }
      });
    },
    commCancelHandle: function commCancelHandle() {
      this.commentText = '';
      this.isComment = false;
    },
    publishHandle: function publishHandle(formData) {
      var _this4 = this;

      var id = this.articleId;
      var value = formData.mp.detail.value;

      var byCriticsTemp = '';
      var commentIdTemp = null;
      try {
        byCriticsTemp = this.commentObj.critics._id;
        commentIdTemp = this.commentObj._id;
        console.log(byCriticsTemp, commentIdTemp);
      } catch (error) {}
      var reqData = {
        article: id,
        critics: Object(__WEBPACK_IMPORTED_MODULE_14__utils_auth__["b" /* getUser */])(),
        byCritics: byCriticsTemp,
        commentId: commentIdTemp,
        content: value.commText
      };
      Object(__WEBPACK_IMPORTED_MODULE_8__api_comment__["a" /* postComments */])(reqData).then(function (resData) {
        var code = resData.code;

        if (code === 0) {
          _this4.fetchComments(_this4.articleId);
          _this4.commentText = '';
          _this4.isComment = false;
        }
      });
    },
    exceptHandle: function exceptHandle(key, val) {
      this.isCustom = false;
      this.maskActive = key;
      this.exceptMoney = val;
    },
    customExceptHandle: function customExceptHandle() {
      this.exceptMoney = '';
      this.maskActive = 0;
      this.isCustom = true;
    },
    maskBtnHandle: function maskBtnHandle() {
      var _this = this;
      this.isCustom = false;
      console.log(_this.exceptMoney);
      var money = Number((_this.exceptMoney * 100).toFixed(2));
      console.log(money);
      Object(__WEBPACK_IMPORTED_MODULE_9__api_article__["e" /* postWeChatPay */])({
        price: money,
        orderInfo: money / 100 + ' \u4E66\u7B7E\u6253\u8D4F'
      }).then(function (resData) {
        _this.paySign(resData);
      });
    },
    paySign: function paySign(weChatData) {
      var code = weChatData.code,
          _weChatData$data = weChatData.data,
          nonceStr = _weChatData$data.nonceStr,
          appId = _weChatData$data.appId;

      var _this = this;
      if (code !== 0) {
        return false;
      }
      var timestampStr = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(new Date().getTime());
      var paySignStr = __WEBPACK_IMPORTED_MODULE_15_crypto_js___default.a.MD5('appId=' + appId + '&nonceStr=' + nonceStr + '&package=' + weChatData.data.package + '&signType=MD5&timeStamp=' + timestampStr + '&key=cdsrsoft2019cdsrsoft2019cdsrsoft').toString();
      wx.requestPayment({
        nonceStr: nonceStr,
        package: weChatData.data.package,
        signType: 'MD5',
        timeStamp: timestampStr,
        paySign: paySignStr,
        success: function success(res) {
          Object(__WEBPACK_IMPORTED_MODULE_13__api_except__["b" /* postExcept */])({
            user: Object(__WEBPACK_IMPORTED_MODULE_14__utils_auth__["b" /* getUser */])(),
            article: _this.articleDetail._id,
            writer: _this.articleDetail.user._id,
            price: Number((_this.exceptMoney * 100).toFixed(2))
          }).then(function (resData) {
            console.log('订单记录成功', resData);
          });
          wx.showToast({
            title: '支付成功',
            icon: 'success',
            duration: 2000
          });
          _this.exceptMoney = 1;
          _this.maskActive = null;
          _this.isCustom = false;
          _this.isExcept = false;
        },
        fail: function fail(res) {
          console.log(res);
          wx.showToast({
            title: '支付失败',
            icon: 'success',
            duration: 2000
          });
        }
      });
    },
    replyHandle: function replyHandle(item) {
      this.isComment = true;
      this.commentObj = item;
    },
    commentHandle: function commentHandle() {
      this.commentObj = {};
      this.isComment = true;
    },
    likesHandle: function likesHandle(article) {
      var _id = article._id;

      var payload = {
        user: Object(__WEBPACK_IMPORTED_MODULE_14__utils_auth__["b" /* getUser */])(),
        article: _id
      };
      Object(__WEBPACK_IMPORTED_MODULE_10__api_likes__["b" /* postLikes */])(payload).then(function (articleData) {
        console.log(articleData);
      });
    },
    looksHandle: function looksHandle(article) {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _id, payload;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _id = article._id;
                payload = {
                  user: Object(__WEBPACK_IMPORTED_MODULE_14__utils_auth__["b" /* getUser */])(),
                  article: _id
                };
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_12__api_looks__["b" /* postLooks */])(payload);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this5);
      }))();
    },
    focusHandle: function focusHandle(article) {
      var _this6 = this;

      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _id = article._id;

      var payload = {
        user: Object(__WEBPACK_IMPORTED_MODULE_14__utils_auth__["b" /* getUser */])(),
        article: _id,
        focus: type
      };
      Object(__WEBPACK_IMPORTED_MODULE_11__api_focus__["a" /* postFocus */])(payload).then(function (articleData) {
        var code = articleData.code;

        if (code === 0) {
          // 重新请求数据
          _this6.fetchDetailData(_this6.articleId);
        }
      });
    },
    clickMaskHandle: function clickMaskHandle() {
      this.isCustom = false;
      this.isExcept = false;
    }
  }
});

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAFj0lEQVRIS41WbWyWZxk9576f9+1bZHSFQkt5C2TrPmRoaCmtfJR20aUyl5gsGyYoDhMzo0gyAkF/vv/8YcwwfiRzmSQwt1g2tbhEXFwm7dpCKRQm2eaM0gXK+GxJP+j78dzXMc9LWDaDY9fP53muc+7r45z7Ie4U3bn08pnr9SHyq0g0Afw8oCyAqiRV0CTlxkS9C9qwKXViLH32Q2w+GJL3/FT87id9djZb55xbAbJF0n0EakBUSkqRTPJLkAogr0g6E4ABV6H3zr8zMonc3+NPJWh4+Yf1sMxGSB0EGiEVQfzbpPcBNwFXLmE+gQch3UOyCOpkiNELFN4eq7x8/fYEuZxbdP/EwoyxXfBfA/QgwAlIw4IfKOaLI5cbq68l1S8fnalR2taZcT2oh0gGyQbo9Kd4qursbQlq9+9elKbWEdgkoAnUhKS/iexTiC/kva6P91ycwcGDAQKXvfhMnSHVSNpjgjoBnpfs+aKvHPkkQS7n6lZcW5AqpNaSTMBXEJgEOGDCoHOakmkJyWozTHmG0VDg6PnvPjuO7ifTDaVlj0P6PoVI1At0OvYJgvqXdtWkAtvM2VcproY4IdgbgjsJhIyjWyVgDYHFgPIAjkt67Vy2ahAP5+KlB3Y9AocdEGokvQLH4ZsEzz2dqq2cV52CtZDYBHIlpRsC+514VJQHsQHC6vJ6UnMAzBc4KuAPXuGVD7bu/TC7f2eHc347YPUQ/iz6EeLNXFR7bnp+KmKzs9AFsFXAFKU3YXYiuKjCU62CWkHmCZ0yUU5qE3AXwD55/h5R+BeLaCfcdgm1gLrLFVR3/6gqUyjcG9E9TrBNRCA0KGlQcJ7QeoDNFGJQgwCGDKp1co+KqIHhLYmHGOevIp3pArXt1gwEHWfDy3vqYeELNG1BWUQ6ZtBx56JIZm0JKYACpD44d4KGClEbALRBuGZUjwKG5P3CSPZ1Ee0ALpjCb12UHuHCfT+oS2Uy90QBHVKiTJ0hYRTXGss9N1LHANevIO+IjZYMmihC7Au0I0pKBTtBtQMSwH5Y3FNE+izrn3t6TqicNzflQq1zrspCUr5a4NwaQSUAb8E4LBqdY5vA9VQSPEKGI4IvJm0UsAnAPIK9kr02w/j0+DcXTH+0ptnunZWK/SoX9BiJNhCU4SgcegkGSOsEfAmAAzlE2RGzME3vmwl8GWI9gH9K+qOPrXf0O3uv3zI7Zrt3ZlBEI8UukF8h4CH2y2nwJritkbCx/BxuAFC/YHmSqwU+TKlG5Ntw+KsL4dgHW/deLLtU4qa1+3d/zgc1RGl0SeygVCXgKD3+Epc0E/nybDoIzQF5kkBvMLtB51oIdQqsgfAuPA5ZKd839tSvxm+BlwmWvLgjS0t9keRWUg0Sh5wPB+NS6X2m0isZ+A2SSwWdct4NyuIC5JsFdAKohjgC2GFf4YdGN//00sfBywSLDzzTnJJvgdO3IRbk+Py56clXUT1hS2aXtHofdUoWAfwHhFmUN0vtIKtBnYHh0Md7/r/3C7MHdncS1kzyCQhXFeyX57Y9+3ryYV33joVRXLHYlTRPTvPp0ARxg6C5AE/S7HA+sqHLW36enPy2waUv7dpghiYnbAZUMHBfYXK258r2X08nGTUv7Lmr0ocmRHiEwFoBc0mcDsZDqTjuv7Ut/5eg/sCeB7xKTXB8KnFBOL4uWI/R/ceiIv1sRSOddSUCA5hJVA7wcJxOD1/c/JMrd7rSufR3P642FO5zck8ISIY9KeA9SBdlikg0EHwAxFwB7yQiusF4YPxbv5i8E/hNHeRyUf39U3d7s2bQtQJ4iDfdMA1RIPIQLiXgdByKqVMXtvzs6mcB/+ivYvm+bZlitGiZY2k14dY5caWoBULZWS8BPG2wwaikkdHijTF87zeJhXym+C8zpOzw5nYUVgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAADlUlEQVQ4T32UbYhUZRTH/+c+lxlccG0pRT9IhZVCUQjCflLCLAmk+lBbRJRbM/d5uOsOFFQf8sNQBoERceHufZ7BXQyJYCBwe8MKIzIoMSRQisqKiN7ImjTS5uXeE+dyZxm3Gc+HYe7hPL/7nP//nEsYEo1GY0eWZbsBbCGi9VLCzD8S0QlmPmiMObr8GA0m5ubmNiqlXgEw2c8zc0/+E5E/UPsJEe0OguDrfm4JZK3dRkRvAVgJ4GcAc0T0tlLqWylO03RDlmW7iCgEsI6Zzyuldlar1U/zF8lPcZMTBeRQu93eU6vVzg9r2zm3CoAF8ACAc0qpLZVK5UwOcs4JdZKZXzXGPDQIqNfreUv1ej1vsR/OuSaA+wB8rLXeSkmS7PI8700AvwLYoLW+IMVxHF+nlHqJiLYWYh9L0/SJmZmZM/I8Pz+/stfrfQfgKiK6nZxzr8k1mflJY8yLUmStvZ6IjgOYYOasENsD0GLmSWPMN0UnzwDYJ04K6HsA16RpuikMw6+KgkUAdzHzYrfbDcfGxtDr9RLJAXhDa3138cJbiOhzAF8K6B8AfqlUWjU9Pf1vs9lUrVbrLwAr2u32ulqt9rsciqJodblc/gXAxYmJiSumpqbSKIrGy+XynwAukLX2byJaAeBKrfW5QRCAtVrrs6NAhYN/CFxAJ4loMzPv6E9so9E4zMxy/cNZlu0RkFIqlhwRLQZBcI/kZAOY+X0An0lr+wCIaAe01tXlYsssFparIWLPA3iUmZ8lsdn3fXHhYrvdvrqviTgHYD8R3VrY/yEAcTZ3LEmSNZ7n/QCgrJS6tj+QuUsAXtZaPz44eKKZPIu4g3lrbUREswBe11rfm4OSJNnsed5JAF3P8zZWq1UZiZHhnNsE4LRIx8w3GmO+WFpa59xBAI8AeE9rvfNyIGvtUSLaLnprrXU+sP0DCwsLq7vdroz/OBE9HATBoWEwa+1jRHQAwNk0TW8Iw7B1CahwKyAiJ+50Op2bZmdn5XOyFHEcr/d9X1oaZ+YHjTGyXnlc8mGThHPuXQB3MPMHxpjblgn8kSzx4CyNBMVxvNb3/VOy1QD2aq2fL4bvOWbeC+AnpdTNlUpFVmMp/nej4tCdzPxOUbU9y7KS53lH5DlN021hGB5brt9QUAF7gZmfBvBbIcEaAE9prfcPM2EkqBD/CBHlo8DMTWPM/aPG4rKgKIrKpVLJyOFOp2NrtVp7FOg/x1+gj7V+CzEAAAAASUVORK5CYII="

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = postFocus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_request__ = __webpack_require__(23);




function postFocus(payload) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_2__utils_request__["a" /* default */].post('/v1/focus', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, payload)).then(function (res) {
      resolve(res);
    }).catch(function (e) {
      reject(e);
    });
  });
}

/***/ }),

/***/ 386:
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
  }, [_vm._v("\n        " + _vm._s(_vm.articleDetail.title) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "article-container__user"
  }, [_c('div', {
    staticClass: "article-wrapper__userInfo"
  }, [_c('div', {
    staticClass: "container-user__avatar"
  }, [(_vm.articleDetail.user) ? _c('img', {
    attrs: {
      "src": _vm.articleDetail.user.avatarUrl
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "container-user__name"
  }, [(_vm.articleDetail.user) ? _c('div', {
    staticClass: "user-name__text"
  }, [_vm._v(_vm._s(_vm.articleDetail.user.nickName))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "user-name__date"
  }, [_vm._v(_vm._s(_vm.articleDetail.updateAt))])])]), _vm._v(" "), (_vm.articleDetail.focus) ? _c('div', {
    staticClass: "article-wrapper__onFocus",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.focusHandle(_vm.articleDetail)
      }
    }
  }, [_vm._v("已关注")]) : _c('div', {
    staticClass: "article-wrapper__focus",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.focusHandle(_vm.articleDetail, true)
      }
    }
  }, [_vm._v("关注")])]), _vm._v(" "), (_vm.articleDetail.resourceType === 1) ? _c('video', {
    attrs: {
      "play-btn-position": "center",
      "src": _vm.videoUrl + _vm.articleDetail.cover,
      "danmu-list": _vm.danmuList,
      "danmu-btn": "",
      "enable-danmu": "",
      "eventid": '2'
    },
    on: {
      "timeupdate": _vm.videoChangeHandle
    }
  }) : _vm._e(), _vm._v(" "), _c('ql-container', {
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
      "innerHTML": _vm._s(_vm.articleDetail.content)
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "user-info"
  }, [_c('div', {
    staticClass: "info-location"
  }, [_c('image', {
    attrs: {
      "src": _vm.locationIcon
    }
  }), _vm._v(" "), (_vm.articleDetail.location) ? _c('span', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.locationHandle(_vm.articleDetail.location)
      }
    }
  }, [_vm._v(_vm._s(_vm.articleDetail.location.address))]) : _c('span', [_vm._v("暂无")])]), _vm._v(" "), (_vm.articleDetail.attachs && _vm.articleDetail.attachs.length > 0) ? _c('div', {
    staticClass: "info-attach",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.attachHanlde(_vm.articleDetail.attachs)
      }
    }
  }, [_c('image', {
    attrs: {
      "src": _vm.attachIcon
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.articleDetail.attachs[0].size || 0) + "MB")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "article-user__wrapper"
  }, [_c('div', {
    staticClass: "content-user__title"
  }, [_vm._v("\n        " + _vm._s(_vm.articleDetail.individSignature) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "content-user__avatar"
  }, _vm._l((_vm.articleDetail.lookList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "user-avatar__item",
      class: 'avatar-item-' + (index + 1)
    }, [_c('img', {
      attrs: {
        "src": _vm.headerIcon
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "content-user__except",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.isExcept = true
      }
    }
  }, [_vm._v("\n        打赏\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "article-comment__wrapper"
  }, [(_vm.articleComment.length > 0) ? _c('div', {
    staticClass: "article-comment__nav"
  }, [_vm._v("评论（" + _vm._s(_vm.articleComment.length) + "条）")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.articleComment), function(commItem, index) {
    return _c('div', {
      key: index,
      staticClass: "comment-wrapper__item"
    }, [_c('div', {
      staticClass: "comment-user__avatar"
    }, [_c('img', {
      attrs: {
        "src": commItem.critics.avatarUrl
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "comment-user__content"
    }, [_c('div', {
      staticClass: "comment-item__user"
    }, [_c('div', {
      staticClass: "item-user__name"
    }, [_vm._v(_vm._s(commItem.critics.nickName))]), _vm._v(" "), _c('div', {
      staticClass: "item-user__reply",
      attrs: {
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.replyHandle(commItem)
        }
      }
    }, [_vm._v("回复")])]), _vm._v(" "), _c('div', {
      staticClass: "comment-item__text"
    }, [_vm._v(_vm._s(commItem.content))]), _vm._v(" "), (commItem.comments.length > 0) ? _c('div', {
      staticClass: "user-item__comments"
    }, _vm._l((commItem.comments), function(replyItem, reIndex) {
      return _c('div', {
        key: reIndex,
        staticClass: "reply-comments__item"
      }, [_c('div', {
        staticClass: "reply-comments__name"
      }, [_vm._v(_vm._s(replyItem.critics.nickName) + "：")]), _vm._v(" "), _c('div', {
        staticClass: "reply-comments__comment"
      }, [_vm._v(_vm._s(replyItem.content))])])
    })) : _vm._e()])])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "footer-wrapper"
  }, [_c('div', {
    staticClass: "footer-input__box",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.commentHandle
    }
  }, [_c('input', {
    staticClass: "wrapper-input__item",
    attrs: {
      "placeholder": "我来说两句",
      "disabled": "",
      "type": "text"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "footer-wrapper__btn"
  }, [_c('div', {
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.likesHandle(_vm.articleDetail)
      }
    }
  }, [_vm._v("喜欢")]), _vm._v(" "), _c('div', [_vm._v("分享")])])])]), _vm._v(" "), (_vm.isExcept) ? _c('custom-mask', {
    attrs: {
      "eventid": '13',
      "mpcomid": '2'
    },
    on: {
      "clickMask": _vm.clickMaskHandle
    }
  }, [_c('div', {
    staticClass: "mask-content__wrapper"
  }, [_c('div', {
    staticClass: "mask-content__header"
  }, [_c('img', {
    attrs: {
      "src": _vm.headerIcon
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "mask-content__title"
  }, [_vm._v("一杯咖啡，一篇好文章")]), _vm._v(" "), _c('div', {
    staticClass: "mask-content__tags"
  }, [_vm._l((_vm.defaultExcept), function(exceptItem, index) {
    return _c('div', {
      key: index,
      staticClass: "mask-tag__item",
      class: _vm.maskActive === exceptItem.key ? 'mask-tag__active' : '',
      attrs: {
        "eventid": '9_' + index
      },
      on: {
        "click": function($event) {
          _vm.exceptHandle(exceptItem.key, exceptItem.value)
        }
      }
    }, [_vm._v("\n          " + _vm._s(exceptItem.value) + "书签\n        ")])
  }), _vm._v(" "), _c('div', {
    staticClass: "mask-tag__item"
  }, [(_vm.isCustom) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.exceptMoney),
      expression: "exceptMoney"
    }],
    attrs: {
      "type": "digit",
      "eventid": '11'
    },
    domProps: {
      "value": (_vm.exceptMoney)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.exceptMoney = $event.target.value
      }
    }
  }) : _c('span', {
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.customExceptHandle
    }
  }, [_vm._v("自定义打赏")])])], 2), _vm._v(" "), _c('div', {
    staticClass: "mask-content__btns",
    attrs: {
      "eventid": '12'
    },
    on: {
      "click": _vm.maskBtnHandle
    }
  }, [_vm._v("\n        好文章，插个书签\n      ")])])]) : _vm._e(), _vm._v(" "), (_vm.isComment) ? _c('custom-mask', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('div', {
    staticClass: "mask-comment__wrapper"
  }, [_c('form', {
    attrs: {
      "eventid": '15'
    },
    on: {
      "submit": _vm.publishHandle
    }
  }, [_c('div', {
    staticClass: "mask-comment__header"
  }, [_c('div', {
    staticClass: "mask-header__cancel",
    attrs: {
      "eventid": '14'
    },
    on: {
      "click": _vm.commCancelHandle
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "mask-header__public",
    attrs: {
      "form-type": "submit"
    }
  }, [_vm._v(" 发布 ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mask-comment__text"
  }, [_c('textarea', {
    attrs: {
      "name": "commText",
      "auto-focus": "",
      "maxlength": 500
    }
  })])])], 1)]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dc37d454", esExports)
  }
}

/***/ })

},[307]);