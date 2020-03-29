<template>
  <div class="video-container">
    <div class="audio-wrap">
      <div v-if="!audioUrl" class="video-noConent">
        {{!onProgress ? '音频未上传':'上传进度:' + onProgress }}
      </div>
      <div v-else class="audio-wrap audio-wrap__listen">
        <div class="audio-listen__time">{{duringTime}}/{{totalTime}}</div>
        <custom-waveform :player="player"></custom-waveform>
        <div class="audio-listen__button" @click="operationHandle">
          <span v-if="player === 'start' || player === 'paused'">播放</span>
          <span v-else-if="player === 'running'">暂停</span>
        </div>
      </div>
    </div>
    <div class="video-footer">
      <div class="video-opera">
        <div class="release-opera__save" @click="audioFileHandle">音频文件</div>
        <div class="video-opera__submit" @click="recordHandle">音频录制</div>
      </div>
    </div>
     <div v-if="audioOpera" class="mask-container">
        <div class="mask-audio__wrapper">
          <div class="mask-audio__title">
            <span v-if="audioType === 0">点击开始录音</span>
            <span v-else>{{timeCount}}</span>
          </div>
          <div v-if="audioType < 2" class="mask-audio__opera">
            <image v-if="audioType === 0" class="audo-opera__icon" @click="startHandle(0)" :src="audoStartIcon" />
            <image v-if="audioType === 1" class="audo-opera__icon" @click="startHandle(1)" :src="audioStopIcon" />
          </div>
          <div v-else class="mask-audio__opera is-complete">
            <image class="audo-opera__icon" :src="audioNoIcon" @click="clearHandle" />
            <image class="audo-opera__icon" :src="audioYesIcon" @click="saveHandle" />
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { Encrypt } from '@/utils/secret.js'
import { formatSeconds } from '@/utils/index'
import audoStartIcon from '@/assets/image/audio/audio_start.png'
import audioStopIcon from '@/assets/image/audio/audio_stop.png'
import audioNoIcon from '@/assets/image/audio/audio_no.png'
import audioYesIcon from '@/assets/image/audio/audio_yes.png'
import customWaveform from '@/components/CustomWaveform'
import event from '@/utils/event'

// import tempFile from '@/assets/test.mp3'
const COS = require('cos-wx-sdk-v5')
export default {
  components: {
    customWaveform
  },
  data () {
    return {
      audioNoIcon,
      audioYesIcon,
      audioStopIcon,
      audoStartIcon,
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
    }
  },
  mounted () {
    this.cos = new COS({
      SecretId: 'AKID3FCuNhXbAVbSshzhphK2VifNp0HMPsIS',
      SecretKey: '5AzZuzoM0NZWDerseCYrwlKpBJ7iBPO8'
    })
  },
  onLoad () {
    this.innerAudioContext = wx.createInnerAudioContext()
    // this.audioUrl = `https://sr-1300007333.file.myqcloud.com/audio/test.mp3`
  },
  onUnload () {
    event.$emit('checkAudio', this.audioUrl)
    this.audioOpera = false
    this.audioType = 0
    this.audioUrl = ''
    this.cos = ''
    this.onProgress = ''
    this.timeCount = '00:00'
    this.totalTime = '00:00'
    this.duringTime = '00:00'
    this.timeFun = ''
    this.fileObj = {}
    this.player = 'start'
    // 控制音频停止
    this.innerAudioContext.stop()
    this.innerAudioContext = null
  },
  audioFileHandle () {
    console.log('获取音频文件')
  },
  methods: {
    operationHandle () {
      if (this.player === 'start') {
        this.playerAudio()
      } else if (this.player === 'running') {
        // 播放暂停
        this.innerAudioContext.pause()
        this.player = 'paused'
      } else if (this.player === 'paused') {
        this.innerAudioContext.play()
        this.player = 'running'
      }
    },
    playerAudio () {
      const { tempFilePath } = this.fileObj
      this.innerAudioContext.src = tempFilePath
      // this.innerAudioContext.src = 'https://sr-1300007333.file.myqcloud.com/audio/test.mp3'
      // 监听播放事件
      this.innerAudioContext.onPlay(() => {
        this.player = 'running'
        // 需要异步调用this.innerAudioContext.duration才能触发onTimeUpdate()方法
        // 初步猜测，不使用setTimeout时，直接读取duration数据时，音频还未播放，此时音频文件尚未加载
        // 此时无法触发onTimeUpdate()方法
        setTimeout(() => {
          this.totalTime = formatSeconds(this.innerAudioContext.duration)
        }, 1000)
      })
      // 监听播放错误
      this.innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })
      // 监听播放进度
      this.innerAudioContext.onTimeUpdate((res) => {
        this.totalTime = formatSeconds(this.innerAudioContext.duration)
        this.duringTime = formatSeconds(this.innerAudioContext.currentTime)
      })
      // 监听播放结束
      this.innerAudioContext.onEnded((res) => {
        this.innerAudioContext.stop()
        this.player = 'start'
        console.log('播放完成', res)
      })
      // 播放文件
      this.innerAudioContext.play()
    },
    clearHandle () {
      this.audioOpera = false
    },
    saveHandle () {
      const _this = this
      const { fileName, tempFilePath } = _this.fileObj
      this.audioOpera = false
      this.audioType = 3
      // 上传音频文件
      _this.cos.postObject({
        Bucket: 'sr-1300007333',
        Region: 'ap-chengdu',
        Key: `audio/${fileName}.mp3`,
        FilePath: tempFilePath,
        onProgress: function (info) {
          const { percent } = info
          _this.onProgress = (percent * 100).toFixed(2) + '%'
        }
      }, function (err, data) {
        console.log(err || data)
        if (!err) {
          // 加速域名
          _this.audioUrl = `https://sr-1300007333.file.myqcloud.com/audio/${fileName}.mp3`
        }
      })
    },
    startHandle (val) {
      const _this = this
      const RecorderManager = wx.getRecorderManager()
      // 开始录音
      if (val === 0) {
        wx.getAvailableAudioSources({
          success (res) {
            console.log('最新', res)
          }
        })
        _this.audioType = 1
        // 开始计时
        _this.startTime()
        RecorderManager.start({ format: 'mp3' })
      } else if (val === 1) {
        // 停止录音
        RecorderManager.stop()
        RecorderManager.onStop((res) => {
          const { tempFilePath, duration, fileSize } = res
          console.log('这是什么', tempFilePath, duration, fileSize)
          const fileName = Encrypt(tempFilePath)
          _this.fileObj = {
            tempFilePath,
            fileName
          }
          _this.audioType = 2
        })
        _this.endTime()
      }
    },
    recordHandle () {
      this.audioOpera = true
    },
    startTime () {
      const _this = this
      let mm = 0
      let ss = 0
      let timeStr = ''
      this.timer = setInterval(function () {
        timeStr = ''
        if (++ss === 60) {
          if (++mm === 60) {
            mm = 0
          }
          ss = 0
        }
        timeStr += mm < 10 ? '0' + mm : mm
        timeStr += ':'
        timeStr += ss < 10 ? '0' + ss : ss
        _this.timeCount = timeStr
      }, 1000)
    },
    endTime () {
      clearInterval(this.timer)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.audio-wrap__listen{
   background:rgba(245,245,245,1);
    border-radius:16px;
    height:386rpx;
    width: 100%;
    font-size:32rpx;
    font-weight:400;
    color:rgba(102,102,102,1);
    box-sizing: border-box;
    text-align: center;
    .audio-listen__time{
      font-size:28rpx;
      font-weight:bold;
      color: #333;
      padding: 40rpx 0;
    }
    .audio-listen__button{
      width:153rpx;
      height:64rpx;
      background:rgba(0,166,93,1);
      border-radius:32rpx;
      line-height: 64rpx;
      text-align: center;
      margin: 0 auto;
      color: #fff;
      margin-top: 64rpx;
    }
}
.video-container{
  .audio-wrap{
    padding: 0 $side-padding;
    .video-wrap__controls{
      width: 100%;
      border-radius: 16rpx;
    }
    .video-noConent{
      background:rgba(245,245,245,1);
      border-radius:16px;
      height:386rpx;
      width: 100%;
      font-size:32rpx;
      font-weight:400;
      color:rgba(102,102,102,1);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
  }
  .video-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    left: 0;
    .video-opera{
      display: flex;
      height: 97rpx;
      line-height: 97rpx;
      .release-opera__save{
        flex: 1;
        color: #999;
        font-size:30rpx;
        &:active{
          opacity: .8;
        }
      }
      .video-opera__submit{
        flex: 1.5;
        background-color: #00A65D;
        font-size: 30rpx;
        color: #fff;
        &:active{
          opacity: .8;
        }
      }
    }
  }
}
.mask-container{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: rgba(0, 0, 0, .2);
  .mask-audio__wrapper{
    background:rgba(255,255,255,1);
    border-radius:16px 16px 0 0;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 400rpx;
    padding: $side-padding;
    .mask-audio__title{
      text-align: center;
      font-weight:bold;
      font-size: 29rpx;
      color: #999;
      margin: 58rpx 0;
    }
    .mask-audio__opera{
      text-align: center;
      .audo-opera__icon{
        width: 160rpx;
        height: 160rpx;
        transition: scale 2s;
        &:active{
          transform: scale(.8)
        }
      }
    }
    .is-complete{
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
