<template>
  <div class="article-container">
    <div class="article-content__container">
      <div class="article-content__wrapper">
        <div class="article-container__title">{{article.title}}</div>
        <div class="video-wrap">
          <video v-if="article.videoPath" :src="videoUrl + article.videoPath" class="video-wrap__controls"></video>
        </div>
         <ql-container><ql-editor><div class="article-content" v-html="article.detail.html" /></ql-editor></ql-container>
      </div>
      <div class="article-attachment">
        <div class="attach-item" @click="loactionHandle">
          <div class="attach-item__header">
            <div class="attach-item__image">
              <image :src="locationIcon"/>
            </div>
            <div class="attach-item__text">地点</div>
          </div>
          <div v-if="locationInfo.title" class="attach-item__text item-info">{{locationInfo.title}}</div>
        </div>
        <div class="attach-item" @click="attachHandle">
          <div class="attach-item__header">
            <div class="attach-item__image">
              <image :src="attachmentIcon" />
            </div>
            <div class="attach-item__text">附件</div>
          </div>
          <div v-if="attachInfo.length > 0" class="attach-item__text item-info">共 {{attachInfo.length}} 件</div>
        </div>
      </div>
    </div>
    <div class="ptf-release__footer">
      <div class="ptf-release__opera">
        <div class="release-opera__save" @click="editHandle">编辑</div>
        <div class="release-opera__submit" @click="saveHandle">提交审核</div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader/index'
import headerIcon from '@/assets/image/header.png'
import attachmentIcon from '@/assets/image/preArticle/attachment.png'
import locationIcon from '@/assets/image/preArticle/location.png'
import CustomMask from '@/components/CustomMask'
import { mapState } from 'vuex'
import { postArticle } from '@/api/article'
import { getUser } from '@/utils/auth'
import event from '@/utils/event'
export default {
  components: {
    CustomHeader,
    CustomMask
  },
  data () {
    return {
      headerIcon,
      locationIcon,
      attachmentIcon,
      isExcept: false,
      customNum: '',
      isCustom: false,
      isComment: false,
      articleDetail: {},
      locationInfo: '',
      attachInfo: [],
      videoUrl: 'https://sr-1300007333.file.myqcloud.com/video/'
    }
  },
  computed: {
    ...mapState({
      article: state => state.article.article
    })
  },
  mounted () {
    console.log(this.article)
    event.$on('checkLocation', this.checkLocation)
    event.$on('checkAttach', this.checkAttach)
  },
  beforeDestroy () {
    event.$off('checkLocation', this.checkLocation)
    event.$off('checkAttach', this.checkAttach)
  },
  methods: {
    editHandle () {
      this.$router.go(-1)
    },
    richReplace (data) {
    // 去除 富文本格式
      data = data.replace(/(\n)/g, ';')
      data = data.replace(/(\t)/g, '')
      data = data.replace(/(\r)/g, '')
      data = data.replace(/<\/?[^>]*>/g, '')
      data = data.replace(/\s*/g, '')
      return data
    },
    saveHandle () {
      // 处理图片或视频当做封面
      const { detail: { delta: { ops } }, videoPath, audioPath } = this.article
      console.log(this.article)
      let cover = ''
      ops.forEach(element => {
        if (element.insert && element.insert.image) {
          cover = element.insert.image
          return false
        }
      })
      // 处理视频
      // 处理音频
      // 处理文字内容
      let contentText = this.richReplace(this.article.detail.text)
      let resourceType = null
      let resource = null
      if (videoPath) {
        resourceType = 1
        cover = videoPath
        resource = videoPath
      } else if (audioPath) {
        resourceType = 2
        resource = audioPath
      }

      const temReq = {
        resource,
        resourceType,
        user: getUser(),
        cover: cover,
        title: this.article.title,
        attachs: this.attachInfo,
        location: this.locationInfo,
        content: this.article.detail.html,
        contentText: contentText
      }
      postArticle(temReq).then((resData) => {
        const { code } = resData
        if (code === 0) {
          event.$emit('releaseSuccess')
          this.$router.push({ path: '/pages/release/main', isTab: true })
        }
      })
    },
    checkAttach (data) {
      this.attachInfo = data
    },
    checkLocation (data) {
      this.locationInfo = data
    },
    loactionHandle () {
      this.$router.push({ path: '/pages/positioning/main' })
    },
    attachHandle () {
      this.$router.push({ path: '/pages/attachment/main' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.video-wrap{
    padding: 20rpx $side-padding;
    .video-wrap__controls{
      width: 100%;
      border-radius: 16rpx;
    }
  }
.article-container{
  .article-content__container{
    padding: $side-padding;
    padding-bottom: 98rpx;
    .article-content__wrapper{
      .article-container__title{
        font-size: 36rpx;
        color: #333;
        font-weight:bold;
        margin-bottom: 20rpx;
      }
      .article-container__intro{
        font-size: 36rpx;
        color: #333;
        font-weight:bold;
      }
      .article-content{
        font-size:28rpx;
        font-weight:bold;
      }
    }
  }
  .article-attachment{
    border-top: 1rpx solid #EBEBEB;
    margin-top: 30rpx;
    .attach-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 88rpx;
      border-bottom: 1rpx solid #EBEBEB;
      &:active{
        opacity: .8;
      }
      .attach-item__header{
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
      }
      .attach-item__image{
        width: 32rpx;
        margin-right: $side-padding;
        &>image{
          width: 32rpx;
          height: 32rpx;
        }
      }
      .attach-item__text{
        font-size: 28rpx;
        font-weight: bold;
        color: #333333;
      }
      .item-info{
        text-align: right;
        padding-left: 10rpx;
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
    .ptf-release__opera{
      display: flex;
      height: 97rpx;
      line-height: 97rpx;
      .release-opera__save{
        flex: 1;
        color: #999;
        &:active{
          opacity: .8;
        }
      }
      .release-opera__submit{
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
