<template>
  <div class="bookmarks-items__container">
    <div v-for="(item, index) in marksData" :key="index" class="bookmarks-container__item">
      <div class="container-item__info">
        <div class="item-info__title">
          <div class="item-title__text">{{item.article.title}}</div>
          <custom-tags v-if="isTag" :type="tagType" :title="tagText"></custom-tags>
        </div>
        <div class="item-info__date">{{item.updateAt}}</div>
      </div>
      <div class="container-item__num">{{item.price}} 书签</div>
    </div>
  </div>
</template>
<script>
import CustomTags from '@/components/CustomTags/index'
export default {
  props: {
    isTag: {
      type: Boolean,
      default: false
    },
    tagText: {
      type: String,
      default: '申请中'
    },
    tagType: {
      type: String,
      default: 'attent'
    },
    marksData: {
      type: Array,
      default: []
    }
  },
  components: {
    CustomTags
  }
}
</script>
<style lang="scss" scoped>
.bookmarks-items__container{
  margin: 40rpx 0;
  .bookmarks-container__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20rpx 0;
    .container-item__info{
      flex: 1;
      padding-right: 10rpx;
      overflow: hidden;
      .item-info__title{
        font-size:28rpx;
        color: #333;
        display: flex;
        align-items: center;
        overflow: hidden;
        padding-right: 30rpx;
        .item-title__text{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .item-info__date{
        font-size: 20rpx;
        color: #999;
        padding: 10rpx 0;
      }
    }
    .container-item__num{
      font-size: 32rpx;
      color: #1EA473;
      flex-shrink: 0;
    }
  }
}
</style>
