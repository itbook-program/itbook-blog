require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(841);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_653a1a40_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(852);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(842)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-653a1a40"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_653a1a40_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/newAudio/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-653a1a40", Component.options)
  } else {
    hotAPI.reload("data-v-653a1a40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 842:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_secret_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_audio_audio_start_png__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_audio_audio_start_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_image_audio_audio_start_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_audio_audio_stop_png__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_audio_audio_stop_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_image_audio_audio_stop_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_audio_audio_no_png__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_audio_audio_no_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_image_audio_audio_no_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_image_audio_audio_yes_png__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_image_audio_audio_yes_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_image_audio_audio_yes_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CustomWaveform__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_event__ = __webpack_require__(42);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










// import tempFile from '@/assets/test.mp3'
var COS = __webpack_require__(100);
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    customWaveform: __WEBPACK_IMPORTED_MODULE_6__components_CustomWaveform__["a" /* default */]
  },
  data: function data() {
    return {
      audioNoIcon: __WEBPACK_IMPORTED_MODULE_4__assets_image_audio_audio_no_png___default.a,
      audioYesIcon: __WEBPACK_IMPORTED_MODULE_5__assets_image_audio_audio_yes_png___default.a,
      audioStopIcon: __WEBPACK_IMPORTED_MODULE_3__assets_image_audio_audio_stop_png___default.a,
      audoStartIcon: __WEBPACK_IMPORTED_MODULE_2__assets_image_audio_audio_start_png___default.a,
      audioOpera: false,
      audioType: 0,
      audioUrl: '',
      cos: '',
      onProgress: '',
      timeCount: '00:00',
      totalTime: '00:00',
      duringTime: '00:00',
      timeFun: '',
      fileObj: {},
      player: 'start',
      innerAudioContext: null
    };
  },
  mounted: function mounted() {
    this.cos = new COS({
      SecretId: 'AKID3FCuNhXbAVbSshzhphK2VifNp0HMPsIS',
      SecretKey: '5AzZuzoM0NZWDerseCYrwlKpBJ7iBPO8'
    });
  },
  onLoad: function onLoad() {
    this.innerAudioContext = wx.createInnerAudioContext();
    // this.audioUrl = `https://sr-1300007333.file.myqcloud.com/audio/test.mp3`
  },
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_7__utils_event__["a" /* default */].$emit('checkAudio', this.audioUrl);
    this.audioOpera = false;
    this.audioType = 0;
    this.audioUrl = '';
    this.cos = '';
    this.onProgress = '';
    this.timeCount = '00:00';
    this.totalTime = '00:00';
    this.duringTime = '00:00';
    this.timeFun = '';
    this.fileObj = {};
    this.player = 'start';
    // 控制音频停止
    this.innerAudioContext.stop();
    this.innerAudioContext = null;
  },
  audioFileHandle: function audioFileHandle() {
    console.log('获取音频文件');
  },

  methods: {
    operationHandle: function operationHandle() {
      if (this.player === 'start') {
        this.playerAudio();
      } else if (this.player === 'running') {
        // 播放暂停
        this.innerAudioContext.pause();
        this.player = 'paused';
      } else if (this.player === 'paused') {
        this.innerAudioContext.play();
        this.player = 'running';
      }
    },
    playerAudio: function playerAudio() {
      var _this2 = this;

      var tempFilePath = this.fileObj.tempFilePath;

      this.innerAudioContext.src = tempFilePath;
      // this.innerAudioContext.src = 'https://sr-1300007333.file.myqcloud.com/audio/test.mp3'
      // 监听播放事件
      this.innerAudioContext.onPlay(function () {
        _this2.player = 'running';
        // 需要异步调用this.innerAudioContext.duration才能触发onTimeUpdate()方法
        // 初步猜测，不使用setTimeout时，直接读取duration数据时，音频还未播放，此时音频文件尚未加载
        // 此时无法触发onTimeUpdate()方法
        setTimeout(function () {
          _this2.totalTime = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* formatSeconds */])(_this2.innerAudioContext.duration);
        }, 1000);
      });
      // 监听播放错误
      this.innerAudioContext.onError(function (res) {
        console.log(res.errMsg);
        console.log(res.errCode);
      });
      // 监听播放进度
      this.innerAudioContext.onTimeUpdate(function (res) {
        _this2.totalTime = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* formatSeconds */])(_this2.innerAudioContext.duration);
        _this2.duringTime = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* formatSeconds */])(_this2.innerAudioContext.currentTime);
      });
      // 监听播放结束
      this.innerAudioContext.onEnded(function (res) {
        _this2.innerAudioContext.stop();
        _this2.player = 'start';
        console.log('播放完成', res);
      });
      // 播放文件
      this.innerAudioContext.play();
    },
    clearHandle: function clearHandle() {
      this.audioOpera = false;
    },
    saveHandle: function saveHandle() {
      var _this = this;
      var _this$fileObj = _this.fileObj,
          fileName = _this$fileObj.fileName,
          tempFilePath = _this$fileObj.tempFilePath;

      this.audioOpera = false;
      this.audioType = 3;
      // 上传音频文件
      _this.cos.postObject({
        Bucket: 'sr-1300007333',
        Region: 'ap-chengdu',
        Key: 'audio/' + fileName + '.mp3',
        FilePath: tempFilePath,
        onProgress: function onProgress(info) {
          var percent = info.percent;

          _this.onProgress = (percent * 100).toFixed(2) + '%';
        }
      }, function (err, data) {
        console.log(err || data);
        if (!err) {
          // 加速域名
          _this.audioUrl = 'https://sr-1300007333.file.myqcloud.com/audio/' + fileName + '.mp3';
        }
      });
    },
    startHandle: function startHandle(val) {
      var _this = this;
      var RecorderManager = wx.getRecorderManager();
      // 开始录音
      if (val === 0) {
        wx.getAvailableAudioSources({
          success: function success(res) {
            console.log('最新', res);
          }
        });
        _this.audioType = 1;
        // 开始计时
        _this.startTime();
        RecorderManager.start({ format: 'mp3' });
      } else if (val === 1) {
        // 停止录音
        RecorderManager.stop();
        RecorderManager.onStop(function (res) {
          var tempFilePath = res.tempFilePath,
              duration = res.duration,
              fileSize = res.fileSize;

          console.log('这是什么', tempFilePath, duration, fileSize);
          var fileName = Object(__WEBPACK_IMPORTED_MODULE_0__utils_secret_js__["a" /* Encrypt */])(tempFilePath);
          _this.fileObj = {
            tempFilePath: tempFilePath,
            fileName: fileName
          };
          _this.audioType = 2;
        });
        _this.endTime();
      }
    },
    recordHandle: function recordHandle() {
      this.audioOpera = true;
    },
    startTime: function startTime() {
      var _this = this;
      var mm = 0;
      var ss = 0;
      var timeStr = '';
      this.timer = setInterval(function () {
        timeStr = '';
        if (++ss === 60) {
          if (++mm === 60) {
            mm = 0;
          }
          ss = 0;
        }
        timeStr += mm < 10 ? '0' + mm : mm;
        timeStr += ':';
        timeStr += ss < 10 ? '0' + ss : ss;
        _this.timeCount = timeStr;
      }, 1000);
    },
    endTime: function endTime() {
      clearInterval(this.timer);
    }
  }
});

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/audio_start.png";

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/audio_stop.png";

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/audio_no.png";

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/audio_yes.png";

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6387bd7e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(851);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(849)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6387bd7e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6387bd7e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/CustomWaveform/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6387bd7e", Component.options)
  } else {
    hotAPI.reload("data-v-6387bd7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 849:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    player: {
      type: String,
      default: 'stop'
    }
  },
  computed: {
    playerState: function playerState() {
      console.log(this.player === 'running' ? 'waveform-line' : '');
      // console.log(this.player === 'running' ? 'custom-waveform__container' : '')
      return this.player === 'running' ? 'waveform-line' : '';
    }
  }
});

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "custom-waveform__container"
  }, _vm._l((50), function(n, index) {
    return _c('span', {
      key: n,
      class: _vm.playerState
    })
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6387bd7e", esExports)
  }
}

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video-container"
  }, [_c('div', {
    staticClass: "audio-wrap"
  }, [(!_vm.audioUrl) ? _c('div', {
    staticClass: "video-noConent"
  }, [_vm._v("\n      " + _vm._s(!_vm.onProgress ? '音频未上传' : '上传进度:' + _vm.onProgress) + "\n    ")]) : _c('div', {
    staticClass: "audio-wrap audio-wrap__listen"
  }, [_c('div', {
    staticClass: "audio-listen__time"
  }, [_vm._v(_vm._s(_vm.duringTime) + "/" + _vm._s(_vm.totalTime))]), _vm._v(" "), _c('custom-waveform', {
    attrs: {
      "player": _vm.player,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "audio-listen__button",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.operationHandle
    }
  }, [(_vm.player === 'start' || _vm.player === 'paused') ? _c('span', [_vm._v("播放")]) : (_vm.player === 'running') ? _c('span', [_vm._v("暂停")]) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "video-footer"
  }, [_c('div', {
    staticClass: "video-opera"
  }, [_c('div', {
    staticClass: "release-opera__save",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.audioFileHandle
    }
  }, [_vm._v("音频文件")]), _vm._v(" "), _c('div', {
    staticClass: "video-opera__submit",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.recordHandle
    }
  }, [_vm._v("音频录制")])])]), _vm._v(" "), (_vm.audioOpera) ? _c('div', {
    staticClass: "mask-container"
  }, [_c('div', {
    staticClass: "mask-audio__wrapper"
  }, [_c('div', {
    staticClass: "mask-audio__title"
  }, [(_vm.audioType === 0) ? _c('span', [_vm._v("点击开始录音")]) : _c('span', [_vm._v(_vm._s(_vm.timeCount))])]), _vm._v(" "), (_vm.audioType < 2) ? _c('div', {
    staticClass: "mask-audio__opera"
  }, [(_vm.audioType === 0) ? _c('image', {
    staticClass: "audo-opera__icon",
    attrs: {
      "src": _vm.audoStartIcon,
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.startHandle(0)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.audioType === 1) ? _c('image', {
    staticClass: "audo-opera__icon",
    attrs: {
      "src": _vm.audioStopIcon,
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.startHandle(1)
      }
    }
  }) : _vm._e()]) : _c('div', {
    staticClass: "mask-audio__opera is-complete"
  }, [_c('image', {
    staticClass: "audo-opera__icon",
    attrs: {
      "src": _vm.audioNoIcon,
      "eventid": '5'
    },
    on: {
      "click": _vm.clearHandle
    }
  }), _vm._v(" "), _c('image', {
    staticClass: "audo-opera__icon",
    attrs: {
      "src": _vm.audioYesIcon,
      "eventid": '6'
    },
    on: {
      "click": _vm.saveHandle
    }
  })])])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-653a1a40", esExports)
  }
}

/***/ })

},[840]);