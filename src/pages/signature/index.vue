<template>
  <div class="signature-container">
    <div class="signature-content__container">
      <div class="signature-content__title">个性签名</div>
      <div class="signature-content__text"><textarea type="textarea" v-model="signText" :maxlength="100" placeholder="请输入签名" /></div>
      <div class="signature-content__button">
        <custom-button :click-methods="changeSignHandle" text="提 交"></custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButtons/index'
import { putUserSign } from '@/api/user'
import { getUser } from '@/utils/auth'
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
    changeSignHandle () {
      const id = getUser()
      const sign = this.signText
      putUserSign(id, sign).then((resData) => {
        const { code } = resData
        if (code === 0) {
          this.$router.back()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.signature-container{
  .signature-content__container{
    border-top: 1rpx solid #EBEBEB;
    padding: 0 $side-padding;
    .signature-content__title{
      font-size:20rpx;
      padding: 25rpx 0;
    }
    .signature-content__text{
      border-top: 1rpx solid #EBEBEB;
      border-bottom: 1rpx solid #EBEBEB;
      padding: 32rpx 0;
      & > textarea{
        width: 100%;
      }
    }
    .signature-content__button{
      margin: 70rpx 0;
    }
  }
}
</style>
