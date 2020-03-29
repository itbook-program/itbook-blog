<template>
  <div class="chat-container">
    <div class="chat-title">聊天室</div>
    <div class="chat-content">
      <input class="chat-input" type="number" placeholder="请输入房间号" v-model="roomId" />
      <button class="chat-button" type="button" @click="comeHandle">进入</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      roomId: ''
    }
  },
  methods: {
    comeHandle () {
      this.$router.push({ path: '/pages/roomChat/main', query: {roomId: this.roomId} })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.chat-container{
  padding: $side-padding;
  .chat-title{
    margin: 30rpx auto;
    font-size: 32rpx;
    color: #333;
    text-align: center;
  }
  .chat-input{
    text-align: center;
    padding: 30rpx 0;
  }
  .chat-button{
    margin: 30rpx 5%;
    color: #fff;
    background-color: rgba(30,164,115,1);
    &:active{
      opacity: .8;
    }
  }
}
</style>
