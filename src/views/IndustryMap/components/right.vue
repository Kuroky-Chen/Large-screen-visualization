<template>
  <div class="right">
    <div class="top">
      <div class="t-left">
        <div class="t-l-top">
          <SubTitle title="产业链占比" />
          <div class="box">
            12
          </div>
        </div>
        <div class="t-l-bottom">
          <SubTitle title="产业涨势监测" />
          <div id="echarts3" class="box">
            12
          </div>
        </div>
      </div>
      <div class="t-right">
        <SubTitle title="区域产业概览" />
        <div class="box">
          <div class="th">
            <div>行业名</div>
            <div>区域</div>
            <div>数量</div>
          </div>
          <vue-seamless-scroll :data="areaIndustrys" class="seamless-warp" :class-option="optionSetting_area">
            <div v-for="(item, i) in areaIndustrys" :key="i" class="td">
              <div>{{ item.name }}</div>
              <div>{{ item.area }}</div>
              <div>{{ item.count }}</div>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="b-left">
        <SubTitle title="园区协同事件简讯" />
        <div class="box">
          <vue-seamless-scroll :data="briefNews" class="seamless-warp" :class-option="optionSetting">
            <div v-for="(item, i) in briefNews" :key="i" class="item">
              <div> {{ item.title }} </div>
              <div> {{ item.content }} </div>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
      <div class="b-right">
        <SubTitle title="协同事件趋势" />
        <div id="echarts4" class="box">
          12
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import * as echarts from 'echarts'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: 'Right',
  components: { SubTitle, vueSeamlessScroll },
  data() {
    return {
      briefNews: [],
      areaIndustrys: []
    }
  },
  computed: {
    optionSetting_area() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 42, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    },
    optionSetting() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  created() {
    for (let i = 0; i < 50; i++) {
      this.briefNews.push({
        title: '生物制药领域又添生力军',
        content: '芜湖山野电器有限公司与浙江祥生物业服务有限公司正式签订战略合作！'
      })
      this.areaIndustrys.push({
        name: '非金',
        area: '新港镇',
        count: 1111
      })
    }
  },
  mounted() {
    this.echarts3Init()
    this.echarts4Init()
  },
  methods: {
    echarts3Init() {
      const chart = echarts.init(document.getElementById('echarts3'))
      // 绘制图表
      const option = {
        series: [
          {
            name: '内圈小',
            type: 'gauge',
            pointer: {
              show: false
            },
            radius: '70%',
            startAngle: 200,
            endAngle: -20,
            splitNumber: 4,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[1, '#bfcbd9']],
                width: 20
              }
            },
            splitLine: {
              // 分隔线样式
              show: true
            },
            axisLabel: {
              // 刻度标签
              show: false
            },
            axisTick: {
              // 刻度样式
              show: true
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 40,
              offsetCenter: [0, '20%']
            },
            data: [
              {
                value: 60
              }
            ]
          },
          {
            name: '内圈小',
            type: 'gauge',
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 30,
              fontStyle: 'italic',
              offsetCenter: [0, '33%']
            },
            pointer: {
              show: true
            },
            radius: '70%',
            startAngle: 200,
            endAngle: 50,
            splitNumber: 4,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[1, '#0093ee']],
                width: 20,
                shadowColor: '#0093ee', // 默认透明
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 40,
                opacity: 1
              }
            },
            splitLine: {
              // 分隔线样式
              show: true
            },
            axisLabel: {
              // 刻度标签
              show: true
            },
            axisTick: {
              // 刻度样式
              show: true
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 40,
              offsetCenter: [0, '20%']
            },
            data: [
              {
                value: '60'
              }
            ]
          }
        ]
      }

      chart.setOption({
        ...option
      })
    },
    echarts4Init() {
      const chart = echarts.init(document.getElementById('echarts4'))
      // 绘制图表
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: '单位： 件',
          top: '8px',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '6%',
          right: '10%',
          bottom: '3%',
          top: '60px',
          containLabel: true
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          },
          data: ['22-1', '22-2', '22-3', '22-4', '22-5', '22-6']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            // 修改背景线条样式
            show: true, // 是否展示
            lineStyle: {
              color: '#ffffff'
            }
          }
        },
        series: [
          {
            name: '一致指数',
            type: 'line',
            stack: 'Total',
            smooth: true,
            showSymbol: false,
            data: [120, 132, 101, 134, 90, 230]
          },
          {
            name: '滞后指数',
            type: 'line',
            stack: 'Total',
            smooth: true,
            showSymbol: false,
            data: [220, 182, 191, 234, 290, 330]
          },
          {
            name: '先行指数',
            type: 'line',
            stack: 'Total',
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 3
            },
            data: [150, 232, 201, 154, 190, 330]
          },
          {
            smooth: true,
            showSymbol: false,
            name: '预警指数',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330]
          }
        ]
      }
      chart.setOption({
        ...option
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin chart {
  width: 450px;
  height: 320px;

  .box {
    height: calc(100% - 50px);
  }
}

.right {
  width: 1100px;
  padding-right: 150px;

  .top {
    margin-bottom: 10px;
    display: flex;

    .t-left {
      margin-right: 50px;

      .t-l-top {
        @include chart;
        margin-bottom: 10px;
      }

      .t-l-bottom {
        @include chart;
      }
    }

    .t-right {
      @include chart;
      height: 650px;

      .box {
        padding: 20px 40px;
      }

      .seamless-warp {
        height: calc(100% - 38px);
        overflow: hidden;
      }

      .th,
      .td {
        display: flex;
        height: 38px;
        line-height: 38px;
        padding-left: 20px;

        &>div {
          &:nth-child(1) {
            flex: 1;
          }

          &:nth-child(2) {
            width: 100px;
            text-align: center;
          }

          &:nth-child(3) {
            width: 100px;
            text-align: center;
          }
        }
      }

      .th {
        font-size: 13px;
        background: rgba(76, 76, 76, .6);
        color: #00ffff;
      }

      .td {
        height: 40px;
        line-height: 40px;
        margin-top: 2px;
        color: #00B3B3;

        &>div {
          font-size: 12px;
        }
      }
    }
  }

  .bottom {
    display: flex;

    .b-left {
      @include chart;
      margin-right: 50px;

      .box {
        padding: 20px 40px;
        padding-bottom: 0;
      }

      .seamless-warp {
        height: 100%;
        overflow: hidden;
      }

      .item {
        font-size: 14px;
        color: #80FFFF;

        div {
          padding: 5px 0;
        }
      }
    }

    .b-right {
      @include chart;
    }
  }
}
</style>
