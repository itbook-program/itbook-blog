<template>
  <div class="custom-waveform__container">
    <span :class="playerState" v-for="n in 50" :key="n"></span>
  </div>
</template>
<script>
export default {
  props: {
    player: {
      type: String,
      default: 'stop'
    }
  },
  computed: {
    playerState () {
      console.log(this.player === 'running' ? 'waveform-line' : '')
      // console.log(this.player === 'running' ? 'custom-waveform__container' : '')
      return this.player === 'running' ? 'waveform-line' : ''
    }
  }
}
</script>
<style lang="scss" scoped>
$spanLen: 50;
.custom-waveform__container{
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  & > span{
    display: inline-block;
    width: 6rpx;
    background: #666666;
    animation: load 1s ease infinite;
    @for $i from 1 to $spanLen {
      &:nth-child(#{$i}){
        height: (30+random(35))+rpx;
        animation-delay:2s * random();
        animation-play-state: paused;
      }
    }
  }
  .waveform-line{
    animation-play-state: running !important;
  }
  @keyframes load {
      0%,100% {
        transform: scaleY(1);
      }
      50% {
        transform: scaleY(0.5);
      }
  }
}

</style>
