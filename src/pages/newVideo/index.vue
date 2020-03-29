<template>
  <div class="video-container">
    <div class="video-wrap">
      <div v-if="!videoPath" class="video-noConent">
        {{!onProgress ? '视频未上传':'上传进度:' + onProgress }}
      </div>
      <video v-else :src="videoUrl + videoPath" class="video-wrap__controls"></video>
    </div>
    <div class="video-footer">
      <div class="video-opera">
        <div class="video-opera__submit" @click="saveHandle">
          {{videoPath ? '删除视频' : '上传视频' }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import event from '@/utils/event'
import uploadToOss from '@/utils/upload.js'
export default {
  data () {
    return {
      videoUrl: 'https://sr-1300007333.file.myqcloud.com/video/',
      cos: '',
      onProgress: '',
      videoPath: ''
    }
  },
  mounted () {
  },
  onUnload () {
    event.$emit('checkVideo', this.videoPath)
    this.videoPath = ''
    this.onProgress = ''
    this.cos = ''
  },
  methods: {
    saveHandle () {
      if (this.videoPath) {
        this.videoPath = ''
        this.onProgress = ''
        return false
      }
      this.uploader()
    },
    uploader () {
      const _this = this

      wx.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: 'back',
        success (res) {
          const { tempFilePath } = res
          uploadToOss({
            type: 'video',
            fileName: tempFilePath,
            onProgress: (info) => {
              const { percent } = info
              _this.onProgress = (percent * 100).toFixed(2) + '%'
            },
            onSuccess: (fileName) => {
              _this.videoPath = fileName
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.video-container{
  .video-wrap{
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

</style>
