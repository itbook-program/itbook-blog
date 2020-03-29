<template>
  <div class="withdrawal-container">
    <div class="withdrawal-content__list">
      <custom-cells title="个人信息" type="title" />
      <custom-cells title="姓名" :readOnly="isWriter" v-model="formData.userName" type="text" placeholder="请输入姓名" />
      <custom-cells title="身份证号码" :readOnly="isWriter" v-model="formData.IDCard" :inputMaxlength="18" type="text" placeholder="请输入身份证号码" />
      <custom-cells title="手机号码" :readOnly="isWriter" v-model="formData.phone" type="text" placeholder="请输入手机号码" />
    </div>
    <custom-buttons v-if="!isWriter" :click-methods="confirmHandle" text="提 交" />
  </div>
</template>
<script>
import CustomCells from '@/components/CustomCells/index'
import CustomButtons from '@/components/CustomButtons/index'
import { postWriter, getWriterById } from '@/api/writer'
import { getUser } from '@/utils/auth'

export default {
  components: {
    CustomCells,
    CustomButtons
  },
  data () {
    return {
      isWriter: false,
      formData: {
        user: getUser(),
        userName: '',
        IDCard: '',
        phone: ''
      }
    }
  },
  mounted () {
    getWriterById(this.formData.user).then((resData) => {
      const { code, data } = resData
      if (code === 0) {
        const { userName, IDCard, phone, user: { isWriter } } = data
        console.log(userName, IDCard, phone)
        this.isWriter = isWriter
        this.formData.userName = userName
        this.formData.IDCard = IDCard
        this.formData.phone = phone
      }
    })
  },
  onUnload () {
    this.formData = {
      user: getUser(),
      userName: '',
      IDCard: '',
      phone: ''
    }
  },
  methods: {
    confirmHandle () {
      postWriter(this.formData).then((resData) => {
        this.$router.back()
      })
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
