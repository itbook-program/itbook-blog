<template>
  <div :style="'padding-top:'+(navTop+4)+'px'" class="login-container">
    <img :src="loadingBg"/>
    <custom-mask>
      <div class="login-wrapper">
        <div class="login-contaner__content">
          <div class="content-title">授权提醒</div>
          <div class="content-info">请授权登陆，去发现优秀的文章</div>
        </div>
        <div class="login-contaner__button">
          <div class="button-item">取消</div>
          <button class="button-item content-confrim" open-type="getUserInfo" @getuserinfo="getUserInfo" >立即授权</button>
        </div>
      </div>
    </custom-mask>
  </div>
</template>
<script>
import CustomMask from '@/components/CustomMask'
import loadingBg from '@/assets/image/login_bg.png'

export default {
  props: {
    navTop: {
      type: Number,
      required: true
    }
  },
  components: {
    CustomMask
  },
  data () {
    return {
      loadingBg
    }
  },
  methods: {
    getUserInfo () {
      const _this = this
      wx.getSetting({
        success (res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                _this.$emit('authUserInfo', res)
              }
            })
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container{
   height: 100vh;
   width: 100%;
   &>img{
     width: 100%;
     height: 100%;
   }
   .login-wrapper{
     width: 560rpx;
     height: 291rpx;
     background-color: #fff;
     position: relative;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     border-radius: 8rpx;
     .login-contaner__content{
       height: 200rpx;
       text-align: center;
       .content-title{
         padding: 30rpx 0;
         padding-top: 35rpx;
         font-size: 36rpx;
       }
       .content-info{
         color: #999999;
         font-size: 30rpx;
       }
     }
     .login-contaner__button{
       height: 91rpx;
       line-height: 91rpx;
       text-align: center;
       display: flex;
       align-items: center;
       align-content: space-between;
       .button-item{
         flex: 1;
         border-top: 1rpx solid #D2D3D5;
         border-right: 1rpx solid #D2D3D5;
         font-size: 36rpx;
         &:last-child{
           border-right: none;
         }
         &:active{
           opacity: .8;
         }
       }
       .content-confrim{
         color: #00c200;
         background-color: rgba(0, 0, 0, 0);
         padding: 0;
         border-radius: 0;
         height: 91rpx;
         line-height: 91rpx;
         &:after{
           display: none;
         }
       }
     }
   }
 }
</style>
