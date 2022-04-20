<template>
  <div class="right-box">
    <div class="left">
      <div class="l-top">
        <SubTitle title="社会信息" />
        <div class="box">
          <div class="title">
            <div />
            <div>常住人口</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                万人
              </div>
            </div>
          </div>
          <div class="title">
            <div />
            <div>本地户籍人口</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                万人
              </div>
            </div>
          </div>
          <div class="title">
            <div />
            <div>外地务工人口</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
              </div>
              <div class="unit">
                万人
              </div>
            </div>
          </div>
          <div class="title">
            <div class="i6" />
            <div>社会保险覆盖率</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="99" :duration="8000" separator="" />
              </div>
              <div class="unit">
                %
              </div>
            </div>
          </div>
          <div class="title">
            <div class="i6" />
            <div>社会监控覆盖率</div>
            <div>
              <div>
                <CountTo :start-val="0" :end-val="99" :duration="8000" separator="" />
              </div>
              <div class="unit">
                %
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="l-bottom">
        <SubTitle title="地效评估" />
        <div class="box">
          <div v-for="(item, i) in datas" :id="`echart${i}`" :key="i" />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="t-top">
        <SubTitle title="行业占比 TOP3" />
        <div class="box">
          <div class="img-box" />
          <div class="text-item t1">
            <div>原材料</div>
            <div>30.76%</div>
          </div>
          <div class="text-item t2">
            <div>新能源</div>
            <div>24.65%</div>
          </div>
          <div class="text-item t3">
            <div>食品健康</div>
            <div>24.45%</div>
          </div>
        </div>
      </div>
      <div class="t-mid">
        <SubTitle title="区域固定资产总值" />
        <div id="echarts5" class="box">1</div>
      </div>
      <div class="t-bottom">
        <SubTitle title="上市公司概览" />
        <div class="box">
          <div class="th">
            <div>公司名</div>
            <div>注册地</div>
            <div>所属行业</div>
          </div>
          <div class="b-table">
            <vue-seamless-scroll :data="listedCompany" class="seamless-warp" :class-option="optionSetting">
              <div v-for="(item, i) in listedCompany" :key="i" class="td">
                <div>{{ item.name }}</div>
                <div>{{ item.region }}</div>
                <div>{{ item.industry }}</div>
              </div>
            </vue-seamless-scroll>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import CountTo from 'vue-count-to'
import * as echarts from 'echarts'
import 'echarts-liquidfill/src/liquidFill.js'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: 'Right',
  components: { SubTitle, CountTo, vueSeamlessScroll },
  data() {
    return {
      datas: [{
        name: '土地\n开发率'
      }, {
        name: '土地\n建成率'
      }, {
        name: '待建地\n占比'
      }, {
        name: '工业\n用地率'
      }, {
        name: '平均税收'
      }, {
        name: '平均资产\n投入强度'
      }],
      listedCompany: [{
        name: '安徽美佳',
        region: '县经开区',
        industry: '新材料'
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
    }
  },
  created() {
    for (let i = 0; i < 50; i++) {
      this.listedCompany.push({
        name: '安徽美佳',
        region: '县经开区',
        industry: '新材料'
      })
    }
  },
  mounted() {
    this.echarts4Init()
    this.echarts5Init()
  },
  methods: {
    echarts4Init() {
      this.datas.forEach((item, i) => {
        const chart = echarts.init(document.getElementById(`echart${i}`))
        // 绘制图表
        const option = {
          series: [
            {
              // value: 50, //  内容 配合formatter
              type: 'liquidFill',
              radius: '70%', // 控制中间圆球的尺寸（此处可以理解为距离外圈圆的距离控制）
              center: ['50%', '50%'],
              data: [
                0.6,
                {
                  value: 0.6,
                  direction: 'left' // 波浪方向
                }
              ], // data个数代表波浪数
              backgroundStyle: {
                borderWidth: 1,
                color: 'rgba(62, 208, 255, 0.1)' // 球体本景色
              },
              amplitude: '6  %', // 波浪的振幅
              // 修改波浪颜色
              // color: ['#0286ea', 'l#0b99ff'], // 每个波浪不同颜色，颜色数组长度为对应的波浪个数
              color: [
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 1,
                      color: 'rgba(32,73,82,.9)'
                    },
                    {
                      offset: 0,
                      color: 'rgba(32,73,82,.8)'
                    }
                  ],
                  globalCoord: false
                }
              ],
              label: {
                normal: {
                  // formatter: 0.87 * 100 + '\n%',
                  // formatter: 0.6 * 100 + '{d|%}',
                  formatter: function (params) {
                    return item.name + '\n' + params.value * 100 + ' %'
                  },
                  rich: {
                    d: {
                      fontSize: 20
                    }
                  },
                  textStyle: {
                    fontSize: 18,
                    color: '#fff'
                  }
                }
              },
              outline: {
                show: false
              }
            },
            {
              // 外发光
              type: 'pie',
              z: 1,
              zlevel: -1,
              radius: ['70%', '75.5%'],
              center: ['50%', '50%'],
              hoverAnimation: false,
              clockWise: false,
              itemStyle: {
                normal: {
                  borderWidth: 10,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgb(38,164,197)' },
                    { offset: 1, color: 'rgb(52,195,162, 0.5) ' }
                  ])
                }
              },
              label: {
                show: false
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
    echarts5Init() {
      const chart = echarts.init(document.getElementById('echarts5'))
      // 绘制图表
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          top: '10px',
          right: '5%',
          textStyle: {
            color: '#fff'
          }
        },
        title: {
          text: '单位： 万元',
          top: '8px',
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
            boundaryGap: false,
            data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#ffffff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#ffffff'
              }
            },
            splitLine: {
              // 修改背景线条样式
              show: false // 是否展示
            }
          }
        ],
        series: [
          {
            name: '当年',
            type: 'line',
            stack: 'Total',
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            smooth: true,
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
            emphasis: {
              focus: 'series'
            },
            data: [1400, 2320, 1001, 2064, 4000, 3400, 2500]
          },
          {
            name: '同比去年',
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
            data: [2200, 1320, 1301, 3064, 4400, 3400, 2500]
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
.right-box {
  width: 1100px;
  padding-right: 150px;
  display: flex;

  .left {
    width: 450px;
    height: 980px;
    margin-right: 50px;

    .l-top {
      height: 439px;

      .box {
        height: calc(100% - 50px);
        overflow: hidden;
        padding: 0 42px;
        padding-top: 10px;

        .title {
          display: flex;
          height: 40px;
          line-height: 40px;
          margin-top: 30px;

          &>div {
            &:nth-child(1) {
              width: 40px;
              height: 40px;
              background: url('../../../assets/RegionalPanorama/icon5.png') no-repeat;
              background-size: 100% 100%;

              &.i6 {
                background: url('../../../assets/RegionalPanorama/icon6.png') no-repeat;
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

    .l-bottom {
      height: 529px;

      .box {
        height: calc(100% - 50px);
        display: flex;
        flex-wrap: wrap;

        &>div {
          margin-top: 20px;
          width: 50%;
          height: 150px;
        }
      }
    }
  }

  .right {
    width: 450px;
    height: 980px;

    .t-top {
      height: 320px;
      margin-bottom: 10px;

      .box {
        height: calc(100% - 50px);
        position: relative;

        .img-box {
          position: absolute;
          top: 47px;
          left: 113px;
          width: 224px;
          height: 166px;
          background: url('../../../assets/RegionalPanorama/icon7.png') no-repeat;
          background-size: 100% 100%;
        }

        .text-item {
          position: absolute;

          &>div:nth-child(2) {
            color: #fff;
          }

          &.t1 {
            top: 31px;
            left: 97px;
          }

          &.t2 {
            top: 142px;
            left: 325px;
          }

          &.t3 {
            top: 161px;
            left: 58px;
          }

          &.t4 {
            top: 215px;
            left: 175px;
          }
        }
      }
    }

    .t-mid {
      height: 320px;
      margin-bottom: 10px;

      .box {
        height: calc(100% - 50px);
      }
    }

    .t-bottom {
      height: 320px;

      .box {
        height: calc(100% - 50px);
        padding: 0 54px;

        .th,
        .td {
          display: flex;
          height: 40px;
          line-height: 40px;

          &>div {
            &:nth-child(1) {
              flex: 1;
            }

            &:nth-child(2) {
              width: 100px;
            }

            &:nth-child(3) {
              width: 100px;
              text-align: center;
            }
          }
        }

        .th {
          color: #fff;
          margin-top: 20px;
        }

        .b-table {
          height: calc(100% - 40px);

          .seamless-warp {
            height: 100%;
            overflow: hidden;
          }
        }

      }
    }
  }
}
</style>
