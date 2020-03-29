<template>
  <div class="cart-container">
    <div class="cart-container__header">
      <custom-tabs :tabs="tabsItem" isFixed height="80rpx" :activeLine="false" @checkedItem="checkedItem"/>
    </div>
    <div v-if="type === 0">
      <!-- 基础数据 -->
      <div class="cart-container__content">
        <title-view title="文章类型" info="作家文章类型数据占比"/>
        <pie-chart
          :seriesData="pieSeriesData"
          chartId="type" />
      </div>

      <div class="cart-container__content">
        <title-view title="近6月公开文章发布" info="月度文章发布数据统计"/>
        <bar-chart
          :xAxisData="barxAxisData"
          :seriesData="barSeriesData"
          chartId="num" />
      </div>

      <div class="cart-more__tips">
        — 查看更多数据请登录官网 —
      </div>
    </div>
    <div v-if="type === 1">
      <!-- 阅读数据 -->
      <div class="cart-container__content">
        <title-view title="文章阅读近7日趋势" info="全部公开文章阅读"/>
        <line-chart
        :xAxisData="readLinexAxisData"
        :seriesData="readLineSeriesData"
        chartId="read" />
      </div>

      <div class="cart-container__content">
        <title-view title="书签近7日趋势" info="读者书签打赏记录"/>
        <line-chart
          :xAxisData="markLinexAxisData"
          :seriesData="markLineSeriesData"
        chartId="mark" />
      </div>

      <div class="cart-more__tips">
        — 查看更多数据请登录官网 —
      </div>
    </div>
  </div>
</template>

<script>
import CustomTabs from '@/components/CustomTabs'
import titleView from './components/title.vue'
import lineChart from './components/lineChart.vue'
import pieChart from './components/pieChart.vue'
import barChart from './components/barChart.vue'
export default {
  data () {
    return {
      pieSeriesData: [
        {value: 335, name: '公开文章'},
        {value: 310, name: '私人日记'}
      ],
      barxAxisData: ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      barSeriesData: [1, 2, 5, 6, 4, 2, 5],
      readLinexAxisData: ['12-1', '12-2', '12-3', '12-4', '12-5', '12-6', '12-7'],
      readLineSeriesData: [820, 932, 901, 934, 1290, 130, 1320],
      markLinexAxisData: ['12-1', '12-2', '12-3', '12-4', '12-5', '12-6', '12-7'],
      markLineSeriesData: [30, 40, 60, 230, 150, 10, 400],
      tabsItem: [
        {
          key: 0,
          value: '基础数据'
        },
        {
          key: 1,
          value: '阅读数据'
        }
      ],
      type: 0
    }
  },
  components: {
    CustomTabs,
    titleView,
    lineChart,
    pieChart,
    barChart
  },
  methods: {
    checkedItem (index) {
      console.log(index)
      this.type = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.cart-container {
  width: 100%;
  .cart-container__header{
    background:rgba(254,254,254,1);
    /deep/ .pt-tabs__container{
      border-top:1rpx solid rgba(233,233,233,1);
      border-bottom:1rpx solid rgba(233,233,233,1);
    }
  }
  .cart-container__content{
    padding: $side-padding;
  }
  .cart-more__tips{
    color: #666666;
    text-align: center;
    font-size: 24rpx;
    padding: 17rpx 0;
  }
}
</style>