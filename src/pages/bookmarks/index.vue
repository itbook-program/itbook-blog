<template>
  <div class="bookmarks-container">
    <div class="user-card">
      <div class="user-card__title">我的书签</div>
      <div class="user-card__balance">{{user.amount}}<span class="card-balance__text">书签</span></div>
      <div class="user-card__btn" @click="withdrawalHandle">提现</div>
    </div>
    <custom-tabs :tabs="tabs" :activedIndex="0" @checkedItem="checkedItem"></custom-tabs>
    <div class="tab-items">
      <div v-if="tabIndex === 0">
        <list-item :marksData="income"></list-item>
      </div>
      <div v-else-if="tabIndex === 1">
        <list-item :marksData="spending"></list-item>
      </div>
    </div>
  </div>
</template>
<script>
import CustomTabs from '@/components/CustomTabs'
import listItem from '@/components/CustomBookMarks'
import { getUserInfo } from '@/api/user'
import { getExcept } from '@/api/except'
import { mapState } from 'vuex'

export default {
  components: {
    CustomTabs,
    listItem
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  mounted () {
    this.fetchUserInfo()
    this.fetchException()
  },
  data () {
    return {
      tabIndex: 0,
      user: {},
      spending: {},
      income: {},
      tabs: [
        {
          key: 0,
          value: '收入'
        }, {
          key: 1,
          value: '支出'
        }
      ]
    }
  },
  methods: {
    async fetchException () {
      const { _id } = this.userInfo
      console.log(await getExcept({ userId: _id }))
      const {data: {count: { spCount, inCount }, list: {spending, income}}} = await getExcept({ userId: _id })
      console.log(spCount, inCount)
      this.spending = spending
      this.income = income
    },
    fetchUserInfo () {
      const { _id } = this.userInfo
      getUserInfo({id: _id}).then((user) => {
        const { code, data } = user
        if (code === 0) {
          this.user = data
        }
      })
    },
    checkedItem (index, items) {
      this.tabIndex = index
    },
    withdrawalHandle () {
      console.log('申请提现')
      this.$router.push({ path: '/pages/withdrawal/main' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.bookmarks-container{
  padding: $side-padding;
}
 .user-card{
    background-color: #C7C7C7;
    width: 100%;
    padding: 18rpx;
    box-sizing: border-box;
    border-radius:16rpx;
    min-height: 386rpx;
    text-align: center;
    color: #1EA473;
    margin-bottom: 20rpx;
    .user-card__title{
      text-align: center;
      font-size: 36rpx;
      margin-top: 20rpx;
    }
    .user-card__balance{
      font-size:160rpx;
      .card-balance__text{
        font-size: 36rpx;
      }
    }
    .user-card__btn{
      width:161rpx;
      height:60rpx;
      border-radius:30px;
      margin: 0 auto;
      background-color: #1EA473;
      color: #fff;
      line-height: 60rpx;
      font-size: 28rpx;
      margin-top: -10rpx;
      &:active{
        opacity: .8;
      }
    }
  }
</style>

