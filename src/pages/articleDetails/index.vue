<template>
  <div class="article-container">
    <div class="article-content__container">
      <div class="article-content__wrapper">
        <div class="article-container__title">
          {{articleDetail.title}}
        </div>
        <div class="article-container__user">
          <div class="article-wrapper__userInfo">
            <div class="container-user__avatar">
              <img v-if="articleDetail.user" :src="articleDetail.user.avatarUrl" />
            </div>
            <div class="container-user__name">
              <div v-if="articleDetail.user" class="user-name__text">{{articleDetail.user.nickName}}</div>
              <div class="user-name__date">{{articleDetail.updateAt}}</div>
            </div>
          </div>
          <div v-if="articleDetail.focus" class="article-wrapper__onFocus" @click="focusHandle(articleDetail)">已关注</div>
          <div v-else class="article-wrapper__focus" @click="focusHandle(articleDetail, true)">关注</div>
        </div>
        <video 
          play-btn-position="center"
          v-if="articleDetail.resourceType === 1"
          :src="videoUrl + articleDetail.cover"
          :danmu-list="danmuList"
          @timeupdate="videoChangeHandle"
          danmu-btn
          enable-danmu
        />      
        <ql-container><ql-editor><div class="article-content" v-html="articleDetail.content" /></ql-editor></ql-container>
      </div>
      <div class="user-info">
        <div class="info-location">
          <image :src="locationIcon" />
          <span v-if="articleDetail.location" @click="locationHandle(articleDetail.location)">{{articleDetail.location.address}}</span>
          <span v-else>暂无</span>
        </div>
        <div v-if="articleDetail.attachs && articleDetail.attachs.length > 0" @click="attachHanlde(articleDetail.attachs)" class="info-attach">
          <image :src="attachIcon" />
          <span>{{articleDetail.attachs[0].size || 0 }}MB</span>
        </div>
      </div>
      <div class="article-user__wrapper">
        <div class="content-user__title">
          {{articleDetail.individSignature}}
        </div>
        <div class="content-user__avatar">
          <div v-for="(item, index) in articleDetail.lookList" :key="index" :class="'avatar-item-'+(index+1)" class="user-avatar__item">
            <img :src="headerIcon" />
          </div>
        </div>
        <div class="content-user__except" @click="isExcept = true">
          打赏
        </div>
      </div>
      <div class="article-comment__wrapper">
        <div class="article-comment__nav" v-if="articleComment.length > 0">评论（{{articleComment.length}}条）</div>
        <div v-for="(commItem, index) in articleComment" :key="index" class="comment-wrapper__item">
          <div class="comment-user__avatar">
            <img :src="commItem.critics.avatarUrl" />
          </div>
          <div class="comment-user__content">
            <div class="comment-item__user">
              <div class="item-user__name">{{commItem.critics.nickName}}</div>
              <div class="item-user__reply" @click="replyHandle(commItem)">回复</div>
            </div>
            <div class="comment-item__text">{{commItem.content}}</div>
            <div class="user-item__comments" v-if="commItem.comments.length > 0">
              <div v-for="(replyItem, reIndex) in commItem.comments" :key="reIndex" class="reply-comments__item">
                <div class="reply-comments__name">{{replyItem.critics.nickName}}：</div>
                <div class="reply-comments__comment">{{replyItem.content}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-wrapper">
        <div class="footer-input__box" @click="commentHandle">
          <input placeholder="我来说两句" disabled class="wrapper-input__item" type="text" />
        </div>
        <div class="footer-wrapper__btn">
          <div @click="likesHandle(articleDetail)">喜欢</div>
          <div>分享</div>
        </div>
      </div>
    </div>
    <custom-mask v-if="isExcept" @clickMask="clickMaskHandle">
      <div class="mask-content__wrapper">
        <div class="mask-content__header">
          <img :src="headerIcon" />
        </div>
        <div class="mask-content__title">一杯咖啡，一篇好文章</div>
        <div class="mask-content__tags">
          <div
            :class="maskActive === exceptItem.key ? 'mask-tag__active':''"
            @click="exceptHandle(exceptItem.key, exceptItem.value)"
            v-for="(exceptItem, index) in defaultExcept"
            :key="index"
            class="mask-tag__item">
            {{exceptItem.value}}书签
          </div>
          <div class="mask-tag__item">
            <input v-if="isCustom" v-model="exceptMoney" type="digit" />
            <span v-else @click="customExceptHandle">自定义打赏</span>
          </div>
        </div>
        <div class="mask-content__btns" @click="maskBtnHandle">
          好文章，插个书签
        </div>
      </div>
    </custom-mask>
    <custom-mask v-if="isComment">
      <div class="mask-comment__wrapper">
        <form @submit="publishHandle">
          <div  class="mask-comment__header">
            <div class="mask-header__cancel" @click="commCancelHandle">取消</div>
            <div>
              <button class="mask-header__public" form-type="submit"> 发布 </button>
            </div>
          </div>
          <div class="mask-comment__text">
            <textarea name="commText" auto-focus :maxlength="500"></textarea>
          </div>
        </form>
      </div>
    </custom-mask>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader/index'
import CustomMask from '@/components/CustomMask'
import headerIcon from '@/assets/image/header.png'
import attachIcon from '@/assets/image/article/attach.png'
import locationIcon from '@/assets/image/article/location.png'
import { postComments, postCommentsById } from '@/api/comment'
import { getArticleById, postWeChatPay } from '@/api/article'
import { postLikes } from '@/api/likes'
import { postFocus } from '@/api/focus'
import { postLooks } from '@/api/looks'
import { postExcept } from '@/api/except'
import { getUser } from '@/utils/auth'
import CryptoJS from 'crypto-js'
export default {
  components: {
    CustomHeader,
    CustomMask
  },
  data () {
    return {
      defaultExcept: [
        {
          key: 0,
          value: 1
        },
        {
          key: 1,
          value: 10
        },
        {
          key: 2,
          value: 5
        },
        {
          key: 3,
          value: 20
        }
      ],
      locationIcon,
      attachIcon,
      headerIcon,
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
    }
  },
  watch: {
    durationTime: function (val, oldVal) {
      console.log(val, oldVal, this)
      // 构造弹幕数组
      const danmuListArr = []
      this.articleComment.forEach(element => {
        const temp = {}
        temp.text = element.content
        temp.time = element.time | Math.floor(Math.random() * (1 - val) + val)
        danmuListArr.push(temp)
      })
      this.danmuList = danmuListArr
    }
  },
  mounted () {
    const { id } = this.$route.query
    this.articleId = id
    // 获取文章信息
    this.fetchDetailData(id)
    // 获取文章评论
    this.fetchComments(id)
  },
  methods: {
    fetchDetailData (id) {
      getArticleById(id).then((detailData) => {
        const { data } = detailData
        console.log(data)
        this.articleDetail = data
        this.looksHandle(data)
      })
    },
    locationHandle (address) {
      const {location: { lat, lng }} = address
      wx.openLocation({
        latitude: lat,
        longitude: lng,
        scale: 18
      })
    },
    attachHanlde (item) {
      console.log('预览附件', item)
      const attach = JSON.stringify(item)
      this.$router.push({ path: '/pages/attachment/main', query: { type: 'download', attach } })
    },
    videoChangeHandle (e) {
      const { mp: { detail: { duration, currentTime } } } = e
      this.durationTime = parseInt(duration)
      this.currentTime = parseInt(currentTime)
    },
    fetchComments (articleId) {
      postCommentsById(articleId).then((resComm) => {
        const { code, data: { list } } = resComm
        if (code === 0) {
          this.articleComment = list
        }
      })
    },
    commCancelHandle () {
      this.commentText = ''
      this.isComment = false
    },
    publishHandle (formData) {
      const id = this.articleId
      const { mp: { detail: { value } } } = formData
      let byCriticsTemp = ''
      let commentIdTemp = null
      try {
        byCriticsTemp = this.commentObj.critics._id
        commentIdTemp = this.commentObj._id
        console.log(byCriticsTemp, commentIdTemp)
      } catch (error) {}
      const reqData = {
        article: id,
        critics: getUser(),
        byCritics: byCriticsTemp,
        commentId: commentIdTemp,
        content: value.commText
      }
      postComments(reqData).then((resData) => {
        const { code } = resData
        if (code === 0) {
          this.fetchComments(this.articleId)
          this.commentText = ''
          this.isComment = false
        }
      })
    },
    exceptHandle (key, val) {
      this.isCustom = false
      this.maskActive = key
      this.exceptMoney = val
    },
    customExceptHandle () {
      this.exceptMoney = ''
      this.maskActive = 0
      this.isCustom = true
    },
    maskBtnHandle () {
      const _this = this
      this.isCustom = false
      console.log(_this.exceptMoney)
      const money = Number((_this.exceptMoney * 100).toFixed(2))
      console.log(money)
      postWeChatPay({
        price: money,
        orderInfo: `${money / 100} 书签打赏`
      }).then((resData) => {
        _this.paySign(resData)
      })
    },
    paySign (weChatData) {
      const { code, data: { nonceStr, appId } } = weChatData
      const _this = this
      if (code !== 0) {
        return false
      }
      let timestampStr = JSON.stringify(new Date().getTime())
      let paySignStr = CryptoJS.MD5(`appId=${appId}&nonceStr=${nonceStr}&package=${weChatData.data.package}&signType=MD5&timeStamp=${timestampStr}&key=cdsrsoft2019cdsrsoft2019cdsrsoft`).toString()
      wx.requestPayment({
        nonceStr,
        package: weChatData.data.package,
        signType: 'MD5',
        timeStamp: timestampStr,
        paySign: paySignStr,
        success (res) {
          postExcept({
            user: getUser(),
            article: _this.articleDetail._id,
            writer: _this.articleDetail.user._id,
            price: Number((_this.exceptMoney * 100).toFixed(2))
          }).then((resData) => {
            console.log('订单记录成功', resData)
          })
          wx.showToast({
            title: '支付成功',
            icon: 'success',
            duration: 2000
          })
          _this.exceptMoney = 1
          _this.maskActive = null
          _this.isCustom = false
          _this.isExcept = false
        },
        fail (res) {
          console.log(res)
          wx.showToast({
            title: '支付失败',
            icon: 'success',
            duration: 2000
          })
        }
      })
    },
    replyHandle (item) {
      this.isComment = true
      this.commentObj = item
    },
    commentHandle () {
      this.commentObj = {}
      this.isComment = true
    },
    likesHandle (article) {
      const { _id } = article
      const payload = {
        user: getUser(),
        article: _id
      }
      postLikes(payload).then((articleData) => {
        console.log(articleData)
      })
    },
    async looksHandle (article) {
      const { _id } = article
      const payload = {
        user: getUser(),
        article: _id
      }
      await postLooks(payload)
    },
    focusHandle (article, type = false) {
      const { _id } = article
      const payload = {
        user: getUser(),
        article: _id,
        focus: type
      }
      postFocus(payload).then((articleData) => {
        const { code } = articleData
        if (code === 0) {
          // 重新请求数据
          this.fetchDetailData(this.articleId)
        }
      })
    },
    clickMaskHandle () {
      this.isCustom = false
      this.isExcept = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.article-container{
  .article-content__container{
    padding: $side-padding;
    padding-bottom: 98rpx;
    .article-content__wrapper{
      .article-container__title{
        font-size: 36rpx;
        color: #333;
        font-weight:bold;
      }
      .article-container__intro{
        font-size: 36rpx;
        color: #333;
        font-weight:bold;
      }
      .article-container__user{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20rpx;
        margin-bottom: 30rpx;
        .article-wrapper__userInfo{
          width: 100%;
          display: inline-flex;
          align-items: center;
          .container-user__avatar{
            width: 43rpx;
            height: 43rpx;
            margin-right: 3%;
            &>img{
              width: 100%;
              height: 100%;
              border-radius: 90px;
              overflow: hidden;
            }
          }
          .container-user__name{
            .user-name__text{
              font-size: 20rpx;
              font-weight: 500;
              color: #000;
              max-width: 60%;
            }
            .user-name__date{
              font-size:20rpx;
              font-weight:bold;
              color: #999;
            }
          }
        }
        .article-wrapper__focus{
          flex-shrink: 0;
          width: 102rpx;
          height: 40rpx;
          background-color: #1EA473;
          border:1rpx solid #1EA473;
          border-radius: 20px;
          font-size:20rpx;
          text-align: center;
          line-height: 40rpx;
          font-weight:bold;
          color: #fff;
          &:active{
            opacity: .8;
          }
        }
        .article-wrapper__onFocus{
          flex-shrink: 0;
          width: 102rpx;
          height: 40rpx;
          background-color: #fff;
          border-radius: 20px;
          font-size:20rpx;
          text-align: center;
          line-height: 40rpx;
          font-weight:bold;
          color: #999;
          border:1rpx solid #999;
          &:active{
            opacity: .8;
          }
        }
      }
      .article-content{
        font-size:28rpx;
        font-weight:bold;
      }
    }
    .user-info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      padding: 20rpx 0;
      border-bottom: 1rpx solid #EBEBEB;
      .info-location{
        display: inline-flex;
        align-items: center;
        font-size:28rpx;
        font-weight:500;
        color:rgba(153,153,153,1);
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
        &>image{
          width: 18rpx;
          height: 24rpx;
          margin-right: 15rpx;
        }
      }
      .info-attach{
        flex-shrink: 0;
        color: #1EA473;
        font-size:20rpx;
        display: inline-flex;
        align-items: center;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
        &>image{
          width: 24rpx;
          height: 24rpx;
          margin-right: 15rpx;
        }
      }
    }
    .article-user__wrapper{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 27rpx 0;
      border-bottom: 1rpx solid #EBEBEB;
      .content-user__title{
        font-size:28rpx;
        font-weight:bold;
        color: #333;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .content-user__avatar{
        display: flex;
        position: relative;
        width: 130rpx;
        flex-shrink: 0;
        .user-avatar__item{
          width: 40rpx;
          height: 40rpx;
          &>img{
            width: 100%;
            height: 100%;
          }
        }
        .avatar-item-1{
          z-index: 9;
        }
        .avatar-item-2{
          z-index: 8;
          margin-left: -22rpx;
        }
        .avatar-item-3{
          z-index: 7;
          margin-left: -22rpx;
        }
        .avatar-item-4{
          z-index: 6;
          margin-left: -22rpx;
        }
      }
      .content-user__except{
        flex-shrink: 0;
        width:102rpx;
        height:40rpx;
        background-color: #1EA473;
        border-radius:20px;
        font-size:20rpx;
        font-weight:bold;
        color: #fff;
        text-align: center;
        line-height: 40rpx;
      }
    }
    .article-comment__wrapper{
      .article-comment__nav{
        font-size:24rpx;
        font-weight:bold;
        color: #333;
        padding: 30rpx 0;
      }
      .comment-wrapper__item{
        display: flex;
        margin-bottom: 27rpx;
        .comment-user__avatar{
          width: 42rpx;
          height: 42rpx;
          flex-shrink: 0;
          padding-right: 20rpx;
          &>img{
            border-radius: 90px;
            overflow: hidden;
            width: 100%;
            height: 100%;
          }
        }
        .comment-user__content{
          width: 100%;
          .comment-item__user{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 27rpx;
            .item-user__name{
              font-size:20rpx;
              font-weight:500;
            }
            .item-user__reply{
              font-size:20rpx;
              font-weight:500;
              color: #1EA473;
              &:active{
                opacity: .8;
              }
            }
          }
          .comment-item__text{
            font-size:28rpx;
            font-weight:bold;
            margin-bottom: 24rpx;
          }
          .user-item__comments{
            background-color: #f5f5f5;
            border-radius:8px;
            padding: 17rpx;
            .reply-comments__item{
              .reply-comments__name{
                font-size:20rpx;
                color: #000;
              }
              .reply-comments__comment{
                font-size:28rpx;
                color: #333;
                margin-top: 10rpx;
              }
            }
          }
        }
      }
    }
    .footer-wrapper{
      position: fixed;
      bottom: 0;
      height: 98rpx;
      width: 100%;
      z-index: 99;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding-left: 32rpx;
      box-sizing: border-box;
      .footer-input__box{
        width: 100%;
        border-radius:30px;
        height:60rpx;
        background-color: #f5f5f5;
        .wrapper-input__item {
          padding: 0 30rpx;
          font-size: 28rpx;
          color: #000;
          height: 60rpx;
          &::-webkit-input-placeholder{
            color: #999;
            font-size:28rpx;
            font-weight:bold;
          }
        }
      }
      .footer-wrapper__btn{
        width: 300rpx;
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: space-around;
        font-size:20rpx;
        font-weight:bold;
        color: #999;
        padding-right:35rpx;
        box-sizing:border-box;
      }
    }
  }
}

.mask-content__wrapper{
  min-height: 545rpx;
  padding-bottom: 56rpx;
  width: 85%;
  position: relative;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  background-color: #fff;
  border-radius: 16rpx;
  text-align: center;
  .mask-content__header{
    width: 160rpx;
    margin: 0 auto;
    border-radius: 90px;
    &>img {
      width: 160rpx;
      height: 160rpx;
      margin-top: -50%;
      border-radius: 90px;
    }
  }
  .mask-content__title{
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    margin: 25rpx;
    margin-bottom: 50rpx;
  }
  .mask-content__tags{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    .mask-tag__item{
      flex-shrink: 0;
      border:2rpx solid rgba(30,164,115,1);
      border-radius:90rpx;
      font-size:28rpx;
      font-weight:bold;
      color: rgba(30,164,115,1);
      padding: 13rpx 40rpx;
      margin: 20rpx;
      &:active{
        opacity: .8;
      }
      & > input{
        width: 100rpx;
        height:40rpx !important;
        min-height: auto;
      }
    }
    .mask-tag__active{
      background-color: rgba(30,164,115,1);
      color: #fff;
    }
  }
  .mask-content__btns{
    width:90%;
    height:88rpx;
    background:rgba(30,164,115,1);
    border-radius:44px;
    color: #FEFEFE;
    line-height: 88rpx;
    margin: 0 auto;
    margin-top: 45rpx;
    &:active{
      opacity: .8;
    }
  }
}

.mask-comment__wrapper{
  background:rgba(255,255,255,1);
  border-radius:16px 16px 0 0;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 400rpx;
  padding: $side-padding;
  .mask-comment__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:28rpx;
    font-weight:bold;
    color: #333333;
    height: 50rpx;
    .mask-header__public{
      color: #1EA473;
      font-weight:bold;
      font-size:28rpx;
      border: none;
      background-color: transparent;
      flex-shrink: 0;
      margin: 0;
      &::after{
        display: none;
      }
    }
  }
  .mask-comment__text{
    margin-top: 15rpx;
    height: 285rpx;
    & > textarea{
      height: 100%;
      color: #333333;
      font-weight:bold;
      font-size: 28rpx;
    }
  }
}
</style>
