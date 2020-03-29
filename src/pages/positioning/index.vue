<template>
  <div class="article-container">
    <div class="article-attachment">
      <div class="attach-search__wrap">
        <img :src="searchIcon" class="header-container__search" />
        <input
        v-model="searchText"
        @confirm="searchHandle"
        confirm-type="search"
        placeholder="搜索附近的地点"
        class="header-container__input"
        />
      </div>
      <div class="attach-item" @click="checkHandle(0)">
        <div class="attach-item__header">
          <div class="attach-item__text">位置信息不展示</div>
        </div>
        <div v-if="checkActive === 0" class="attach-item__text item-info">
          <image :src="checkIcon" />
        </div>
      </div>
      <div v-for="(item, index) in location" :key="index" @click="checkHandle(index+1, item)" class="attach-item">
        <div class="attach-item__header">
          <div class="attach-item__text">{{item.title}}</div>
          <div class="attach-item__text">{{item.address}}</div>
        </div>
        <div v-if="checkActive === index+1" class="attach-item__text item-info">
          <image :src="checkIcon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from '@/assets/image/search.png'
import headerIcon from '@/assets/image/header.png'
import checkIcon from '@/assets/image/check.png'
import { getSurrounding, getGeocoder } from '@/api/positioning'
import event from '@/utils/event'

export default {
  data () {
    return {
      searchIcon,
      checkIcon,
      headerIcon,
      page: 1,
      checkActive: '',
      pageSize: 20,
      searchText: '',
      location: []
    }
  },
  mounted () {
    this.currentLocation()
  },
  onUnload () {
    this.page = 1
    this.checkActive = ''
    this.pageSize = 20
    this.searchText = ''
    this.location = []
  },
  methods: {
    checkHandle (index, data) {
      this.checkActive = index
      event.$emit('checkLocation', data)
      this.$router.go(-1)
    },
    currentLocation () {
      const _this = this
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const { latitude, longitude } = res
          const searchObj = {
            location: `${latitude},${longitude}`,
            get_poi: 1,
            poi_options: 'address_format=' + 'short;radius=' + '5000;policy=' + '4',
            key: 'QRSBZ-WB7W4-4PKUQ-D4LTA-UUKGO-IWBRX'
          }
          let str = ''
          for (let i in searchObj) {
            str += `${i}=${searchObj[i]}&`
          }
          getGeocoder(str).then((resData) => {
            const { result: { pois } } = resData
            _this.location = pois
          })
        }
      })
    },
    nearLocation () {
      const _this = this
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const searchObj = {
            boundary: 'nearby(' + latitude + ',' + longitude + ',1000)',
            keyword: _this.searchText,
            page_index: _this.page,
            page_size: _this.pageSize,
            orderby: '_distance',
            key: 'QRSBZ-WB7W4-4PKUQ-D4LTA-UUKGO-IWBRX'
          }
          getSurrounding(searchObj).then((resData) => {
            const { data, status } = resData
            if (status === 0) {
              _this.location = data
            }
          })
        }
      })
    },
    searchHandle () {
      this.checkActive = ''
      if (this.searchText) {
        this.nearLocation()
      } else {
        this.currentLocation()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.article-container{
  .attach-search__wrap{
    width:100%;
    height: 70rpx;
    background:rgba(245,245,245,1);
    border-radius:30px;
    display: flex;
    align-items: center;
    margin: 24rpx 0;
    .header-container__search{
      width: 43rpx;
      height: 48rpx;
      flex-shrink: 0;
      margin: 0 20rpx;
    }
    .header-container__input{
      width: 100%;
      padding: 10rpx 0;
    }
  }
  .article-attachment{
    border-top: 1rpx solid #EBEBEB;
    padding: 0 $side-padding;
    .attach-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 120rpx;
      border-bottom: 1rpx solid #EBEBEB;
      .attach-item__header{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .attach-item__image{
        width: 32rpx;
        height: 32rpx;
        margin-right: $side-padding;
      }
      .attach-item__text{
        font-size: 28rpx;
        font-weight: bold;
        color: #333333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .item-info{
        font-size: 20rpx;
        font-weight: 500;
        color: #999999;
        flex-shrink: 0;
        &>image{
          width: 48rpx;
          height: 48rpx;
        }
      }
    }
  }
}
</style>
