<template>
  <div class="system-container">
    <div
      v-for="(item, index) in listData"
      :key="index" @click="switchHandle(index, item)"
      @touchstart="touchstartHandle"
      @touchend="touchendHandle"
      @longtap="longTapHandle(index, item)"
      class="system-content__wrap">
      <div class="system-wrap__item">{{item.name}}</div>
      <div class="system-wrap__item item-value">
        <span v-if="item.name === '联系客服'" class="item-telNumber">{{item.value}}</span>
        <span v-else class="item-normal">{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      startTime: '',
      endTime: '',
      listData: [
        {
          name: '小程序版本',
          value: 'V1.0.0'
        },
        {
          name: '关于我们',
          value: ''
        },
        {
          name: '反馈留言',
          value: ''
        },
        {
          name: '联系客服',
          value: '028-88888888'
        },
        {
          name: '用户协议',
          value: ''
        },
        {
          name: '退出登陆',
          value: ''
        }
      ]
    }
  },
  onUnload () {
  },
  methods: {
    touchstartHandle (e) {
      const { timeStamp } = e
      this.startTime = timeStamp
    },
    touchendHandle (e) {
      const { timeStamp } = e
      this.endTime = timeStamp
    },
    switchHandle (index, item) {
      switch (index) {
        case 0:
          // TODO
          break
        case 1:
          // TODO
          break
        case 2:
          this.$router.push({ path: '/pages/feedback/main' })
          break
        case 3:
          if (this.endTime - this.startTime < 350) {
            wx.makePhoneCall({
              phoneNumber: item.value
            })
          }
          break
        case 4:
          // TODO
          break
        case 5:
          // TODO
          break
        default:
          // TODO
          break
      }
    },
    longTapHandle () {
      this.$router.push({ path: '/pages/live/main' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.system-container{
  .system-content__wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1rpx solid #ebebeb;
    &:active{
      opacity: .8;
      background-color: rgba(0, 0, 0, .05);
    }
    &:first-child{
      border-top: 1rpx solid #ebebeb;
    }
    .system-wrap__item{
      flex: 1;
      font-size:28rpx;
      color: #333;
      font-weight:bold;
      padding: 35rpx 30rpx;
      .item-normal{
        color: #999999;
        font-size:24rpx;
        font-weight: bold;
      }
      .item-telNumber{
        border-radius: 24rpx;
        padding: 10rpx 20rpx;
        background-color: #1EA473;
        color: #fff;
        font-size:20rpx;
      }
    }
    .item-value{
      text-align: right;
    }
  }
}
</style>
