<template>
  <div class="user-container">
    <div class="user-card">
      <div class="user-card__avatar">
        <img :src="headerIcon" />
      </div>
      <div class="user-card__title">小呆呆</div>
      <div class="user-card__content">
        <div class="card-content__item">
          <div>文章</div>
          <div>99</div>
        </div>
        <div class="card-content__item">
          <div>喜欢</div>
          <div>99</div>
        </div>
        <div class="card-content__item">
          <div>关注</div>
          <div>99</div>
        </div>
      </div>
    </div>

    <div class="usr-nav">
      公开文章
    </div>

    <div class="ptf-list__container">
      <div class="ptf-list__wrapper">
        <div class="list-item__title">博客系统设计--小程序设计</div>
        <div class="list-item__content">
          <div class="item-content__text">博客系统是大家常用的系统之一，小编今天带大家从头搭建微信小程序之博客系统。首先我们下载微信开发者工具，并注册小程序账号.博客系统是大家常用的系统之一，小编今天带大家从头搭建微信小程序之博客系统。首先我们下载微信开发者工具，并注册小程序账号</div>
          <div class="item-content__cover">
            <img :src="swiperCover" />
          </div>
        </div>
        <div class="list-item__opera">
          <div class="item-opera__wrapper">
            <div class="opera-opera__icon">
              <img :src="viewIcon">
            </div>
            <div class="opera-item__num">199</div>
          </div>
          <div class="item-opera__wrapper">
            <div class="opera-opera__icon">
              <img :src="likeIcon">
            </div>
            <div class="opera-item__num">199</div>
          </div>

          <div class="item-opera__wrapper">
            <div class="opera-item__num">2019.04.13 16:44</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headerIcon from '@/assets/image/header.png'
import likeIcon from '@/assets/image/like.png'
import viewIcon from '@/assets/image/view.png'
import swiperCover from '@/assets/image/swiperCover.png'

export default {
  components: {
  },
  data () {
    return {
      headerIcon,
      likeIcon,
      viewIcon,
      swiperCover
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.user-container{
  padding: $side-padding;
  .user-card{
    background-color: #C7C7C7;
    width: 100%;
    padding: 18rpx;
    box-sizing: border-box;
    border-radius:16rpx;
    .user-card__avatar{
      text-align: center;
      &>img{
        width: 160rpx;
        height: 160rpx;
      }
    }
    .user-card__title{
      text-align: center;
      font-size: 48rpx;
      color: #333;
      margin-top: 20rpx;
      margin-bottom: 40rpx;
    }
    .user-card__content{
      display: flex;
      justify-content: space-around;
      text-align: center;
      color: #1EA473;
      font-size: 32rpx;
    }
  }
  .usr-nav{
    color: #1EA473;
    font-size: 32rpx;
    margin: 40rpx 0;
  }
}

.ptf-list__container{
  .ptf-list__wrapper{
    padding: 10rpx 0;
    border-bottom: 1rpx solid #f5f5f5;
    &:last-child{
      border-bottom: none;
    }
  .list-item__title{
      font-size:32rpx;
      font-weight:500;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .list-item__content{
      display: flex;
      align-items: center;
      .item-content__text{
        font-size:24rpx;
        font-weight:500;
        color:rgba(102,102,102,1);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        width: 100%;
      }
      .item-content__cover{
        width: 160rpx;
        height: 120rpx;
        overflow: hidden;
        flex-shrink: 0;
        border-radius: 10rpx;
        &>img{
          width: 160rpx;
          height: 120rpx;
          border-radius: 10rpx;
        }
      }
    }
    .list-item__opera{
      display: flex;
      align-items: center;
      .item-opera__wrapper{
        display: flex;
        align-items: center;
        margin-right: 8%;
        .opera-opera__icon{
          & > img{
            width: 32rpx;
            height: 32rpx;
          }
        }
        .opera-item__num{
          flex-shrink: 0;
          line-height: 32rpx;
          font-size:20rpx;
          font-weight:500;
          color: #666;
          margin-left: 8rpx;
          margin-top:-6rpx;
        }
      }
    }
  }
 }
</style>
