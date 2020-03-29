<template>
  <div v-if="type==='attent'" class="custom-tag">{{title}}</div>
  <div v-else-if="type==='attent-active'" class="custom-tag custom-tag__unAttent">{{title}}</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'attent'
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-tag{
  border-radius:20px;
  width:102rpx;
  height:40rpx;
  background-color: #1EA473;
  font-size:20rpx;
  text-align: center;
  line-height:40rpx;
  color: #fff;
  flex-shrink: 0;
}
.custom-tag__unAttent{
  border: 1rpx solid #999;
  background-color: #fff;
  font-size:20rpx;
  color: #999;
  overflow: hidden;
  text-overflow: hidden;
  white-space: nowrap;
}
</style>
