<template>
  <div class="comment-container">
    <div class="comment-container__item">
      <div class="comment-wrapper__avatar">
        <img :src="headerIcon" />
      </div>
      <div class="comment-wrapper__content">
        <div class="comment-wrapper__user">
          <div class="comment-user__username">小呆呆</div>
          <div class="comment-user__time">19.04.30 16:45</div>
        </div>
        <div class="comment-wrapper__text">
          基础讲的好详细，是一篇适合小白的好文章。基础讲的好详细，是一篇适合小白的好文章。
        </div>
        <div class="comment-wrapper__info">
          博客系统设计--小程序设计
        </div>
        <div class="comment-wrapper__opera">
          <div class="comment-opera__num">评论（20）</div>
          <div class="comment-opera__del">删除</div>
        </div>
      </div>
    </div>

    <div class="comment-container__item">
      <div class="comment-wrapper__avatar">
        <img :src="headerIcon" />
      </div>
      <div class="comment-wrapper__content">
        <div class="comment-wrapper__user">
          <div class="comment-user__username">小呆呆</div>
          <div class="comment-user__time">19.04.30 16:45</div>
        </div>
        <div class="comment-wrapper__text">
          基础讲的好详细，是一篇适合小白的好文章。基础讲的好详细，是一篇适合小白的好文章。
        </div>
        <div class="comment-wrapper__info">
          博客系统设计--小程序设计
        </div>
        <div class="comment-wrapper__opera">
          <div class="comment-opera__num">评论（20）</div>
          <div class="comment-opera__del">删除</div>
        </div>
      </div>
    </div>

    <div class="comment-container__item">
      <div class="comment-wrapper__avatar">
        <img :src="headerIcon" />
      </div>
      <div class="comment-wrapper__content">
        <div class="comment-wrapper__user">
          <div class="comment-user__username">小呆呆</div>
          <div class="comment-user__time">19.04.30 16:45</div>
        </div>
        <div class="comment-wrapper__text">
          基础讲的好详细，是一篇适合小白的好文章。基础讲的好详细，是一篇适合小白的好文章。
        </div>
        <div class="comment-wrapper__info">
          博客系统设计--小程序设计
        </div>
        <div class="comment-wrapper__opera">
          <div class="comment-opera__num">评论（20）</div>
          <div class="comment-opera__del">删除</div>
        </div>
      </div>
    </div>

    <div class="comment-container__item">
      <div class="comment-wrapper__avatar">
        <img :src="headerIcon" />
      </div>
      <div class="comment-wrapper__content">
        <div class="comment-wrapper__user">
          <div class="comment-user__username">小呆呆</div>
          <div class="comment-user__time">19.04.30 16:45</div>
        </div>
        <div class="comment-wrapper__text">
          基础讲的好详细，是一篇适合小白的好文章。基础讲的好详细，是一篇适合小白的好文章。
        </div>
        <div class="comment-wrapper__info">
          博客系统设计--小程序设计
        </div>
        <div class="comment-wrapper__opera">
          <div class="comment-opera__num">评论（20）</div>
          <div class="comment-opera__del">删除</div>
        </div>
      </div>
    </div>

    <div class="comment-container__item">
      <div class="comment-wrapper__avatar">
        <img :src="headerIcon" />
      </div>
      <div class="comment-wrapper__content">
        <div class="comment-wrapper__user">
          <div class="comment-user__username">小呆呆</div>
          <div class="comment-user__time">19.04.30 16:45</div>
        </div>
        <div class="comment-wrapper__text">
          基础讲的好详细，是一篇适合小白的好文章。基础讲的好详细，是一篇适合小白的好文章。
        </div>
        <div class="comment-wrapper__info">
          博客系统设计--小程序设计
        </div>
        <div class="comment-wrapper__opera">
          <div class="comment-opera__num">评论（20）</div>
          <div class="comment-opera__del">删除</div>
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
      margin: 26rpx 0;
    }
    .comment-wrapper__info{
      background:rgba(245,245,245,1);
      border-radius:8px;
      padding: 17rpx;
      font-size: 28rpx;
      color: #333;
    }
    .comment-wrapper__opera{
      display: flex;
      justify-content: space-between;
      padding: 25rpx 0;
      font-size: 20rpx;
      .comment-opera__del{
        color: #1EA473;
      }
    }
  }
}
</style>
