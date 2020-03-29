<template>
  <div class="chart-container">
    <mpvue-echarts lazyLoad :echarts="echarts" :onInit="handleInit" :ref="chartId" :canvasId="chartId" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
export default {
  props: {
    chartId: {
      type: String,
      required: true
    },
    xAxisData: {
      type: Array,
      required: true
    },
    seriesData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      echarts,
      option: null
    }
  },
  mounted () {
    this.initChart()
  },
  components: {
    mpvueEcharts
  },
  methods: {
    initChart () {
      this.option = {
        xAxis: {
          type: 'category',
          data: this.xAxisData,
          nameLocation: 'center',
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          lineStyle: {
            color: 'c4c6cf'
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        textStyle: {
          color: '#666666'
        },
        grid: {
          top: '28rpx',
          left: '0',
          right: '0',
          bottom: '3%',
          containLabel: true
        },
        series: [{
          data: this.seriesData,
          type: 'line',
          symbol: 'circle'
        }],
        color: '#1ea473'
      }
      this.$refs[this.chartId].init()
    },
    handleInit (canvas, width, height) {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(chart)
      chart.setOption(this.option)
      return chart
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-container{
  width: 100%;
  height: 400rpx;
}
</style>
