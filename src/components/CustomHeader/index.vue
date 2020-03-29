<template>
  <div :style="'padding-top:'+ navSignalTop +'px'" class="header-container">
    <slot>
      <div :style="'height:'+ navHeight + 'px'" class="header-wrapper">
        <div class="height-wrapper__back" v-if="isBack">{{backTitle}}</div>
        <div class="height-wrapper__title">{{title}}</div>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '首页'
    },
    isBack: {
      type: Boolean,
      default: true
    },
    backTitle: {
      type: String,
      default: '返回'
    }
  },
  data () {
    return {
      navSignalTop: 0,
      navHeight: 0
    }
  },
  created () {
    this.navBarTop()
  },
  methods: {
    navBarTop () {
      const { top, height } = wx.getMenuButtonBoundingClientRect()
      this.navSignalTop = top
      this.navHeight = height
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container{
  background-color: #fff;
  border-bottom: 1rpx solid#EBEBEB;
  padding-bottom: 14rpx;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  .header-wrapper{
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 36rpx;
    color: #333;
    font-weight: bold;
    position: relative;
    .height-wrapper__back{
      flex-shrink: 0;
    }
    .height-wrapper__title{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
