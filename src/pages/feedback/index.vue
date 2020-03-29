<template>
  <div class="feedback-container">
    <div class="feedback-content__container">
      <div class="feedback-content__title">
        <input class="feedback-title__concat" v-model="title" placeholder="联系方式">
      </div>
      <div class="feedback-content__text"><textarea type="textarea" v-model="signText" :maxlength="100" placeholder="请简单的描述遇到的问题" /></div>
      <div class="feedback-content__button">
        <custom-button :click-methods="feedBackHandle" text="提 交"></custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButtons/index'
// import { getUser } from '@/utils/auth'
export default {
  components: {
    CustomButton
  },
  data () {
    return {
      signText: ''
    }
  },
  onUnload () {
    this.signText = ''
  },
  methods: {
    feedBackHandle () {
      // TODO
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.feedback-container{
  .feedback-content__container{
    border-top: 1rpx solid #EBEBEB;
    padding: 0 $side-padding;
    .feedback-content__title{
      font-size:20rpx;
      padding: 25rpx 0;
      .feedback-title__concat{
        height: 100%;
        width: 100%;
        font-size: 28rpx;
        font-weight: bold;
      }
    }
    .feedback-content__text{
      border-top: 1rpx solid #EBEBEB;
      border-bottom: 1rpx solid #EBEBEB;
      padding: 32rpx 0;
      & > textarea{
        width: 100%;
      }
    }
    .feedback-content__button{
      margin: 70rpx 0;
    }
  }
}
</style>
