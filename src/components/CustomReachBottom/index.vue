<template>
  <div class="loadMore-container">
    {{chooseText ? '内容加载中...':'内容加载完成'}}
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: String,
      required: true
    },
    currentPage: {
      type: String,
      required: true
    },
    pageSize: {
      type: String,
      default: '10'
    }
  },
  data () {
    return {
      isLoading: true
    }
  },
  computed: {
    chooseText () {
      return (this.currentPage * this.pageSize) < this.count
    }
  }
}
</script>

<style lang="scss" scoped>
.loadMore-container{
  margin: 0 auto;
  padding: 28rpx 0;
  font-size: 20rpx;
  font-weight: bold;
  color: rgba(30,164,115,1);
  text-align: center;
}
</style>
