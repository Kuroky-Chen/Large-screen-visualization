<template>
  <div class="left">
    <div class="top">
      <div class="t-left">
        <SubTitle title="重点企业税收" />
        <div class="chart-box-text">
          <div v-for="(item, index) in datas" :key="index" class="item">
            <div class="icon">
              <div class="icon1" />
              <div class="icon2" />
            </div>
            <div class="name">{{ item.name }}</div>
            <div class="count">
              <div>
                <CountTo :start-val="0" :end-val="item.count" :duration="8000" separator="" />
              </div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="t-right">
        <div class="t-r-top">
          <SubTitle title="成交额" />
          <div class="chart-box-count">
            <div class="c-item">
              <div class="title">当季成绩量</div>
              <div class="box">
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <div class="unit">万元</div>
              </div>
            </div>
            <div class="c-item">
              <div class="title">本年成绩量</div>
              <div class="box">
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <Count width="37" height="62" size="60" margin="18" :count="9" />
                <div class="unit">万元</div>
              </div>
            </div>
          </div>
        </div>
        <div class="t-r-bottom">
          <SubTitle title="成交量趋势" />
          <div id="echarts1" class="box" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <SubTitle title="重点产业趋势" width="900" />
      <div id="echarts2" class="box" />
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import CountTo from 'vue-count-to'
import Count from '@/components/count'
import * as echarts from 'echarts'

export default {
  name: 'Left',
  components: { SubTitle, CountTo, Count },
  data() {
    return {
      datas: [
        {
          name: '芜湖海螺公司',
          count: 10000,
          unit: '万'
        }
      ]
    }
  },
  created() {
    for (let i = 0; i < 8; i++) {
      this.datas.push({
        name: '芜湖海螺公司',
        count: 10000,
        unit: '万'
      })
    }
  },
  mounted() {
    this.echarts1Init()
    this.echarts2Init()
  },
  methods: {
    echarts1Init() {
      const chart = echarts.init(document.getElementById('echarts1'))
      // 绘制图表
      const option = {
        grid: {
          left: '6%',
          right: '10%',
          bottom: '5%',
          top: '40px',
          containLabel: true
        },
        color: ['#80FFA5'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },

        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00FFFF'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00FFFF'
              }
            },
            splitLine: {
              // 修改背景线条样式
              show: true, // 是否展示
              lineStyle: {
                color: '#00ffff'
              }
            }
          }
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(7,35,58)'
                },
                {
                  offset: 1,
                  color: 'rgb(9,151,170)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
          }
        ]
      }

      chart.setOption({
        ...option
      })
    },
    echarts2Init() {
      const chart = echarts.init(document.getElementById('echarts2'))
      // 绘制图表
      const option = {
        grid: {
          left: '6%',
          right: '10%',
          bottom: '1%',
          top: '50px',
          containLabel: true
        },
        backgroundColor: 'transparent',
        title: {
          text: '单位： 万元',
          top: '8px',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLabel: {
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          }
        },
        legend: {
          right: '5%',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '当月',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: [15, 15, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgb(0, 227, 210)' },
                  { offset: 1, color: 'rgb(63, 119, 233) ' }
                ])
              }
            },
            data: [3000, 5000, 4000, 2000, 8000, 5000, 7000, 3000, 5000, 4000, 2000, 9000]
          },
          {
            name: '上月',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: [15, 15, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgb(252,132,137)' },
                  { offset: 1, color: 'rgb(253,199,85)' }
                ])
              }
            },
            data: [3000, 5000, 4000, 2000, 8000, 5000, 7000, 3000, 5000, 4000, 2000, 9000]
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
  height: 650px;
}

.left {
  width: 1100px;
  padding-left: 150px;
}

.top {
  display: flex;

  .t-left {
    @include chart;
    margin-right: 50px;

    .chart-box-text {
      height: calc(100% - 50px);
      box-sizing: border-box;
      overflow: hidden;
      padding-top: 20px;

      .item {
        display: flex;
        padding: 0 50px;
        margin: 10px 0;
        height: 50px;
        line-height: 50px;

        .count {
          width: 100px;
          font-size: 30px;
          display: flex;

          .unit {
            font-size: 15px;
            padding-top: 4px;
            padding-left: 4px;
          }
        }

        .name {
          flex: 1;
          font-size: 22px;
        }

        .icon {
          height: 50px;
          width: 50px;
          position: relative;
          margin-right: 15px;

          .icon1 {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
            background: url('../../../assets/IndustryCloud/box1.png') no-repeat;
            background-size: 100% 100%;
          }

          .icon2 {
            position: absolute;
            width: 30px;
            height: 30px;
            margin: 10px 0 0 10px;
            z-index: 100;
            background: url('../../../assets/IndustryCloud/icon1.png') no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }

  .t-right {
    @include chart;

    .t-r-top {
      width: 100%;
      height: 320px;
      margin-bottom: 10px;

      .chart-box-count {
        height: calc(100% - 50px);
        padding: 30px 60px 0;

        .c-item {
          margin-bottom: 15px;

          .title {
            font-size: 22px;
            margin-bottom: 5px;
          }

          .box {
            display: flex;

            .unit {
              font-size: 22px;
              padding-top: 40px;
            }
          }
        }
      }
    }

    .t-r-bottom {
      width: 100%;
      height: 320px;

      .box {
        height: calc(100% - 50px);
      }
    }
  }
}

.bottom {
  width: 100%;
  height: 320px;
  margin-top: 10px;

  .box {
    height: calc(320px - 50px);
  }
}
</style>
