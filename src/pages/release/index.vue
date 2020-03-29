<template>
  <div class="ptf-release__container">
    <div class="ptf-release__title">
      <input v-model="title" placeholder="请输入文章标题" />
    </div>
    <div class="ptf-release__content">
      <editor
        id="editor"
        class="ql-container"
        placeholder="请编辑正文"
        showImgSize
        showImgToolbar
        showImgResize
        @statuschange="onStatusChange">
      </editor>
    </div>
    <div class="ptf-release__footer">
      <div v-if="moreItem" class="ptf-scroll__wrap">
        <scroll-view
        scroll-x
        enable-flex
        :scroll-into-view="scrollId"
        @scroll="scrollHandle"
        class="ptf-scroll__buttoms">
          <div
            class="release-buttom__item"
            @click="formatHandle('bold')">
            <image v-if="activeIndex === 'bold'" :src="boldActiveIcon" />
            <image v-else :src="boldIcon" />
          </div>
          <div
            class="release-buttom__item"
            @click="formatHandle('italic')">
            <image v-if="activeIndex === 'italic'" :src="italicActiveIcon" />
            <image v-else :src="italicIcon" />
          </div>
          <div
            class="release-buttom__item"
            @click="formatHandle('underline')">
            <image v-if="activeIndex === 'underline'" :src="underlineActiveIcon" />
            <image v-else :src="underlineIcon" />
          </div>
          <div
            class="release-buttom__item" 
            @click="formatHandle('header', 'H1')">
            <image v-if="activeIndex === 'H1'" :src="H1ActiveIcon" />
            <image v-else :src="H1Icon" />
          </div>
          <div
            class="release-buttom__item" 
            @click="formatHandle('header', 'H2')">
            <image v-if="activeIndex === 'H2'" :src="H2ActiveIcon" />
            <image v-else :src="H2Icon" />
          </div>
          <div
            class="release-buttom__item" 
            @click="formatHandle('header', 'H3')">
            <image v-if="activeIndex === 'H3'" :src="H3ActiveIcon" />
            <image v-else :src="H3Icon" />
          </div>
          <div
            class="release-buttom__item" 
            @click="formatHandle('header', 'H4')">
            <image v-if="activeIndex === 'H4'" :src="H4ActiveIcon" />
            <image v-else :src="H4Icon" />
          </div>
          <div
            id="endView" 
            class="release-buttom__item" 
            @click="formatHandle('header', 'H5')">
            <image v-if="activeIndex === 'H5'" :src="H5ActiveIcon" />
            <image v-else :src="H5Icon" />
          </div>
        </scroll-view>
        <div class="ptf-scroll__next" @click="rightView">
          <image :src="rightIcon" />
        </div>
      </div>
      <div class="ptf-release__buttoms">
        <div class="release-buttom__item" @click="insertVideo">
          <image v-if="videoPath" :src="videoActiveIcon"/>
          <image v-else-if="audioPath" :src="videoDisableIcon"/>
          <image v-else  :src="videoIcon"/>
        </div>
        <div class="release-buttom__item" @click="insertAudio">
          <image v-if="audioPath" :src="audioActiveIcon" />
          <image v-else-if="!audioPath && !videoPath" :src="audioIcon" />
          <image v-else :src="audioDisableIcon" />
        </div>
        <div class="release-buttom__item" @click="insertImage">
          <image :src="imageIcon" />
        </div>
        <div class="release-buttom__item" @click="insertFontStyle">
          <image v-if="!moreItem" :src="fontIcon" />
          <image v-else :src="fontActiveIcon" />
        </div>
        <div class="release-buttom__item" @click="undoHandle">
          <image :src="undoIcon" />
        </div>
        <div class="release-buttom__item" @click="redoHandle">
          <image :src="restoreIcon" />
        </div>
      </div>
      <div class="ptf-release__opera">
        <div class="release-opera__save" @click="draftHandle">存草稿</div>
        <div class="release-opera__submit" @click="previewHandle">文章预览</div>
      </div>
    </div>
  </div>
</template>

<script>
import rightIcon from '@/assets/image/markdown/right.png'
import boldIcon from '@/assets/image/markdown/bold_n.png'
import boldActiveIcon from '@/assets/image/markdown/bold_h.png'
import italicIcon from '@/assets/image/markdown/italic_n.png'
import italicActiveIcon from '@/assets/image/markdown/italic_h.png'
import underlineIcon from '@/assets/image/markdown/underline_n.png'
import underlineActiveIcon from '@/assets/image/markdown/underline_h.png'
import H1Icon from '@/assets/image/markdown/h1_n.png'
import H1ActiveIcon from '@/assets/image/markdown/h1_h.png'
import H2Icon from '@/assets/image/markdown/h2_n.png'
import H2ActiveIcon from '@/assets/image/markdown/h2_h.png'
import H3Icon from '@/assets/image/markdown/h3_n.png'
import H3ActiveIcon from '@/assets/image/markdown/h3_h.png'
import H4Icon from '@/assets/image/markdown/h4_n.png'
import H4ActiveIcon from '@/assets/image/markdown/h4_h.png'
import H5Icon from '@/assets/image/markdown/h5_n.png'
import H5ActiveIcon from '@/assets/image/markdown/h5_h.png'
import videoIcon from '@/assets/image/markdown/video_n.png'
import videoActiveIcon from '@/assets/image/markdown/video_h.png'
import videoDisableIcon from '@/assets/image/markdown/video_s.png'
import audioIcon from '@/assets/image/markdown/audio_n.png'
import audioActiveIcon from '@/assets/image/markdown/audio_h.png'
import audioDisableIcon from '@/assets/image/markdown/audio_s.png'
import imageIcon from '@/assets/image/markdown/image_n.png'
import fontIcon from '@/assets/image/markdown/font_n.png'
import fontActiveIcon from '@/assets/image/markdown/font_h.png'
import undoIcon from '@/assets/image/markdown/back_n.png'
import restoreIcon from '@/assets/image/markdown/next_n.png'
import { mapMutations } from 'vuex'
import { Encrypt } from '@/utils/secret.js'
import event from '@/utils/event'
const COS = require('cos-wx-sdk-v5')
export default {
  data () {
    return {
      H1Icon,
      H1ActiveIcon,
      H2Icon,
      H2ActiveIcon,
      H3Icon,
      H3ActiveIcon,
      H4Icon,
      H4ActiveIcon,
      H5Icon,
      H5ActiveIcon,
      boldIcon,
      boldActiveIcon,
      rightIcon,
      italicIcon,
      italicActiveIcon,
      videoIcon,
      videoActiveIcon,
      videoDisableIcon,
      audioIcon,
      audioActiveIcon,
      audioDisableIcon,
      imageIcon,
      fontIcon,
      fontActiveIcon,
      undoIcon,
      restoreIcon,
      underlineIcon,
      underlineActiveIcon,
      editorCtx: '',
      scrollId: '',
      activeIndex: '',
      moreItem: false,
      videoPath: '',
      audioPath: '',
      title: '',
      cos: '',
      imageUrl: 'https://sr-1300007333.file.myqcloud.com/image/'
    }
  },
  mounted () {
    this.cos = new COS({
      SecretId: 'AKID3FCuNhXbAVbSshzhphK2VifNp0HMPsIS',
      SecretKey: '5AzZuzoM0NZWDerseCYrwlKpBJ7iBPO8'
    })
    event.$on('releaseSuccess', this.releaseSuccess)
    event.$on('checkVideo', this.checkVideo)
    event.$on('checkAudio', this.checkAudio)
  },
  onUnload () {
    event.$off('checkVideo', this.checkVideo)
    event.$off('checkAudio', this.checkAudio)
  },
  methods: {
    ...mapMutations({
      setArticle: 'SET_ARTICLE'
    }),
    checkVideo (data) {
      this.videoPath = data
    },
    checkAudio (data) {
      this.audioPath = data
    },
    releaseSuccess () {
      this.scrollId = ''
      this.activeIndex = ''
      this.moreItem = false
      this.videoPath = ''
      this.audioPath = ''
      this.title = ''
      this.cos = ''
      this.editorCtx.clear()
    },
    insertVideo () {
      if (this.audioPath) {
        return false
      }
      this.$router.push({ path: '/pages/newVideo/main' })
    },
    insertAudio () {
      if (this.videoPath) {
        return false
      }
      this.$router.push({ path: '/pages/newAudio/main' })
    },
    insertImage () {
      const _this = this
      // 相册选择图片
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // 处理图片
          const { tempFilePaths } = res
          const fileName = Encrypt(tempFilePaths[0])
          _this.cos.postObject({
            Bucket: 'sr-1300007333',
            Region: 'ap-chengdu',
            Key: 'image/' + fileName,
            FilePath: tempFilePaths[0],
            onProgress: function (info) {
              const { percent } = info
              _this.onProgress = (percent * 100).toFixed(2) + '%'
            }
          }, function (err, data) {
            console.log(err || data)
            if (!err) {
              // 加速域名
              _this.editorCtx.insertImage({
                src: _this.imageUrl + fileName,
                width: '100%',
                height: '100%',
                extClass: 'image-class'
              })
            }
          })
        }
      })
    },
    insertFontStyle () {
      this.moreItem = !this.moreItem
    },
    undoHandle () {
      this.editorCtx.undo()
    },
    redoHandle () {
      this.editorCtx.redo()
    },
    formatHandle (key, val) {
      console.log(key, val)
      if (val) {
        this.activeIndex = val
        this.editorCtx.format(key, val)
      } else {
        this.activeIndex = key
        this.editorCtx.format(key)
      }
    },
    scrollHandle () {
      this.scrollId = ''
    },
    rightView () {
      this.scrollId = 'endView'
    },
    previewHandle () {
      const _this = this
      // 收集数据
      this.editorCtx.getContents({
        success: (e) => {
          if (!e || !_this.title) {
            return false
          }
          const detail = {
            videoPath: _this.videoPath,
            audioPath: _this.audioPath,
            detail: e,
            title: _this.title
          }
          _this.setArticle(detail)
          _this.$router.push({ path: '/pages/preArticle/main' })
        }
      })
    },
    draftHandle () {
      console.log('存草稿')
    },
    onStatusChange () {
      const _this = this
      wx.createSelectorQuery().select('#editor').context(function (res) {
        _this.editorCtx = res.context
      }).exec()
    },
    lineAdd () {
      this.editorCtx.insertDivider({
        success () {
          console.log('插入数据成功')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.ptf-release__container{
  padding: 0 $side-padding;
  height: 100vh;
  padding-bottom: 187rpx;
  width: 100%;
  box-sizing: border-box;
  .ptf-release__title{
    font-size: 36rpx;
    border-bottom: 1rpx solid #EBEBEB;
    height: 80rpx;
    line-height: 80rpx;
    & > input {
      height: 80rpx;
      height: 100%;
    }
  }
  .ptf-release__content{
    height: 100%;
    margin-top: 10rpx;
    box-sizing: border-box;
    height: calc(100% - 110rpx);
    .ql-container{
      height: 100%;
      &::-webkit-input-placeholder {
		   font-style: normal;
		  }
    }
  }
  .ptf-release__footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    left: 0;
    .ptf-scroll__wrap{
      display: flex;
      align-items: center;
      width: calc(98% - 60rpx);
      margin-left: 2%;
      .ptf-scroll__next{
        flex-shrink: 0;
        height: 90rpx;
        display: flex;
        align-items: center;
        image{
          width: 10rpx;
          height: 24rpx;
          padding: 0 20rpx;
          padding-right: 30rpx;
          margin-top: 5rpx;
        }
        &:active{
          opacity: .8;
        }
      }
    }
    .ptf-scroll__buttoms{
      height: 90rpx;
      display: flex;
      .release-buttom__item{
        width: 80rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        &>image{
          width: 60rpx;
          height: 60rpx;
        }
      }
    }
    .ptf-release__buttoms{
      display: flex;
      justify-content: space-around;
      height: 90rpx;
      align-items: center;
      border-top: 1rpx solid #EBEBEB;
      border-bottom: 1rpx solid #EBEBEB;
      font-size: 20rpx;
      color: #333;
      text-align: center;
      .release-buttom__item{
        width: 60rpx;
        height: 60rpx;
        line-height: 60rpx;
        &>image{
          width: 60rpx;
          height: 60rpx;
        }
      }
    }
    .ptf-release__opera{
      display: flex;
      height: 97rpx;
      line-height: 97rpx;
      .release-opera__save{
        flex: 1;
        color: #999;
      }
      .release-opera__submit{
        flex: 1.5;
        background-color: #00A65D;
        font-size: 30rpx;
        color: #fff;
      }
    }
  }
}
</style>
