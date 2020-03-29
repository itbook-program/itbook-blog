<template>
  <div class="cells-container__list">
    <div v-if="type === 'title'" class="cells-content__item is-title" :class="[isDisabled ? 'is-disabled': '']">
      <div class="cells-item__header">{{title}}</div>
      <div class="cells-item__text">
        <span @click="clickMethods">{{content}}</span>
      </div>
    </div>
    <div v-else-if="type === 'text' && readOnly" class="cells-content__item">
      <div class="cells-item__header">{{title}}</div>
      <div class="cells-item__text">{{content}}</div>
    </div>

    <div v-else-if="type === 'input' || (type === 'text' && !readOnly)" class="cells-content__item">
      <div class="cells-item__header">{{title}}</div>
      <div class="cells-item__input">
        <input class="cells-item__inputText" :value="inputVal" @input="updateVal($event.target.value)" type="digit" :maxlength="inputMaxlength" placeholder-class="cell-item__placeholder" :placeholder="placeholder" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'inputVal'
  },
  props: {
    inputVal: {
      type: String
    },
    type: {
      type: String,
      default: 'text',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['text', 'input', 'title'].indexOf(value) !== -1
      }
    },
    content: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    isTitle: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    inputMaxlength: {
      type: Number,
      default: 20
    },
    clickMethods: {
      type: Function,
      default: () => {}
    },
    readOnly: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    updateVal (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.cells-container__list{
  width: 100%;
  .cells-content__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32rpx 0;
    font-size: 28rpx;
    font-weight:500;
    color: #000;
    @include line1rpx;
    .cells-item__header{
      flex-shrink: 0;
      max-width: 40%;
      font-weight:500;
      @include linemore1;
      padding-right: 10rpx;
    }
    .cells-item__text{
      flex: 1;
      text-align: right;
      @include linemore1;
    }

    .cells-item__input{
      flex: 1;
      text-align: right;
      .cells-item__inputText{
        font-size:28rpx;
        color: #000;
        font-weight: 500;
      }
    }
  }
  .is-title{
    padding: 24rpx 0;
    font-size: 20rpx;
  }

  .is-disabled{
    color: #999999;
  }
}

</style>
<style lang="scss">
.cells-container__list{
  .cell-item__placeholder{
    font-size:28rpx;
    font-weight:500;
    color: #999999;
  }
}

</style>
