require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(866);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_99aae1f6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(871);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(867)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-99aae1f6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_99aae1f6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/positioning/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-99aae1f6", Component.options)
  } else {
    hotAPI.reload("data-v-99aae1f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 867:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_search_png__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_search_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_image_search_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_header_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_header_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_image_header_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_check_png__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_check_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_image_check_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_positioning__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_event__ = __webpack_require__(42);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      searchIcon: __WEBPACK_IMPORTED_MODULE_0__assets_image_search_png___default.a,
      checkIcon: __WEBPACK_IMPORTED_MODULE_2__assets_image_check_png___default.a,
      headerIcon: __WEBPACK_IMPORTED_MODULE_1__assets_image_header_png___default.a,
      page: 1,
      checkActive: '',
      pageSize: 20,
      searchText: '',
      location: []
    };
  },
  mounted: function mounted() {
    this.currentLocation();
  },
  onUnload: function onUnload() {
    this.page = 1;
    this.checkActive = '';
    this.pageSize = 20;
    this.searchText = '';
    this.location = [];
  },

  methods: {
    checkHandle: function checkHandle(index, data) {
      this.checkActive = index;
      __WEBPACK_IMPORTED_MODULE_4__utils_event__["a" /* default */].$emit('checkLocation', data);
      this.$router.go(-1);
    },
    currentLocation: function currentLocation() {
      var _this = this;
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          var latitude = res.latitude,
              longitude = res.longitude;

          var searchObj = {
            location: latitude + ',' + longitude,
            get_poi: 1,
            poi_options: 'address_format=' + 'short;radius=' + '5000;policy=' + '4',
            key: 'QRSBZ-WB7W4-4PKUQ-D4LTA-UUKGO-IWBRX'
          };
          var str = '';
          for (var i in searchObj) {
            str += i + '=' + searchObj[i] + '&';
          }
          Object(__WEBPACK_IMPORTED_MODULE_3__api_positioning__["a" /* getGeocoder */])(str).then(function (resData) {
            var pois = resData.result.pois;

            _this.location = pois;
          });
        }
      });
    },
    nearLocation: function nearLocation() {
      var _this = this;
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          var searchObj = {
            boundary: 'nearby(' + latitude + ',' + longitude + ',1000)',
            keyword: _this.searchText,
            page_index: _this.page,
            page_size: _this.pageSize,
            orderby: '_distance',
            key: 'QRSBZ-WB7W4-4PKUQ-D4LTA-UUKGO-IWBRX'
          };
          Object(__WEBPACK_IMPORTED_MODULE_3__api_positioning__["b" /* getSurrounding */])(searchObj).then(function (resData) {
            var data = resData.data,
                status = resData.status;

            if (status === 0) {
              _this.location = data;
            }
          });
        }
      });
    },
    searchHandle: function searchHandle() {
      this.checkActive = '';
      if (this.searchText) {
        this.nearLocation();
      } else {
        this.currentLocation();
      }
    }
  }
});

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADd0lEQVRoQ+3YW8ilcxQG8N9gHIccbuTUJJooihChKMqFoly4UO4chpzPkVLkPA7jkNwpikyNuCAp5QIRiSaHMDmmkHPOpkdr17bt/e33/d5p7/3VXrXbve3/+1/rWYdnrbWXWeKybInbbw5g2hGcR2AegY4emKdQRwd2fn1WI7AXrsdp2I5/6f5VnIUP+lHPIoCdcFF9ditjP8dVWIdfZxnAVuX127F3Gfot7sBa/DSYc7MUgdhyFB7EQZU2v+FRXIcvhxXMLAFYhXtxArbA33gR5+PdUdU+KwB2x004A9vgH2zAeXipnodimAUAO5ShV2PXvqLN8+P4YyGunTaALXEy7sLKyvsfcDfW4PtxjWKaAKL7sCraQyrv/8STuBKfjjM+v08TwL5VtCchkUjRvoJz8c5CeT8LfSANKtR4NrYvY9/DhXihwDQJwMgIhMZ6EkbIZ3PJtjgTNyDsEwnHX4vHEO5vLMNSaAWOwI51S1gg88eHbTwzwoI4JimTIt2vUvhnPIBbkK7bSoYByCB1azWUnuffwiXFza0U9B2OroPxEA6vov0Lz+BibFzMxcMALMfRuB8HlJd+L04ON3+xGEXYB3fiVGTmSdG+jtV4c7FpOoqFekPVbaU4Nn9XQ1Xa/Y8tQeyCy3FBpWYi+1EV7bNdUnMhGk0NZKy9DDuXwZ8UR2esDWc3ka1rRLgRe9QLXyPPD+OXJpeMOjOuD0Rhiut0xJB47u0K+8sNwp77j690zLCW58zzj9TC8lUX4/PuOAA5c2B1y2P6psTnK/zvjzEg74Zhju0r2ueqaP+zWS0WSBMAOXMc7usr6iZeHBa9sNk5eK1B9BphagIgF4WZkkZJpz3r5m9qBA4tDubxYP0k9VI/qaf1CH1uFmkKIMpSyFcMMMnHuLS4vGfUMAZLgwqjhZr/txZ2QdIGQPQMcnk8+0alRb4jrdfCSQLoddMU5pF9hfl0pUdS7R6c2GYtnCSA6Mo8k701/xLsX0yWxeOJmixPQeapxmvhpAFE3+BEGWPDTAGXfpFIfYZrmqyF0wAQnZnpMwJnps9e2y+JSFKp0Vo4LQDRm60qRmavzVYVab0WThNAUuXQGpHzHcmI0WotnCaA6A7vp8ndXA0qfeGpLhNmG0Bt+0Cbuydydg5gIm5eQMk8AvMIdPTAPIU6OrDz60s+ApsApJG2MSRdTf8AAAAASUVORK5CYII="

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getSurrounding;
/* harmony export (immutable) */ __webpack_exports__["a"] = getGeocoder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_request__ = __webpack_require__(23);




function getSurrounding(code) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_2__utils_request__["a" /* default */].get('https://apis.map.qq.com/ws/place/v1/search', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, code)).then(function (res) {
      resolve(res);
    }).catch(function (e) {
      reject(e);
    });
  });
}

function getGeocoder(code) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_2__utils_request__["a" /* default */].get('https://apis.map.qq.com/ws/geocoder/v1/?' + code).then(function (res) {
      resolve(res);
    }).catch(function (e) {
      reject(e);
    });
  });
}

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "article-container"
  }, [_c('div', {
    staticClass: "article-attachment"
  }, [_c('div', {
    staticClass: "attach-search__wrap"
  }, [_c('img', {
    staticClass: "header-container__search",
    attrs: {
      "src": _vm.searchIcon
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchText),
      expression: "searchText"
    }],
    staticClass: "header-container__input",
    attrs: {
      "confirm-type": "search",
      "placeholder": "搜索附近的地点",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.searchText)
    },
    on: {
      "confirm": _vm.searchHandle,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchText = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "attach-item",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.checkHandle(0)
      }
    }
  }, [_vm._m(0), _vm._v(" "), (_vm.checkActive === 0) ? _c('div', {
    staticClass: "attach-item__text item-info"
  }, [_c('image', {
    attrs: {
      "src": _vm.checkIcon
    }
  })]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.location), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "attach-item",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.checkHandle(index + 1, item)
        }
      }
    }, [_c('div', {
      staticClass: "attach-item__header"
    }, [_c('div', {
      staticClass: "attach-item__text"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "attach-item__text"
    }, [_vm._v(_vm._s(item.address))])]), _vm._v(" "), (_vm.checkActive === index + 1) ? _c('div', {
      staticClass: "attach-item__text item-info"
    }, [_c('image', {
      attrs: {
        "src": _vm.checkIcon
      }
    })]) : _vm._e()])
  })], 2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "attach-item__header"
  }, [_c('div', {
    staticClass: "attach-item__text"
  }, [_vm._v("位置信息不展示")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-99aae1f6", esExports)
  }
}

/***/ })

},[865]);