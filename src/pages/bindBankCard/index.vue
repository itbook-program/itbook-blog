<template>
  <div class="bankCard-container">
    <div class="bankCard-content__list">
      <custom-cells title="我的银行卡" type="title" />
      <custom-cells title="开户行" v-model="bankName" type="input" placeholder="请输入开户行" />
      <custom-cells title="帐号" v-model="bankNumber" type="input" placeholder="请输入帐号" />
    </div>
    <custom-buttons :click-methods="confirmHandle" text="保 存" />
  </div>
</template>
<script>
import CustomCells from '@/components/CustomCells/index'
import CustomButtons from '@/components/CustomButtons/index'
import { postWithdraw, putWithdraw } from '@/api/withdraw'
import event from '@/utils/event'
import { mapState } from 'vuex'

export default {
  components: {
    CustomCells,
    CustomButtons
  },
  data () {
    return {
      bankName: '',
      bankNumber: '',
      type: 0
    }
  },
  mounted () {
    const { bankName, bankNumber } = this.$route.query
    if (bankName && bankNumber) {
      this.bankName = bankName
      this.bankNumber = bankNumber
      this.type = 1
      console.log(this.bankName, this.bankNumber)
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  methods: {
    async confirmHandle () {
      const { _id } = this.userInfo
      const reqData = {
        user: _id,
        bankName: this.bankName,
        bankNumber: this.bankNumber
      }
      let resData = null
      if (this.type === 1) {
        resData = await putWithdraw(reqData)
      } else {
        resData = await postWithdraw(reqData)
      }
      const { code } = resData
      event.$emit('bankDataUpdate')
      if (code === 0) this.$router.go(-1)
    },
    modifyHandle () {
      console.log('点击修改')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.bankCard-container{
  padding: 0 $side-padding;
  border-top: 1rpx solid #ebebeb;
  .bankCard-content__list{
    margin-bottom: 68rpx;
  }
}
</style>
