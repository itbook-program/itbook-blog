<template>
  <div class="attention-container">
    <div v-for="(item, index) in attenList" :key="index" class="attention-container__item">
      <div class="attention-wrapper__user">
        <div class="attiontion-user__avatar">
          <img v-if="item.user" :src="item.user.avatarUrl" />
          <img v-else-if="item.receiver" :src="item.receiver.avatarUrl" />
        </div>
        <div class="attention-user__info">
          <div class="user-info__name">
            <span v-if="item.user">{{item.user.nickName}}</span>
            <span v-else-if="item.receiver">{{item.receiver.nickName}}</span>
          </div>
          <div class="user-info__date">
            <span v-if="item.user || item.receiver">{{item.updateAt}}</span>
          </div>
        </div>
      </div>
      <div class="attention-wrapper__operation">
        <custom-tags title="已关注" type="attent-active" @click="cancelHandle"></custom-tags>
      </div>
    </div>

    <!-- <div class="attention-container__item">
      <div class="attention-wrapper__user">
        <div class="attiontion-user__avatar">
          <img :src="headerIcon" />
        </div>
        <div class="attention-user__info">
          <div class="user-info__name">小呆呆</div>
          <div class="user-info__date">19.04.03 16:45</div>
        </div>
      </div>
      <div class="attention-wrapper__operation">
        <custom-tags title="关注" type="attent"></custom-tags>
      </div>
    </div> -->

  </div>
</template>
<script>
import CustomTags from '@/components/CustomTags/index'
import headerIcon from '@/assets/image/header.png'
import { getAttention } from '@/api/attention'
import { getPush } from '@/api/push'
import { mapState } from 'vuex'
export default {
  components: {
    CustomTags
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
      this.fetchAttenData()
    }
  },
  data () {
    return {
      headerIcon,
      attenList: []
    }
  },
  methods: {
    async fetachMessDaeta () {
      const { _id } = this.userInfo
      const { data: { list } } = await getPush({ userId: _id, type: 'focus' })
      this.attenList = list
    },
    fetchAttenData () {
      const { _id } = this.userInfo
      getAttention({userId: _id}).then((resData) => {
        const { code, data } = resData
        const { list } = data
        if (code === 0) {
          this.attenList = list
        }
      })
    },
    cancelHandle () {
      console.log('取消关注')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.attention-container{
  padding: $side-padding;
  .attention-container__item{
    display: flex;
    width: 100%;
    align-items: center;
    padding: 23rpx 0;
    justify-content: space-between;
    border-bottom: 1rpx solid #ebebeb;
    .attention-wrapper__user{
      display: flex;
      .attiontion-user__avatar{
        flex-shrink: 0;
        & > img{
          width: 42rpx;
          height: 42rpx;
          overflow: hidden;
          border-radius: 90px;
        }
        margin-right: 20rpx;
      }
      .attention-user__info{
        flex: 1;
        font-size: 20rpx;
        .user-info__date{
          color: #999;
        }
      }
    }
    .attention-wrapper__operation{
      flex-shrink: 0;
    }
  }
}
</style>
