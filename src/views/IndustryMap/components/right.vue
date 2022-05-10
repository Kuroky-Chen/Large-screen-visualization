<template>
  <div class="right">
    <div class="top">
      <div class="t-left">
        <div class="t-l-top">
          <SubTitle title="产业链占比" />
          <div id="echarts2" class="box">
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
    this.echarts2Init()
    this.echarts3Init()
    this.echarts4Init()
  },
  methods: {
    echarts2Init() {
      const chart = echarts.init(document.getElementById('echarts2'))
      // 绘制图表
      const scaleData = [
        {
          name: '数据项1',
          value: 30
        },
        {
          name: '数据项2',
          value: 20
        },
        {
          name: '数据项3',
          value: 10
        }
      ]
      const rich = {
        white: {
          color: '#ddd',
          align: 'center',
          padding: [3, 0]
        }
      }
      const placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
      const data = []
      const color = [
        '#00ffff',
        '#00cfff',
        '#006ced',
        '#ffe000',
        '#ffa800',
        '#ff5b00',
        '#ff3000'
      ]
      for (let i = 0; i < scaleData.length; i++) {
        data.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 4,
                shadowBlur: 200,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          },
          {
            value: 2,
            name: '',
            itemStyle: placeHolderStyle
          }
        )
      }
      const seriesObj = [
        {
          name: '',
          type: 'pie',
          clockWise: false,
          radius: [50, 100],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function (params) {
                  let percent = 0
                  let total = 0
                  for (let i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value
                  }
                  percent = ((params.value / total) * 100).toFixed(0)
                  if (params.name !== '') {
                    return params.name + '\n{white|' + '占比' + percent + '%}'
                  } else {
                    return ''
                  }
                },
                rich: rich
              },
              labelLine: {
                length: 10,
                length2: 30,
                show: true,
                color: '#00ffff'
              }
            }
          },
          data: data
        }
      ]
      const option = {
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesObj
      }

      chart.setOption({
        ...option
      })
    },
    echarts3Init() {
      const chart = echarts.init(document.getElementById('echarts3'))
      // 绘制图表
      const option = {
        series: [
          {
            name: '内层数据刻度',
            type: 'gauge',
            radius: '92',
            min: 0,
            max: 100,
            center: ['50%', '55%'],
            startAngle: 186,
            endAngle: -6,
            splitNumber: 5,

            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 12,
                // color: [[0.2, '#77D97F'],[0.8, '#4285F4'],[1, '#FF7E7F']],
                color: [[1, '#3383a2']]
              }
            },
            progress: {
              show: true,
              roundCap: true,
              width: 11,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#ffffff'
                    },
                    {
                      offset: 0.3,
                      color: '#54cae2'
                    },
                    {
                      offset: 0.7,
                      color: '#3690a3'
                    },
                    {
                      offset: 1,
                      color: '#2d7a8b'
                    }
                  ]
                  // global: false // 缺省为 false
                },
                borderColor: '#1b5b76',
                borderWidth: '2'
              }
            },
            axisTick: {
              show: true,
              splitNumber: 5,
              length: 8,
              distance: -10,
              lineStyle: {
                width: 7,
                color: '#1c5a73'
              }
            },
            splitLine: {
              show: true,
              length: 1,
              lineStyle: {
                width: 2,
                color: '#ffffff'
              }
            },

            axisLabel: {
              distance: 5,
              color: '#FFF',
              fontSize: 11
            },
            pointer: {
              length: '60%',
              width: 2,
              offsetCenter: [0, '-40%'],
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#ffffff'
                    },
                    {
                      offset: 0.7,
                      color: '#ffffff'
                    },
                    {
                      offset: 1,
                      color: '#2d7a8b'
                    }
                  ]
                  // global: false // 缺省为 false
                },
                // shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 7,
                shadowColor: '#ffffff'
              }
            },
            detail: {
              offsetCenter: ['4%', '-5%'],
              formatter: function (value) {
                return '{value|' + value.toFixed(0) + '}{unit|%}'
              },
              rich: {
                value: {
                  fontSize: 28,
                  fontWeight: 'bolder',
                  color: '#ffffff',
                  textShadowBlur: '12',
                  textShadowColor: '#3ea0b5'
                },
                unit: {
                  fontSize: 28,
                  fontWeight: 'bolder',
                  color: '#ffffff',
                  textShadowBlur: '12',
                  textShadowColor: '#3ea0b5'
                }
              }
            },
            data: [
              {
                value: 88
              }
            ]
          },
          {
            type: 'gauge',
            name: '外层辅助',
            radius: 100,
            startAngle: 186,
            center: ['50%', '55%'],
            endAngle: -6,
            min: 0,
            max: 100,
            splitNumber: 5,
            pointer: {
              show: false
            },
            axisLine: {
              roundCap: true,
              show: true,
              lineStyle: {
                color: [[1, '#3ea0b5']],
                width: 3,
                opacity: 0.5,
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 5,
                shadowOffsetX: 1,
                shadowOffsetY: 1
              }
            },

            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          {
            name: '最内层线',
            type: 'gauge',
            radius: '64',
            center: ['50%', '55%'],
            startAngle: 186,
            endAngle: -6,

            splitLine: {
              show: false,
              lineStyle: {
                opacity: 0
              }
            },
            axisLabel: {
              show: false
            },
            // 上面一圈
            itemStyle: {
              color: '#3ea0b5',
              shadowColor: 'rgba(0,138,255,0.45)',
              shadowBlur: 2,
              shadowOffsetX: 1,
              shadowOffsetY: 1
            },
            // 刻度指到位置
            progress: {
              roundCap: true,
              show: true,
              roundCap: true,
              width: 3
            },
            axisLine: {
              roundCap: true,
              show: true,
              lineStyle: {
                color: [[1, '#3ea0b5']],
                width: 3,
                opacity: 0.5,
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 5,
                shadowOffsetX: 1,
                shadowOffsetY: 1
              }
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 88
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

        .box {
          padding-top: 30px;
        }
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
