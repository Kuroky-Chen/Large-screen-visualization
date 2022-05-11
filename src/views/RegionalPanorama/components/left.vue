<template>
  <div class="left">
    <div class="top">
      <div class="t-left">
        <SubTitle title="企业分布" />
        <div class="box">
          <vue-seamless-scroll :data="enterprises" class="seamless-warp" :class-option="optionSetting">
            <div v-for="(item, i) in enterprises" :key="i" class="title">
              <div :class="{ i2: i & 1 === 1 }" />
              <div>{{ item.enterprise }}</div>
              <div>
                <div>
                  <CountTo :start-val="0" :end-val="Number(item.count)" :duration="8000" separator="" />
                </div>
                <div class="unit">
                  家
                </div>
              </div>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
      <div class="t-right">
        <SubTitle title="载体类型数据" />
        <div class="box">
          <vue-seamless-scroll :data="carriers" class="seamless-warp" :class-option="optionSetting">
            <div v-for="(item, i) in carriers" :key="i" class="title">
              <div :class="`i${i + 1}`" />
              <div>{{ item.enterprise }}</div>
              <div>
                <div>
                  <CountTo :start-val="0" :end-val="Number(item.count)" :duration="8000" separator="" />
                </div>
                <div class="unit">
                  {{ item.unit }}
                </div>
              </div>
            </div>
          </vue-seamless-scroll>
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
                  <div>
                    <CountTo :start-val="0" :end-val="Number(programmes.thisYearPlan)" :duration="8000" separator="" />
                    万
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bg">
                <div class="content bounce">
                  <div>新增投资额</div>
                  <div>
                    <CountTo :start-val="0" :end-val="Number(programmes.thisYearAdd)" :duration="8000" separator="" />
                    万
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bg">
                <div class="content bounce">
                  <div>去年计划投资</div>
                  <div>
                    <CountTo :start-val="0" :end-val="Number(programmes.lastYearPlan)" :duration="8000" separator="" />
                    万
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bg">
                <div class="content bounce">
                  <div>去年新增投资</div>
                  <div>
                    <CountTo :start-val="0" :end-val="Number(programmes.lastYearAdd)" :duration="8000" separator="" />
                    万
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="b-right">
        <SubTitle title="载体分布" />
        <div class="box">
          <vue-seamless-scroll :data="distributions" class="seamless-warp" :class-option="optionSetting">
            <div v-for="(item, i) in distributions" :key="i" class="item">
              <div class="name">{{ item.name }}</div>
              <div class="count">
                <div><Progress
                  hide-info
                  :percent="item.percent * 100"
                  status="active"
                  :stroke-color="['#108ee9', '#77c1f7']"
                /></progress></div>
                <div>{{ item.totalArea }} 万元</div>
              </div>
            </div>
          </vue-seamless-scroll>
        </div>
        <div id="echarts3" class="box" />
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import { getEnterpriseDistributionList, getConstructionPlanning, getCarrierTypeList, getArea, getCarrierDistributionList } from '@/api/RegionalPanorama'
import CountTo from 'vue-count-to'
import * as echarts from 'echarts'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: 'Left',
  components: { SubTitle, CountTo, vueSeamlessScroll },
  data() {
    return {
      enterprises: [],
      carriers: [],
      areas: {},
      distributions: [],
      programmes: {}
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
    }
  },
  created() {
    this.init()
  },
  mounted() {
    this.echarts1Init()
  },
  methods: {
    // 初始化
    init() {
      this.getData_enterprise()
      this.getData_carriers()
      this.getData_distribution()
      this.getData_area()
      this.getData_programme()
    },

    // 建设规划
    async getData_programme() {
      try {
        const { data } = await getConstructionPlanning()
        this.programmes = data
      } finally {
        console.log(`建设规划`, this.programmes)
      }
    },

    // 面积
    async getData_area() {
      try {
        const { data } = await getArea()
        this.areas = data
        this.echarts3Init()
      } finally {
        console.log(`面积`, this.areas)
      }
    },

    // 载体分布
    async getData_distribution() {
      try {
        const { data } = await getCarrierDistributionList()
        this.distributions = data
        console.log(this.distributions)
        // this.echarts2Init()
      } finally {
        console.log(`载体分布`, this.distributions)
      }
    },

    // 载体类型数据
    async getData_carriers() {
      try {
        const { data } = await getCarrierTypeList()
        this.carriers = data
      } finally {
        console.log(`载体类型数据：`, this.carriers)
      }
    },

    // 企业分布
    async getData_enterprise() {
      try {
        const { data } = await getEnterpriseDistributionList()
        this.enterprises = data
      } finally {
        console.log(`企业分布：`, this.enterprises)
      }
    },

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

      this.distributions

      const salvProValue = this.distributions.map(i => i.totalArea)
      const bgValue = Math.max(...salvProValue)
      const bgValues = []
      const salvProName = this.distributions.map(i => {
        bgValues.push(bgValue * 1.3)
        return i.name
      })
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
            data: bgValues,
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

      const data = [
        this.areas.planningArea,
        this.areas.underConstructionArea,
        this.areas.hasBeenBuiltArea,
        this.areas.pausedArea
      ]
      const total = this.areas.planningArea + this.areas.underConstructionArea + this.areas.hasBeenBuiltArea + this.areas.pausedArea
      const totals = [total, total, total, total]

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
            data: data,
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
            data: data,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 12],
            zlevel: 2
          },
          {
            data: totals,
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
            data: totals,
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

.seamless-warp {
  height: 100%;
  overflow: hidden;
}

.bounce {
  animation: custom-bounce .8s infinite 0.5s both;
  transform-origin: center bottom;
}

.left {
  width: 1100px;
  height:100%;
  padding-left: 150px;
  padding-top: 50px;
  position: relative;
  background:linear-gradient(270deg,rgba(189,195,199,0.6),rgba(44,62,80,0.6));

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
                top: -22px;
                width: 100%;
                height: 100%;
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

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
