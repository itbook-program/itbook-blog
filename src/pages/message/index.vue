<template>
  <div class="msg-container">
    <div class="msg-container__header">通知</div>
    <div class="msg-container__content">
      <div class="msg-content__item" @click="checkItem(1)">
        <div class="msg-item__list">
          <div class="msg-item__icon">
            <img :src="bell" />
          </div>
          <div class="msg-item__attent">关注</div>
        </div>
        <div class="msg-item__num" v-if="countData.focus">{{countData.focus}}</div>
      </div>

      <div class="msg-content__item" @click="checkItem(2)">
        <div class="msg-item__list">
          <div class="msg-item__icon">
            <img :src="heart" />
          </div>
          <div class="msg-item__attent">喜欢</div>
        </div>
        <div class="msg-item__num" v-if="countData.likes">{{countData.likes}}</div>
      </div>

      <div class="msg-content__item" @click="checkItem(3)">
        <div class="msg-item__list">
          <div class="msg-item__icon">
            <img :src="message" />
          </div>
          <div class="msg-item__attent">评论</div>
        </div>
        <div class="msg-item__num" v-if="countData.comments">{{countData.comments}}</div>
      </div>

      <div class="msg-content__item" @click="checkItem(4)">
        <div class="msg-item__list">
          <div class="msg-item__icon">
            <img :src="sound" />
          </div>
          <div class="msg-item__attent">通知</div>
        </div>
        <div class="msg-item__num" v-if="countData.system">{{countData.system}}</div>
      </div>

    </div>

    <div class="msg-container__header">私信</div>
    <div>
      <silder-view></silder-view>
    </div>
  </div>
</template>

<script>
import silderView from './components/silder'
import bell from '@/assets/image/message/bell.png'
import heart from '@/assets/image/message/heart.png'
import message from '@/assets/image/message/message.png'
import sound from '@/assets/image/message/sound.png'
import { getPushCount } from '@/api/push'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      bell,
      heart,
      message,
      sound,
      countData: {}
    }
  },
  onShow () {
    this.fetchData()
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  components: {
    silderView
  },
  methods: {
    fetchData () {
      const { _id } = this.userInfo
      getPushCount(_id).then((resData) => {
        const { code, data } = resData
        if (code === 0) {
          const resDataTmp = {}
          data.forEach(element => {
            resDataTmp[element._id] = element.count
          })
          this.countData = resDataTmp
        }
      })
    },
    checkItem (index) {
      switch (index) {
        case 1:
          this.$router.push({ path: '/pages/attention/main', query: { type: 'message' } })
          break
        case 2:
          this.$router.push({ path: '/pages/like/main', query: { type: 'message' } })
          break
        case 3:
          this.$router.push({ path: '/pages/myComment/main', query: { type: 'message' } })
          break
        case 4:
          this.$router.push({ path: '/pages/notice/main', query: { type: 'message' } })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';

.msg-container{
  border-top: 1rpx solid #ebebeb;
  .msg-container__header{
    font-size:20rpx;
    font-weight: 500;
    border-bottom: 1rpx solid #ebebeb;
    padding: 23rpx $side-padding;
  }
  .msg-container__content{
    padding: 0 $side-padding;
    .msg-content__item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20rpx 0;
      .msg-item__list{
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        .msg-item__icon{
          width: 48rpx;
          height: 48rpx;
          &>img {
            width: 100%;
            height: 100%;
          }
        }
        .msg-item__attent{
          margin-left: 31rpx;
          font-size:28rpx;
          font-weight:500;
        }
      }
      .msg-item__num{
        padding: 8rpx;
        background: #FF0000;
        border-radius: 90px;
        font-weight: 500;
        font-size:16rpx;
        min-width: 20rpx;
        height: 20rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
  }
}
</style>
