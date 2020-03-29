<template>
  <div class="custom-loading__container">
    <div class="loading-wrap">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.custom-loading__container{
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
}
.loading-wrap{
  width: 100rpx;
  height: 100rpx;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > span{
    display: inline-block;
    width: 16rpx;
    height: 16rpx;
    border-radius: 50%;
    background: #039952;
    position: absolute;
    animation: load 1.04s ease infinite;
    &:nth-child(1){
      left: 0;
      top: 50%;
      margin-top: -8rpx;
      animation-delay: 0.13s;
    }
    &:nth-child(2){
      left: 12.24rpx;
      top: 12.24rpx;
      animation-delay: 0.26s;
    }
    &:nth-child(3){
      left: 50%;
      top: 0;
      margin-left: -8rpx;
      animation-delay: 0.39s;
    }
    &:nth-child(4){
      top: 12.24rpx;
      right: 12.24rpx;
      animation-delay: 0.52s;
    }
    &:nth-child(5){
      right: 0;
      top: 50%;
      margin-top: -8rpx;
      animation-delay: 0.65s;
    }
    &:nth-child(6){
      right: 12.24rpx;
      bottom: 12.24rpx;
      animation-delay: 0.78s;
    }
    &:nth-child(7){
      bottom: 0;
      left: 50%;
      margin-left: -8rpx;
      animation-delay: 0.91s;
    }
    &:nth-child(8){
      bottom: 12.24rpx;
      left: 12.24rpx;
      animation-delay: 1.04s;
    }
  }
}
@keyframes load{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0.2;
    }
}
</style>
