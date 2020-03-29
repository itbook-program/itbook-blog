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
        tooltip: {
          trigger: 'item',
          formatter: '{c} ({d}%)'
        },
        legend: {
          orient: 'horizontal',
          align: 'left',
          y: 'bottom',
          x: 'center',
          itemWidth: 4,
          itemHeight: 4,
          data: ['公开文章', '私人日记']
        },
        series: [
          {
            name: '文章类型',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              position: 'outside',
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '14'
                }
              }
            },
            hoverOffset: 5,
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.seriesData
          }
        ],
        color: ['#1ea473', '#999999']
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
