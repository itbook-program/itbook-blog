<template>
  <div class="me-container">
    <div class="me-content__container">
      <div class="me-header__wrapper">
        <div class="me-header__user">
          <div class="me-header__name" @click="myInfoHandle">{{user.nickName}}</div>
          <div class="me-header__intro">{{user.sign}}</div>
          <div class="me-header__opera">
            <div class="me-header__tag">
              <custom-tags title="作家" />
            </div>
            <div class="me-header__writer" @click="writerHandle">成为作家>></div>
          </div>
        </div>
        <div class="me-header__avatar">
          <img :src="user.avatarUrl" />
        </div>
      </div>
      <div class="me-msg__wrapper">
        <div class="me-msg__item" @click="myArticleHandle">
          <div class="msg-item__num">{{countInfo.articles || 0}}</div>
          <div class="msg-item__text">文章</div>
        </div>
        <div class="me-msg__item" @click="myLikeHandle">
          <div class="msg-item__num">{{countInfo.likes || 0}}</div>
          <div class="msg-item__text">喜欢</div>
        </div>
        <div class="me-msg__item" @click="myAttentionHandle">
          <div class="msg-item__num">{{countInfo.focus || 0}}</div>
          <div class="msg-item__text">关注</div>
        </div>
      </div>
      <div class="me-list__wrapper">
        <div v-for="(item, index) in listItem" :key="item" class="list-wrapper__items" @click="listItemHandle(item)">
          <div class="list-item__icon">
            <img :src="icons[index]" />
          </div>
          <div class="list-item__value">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTags from '@/components/CustomTags/index'
import headerIcon from '@/assets/image/header.png'
import book from '@/assets/image/me/book.png'
import edit from '@/assets/image/me/edit-square.png'
import eye from '@/assets/image/me/eye.png'
import heart from '@/assets/image/me/heart.png'
import message from '@/assets/image/me/message.png'
import setting from '@/assets/image/me/setting.png'
import { getUserInfo, getUserCountInfo } from '@/api/user'
import { mapState } from 'vuex'
export default {
  components: {
    CustomTags
  },
  data () {
    return {
      headerIcon,
      icons: [edit, book, message, heart, eye, setting],
      listItem: [
        {
          type: 0,
          value: '个性签名'
        }, {
          type: 1,
          value: '打赏流水'
        }, {
          type: 2,
          value: '评论历史'
        }, {
          type: 3,
          value: '我的喜欢'
        }, {
          type: 4,
          value: '浏览历史'
        }, {
          type: 5,
          value: '系统设置'
        }
      ],
      user: {},
      countInfo: {}
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  mounted () {
    const { _id } = this.userInfo
    getUserInfo({id: _id}).then((user) => {
      const { code, data } = user
      if (code === 0) {
        this.user = data
      }
    })
    getUserCountInfo(_id).then((resData) => {
      const { code, data } = resData
      if (code === 0) {
        this.countInfo = data
      }
    })
  },
  methods: {
    writerHandle () {
      this.$router.push({ path: '/pages/writerApply/main' })
    },
    myInfoHandle () {
      this.$router.push({ path: '/pages/userInfo/main' })
    },
    myArticleHandle () {
      this.$router.push({ path: '/pages/myArticle/main' })
    },
    myLikeHandle () {
      this.$router.push({ path: '/pages/like/main' })
    },
    myAttentionHandle () {
      this.$router.push({ path: '/pages/attention/main' })
    },
    listItemHandle (item) {
      switch (item.type) {
        case 0:
          this.$router.push({ path: '/pages/signature/main' })
          break
        case 1:
          const { isWriter } = this.userInfo
          if (isWriter) {
            this.$router.push({ path: '/pages/bookmarks/main' })
          } else {
            this.$router.push({ path: '/pages/bookmarkReader/main' })
          }
          break
        case 2:
          this.$router.push({ path: '/pages/myComment/main' })
          break
        case 3:
          this.$router.push({ path: '/pages/like/main' })
          break
        case 4:
          this.$router.push({ path: '/pages/history/main' })
          break
        case 5:
          this.$router.push({ path: '/pages/system/main' })
          break
        case 6:
          this.$router.push({ path: '/pages/room/main' })
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
.me-container{
  .me-content__container{
    padding: $side-padding;
    .me-header__wrapper{
      display: flex;
      justify-content: space-between;
      .me-header__user{
        flex: 1;
        overflow: hidden;
        .me-header__name{
          font-size:48rpx;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: #333;
          width: 100%;
          padding-right: 22rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .me-header__intro{
          font-size:24rpx;
          color: #333;
          padding: 22rpx 0;
          padding-right: 22rpx;
          width: 100%;
        }
        .me-header__opera{
          display: flex;
          align-items: center;
          .me-header__tag{
            margin-right: 38rpx;
          }
          .me-header__writer{
            font-size: 20rpx;
            color: #1EA473;
            font-weight:500;
          }
        }
      }
      .me-header__avatar{
        flex-shrink: 0;
        &>img{
          width: 180rpx;
          height: 180rpx;
          overflow: hidden;
          border-radius: 90px;
        }
      }
    }
    .me-msg__wrapper{
      display: flex;
      align-items: center;
      width: 100%;
      align-content: space-between;
      padding: 70rpx 0;
      .me-msg__item{
        flex: 1;
        .msg-item__num{
          text-align: center;
        }
        .msg-item__text{
          text-align: center;
        }
      }
    }

    .me-list__wrapper{
      width: 100%;
      .list-wrapper__items{
        display: flex;
        align-items: center;
        margin-bottom: 40rpx;
        &:active{
          opacity: .8;
        }
        .list-item__icon{
          width: 48rpx;
          height: 48rpx;
          margin-right: 31rpx;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        .list-item__value{
          font-size:28rpx;
          font-family:PingFang-SC-Bold;
          font-weight:bold;
        }
      }
    }
  }
}
</style>
