<template>
  <div class="withdrawal-container">
    <div class="withdrawal-content__list">
      <custom-cells title="我的银行卡" type="title" :click-methods="modifyHandle" :content="info.bankName ? '修改': '添加'" />
      <custom-cells title="开户行" type="text" v-if="info.bankName" :content="info.bankName || ''" />
      <custom-cells title="帐号" type="text" v-if="info.bankNumber" :content="info.bankNumber" />
      <custom-cells title="我的账户" type="title" />
      <custom-cells title="账户余额" type="text" v-if="info.user" :content="`¥${info.user.amount || ''}`" />
      <custom-cells title="可提现金额" type="text" v-if="info.user" :content="`¥${info.user.amount || ''}`" />
      <custom-cells title="提现金额" v-model="amount" type="input" placeholder="请输入金额" />
      <custom-cells title="手续费" type="title" is-disabled content="¥0.00" />
    </div>
    <custom-buttons :disabled="type === 'loading' ? true : false" :click-methods="confirmHandle" text="提 现" />
  </div>
</template>
<script>
import CustomCells from '@/components/CustomCells/index'
import CustomButtons from '@/components/CustomButtons/index'
import { getWithdraw, postWithdrawRecord, getWithdrawRecord } from '@/api/withdraw'
import event from '@/utils/event'
import { mapState } from 'vuex'
export default {
  components: {
    CustomCells,
    CustomButtons
  },
  data () {
    return {
      amount: '',
      info: {},
      poundage: 0,
      type: 'waiting'
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  mounted () {
    this.fetchData()
    this.fetchRecordData()
    event.$on('bankDataUpdate', this.fetchData)
  },
  onUnload () {
    event.$off('bankDataUpdate', this.fetchData)
  },
  methods: {
    async fetchRecordData () {
      const { _id } = this.userInfo
      const { data: { list } } = await getWithdrawRecord({ user: _id })
      if (list && list.user) {
        this.type = 'loading'
      }
    },
    async fetchData () {
      const { _id } = this.userInfo
      const { code, data: { list } } = await getWithdraw({user: _id})
      if (code === 0) {
        this.info = list
      }
    },
    async confirmHandle () {
      const { _id } = this.info
      const user = this.userInfo._id
      const { code } = await postWithdrawRecord({ _id, user, amount: this.amount, poundage: this.poundage })
      if (code === 0) {
        // 已经提交提现申请
        this.$router.go(-1)
      }
      console.log(_id, user, this.amount, this.poundage)
    },
    modifyHandle () {
      const { bankName, bankNumber } = this.info
      this.$router.push({ path: '/pages/bindBankCard/main', query: { bankName, bankNumber } })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.withdrawal-container{
  padding: 0 $side-padding;
  border-top: 1rpx solid #ebebeb;
  .withdrawal-content__list{
    margin-bottom: 68rpx;
  }
}
</style>
