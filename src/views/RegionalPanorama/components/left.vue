<template>
  <div class="left">
    <div class="top">
      <div class="t-left">
        <SubTitle title="企业分布" />
        <div class="box">
          <div class="title">
            <div />
            <div>大型企业</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                家
              </div>
            </div>
          </div>
          <div class="title">
            <div class="i2" />
            <div>中型企业</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                家
              </div>
            </div>
          </div>
          <div class="title">
            <div />
            <div>小型企业</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                家
              </div>
            </div>
          </div>
          <div class="title">
            <div class="i2" />
            <div>微型企业</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                家
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="t-right">
        <SubTitle title="载体类型数据" />
        <div class="box">
          <div class="title">
            <div />
            <div>办公楼</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                栋
              </div>
            </div>
          </div>
          <div class="title">
            <div class="i2" />
            <div>生产园区</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                个
              </div>
            </div>
          </div>
          <div class="title">
            <div class="i3" />
            <div>公共设施</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                处
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="b-left">
        <div class="b-l-top">
          <SubTitle title="ORI景气指数" />
          <div id="echarts1" class="box">
            12321
          </div>
        </div>
        <div class="b-l-bottom">
          <SubTitle title="建设规划" />
          <div class="box">
            <div class="item">
              <div class="bg">
                <div class="content bounce">
                  <div>计划投资额</div>
                  <div>8613万</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bg">
                <div class="content bounce">
                  <div>新增投资额</div>
                  <div>8613万</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bg">
                <div class="content bounce">
                  <div>去年计划投资</div>
                  <div>8613万</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bg">
                <div class="content bounce">
                  <div>去年新增投资</div>
                  <div>8613万</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="b-right">
        <SubTitle title="载体分布" />
        <div id="echarts2" class="box">
          123
        </div>
        <div id="echarts3" class="box">
          123
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import CountTo from 'vue-count-to'
import * as echarts from 'echarts'

export default {
  name: 'Left',
  components: { SubTitle, CountTo },
  mounted() {
    this.echarts1Init()
    this.echarts2Init()
    this.echarts3Init()
  },
  methods: {
    echarts1Init() {
      const chart = echarts.init(document.getElementById('echarts1'))
      // 绘制图表
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '20px',
          textStyle: {
            color: '#fff'
          },
          data: ['一致指数', '滞后指数', '先行指数', '预警指数']
        },
        grid: {
          left: '6%',
          right: '10%',
          bottom: '5%',
          top: '40px',
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
          show: false
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
    },
    echarts2Init() {
      const chart = echarts.init(document.getElementById('echarts2'))
      // 绘制图表

      const salvProName = [
        '商业面积',
        '写字楼面积',
        '厂房面积',
        '住宅面积',
        '公共设施面积'
      ]
      const salvProValue = [1355, 1165, 1512, 1772, 5139]
      const option = {
        grid: {
          left: '6%',
          right: '10%',
          bottom: '2%',
          top: '5%',
          containLabel: true
        },
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: {
        //     type: 'none'
        //   },
        //   formatter: function (params) {
        //     return params[0].name + ' : ' + params[0].value
        //   }
        // },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: salvProName
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              formatter: '{value} k㎡',
              textStyle: {
                color: '#ffffff',
                fontSize: '12'
              }
            },
            data: salvProValue
          }
        ],
        series: [
          {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgb(57,89,255,0.8)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(46,200,207,1)'
                  }
                ])
              }
            },
            barWidth: 20,
            data: salvProValue
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [8000, 8000, 8000, 8000, 8000],
            itemStyle: {
              normal: {
                color: 'rgba(99,202,255,.5)',
                barBorderRadius: 30
              }
            }
          }
        ]
      }
      chart.setOption({
        ...option
      })
    },
    echarts3Init() {
      const chart = echarts.init(document.getElementById('echarts3'))
      // 绘制图表
      const option = {
        title: {
          text: '单位： m³',
          top: '8px',
          textStyle: {
            color: '#fff'
          }
        },
        color: [
          'rgba(99,202,255,.5)',
          '#49beff'
        ],
        text: {},
        grid: {
          left: '6%',
          right: '10%',
          bottom: '5%',
          top: '40px',
          containLabel: true
        },
        xAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            // y轴刻度线
            show: false
          },
          axisLabel: {
            color: '#fff',
            margin: 18
          },
          data: ['规划面积', '在建面积', '已建面积', '空余面积'],
          type: 'category'
        },
        yAxis: {
          show: false
        },
        series: [
          {
            data: [200, 85, 112, 275],
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: '#0b9eff'
                  },
                  {
                    offset: 1,
                    color: '#63caff'
                  }
                ]
              }
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#fff'
            }
          },
          {
            data: [1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 15]
          },
          {
            data: [200, 85, 112, 275],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 12],
            zlevel: 2
          },
          {
            data: [741, 741, 741, 741],
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 30,
            barGap: '-100%',
            zlevel: -1
          },
          {
            data: [1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 15],
            zlevel: -2
          },
          {
            data: [741, 741, 741, 741],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 12],
            zlevel: -1
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
}

.bounce {
  animation: custom-bounce .8s infinite 0.5s both;
  transform-origin: center bottom;
}

.left {
  width: 1100px;
  padding-left: 150px;

  .top {
    display: flex;

    .t-left,
    .t-right {
      @include chart;
    }

    .t-left {
      margin-right: 50px;

      .box {
        height: calc(100% - 50px);
        overflow: hidden;
        padding: 0 42px;
        padding-top: 10px;

        .title {
          display: flex;
          height: 40px;
          line-height: 40px;
          margin-top: 18px;

          &>div {
            &:nth-child(1) {
              width: 40px;
              height: 40px;
              background: url('../../../assets/AttractInvestment/icon1.png') no-repeat;
              background-size: 100% 100%;

              &.i2 {
                background: url('../../../assets/AttractInvestment/icon2.png') no-repeat;
                background-size: 100% 100%;
              }
            }

            &:nth-child(2) {
              flex: 1;
              padding: 0 10px;
              font-size: 18px;
              color: #00ffff;
            }

            &:nth-child(3) {

              font-size: 30px;
              display: flex;

              .unit {
                font-size: 12px;
                color: #00ffff;
                padding-top: 2px;
                padding-left: 4px;
              }
            }
          }
        }
      }
    }

    .t-right {
      .box {
        height: calc(100% - 50px);
        overflow: hidden;
        padding: 0 55px;
        padding-top: 10px;

        .title {
          display: flex;
          height: 45px;
          line-height: 45px;
          margin-top: 30px;

          &>div {
            &:nth-child(1) {
              width: 70px;
              height: 45px;
              background: url('../../../assets/RegionalPanorama/icon1.png') no-repeat;
              background-size: 100% 100%;

              &.i2 {
                background: url('../../../assets/RegionalPanorama/icon2.png') no-repeat;
                background-size: 100% 100%;
              }

              &.i3 {
                background: url('../../../assets/RegionalPanorama/icon3.png') no-repeat;
                background-size: 100% 100%;
              }
            }

            &:nth-child(2) {
              flex: 1;
              padding: 0 10px;
              font-size: 18px;
              color: #00ffff;
            }

            &:nth-child(3) {

              font-size: 30px;
              display: flex;

              .unit {
                font-size: 12px;
                color: #00ffff;
                padding-top: 2px;
                padding-left: 4px;
              }
            }
          }
        }
      }
    }
  }

  .bottom {
    margin-bottom: 10px;
    display: flex;

    .b-left {
      margin-right: 50px;

      .b-l-top {
        @include chart;
        margin-bottom: 10px;

        .box {
          height: calc(100% - 50px);
        }
      }

      .b-l-bottom {
        @include chart;
        height: 340px;

        .box {
          padding-top: 20px;
          height: calc(100% - 50px);
          display: flex;
          flex-wrap: wrap;

          .item {
            width: 50%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            .bg {
              width: 123px;
              height: 84px;
              background: url('../../../assets/RegionalPanorama/icon4.png') no-repeat;
              background-size: 100% 100%;
              position: relative;

              .content {
                top: 0px;
                left: 30px;
                position: absolute;

                &>div {
                  &:nth-child(1) {
                    font-size: 10px;
                    color: #fff;
                  }

                  &:nth-child(2) {
                    font-size: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }

    .b-right {
      @include chart;
      height: 650px;

      &>div {
        &:nth-child(2) {
          height: 350px;
          margin-bottom: 10px;
        }

        &:nth-child(3) {
          height: 250px;
        }

      }
    }
  }
}
</style>
