<template>
  <div class="ptf-history__container">
    <div v-for="(item, index) in likesData" :key="index" class="ptf-history__item">
      <div class="ptf-history__title">
        <span v-if="item.article">{{item.article.title}}</span>
        <span v-else-if="item.content && item.content.article">{{item.content.article.title}}</span>
      </div>
      <div class="ptf-history__user">
        <div class="history-user__name">
          <span v-if="item.user">{{item.user.nickName}}</span>
          <span v-else-if="item.receiver">{{item.receiver.nickName}}</span>
        </div>
        <div class="history-user__date">{{item.updateAt}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getLikes } from '@/api/likes'
import { getPush } from '@/api/push'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      likesData: []
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  mounted () {
    const { type } = this.$route.query
    if (type && type === 'message') {
      this.fetachMessDaeta()
    } else {
      this.fetchLikeData()
    }
  },
  onPullDownRefresh () {
    console.log('触发下拉刷新')
  },
  onReachBottom () {
    console.log('触发上拉加载')
  },
  methods: {
    async fetachMessDaeta () {
      const { _id } = this.userInfo
      const { data: { list } } = await getPush({ userId: _id, type: 'likes' })
      this.likesData = list
    },
    fetchLikeData () {
      const { _id } = this.userInfo
      const payload = {
        ussrId: _id
      }
      getLikes(payload).then((resData) => {
        const {code, data: { list }} = resData
        if (code === 0) {
          this.likesData = list
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.ptf-history__container{
  padding: $side-padding;
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
