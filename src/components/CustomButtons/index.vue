<template>
  <div class="custom-butttons__container">
    <button class="custom-button__wrapper" :class="checkDisabled" :disabled="disabled" @click="clickMethods">{{text}}</button>
  </div>
</template>
<script>
export default {
  props: {
    clickMethods: { // 点击按钮事件
      type: Function,
      defalut: () => {}
    },
    type: {
      type: String,
      default: 'info'
    },
    disabled: {
      type: Boolean,
      defalut: false
    },
    text: {
      type: String,
      default: '确认'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    checkDisabled () {
      console.log(this.disabled)
      return this.disabled ? '' : ''
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-butttons__container{
  .custom-button__wrapper{
    width: 100%;
    border-radius:44rpx;
    background-color: #1EA473;
    height:88rpx;
    color: #fff;
    font-size: 32rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active{
      opacity: .8;
    }
  }
  .is_disable{
    background-color: #999;
  }
}
</style>
