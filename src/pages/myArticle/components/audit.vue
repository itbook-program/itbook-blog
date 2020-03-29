<template>
  <div class="comment-container">
    <div class="comment-container__item" v-for="(item, index) in itemData" :key="index">
      <div class="comment-wrapper__avatar">
        <img :src="item.user.avatarUrl" />
      </div>
      <div class="comment-wrapper__content">
        <div class="comment-wrapper__user">
          <!-- <div class="comment-user__username">19.04.30 16:45</div> -->
          <div class="comment-user__username">{{item.updateAt}}</div>
          <div class="comment-user__time audit-btn" @click="undoHandle(item)">撤销审核</div>
        </div>
        <div class="comment-wrapper__text">平台将会在48小时内审核，请稍后查看。</div>
        <div class="comment-wrapper__info">{{item.title}}</div>
      </div>
    </div>

  </div>
</template>
<script>
import headerIcon from '@/assets/image/header.png'
export default {
  props: {
    itemData: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      headerIcon
    }
  },
  methods: {
    undoHandle (item) {
      console.log(item)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../style/variable.scss';
.comment-container{
  padding: $side-padding;
  .comment-container__item{
    width: 100%;
    display: flex;
    border-bottom: 1rpx solid #EBEBEB;
    padding-top: 25rpx;
    &:last-child{
      border-bottom: none;
    }
  }
  .comment-wrapper__avatar{
    margin-right: 16rpx;
    flex-shrink: 0;
    &>img{
      width: 42rpx;
      height: 42rpx;
      overflow: hidden;
      border-radius: 90px;
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
      .audit-btn{
        color: #1EA473;
        &:active{
          opacity: .8;
        }
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
  }
}
</style>
