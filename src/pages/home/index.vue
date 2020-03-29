<template>
  <div>
    <div v-if="!noLogin">
      <custom-header>
        <div class="header-search__container">
          <div :style="'height:'+navHeight+'px'" class="header-search__wrapper">
            <img :src="searchIcon" class="header-container__search" />
            <input placeholder="输入感兴趣的关键词" class="header-container__input" />
          </div>
        </div>
      </custom-header>

      <div class="ptf-mall__wrapper" :style="'margin-top:' + (navHeight+ 40) + 'px'">
        <swiper
          :autoplay="true"
          :indicator-dots="false"
          :circular="true"
          class="ptf-mall__swiper"
        >
          <swiper-item class="ptf-mall__swiperItem">
            <image :src="swiperCover" class="slide-image" />
          </swiper-item>
        </swiper>
      </div>

      <div class="ptf-list__container">
        <div v-for="(artItem, index) in listData" :key="index" @click="detailHandle(artItem)" class="ptf-list__wrapper">
          <div class="list-item__title">{{artItem.title}}</div>
          <div class="list-item__content">
            <div class="item-content__text">{{artItem.contentText}}</div>
            <div class="item-content__cover">
              <video  v-if="artItem.resourceType === 1" play-btn-position="center" object-fit="fill" :src="videoUrl + artItem.resource"></video>
              <img :src="artItem.cover" />
            </div>
          </div>
          <div class="list-item__opera">
            <div class="item-opera__wrapper opera-item__name">
              <div class="opera-opera__icon">
                <img :src="artItem.user.avatarUrl">
              </div>
              <div class="opera-item__num opera-item__text">{{artItem.user.nickName}}</div>
            </div>
            <div class="item-opera__wrapper">
              <div class="opera-opera__icon">
                <img :src="viewIcon">
              </div>
              <div class="opera-item__num">{{artItem.looks}}</div>
            </div>
            <div class="item-opera__wrapper">
              <div class="opera-opera__icon">
                <img :src="likeIcon">
              </div>
              <div class="opera-item__num">{{artItem.likes}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nologin-view v-else :nav-top="navTop" @authUserInfo="authUserInfo"></nologin-view>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader/index'
import searchIcon from '@/assets/image/search.png'
import swiperCover from '@/assets/image/swiperCover.png'
import likeIcon from '@/assets/image/like.png'
import headerIcon from '@/assets/image/header.png'
import viewIcon from '@/assets/image/view.png'
import { getArticle } from '@/api/article'
import { getWeChatLogin } from '@/api/login'
import { putUserById, getUserInfo } from '@/api/user'
import { setToken, getToken, getUser, setUser } from '@/utils/auth'
import { mapMutations, mapState } from 'vuex'

import nologinView from './components/noLogin.vue'
export default {
  components: {
    CustomHeader,
    nologinView
  },
  created () {
    this.navBarTop()
  },
  mounted () {
    const _this = this
    const { _id } = this.userInfo
    if (!getToken() || !getUser()) {
      this.noLogin = true
      wx.hideTabBar({
        animation: true
      })
    } else if (!_id) {
      this.fetchUserInfo()
    }
    this.fetchArticle()
    // 小程序登陆态检查
    wx.checkSession({
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        console.log('session_key失效')
        _this.loginAuth()
      }
    })
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      socket: state => state.chat.socket
    })
  },
  data () {
    return {
      viewIcon,
      likeIcon,
      headerIcon,
      swiperCover,
      searchIcon,
      navHeight: 0,
      navTop: 0,
      noLogin: false,
      listData: [],
      videoUrl: 'https://sr-1300007333.file.myqcloud.com/video/'
    }
  },
  onPullDownRefresh () {
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 2000)
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'SET_USER_INFO'
    }),
    fetchUserInfo () {
      getUserInfo({ id: getUser() }).then(user => {
        const { code, data } = user
        if (code === 0) {
          this.setUserInfo(data)
          // 连接socket
          this.connentSocket()
        }
      })
    },
    fetchArticle () {
      getArticle().then((resData) => {
        const { code, data: { list } } = resData
        if (code === 0) {
          console.log(list)
          this.listData = list
        }
      })
    },
    navBarTop () {
      const { height, top } = wx.getMenuButtonBoundingClientRect()
      this.navHeight = height
      this.navTop = top
    },
    detailHandle (artItem) {
      const { _id } = artItem
      this.$router.push({ path: '/pages/articleDetails/main', query: { id: _id } })
    },
    loginAuth () {
      const _this = this
      // 获取小程序code
      wx.login({
        success (res) {
          if (res.code) {
            // 发起网络请求
            getWeChatLogin({code: res.code}).then((resData) => {
              const { code, data: { token, user } } = resData
              if (code === 0) {
                setToken(token)
                setUser(user._id)
                _this.setUserInfo(user)
                // 连接socket
                _this.connentSocket()
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    },
    authUserInfo (res) {
      const _this = this
      const { _id } = _this.userInfo
      putUserById({id: _id, reqData: res.userInfo}).then((reqData) => {
        const { code, data } = reqData
        if (code === 0) {
          _this.setUserInfo(data)
          // 连接socket
          _this.connentSocket()
          _this.noLogin = false
          this.fetchArticle()
          wx.showTabBar({
            animation: true
          })
        }
      })
    },
    connentSocket () {
      // 拿到用户_id
      const _id = getUser()
      try {
        this.$socket.emit('register', {
          target: _id,
          payload: {
            msg: '注册成功'
          }
        })

        this.$socket.on(_id, d => {
          console.log('home: ', d)
        })
      } catch (error) {
        console.log('注册失败')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.header-search__container {
  .header-search__wrapper{
    width:60%;
    background:rgba(245,245,245,1);
    border-radius:30px;
    margin-left: $side-padding;
    display: flex;
    align-items: center;
    .header-container__search{
      width: 43rpx;
      height: 48rpx;
      flex-shrink: 0;
      margin: 0 20rpx;
    }
    .header-container__input{
      width: 100%;
    }
  }
}
.ptf-mall__swiper{
  height: 386rpx;
  margin-top: 20rpx;
  .ptf-mall__swiperItem{
    width: 100%;
    text-align: center;
    .slide-image{
      height: 386rpx;
      width: 100%;
    }
  }
 }
.ptf-mall__wrapper{
  padding: 0 $side-padding;
}
 .ptf-list__container{
   padding: $side-padding;
  .ptf-list__wrapper{
    padding: 10rpx 0;
    border-bottom: 1rpx solid #f5f5f5;
    &:last-child{
      border-bottom: none;
    }
  .list-item__title{
      font-size:32rpx;
      font-weight:500;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .list-item__content{
      display: flex;
      align-items: center;
      .item-content__text{
        font-size:24rpx;
        font-weight:500;
        color:rgba(102,102,102,1);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        width: 100%;
      }
      .item-content__cover{
        width: 160rpx;
        height: 120rpx;
        overflow: hidden;
        flex-shrink: 0;
        border-radius: 10rpx;
        &>img{
          width: 160rpx;
          height: 120rpx;
          border-radius: 10rpx;
        }
      }
    }
    .list-item__opera{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      .item-opera__wrapper{
        align-items: center;
        padding-right: 8%;
        display: inline-flex;
        box-sizing: border-box;
        .opera-opera__icon{
          & > img{
            width: 32rpx;
            height: 32rpx;
            border-radius: 90px;
            overflow: hidden;
          }
        }
        .opera-item__num{
          flex-shrink: 0;
          line-height: 32rpx;
          font-size: 20rpx;
          font-weight: 500;
          color: #666;
          margin-left: 8rpx;
          margin-top: -6rpx;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .opera-item__name{
        width: 33%;
        .opera-item__text{
          width: 100%;
        }
      }
    }
  }
 }
</style>
