<template>
  <div>
    <div class="pt-tabs__container">
      <div
        v-for="item in tabs"
        :key="item.key"
        :style="[item.key === indexed ? {color: activedColor} : {color: color}]"
        :class="[item.key === indexed ? 'tabs-isActive' : '', activeLine ? 'tabs-isActive__line': '']"
        @click="checkedItem(item)"
        class="pt-tabs__items">
        <div>{{item.value}}</div>
      </div>
    </div>
  </div>
</template>
<script>
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
    checkedItem (item) {
      const { key } = item
      this.indexed = key
      this.$emit('checkedItem', key, item)
    }
  }
}
</script>
<style lang="scss" scoped>
.pt-tabs__container{
  display: flex;
  align-items: center;
  justify-content: space-around;
  .tabs-isActive{
    color: #1EA473;
    position: relative;
  }
  .tabs-isActive__line{
    &:after{
      position: absolute;
      bottom: -15rpx;
      content: '';
      width: 110%;
      margin-left: -5%;
      height: 6rpx;
      background:rgba(30,164,115,1);
      border-radius:3px;
    }
  }
  .pt-tabs__items{
    font-size: 32rpx;
    color: #333;
  }
}
</style>
