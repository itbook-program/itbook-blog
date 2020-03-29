<template>
  <div class="chat-container">
    <scroll-view
    scroll-y
    scroll-with-animation
    :scroll-into-view="lastId"
    class="chat-content__list">
    <div class="chat-content__wrapper">

      <div v-for="(item, index) in messages" :key="index" class="chat-list__item">
        <!-- <div class="chat-content__time">2019.04.30 16:45</div> -->
        <div class="chat-user__template" :class="item.messageType === 1 ? 'chat-user__myself': ''">
          <div class="chat-user__content">
            <div class="chat-user__avatar">
              <open-data class="user-avatar" v-if="item.messageType === 1" type="userAvatarUrl"></open-data>
              <image class="user-avatar" v-else :src="headerIcon" />
            </div>
            <open-data class="chat-user__name" v-if="item.messageType === 1" type="userNickName"></open-data>
            <div v-else class="chat-user__name">{{item.name}}</div>
          </div>
          <div :id="item.id" class="chat-user__msg">{{item.message}}</div>
        </div>
      </div>

    </div>
    </scroll-view>
    <div class="chat-footer__wrapper">
      <input v-model="speakText" :cursor-spacing="15" class="chat-footer__input" placeholder-class="chat-footer__text"  placeholder="我来说两句" />
      <div class="chat-footer__send" @click="sendConentHandle">发送</div>
    </div>
  </div>
</template>
<script>
import headerIcon from '@/assets/image/header.png'
import { getUser } from '@/utils/auth'
import { uuid } from 'vue-uuid'
const _id = getUser()
export default {
  data () {
    return {
      headerIcon,
      speakText: '',
      messages: [
        // {
        //   id: `msg-1`,
        //   message: '可滚动视图区域。使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        //   messageType: 0
        // }
      ],
      msg: '',
      lastId: ''
    }
  },
  mounted () {
    this.$socket.on(_id, msg => {
      const { data: { payload }, meta: { target } } = msg
      this.messages.push({
        id: payload.id,
        message: payload.message,
        messageType: 0,
        name: target
      })
      const len = this.messages.length
      try {
        this.lastId = this.messages[ len - 1 ].id
      } catch (error) { }
    })
  },
  methods: {
    sendConentHandle () {
      this.$socket.emit('chat', {
        target: 'admin',
        source: _id,
        payload: {
          id: uuid.v1(),
          message: this.speakText
        }
      })
      this.messages.push({
        id: uuid.v1(),
        message: this.speakText,
        messageType: 1
      })
      this.speakText = ''
      const len = this.messages.length
      try {
        this.lastId = this.messages[ len - 1 ].id
      } catch (error) { }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.chat-container{
  height: 100vh;
  width: 100%;
  padding-bottom: 100rpx;
  padding-bottom: calc(100rpx + constant(safe-area-inset-bottom));
  padding-bottom: calc(100rpx + env(safe-area-inset-bottom));
  box-sizing: border-box;
  .chat-content__list{
    height: 100%;
    box-sizing: border-box;
    .chat-content__wrapper{
      padding: $side-padding;
      padding-top: 0;
    }
    .chat-content__time{
      font-size:20rpx;
      color: #999;
      font-weight: bold;
      text-align: center;
      width: 100%;
      padding-top: 31rpx;
    }
    .chat-user__template{
      .chat-user__content{
        display: flex;
        align-items: center;
        .chat-user__avatar{
          flex-shrink: 0;
          margin: 16rpx 0;
          border-radius: 180px;
          overflow: hidden;
          & > .user-avatar{
            width: 45rpx;
            height: 45rpx;
            border-radius: 90px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .chat-user__name{
          font-size: 20rpx;
          font-weight:500;
          color: #000;
          margin: 0 16rpx;
        }
      }
      .chat-user__msg{
        margin: 0 61rpx;
        font-size:24rpx;
        font-weight: bold;
        color: #333;
        background:rgba(245,245,245,1);
        border-radius: 0px 28rpx 28rpx 28rpx;
        padding: 16rpx;
        max-width: 75%;
        display: inline-block;
      }
    }
    .chat-user__myself{
      text-align: right;
      .chat-user__content{
        flex-flow: row-reverse;
      }
      .chat-user__msg{
        border-radius: 28rpx 0px 28rpx 28rpx;
      }
    }
  }
  .chat-footer__wrapper{
    z-index: 999;
    background-color: #fff;
    padding: 0 $side-padding;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100rpx;
    height: calc(100rpx + constant(safe-area-inset-bottom));
    height: calc(100rpx + env(safe-area-inset-bottom));
    border-top: 1rpx solid #EBEBEB;
    .chat-footer__input{
      flex: 1;
      background: #F5F5F5;
      padding: 10rpx 35rpx;
      margin-right: $side-padding;
      border-radius: 30px;
      font-size:24rpx;
      font-weight:bold;
      color: #000;
    }
    .chat-footer__send{
      width:120rpx;
      height:60rpx;
      background:rgba(30,164,115,1);
      border-radius:30rpx;
      line-height: 60rpx;
      text-align: center;
      font-size:24rpx;
      font-weight:bold;
      color: #fff;
      &:active{
        opacity: .8;
      }
    }
  }
}
</style>
<style lang="scss">
.chat-footer__text{
  font-size:24rpx;
  font-weight:bold;
  color: #999;
}
</style>
