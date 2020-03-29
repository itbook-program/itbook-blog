<template>
  <div>
    <div class="product-list">
      <div class="product-item" @click="privateChatHandle" v-for="(item, index) in productList" :key="index">
        <movable-area>
          <movable-view out-of-bounds="true" direction="horizontal" :x="item.xmove"
            inertia="true"
            :data-productIndex="index"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
            @change="handleMovableChange">
            <div class="product-item-wrap">
              <div class="movable-list__item">
                <div class="movable-item__user">
                  <div class="item-user__avatar">
                    <img />
                  </div>
                  <div class="item-user__userInfo">
                    <div class="user-userInfo__nickname">小呆呆</div>
                    <div class="user-userInfo__content">t写的很好，可否加个微信</div>
                  </div>
                </div>
                <div class="movable-item__time">2019.04.03 18:55</div>
              </div>
            </div>
          </movable-view>
        </movable-area>
        <div class="delete-btn" :data-id="item.id" @click="handleDeleteProduct">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productList: [
        {
          id: 1,
          name: '产品一',
          code: 100001,
          amount: 1
        },
        {
          id: 2,
          name: '产品二',
          code: 100002,
          amount: 5
        },
        {
          id: 3,
          name: '产品三',
          code: 300001,
          amount: 10
        }
      ],
      slideProductList: [
        {
          id: 4,
          name: '产品五',
          code: 400001,
          amount: 101
        },
        {
          id: 5,
          name: '产品六',
          code: 500002,
          amount: 500
        },
        {
          id: 6,
          name: '产品七',
          code: 600001,
          amount: 110
        }
      ]
    }
  },
  methods: {
    /**
     * 显示删除按钮
     */
    showDeleteButton (e) {
      let productIndex = e.mp.currentTarget.dataset.productindex
      this.setXmove(productIndex, -65)
    },

    /**
     * 隐藏删除按钮
     */
    hideDeleteButton (e) {
      let productIndex = e.mp.currentTarget.dataset.productindex
      this.setXmove(productIndex, 0)
    },

    /**
     * 设置movable-view位移
     */
    setXmove (productIndex, xmove) {
      let productList = this.productList
      productList[productIndex].xmove = xmove
      this.productList = productList
    },

    /**
     * 处理movable-view移动事件
     */
    handleMovableChange (e) {
      if (e.mp.detail.source === 'friction') {
        if (e.mp.detail.x < -30) {
          this.showDeleteButton(e)
        } else {
          this.hideDeleteButton(e)
        }
      } else if (e.mp.detail.source === 'out-of-bounds' && e.mp.detail.x === 0) {
        this.hideDeleteButton(e)
      }
    },

    /**
     * 处理touchstart事件
     */
    handleTouchStart (e) {
      this.startX = e.mp.touches[0].pageX
    },

    /**
     * 处理touchend事件
     */
    handleTouchEnd (e) {
      if (e.mp.changedTouches[0].pageX < this.startX && e.mp.changedTouches[0].pageX - this.startX <= -30) {
        this.showDeleteButton(e)
      } else if (e.mp.changedTouches[0].pageX > this.startX && e.mp.changedTouches[0].pageX - this.startX < 30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    },

    /**
     * 删除产品
     */
    handleDeleteProduct ({ currentTarget: { dataset: { id } } }) {
      let productList = this.productList
      let productIndex = productList.findIndex(item => item.id === id)

      productList.splice(productIndex, 1)

      this.productList = productList
      if (productList[productIndex]) {
        this.setXmove(productIndex, 0)
      }
    },

    /**
     * slide-delete 删除产品
     */
    handleSlideDelete ({ detail: { id } }) {
      let slideProductList = this.slideProductList
      let productIndex = slideProductList.findIndex(item => item.id === id)

      slideProductList.splice(productIndex, 1)

      this.slideProductList = slideProductList
    },
    privateChatHandle () {
      this.$router.push({ path: '/pages/chat/main' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/variable.scss';

.title {
  margin: 60rpx 0 30rpx;
  font-size: 40rpx;
  text-align: center;
  font-weight: bold;
  color: #383A3D;
}

.product-list .product-item {
  position: relative;
  width: 100vw;
  border-bottom: 2rpx solid #E9E9E9;
  box-sizing: border-box;
  background: #fff;
  z-index: 999;
}

.slide-product-list .slide-product-item {
  position: relative;
  width: 100vw;
  border-bottom: 2rpx solid #E9E9E9;
  box-sizing: border-box;
  background: #fff;
  z-index: 999;
}

.product-list .product-item movable-area {
  height: 120rpx;
  width: calc(100vw - 120rpx);
}

.product-list .product-item movable-view {
  height: 120rpx;
  width: 100vw;
  background: #fff;
  z-index: 999;
}

.product-list .product-item .delete-btn {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0; 
  width: 120rpx;
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #FFFFFF;
  line-height: 120rpx;
  z-index: 1;
  background: #E66671;
  text-align: center;
}

.product-list .product-item-wrap {
  position: relative;
  padding: 0 $side-padding;
  box-sizing: border-box;
  height: 100%;
  .movable-list__item{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .movable-item__user{
      display: inline-flex;
      align-items: center;
      .item-user__avatar{
        width: 42rpx;
        height: 42rpx;
        border-radius: 90px;
        overflow: hidden;
        background-color: #E66671;
        flex-shrink: 0;
        &>img {
          width: 42rpx;
          height: 42rpx;
          border-radius: 90px;
        }
      }
      .item-user__userInfo{
        font-size: 20rpx;
        color: #000;
        font-weight:500;
        padding: 0 20rpx;
        .user-userInfo__nickname{
          @include linemore1;
        }
        .user-userInfo__content{
          @include linemore1;
          font-size:20rpx;
          font-weight:bold;
          color: #999;
        }
      }
    }

    .movable-item__time{
      color: #999;
      font-size:20rpx;
      font-weight:500;
    }
  }
}

</style>
