<template>
  <div class="comment-container">
    <div v-for="(userItem, index) in userComment" :key="index">
      <div class="comment-container__item">
        <div class="comment-wrapper__avatar">
          <img v-if="userItem.critics && userItem.critics.avatarUrl" :src="userItem.critics.avatarUrl" />
          <img v-else-if="userItem.content.critics && userItem.content.critics.avatarUrl" :src="userItem.content.critics.avatarUrl" />
        </div>
        <div class="comment-wrapper__content">
          <div class="comment-wrapper__text">
            <span v-if="userItem.content && userItem.content.content">{{userItem.content.content}}</span>
            <span v-else-if="userItem.content">{{userItem.content}}</span>
          </div>
          <div v-if="userItem.article" class="comment-wrapper__info">
            <div class="comment-wrapper__title">
              <span v-if="userItem.article">{{userItem.article.title}}</span>
              <span v-else-if="userItem.content.article">{{userItem.content.article.title}}</span>
            </div>
            <div class="comment-wrapper__name" v-if="userItem.article && userItem.article.user && userItem.article.user.nickName">{{userItem.article.user.nickName}}</div>
            <div class="comment-wrapper__name" v-else-if="userItem.content && userItem.content.article && userItem.content.article.user && userItem.content.article.user.nickName">{{userItem.content.article.user.nickName}}</div>
          </div>
          <div class="comment-wrapper__opera">
            <div class="comment-opera__num">评论 (
              <span v-if="userItem.comments">({{userItem.comments.length}})</span>
              <span v-else-if="userItem.content.comments">{{userItem.content.comments.length}}</span>
              )</div>
            <div class="comment-opera__wrapper">
              <div class="comment-opera__del">删除</div>
              <div class="comment-opera__time">{{userItem.updateTime}}</div>
            </div>
          </div>

          <div v-if="(userItem.comments && userItem.comments.length > 0) || (userItem.content.comments && userItem.content.comments.length > 0)">
            <div class="comment-wrapper__other" v-for="(commentItem, commIndex) in userItem.content.comments" :key="commIndex">
              <div class="comment-other__user">
                <div class="other-user__item">
                  <div v-if="commentItem.critics && commentItem.critics.nickName" class="comment-other__name">
                    {{commentItem.critics.nickName}}
                    <span class="comment-other__reply" v-if="commentItem.byCritics && commentItem.byCritics.nickName">
                      回复
                    </span>
                    {{commentItem.byCritics ? commentItem.byCritics.nickName : ''}}:
                  </div>
                  <div class="comment-other__content">{{commentItem.content}}</div>
                </div>
                <!-- <div class="other-user__item">
                  <div class="comment-other__name">TIM:</div> 
                  <div class="comment-other__content">是的，很实用</div>
                </div> -->
              </div>
              <div class="comment-other__opera">回复</div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
import headerIcon from '@/assets/image/header.png'
import { postCommentsByUser } from '@/api/comment'
import { getPush } from '@/api/push'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      headerIcon,
      userComment: []
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  mounted () {
    const { type } = this.$route.query
    if (type && type === 'message') {
      this.fetachMessDaeta()
    } else {
      this.fetchCommentData()
    }
  },
  methods: {
    async fetachMessDaeta () {
      const { _id } = this.userInfo
      const { data: { list } } = await getPush({ userId: _id, type: 'comments' })
      this.userComment = list
    },
    fetchCommentData () {
      const { _id } = this.userInfo
      postCommentsByUser({
        user: _id
      }).then((comment) => {
        const { data: { list }, code } = comment
        console.log(code, list)
        this.userComment = list
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.comment-container{
  padding: $side-padding;
  padding-top: 0;
  border-top: 1rpx solid #EBEBEB;
  .comment-container__item{
    width: 100%;
    display: flex;
    border-bottom: 1rpx solid #EBEBEB;
    padding-top: 25rpx;
  }
  .comment-wrapper__avatar{
    margin-right: 16rpx;
    flex-shrink: 0;
    &>img{
      border-radius: 90px;
      width: 42rpx;
      height: 42rpx;
    }
  }
  .comment-wrapper__content{
    flex: 1;
    .comment-wrapper__user{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .comment-user__username{
        font-size: 20rpx;
      }
      .comment-user__time{
        font-size: 20rpx;
        color: #999;
      }
    }
    .comment-wrapper__text{
      font-size: 28rpx;
      color: #333;
      margin-bottom: 16rpx;
    }
    .comment-wrapper__info{
      background:rgba(245,245,245,1);
      border-radius:8px;
      padding: 17rpx;
      font-size: 28rpx;
      color: #333;
      .comment-wrapper__title{
        font-size:28rpx;
        font-weight:bold;
        color: #333;
      }
      .comment-wrapper__name{
        font-size:20rpx;
        font-weight:500;
        color: #000;
        padding: 20rpx 0;
      }
    }
    .comment-wrapper__opera{
      display: flex;
      justify-content: space-between;
      padding: 25rpx 0;
      font-size: 20rpx;
      .comment-opera__wrapper{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        .comment-opera__del{
          color: #1EA473;
          margin-right: 16rpx;
        }
        .comment-opera__time{
          font-size:20rpx;
          font-weight: bold;
          color: #999;
        }
      }
    }
  }

  .comment-wrapper__other{
    display: flex;
    justify-content: space-between;
    border-top: 1rpx solid #EBEBEB;
    padding: 24rpx 0;
    .comment-other__user{
      color: #333333;
      font-size:20rpx;
      font-weight:bold;
      .other-user__item{
        display: flex;
        padding: 5rpx 0;
      }
      .comment-other__name{
        color: #1EA473;
        margin-right: 15rpx;
        .comment-other__reply{
          color: #333333;
          padding: 0 5rpx;
        }
      }
    }
    .comment-other__opera{
      font-size:20rpx;
      font-weight:bold;
      color: #1EA473;
    }
  }
}
</style>
