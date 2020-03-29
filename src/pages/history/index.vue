<template>
  <div class="ptf-history__container">
    <div v-for="(item, index) in looksData" :key="index" class="ptf-history__item">
      <div class="ptf-history__title">{{item.article.title}}</div>
      <div class="ptf-history__user">
        <div class="history-user__name">{{item.user.nickName}}</div>
        <div class="history-user__date">{{item.updateAt}}</div>
      </div>
    </div>
    <custom-reach-bottom :currentPage="currentPage" :count="count"></custom-reach-bottom>
  </div>
</template>
<script>
import { getLooks } from '@/api/looks'
import { getUser } from '@/utils/auth'
import CustomReachBottom from '@/components/CustomReachBottom'
import { formatTime } from '@/utils'
export default {
  components: {
    CustomReachBottom
  },
  data () {
    return {
      looksData: [],
      currentPage: 1,
      pageSize: 10,
      count: 1
    }
  },
  mounted () {
    const payload = {
      pageSize: this.pageSize,
      ussrId: getUser()
    }
    this.fetchData(payload, true)
  },
  onPullDownRefresh () {
    this.currentPage = 1
    const payload = {
      pageSize: this.pageSize,
      ussrId: getUser()
    }
    this.fetchData(payload, true)
  },
  onReachBottom () {
    if (!((this.currentPage * this.pageSize) < this.count)) {
      return false
    }
    const nextPage = this.currentPage + 1
    const payload = {
      pageSize: this.pageSize,
      currentPage: nextPage,
      ussrId: getUser()
    }
    this.fetchData(payload)
  },
  methods: {
    fetchData (payload, clean = false) {
      getLooks(payload).then((resData) => {
        const { code, data: { list, count, currentPage } } = resData
        // 格式化时间
        list.forEach(element => {
          element.updateAt = formatTime(element.updateAt)
        })
        if (code === 0) {
          if (clean) {
            this.looksData = list
          } else {
            this.looksData = this.looksData.concat(list)
          }
          this.currentPage = currentPage
          this.count = count
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.ptf-history__container{
  padding: 0 $side-padding;
  .ptf-history__item{
    border-bottom: 1rpx solid #ebebeb;
    .ptf-history__title{
      font-size: 28rpx;
      color: #333;
      font-weight: bold;
      margin-top: 24rpx;
      &:first-child{
        padding-top: 0;
      }
    }
    .ptf-history__user{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20rpx;
      color: #000;
      font-weight: 500;
      padding: 24rpx 0;
      .history-user__date{
        color: #999;
      }
    }
  }
}
</style>
