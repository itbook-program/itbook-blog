<template>
  <div class="title-container">
    <div class="title-wrap">{{title}}</div>
    <div class="title-subhead">{{info}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    info: {
      type: String,
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
.title-container{
    .title-wrap{
      font-size:32rpx;
      font-weight:600;
      color:rgba(51,51,51,1);
      line-height: 60rpx;
    }
    .title-subhead{
      font-size:24rpx;
      font-weight:400;
      color:rgba(102,102,102,1);
    }
}
</style>
