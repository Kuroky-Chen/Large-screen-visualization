<template>
  <div class="right">
    <div class="top">
      <div class="t-left">
        <div class="t-l-top">
          <SubTitle title="入住产业链" />
          <div class="box">
            <div class="title">
              <div />
              <div>健康食品</div>
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
              <div>健康食品</div>
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
              <div>健康食品</div>
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
        <div class="t-l-bottom">
          <SubTitle title="产业链增势" />
          <div id="echarts4" class="box" />
        </div>
      </div>
      <div class="t-right">
        <SubTitle title="企业涨幅榜" />
        <div class="box">
          <div class="b-title">
            <div class="tl" />
            <div class="tr" />
            <div class="bl" />
            <div class="br" />
            <div class="th">排名</div>
            <div class="th">企业名称</div>
            <div class="th">营业额</div>
          </div>
          <div class="b-body">
            <!-- <div class="seamless-warp"> -->
            <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSetting">
              <div v-for="(item, index) in listData" :key="index" class="b-item">
                <div>{{ index + 1 }}</div>
                <div>{{ item.name }}</div>
                <div>{{ item.data }}</div>
              </div>
            </vue-seamless-scroll>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <SubTitle title="注册总资金走势" width="900" />
      <div id="echarts5" class="box" />
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import CountTo from 'vue-count-to'
import * as echarts from 'echarts'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: 'Right',
  components: { SubTitle, CountTo, vueSeamlessScroll },
  data() {
    return {
      listData: [{
        name: '芜湖实业有限公司',
        data: '12,123'
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
        singleHeight: 46, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  created() {
    for (let i = 0; i < 50; i++) {
      this.listData.push({
        name: '芜湖实业有限公司',
        data: '12,123'
      })
    }
  },
  mounted() {
    this.echarts4Init()
    this.echarts5Init()
  },
  methods: {
    echarts4Init() {
      const chart = echarts.init(document.getElementById('echarts4'))
      // 绘制图表
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '10px',
          right: '5%',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '6%',
          right: '10%',
          bottom: '5%',
          top: '50px',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#ffffff'
              }
            },
            data: ['新能源', '橡塑', '健康食品', '冷链', '交通']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#ffffff'
              }
            },
            splitLine: {
              // 修改背景线条样式
              show: false, // 是否展示
              lineStyle: {
                color: '#ffffff'
              }
            }
          }
        ],
        series: [
          {
            name: '往年数据',
            type: 'bar',
            stack: 'Ad',
            barWidth: 24,
            emphasis: {
              focus: 'series'
            },
            itemStyle: {
              normal: {
                color: '#49a9ee'
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '当年新增',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            itemStyle: {
              normal: {
                color: '#caf982'
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      }

      chart.setOption({
        ...option
      })
    },
    echarts5Init() {
      const chart = echarts.init(document.getElementById('echarts5'))
      // 绘制图表
      const data = [402, 1035, 2047, 757, 969, 795]
      const links = data.map((item, i) => {
        return {
          source: i,
          target: i + 1
        }
      })
      const option = {
        grid: {
          left: '6%',
          right: '10%',
          bottom: '5%',
          top: '50px',
          containLabel: true
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ffffff'
            }
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ffffff'
            }
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
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 40,
            label: {
              show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            data: data,
            links: links,
            z: 10,
            lineStyle: {
              color: '#2f4554'
            }
          },

          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },

            data: data
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
.right {
  width: 1100px;
  padding-right: 150px;

  .top {
    display: flex;

    .t-left,
    .t-right {
      width: 450px;
      height: 650px;
    }

    .t-left {
      margin-right: 50px;

      .t-l-top {
        height: 320px;
        margin-bottom: 10px;

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

      .t-l-bottom {
        height: 320px;

        .box {
          height: calc(100% - 50px);
        }
      }
    }

    .t-right {
      .box {
        height: calc(100% - 50px);
        padding: 21px 20px 0;

        .b-title {
          display: flex;
          padding: 10px;
          font-size: 13px;
          color: #ffffff;
          box-sizing: border-box;
          background-color: rgba(0, 150, 255, 0.298039215686275);
          position: relative;

          .tl,
          .tr,
          .bl,
          .br {
            background-color: #00aeff;
            position: absolute;
            width: 4px;
            height: 4px;
          }

          .tl {
            top: -10px;
            left: -4px;
          }

          .tr {
            top: -10px;
            right: -4px;
          }

          .bl {
            bottom: -10px;
            left: -4px;
          }

          .br {
            bottom: -10px;
            right: -4px;
          }

          &::before {
            content: '';
            position: absolute;
            background-color: rgba(0, 150, 255, 0.298039215686275);
            width: 100%;
            height: 2px;
            top: -9px;
            left: 1px;
          }

          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: rgba(0, 150, 255, 0.298039215686275);
            bottom: -9px;
            left: 1px;
          }

          &>div {
            color: #fff;

            &:nth-child(5) {
              width: 40px;
            }

            &:nth-child(6) {
              flex: 1;
            }

            &:nth-child(7) {
              width: 60px;
            }
          }
        }

        .b-body {
          height: calc(100% - 35px);
          padding-top: 20px;

          .seamless-warp {
            height: 100%;
            overflow: hidden;
          }

          .b-item {
            display: flex;
            height: 40px;
            line-height: 40px;
            color: #ffffff;
            margin-bottom: 6px;
            background: #035788;

            &>div {
              &:nth-child(1) {
                width: 44px;
                background: #1C6894;
                padding-left: 10px;
                font-size: 20px;
                position: relative;

                &::after {
                  content: '';
                  width: 0;
                  height: 0;
                  border-left: 20px #1C6894 solid;
                  border-top: 20px solid transparent;
                  border-bottom: 20px solid transparent;
                  border-right: none;
                  position: absolute;
                  top: 0;
                  right: -20px;
                }
              }

              &:nth-child(2) {
                flex: 1;
                font-size: 13px;
                padding-left: 35px;
              }

              &:nth-child(3) {
                width: 70px;
                color: #FFEA00;
              }
            }

            &:hover {
              background: rgb(240, 171, 51);

              &>div {
                &:nth-child(1) {
                  background: rgb(255, 76, 84);

                  &::after {
                    border-left: 20px rgb(255, 76, 84) solid;
                  }
                }

                &:nth-child(3) {
                  color: #ffffff;
                }
              }
            }
          }
        }
      }
    }
  }

  .bottom {
    height: 320px;
    margin-top: 10px;

    .box {
      height: calc(320px - 50px);
    }
  }
}
</style>
