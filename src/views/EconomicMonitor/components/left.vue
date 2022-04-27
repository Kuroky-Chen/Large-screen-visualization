<template>
  <div class="left">
    <div class="top">
      <div class="t-left">
        <SubTitle title="产业月度增值" />
        <div class="box">
          <div class="title">
            <div />
            <div>智能装备</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="100" :duration="8000" separator="" />
              </div>
              <div class="unit">
                %
              </div>
            </div>
          </div>
          <div class="title">
            <div class="i2" />
            <div>新能源</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="100" :duration="8000" separator="" />
              </div>
              <div class="unit">
                %
              </div>
            </div>
          </div>
          <div class="title">
            <div />
            <div>健康食品</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="100" :duration="8000" separator="" />
              </div>
              <div class="unit">
                %
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="t-right">
        <SubTitle title="顶部行业产值占比" />
        <div class="box">
          <div v-for="(item, i) in datas" :key="i">
            <div :id="`echart${i}`" />
            <p>智能装备</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="m-left">
        <SubTitle title="企业增幅" />
        <div class="box">
          <vue-seamless-scroll :data="EnterpriseGrowthData" class="seamless-warp" :class-option="optionSetting">
            <div v-for="(item, i) in EnterpriseGrowthData" :key="i" class="item">
              <div class="icon">{{ `NO.${i + 1}` }}</div>
              <div class="name">{{ item.name }}</div>
              <div class="count">{{ item.count }}</div>
              <Progress :percent="item.percent" status="active" :stroke-color="['#108ee9', '#87d068']" />
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
      <div class="m-right">
        <SubTitle title="政府补助" />
        <div class="box">
          <vue-seamless-scroll :data="governmentalSubsidyData" class="seamless-warp" :class-option="optionSetting">
            <div v-for="(item, i) in governmentalSubsidyData" :key="i" class="item">
              <div class="name">{{ item.name }}</div>
              <div class="count">
                <div><Progress hide-info :percent="item.percent" status="active"
                    :stroke-color="['#108ee9', '#77c1f7']" /></div>
                <div>{{ item.count }} 万元</div>
              </div>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="b-left">
        <SubTitle title="税收走势图" />
        <div id="echarts2" class="box" />
      </div>
      <div class="b-right">
        <SubTitle title="政府兑现" />
        <div class="box">
          <vue-seamless-scroll :data="governmentCashData" class="seamless-warp"
            :class-option="optionSetting_governmentCash">
            <div v-for="(item, i) in governmentCashData" :key="i" class="item">
              <div class="i-left">
                <div class="i-l-left">
                  <div class="icon bounce" />
                </div>
                <div class="i-l-right">
                  <div>海宝</div>
                  <div>项目投资额</div>
                  <div>项目补贴</div>
                  <div>占比</div>
                </div>
              </div>
              <div class="i-right">
                <div>{{ item.projectName }}</div>
                <div>{{ item.investmentAmounts }} <span class="unit">万</span></div>
                <div>{{ item.subsidy }} <span class="unit">万</span></div>
                <div>{{ item.percent }} <span class="unit">%</span></div>
              </div>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import CountTo from 'vue-count-to'
import * as echarts from 'echarts'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: 'Left',
  components: { SubTitle, CountTo, vueSeamlessScroll },
  data() {
    return {
      datas: [1, 2, 3, 4, 5, 6, 7, 8],
      EnterpriseGrowthData: [{
        name: '建筑业',
        count: 4000,
        percent: 90
      }],
      governmentalSubsidyData: [{
        name: '食品',
        count: 100,
        percent: 90
      }],
      governmentCashData: [{
        projectName: '芜湖科技有限公司两化融合贯标',
        investmentAmounts: '139',
        subsidy: '39',
        percent: '10'
      }]
    }
  },
  computed: {
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
    },
    optionSetting_governmentCash() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 135, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  created() {
    for (let i = 0; i < 50; i++) {
      this.EnterpriseGrowthData.push({
        name: '建筑业',
        count: 4000,
        percent: 90
      })
      this.governmentalSubsidyData.push({
        name: '食品',
        count: 100,
        percent: 90
      })
      this.governmentCashData.push({
        projectName: '芜湖科技有限公司两化融合贯标',
        investmentAmounts: '139',
        subsidy: '39',
        percent: '10'
      })
    }
  },
  mounted() {
    this.echarts1Init()
    this.echarts2Init()
  },
  methods: {
    echarts1Init() {
      this.datas.forEach((item, i) => {
        const chart = echarts.init(document.getElementById(`echart${i}`))
        // 绘制图表
        const option = {
          title: [
            {
              text: '75%',
              x: 'center',
              top: '36px',
              textStyle: {
                fontSize: '12',
                color: '#FFFFFF',
                fontFamily: 'DINAlternate-Bold, DINAlternate',
                foontWeight: '600'
              }
            }
          ],
          polar: {
            radius: ['42%', '52%'],
            center: ['50%', '50%']
          },
          angleAxis: {
            max: 100,
            show: false
          },
          radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              name: '',
              type: 'bar',
              roundCap: true,
              barWidth: 90,
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(66, 66, 66, .3)'
              },
              data: [60],
              coordinateSystem: 'polar',

              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#0ff'
                    },
                    {
                      offset: 1,
                      color: '#5467df'
                    }
                  ])
                }
              }
            },
            {
              name: '',
              type: 'pie',
              startAngle: 80,
              radius: ['56%'],
              hoverAnimation: false,
              center: ['50%', '50%'],
              itemStyle: {
                color: 'rgba(66, 66, 66, .1)',
                borderWidth: 1,
                borderColor: '#5269EE'
              },
              data: [100]
            },
            {
              name: '',
              type: 'pie',
              startAngle: 80,
              radius: ['38%'],
              hoverAnimation: false,
              center: ['50%', '50%'],
              itemStyle: {
                color: 'rgba(66, 66, 66, .1)',
                borderWidth: 1,
                borderColor: '#5269EE'
              },
              data: [100]
            }
          ]
        }

        chart.setOption({
          ...option
        })
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
          text: '单位： 亿',
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
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
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

        series: [
          {
            name: '当月',
            type: 'bar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgb(7,35,58)' },
                  { offset: 1, color: 'rgb(9,151,170)' }
                ])
              }
            },
            data: [
              3000, 5000, 4000, 2000, 8000, 5000, 7000, 3000, 5000, 4000, 2000, 9000
            ]
          },
          {
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: [10, 10],
            itemStyle: {
              normal: {
                color: 'rgb(135,209,109)', // 改变折线点的颜色
                lineStyle: {
                  color: 'rgb(135,209,109)' // 改变折线颜色
                }
              }
            },
            data: [
              4500, 6500, 5500, 3500, 9500, 6500, 8500, 4500, 6500, 5500, 3500, 9500
            ]
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

.left {
  width: 1100px;
  padding-left: 150px;

  .top {
    margin-bottom: 10px;
    display: flex;

    .t-left {
      @include chart;
      margin-right: 50px;

      .box {
        height: calc(100% - 50px);
        overflow: hidden;
        padding: 0 60px;
        padding-top: 10px;

        .title {
          display: flex;
          height: 50px;
          line-height: 50px;
          margin-top: 25px;

          &>div {
            &:nth-child(1) {
              width: 50px;
              height: 50px;
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
              color: #ff6600;
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
      @include chart;

      .box {
        height: calc(100% - 50px);
        display: flex;
        flex-wrap: wrap;

        &>div {
          width: 25%;
          height: 130px;

          &>div {
            height: calc(100% - 40px);
          }

          p {
            text-align: center;
          }
        }
      }
    }
  }

  .mid {
    margin-bottom: 10px;
    display: flex;

    .m-left {
      @include chart;
      margin-right: 50px;

      .box {
        height: calc(100% - 50px);
        padding: 20px;

        .seamless-warp {
          height: 100%;
          overflow: hidden;
        }

        .item {
          display: flex;
          padding: 10px 0;

          ::v-deep {
            .ivu-progress-text-inner {
              color: #fff;
            }
          }

          .name {
            width: 100px;
            margin-left: 10px;
          }

          .count {
            width: 60px;
            margin: 0 10px;
            margin-right: 50px;
          }

          .icon {
            width: 80px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            color: #fff;
            font-size: 12px;
            background: url('../../../assets/EconomicMonitor/icon1.svg') no-repeat;
            background-size: 100% 100%;

            &.i2 {
              background: url('../../../assets/EconomicMonitor/icon2.svg') no-repeat;
            }
          }
        }
      }
    }

    .m-right {
      @include chart;

      .box {
        height: calc(100% - 50px);
        padding: 20px 40px;

        .seamless-warp {
          height: 100%;
          overflow: hidden;
        }

        .item {
          padding: 10px;

          .name {}

          .count {
            display: flex;

            &>div {

              &:nth-child(1) {
                flex: 1;
              }

              &:nth-child(2) {
                width: 100px;
                text-align: right;
              }
            }
          }
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
        height: calc(100% - 50px);
      }
    }

    .b-right {
      @include chart;

      .box {
        height: calc(100% - 50px);

        .seamless-warp {
          height: 100%;
          overflow: hidden;
        }

        .item {
          height: 135px;
          display: flex;
          justify-content: center;
          align-items: center;

          .i-left {
            display: flex;

            .i-l-left {
              width: 88px;
              height: 91px;
              background: url('../../../assets/EconomicMonitor/icon3.png') no-repeat;
              background-size: 100% 100%;
              position: relative;

              .icon {
                &.bounce {
                  animation: custom-bounce .8s infinite 0.5s both;
                  transform-origin: center bottom;
                }

                width: 60px;
                height: 60px;
                position: absolute;
                top: 15px;
                left: 14px;
                background: url('../../../assets/EconomicMonitor/icon4.png') no-repeat;
                background-size: 100% 100%;
              }
            }

            .i-l-right {
              padding: 10px 10px 0 10px;
            }
          }

          .i-right {
            padding-top: 10px;
            color: #7ECF51;
            text-align: right;

            .unit {
              color: #00ffff;
            }
          }
        }
      }
    }
  }
}
</style>
