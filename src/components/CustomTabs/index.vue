<template>
  <div>
    <div 
      class="pt-tabs__container"
      :style="[{height: height}]"
      :class="[isFixed ? 'pt-tabs__position' : '']">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        :style="[item.key === indexed ? {color: activedColor} : {color: color}]"
        :class="[item.key === indexed && activeLine ? 'tabs-isActive' : '']"
        @click="checkedItem(item)"
        class="pt-tabs__items">
        <div>{{item.value}}</div>
      </div>
    </div>
    <div :style="[isFixed ? {height: height} : '']"></div>
  </div>
</template>
<script>
import { debounce } from '@/utils/index'
export default {
  props: {
    tabs: {
      type: Array,
      default: [
        {
          key: 0,
          value: '评论'
        }, {
          key: 1,
          value: '关注'
        }, {
          key: 2,
          value: '喜欢'
        }, {
          key: 3,
          value: '通知'
        }
      ]
    },
    color: {
      type: String,
      default: '#333'
    },
    activedColor: {
      type: String,
      default: '#1EA473'
    },
    activedIndex: {
      type: Number,
      default: 0
    },
    activeLine: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '80rpx'
    },
    isFixed: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    activedIndex: function (index, oldIndex) {
      this.indexed = index
    }
  },
  data () {
    return {
      indexed: this.activedIndex
    }
  },
  methods: {
    checkedItem: debounce(200, function (item) {
      const { key } = item
      this.indexed = key
      this.$emit('checkedItem', key, item)
    })
  }
}
</script>
<style lang="scss" scoped>
.pt-tabs__container{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .tabs-isActive{
    color: #1EA473;
    position: relative;
    &:after{
      position: absolute;
      bottom: -15rpx;
      content: '';
      margin-left: -5%;
      height: 6rpx;
      width: 110%;
      background:rgba(30,164,115,1);
      border-radius:3px;
      transition: width 2s;
    }
  }
  // .tabs-isActive__line{}
  .pt-tabs__items{
    font-size: 32rpx;
    color: #333;
  }
}

.pt-tabs__position{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
}
</style>
