<template>
  <div class="comment-container">
    <div class="comment-container__item">
      <div class="comment-wrapper__avatar">
        <img :src="headerIcon" />
      </div>
      <div class="comment-wrapper__content">
        <div class="comment-wrapper__user">
          <div class="comment-user__username">版本更新</div>
          <div class="comment-user__time">19.04.30 16:45</div>
        </div>
        <div class="comment-wrapper__info">
          本次更新要点：
          1、本次版本更新修复了已知的缺陷；
          2、新增了官方活动；
          3、重新设计了推荐算法。
          下个版本计划：
          1、举行打榜活动;
          2、优化部分逻辑。
        </div>
      </div>
    </div>

    <div class="comment-container__item">
      <div class="comment-wrapper__avatar">
        <img :src="headerIcon" />
      </div>
      <div class="comment-wrapper__content">
        <div class="comment-wrapper__user">
          <div class="comment-user__username">活动通知</div>
          <div class="comment-user__time">19.04.30 16:45</div>
        </div>
        <div class="comment-wrapper__info">
          全新的插书签活动开始了，阅读文章，打赏任 意书签，就可参与官方周边纪念物抽奖活动，快 快来参与吧。
          <div class="active-link">活动详情点击本消息查看>></div>
        </div>
      </div>
    </div>

    <div class="comment-container__item">
      <div class="comment-wrapper__avatar">
        <img :src="headerIcon" />
      </div>
      <div class="comment-wrapper__content">
        <div class="comment-wrapper__user">
          <div class="comment-user__username">文章审核通知</div>
          <div class="comment-user__time">19.04.30 16:45</div>
        </div>
        <div class="comment-wrapper__text">
          恭喜你的文章通过了审核。
        </div>
        <div class="comment-wrapper__info">
          博客系统设计--小程序设计
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import headerIcon from '@/assets/image/header.png'
export default {
  data () {
    return {
      headerIcon
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.comment-container{
  padding: $side-padding;
  .comment-container__item{
    width: 100%;
    display: flex;
    border-bottom: 1rpx solid #EBEBEB;
    padding-top: 25rpx;
    .comment-wrapper__info{
      .active-link{
        color: #1EA473;
        & > a{
          padding: 10rpx 0;
        }
      }
    }
  }
  .comment-wrapper__avatar{
    margin-right: 16rpx;
    flex-shrink: 0;
    &>img{
      width: 42rpx;
      height: 42rpx;
    }
  }
  .comment-wrapper__content{
    flex: 1;
    padding-bottom: 25rpx;
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
    .comment-wrapper__info{
      margin-top: 25rpx;
      background:rgba(245,245,245,1);
      border-radius:8px;
      padding: 17rpx;
      font-size: 28rpx;
      color: #333;
    }
  }
}
</style>
