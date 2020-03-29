<template>
  <div>
    <div class="ptf-list__container">
      <div v-for="(item, index) in itemData" :key="index" class="ptf-list__wrapper">
        <div class="list-item__title">
          <span class="item-title__text">{{item.title}}</span>
          <span class="item-title__delBtn" @click="delHandle(item)">删除文章</span>
        </div>
        <div class="list-item__content">
          <div class="item-content__text">{{item.contentText}}</div>
          <div class="item-content__cover">
            <video play-btn-position="center" object-fit="fill" v-if="item.resourceType === 1" :src="videoUrl + item.cover"></video>
            <img :src="item.cover" />
          </div>
        </div>
        <div class="list-item__opera">
          <div class="item-opera__wrapper">
            <div class="opera-opera__icon">
              <img :src="viewIcon">
            </div>
            <div class="opera-item__num">{{item.looks}}</div>
          </div>
          <div class="item-opera__wrapper">
            <div class="opera-opera__icon">
              <img :src="likeIcon">
            </div>
            <div class="opera-item__num">{{item.likes}}</div>
          </div>
          <div class="item-opera__wrapper">
            <div class="opera-item__num">{{item.updateAt}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import searchIcon from '@/assets/image/search.png'
import swiperCover from '@/assets/image/swiperCover.png'
import likeIcon from '@/assets/image/like.png'
import headerIcon from '@/assets/image/header.png'
import viewIcon from '@/assets/image/view.png'
export default {
  props: {
    itemData: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      viewIcon,
      likeIcon,
      headerIcon,
      swiperCover,
      searchIcon,
      navHeight: 0
    }
  },
  methods: {
    delHandle (item) {
      console.log('删除文章', item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/variable.scss';
.header-search__container {
  .header-search__wrapper{
    width:60%;
    background:rgba(245,245,245,1);
    border-radius:30px;
    margin-left: $side-padding;
    display: flex;
    align-items: center;
    .header-container__search{
      width: 43rpx;
      height: 48rpx;
      flex-shrink: 0;
      margin: 0 20rpx;
    }
    .header-container__input{
      width: 100%;
    }
  }
}

.ptf-mall__swiper{
  height: 386rpx;
  margin-top: 20rpx;
  .ptf-mall__swiperItem{
    width: 100%;
    text-align: center;
    .slide-image{
      height: 386rpx;
    }
  }
 }

 .ptf-list__container{
   padding: $side-padding;
  .ptf-list__wrapper{
    padding: 10rpx 0;
    border-bottom: 1rpx solid #f5f5f5;
    &:last-child{
      border-bottom: none;
    }
  .list-item__title{
    font-size:32rpx;
    font-weight:500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .item-title__text{
      flex: 1;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }    
    .item-title__delBtn{
      color: #1EA473;
      font-size: 20rpx;
      flex-shrink: 0;
      padding-left: 20rpx;
      &:active{
        opacity: .8;
      }
    }
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
