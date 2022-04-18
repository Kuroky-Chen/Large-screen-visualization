<template>
  <div class="left">
    <div class="top">
      <div class="t-left">
        <SubTitle title="产业情况" />
        <div class="box">
          <div class="item">
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
            <div class="content">
              <div class="c-item">
                <div>食品包装</div>
                <div>
                  <div>
                    <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
                  </div>
                  <div class="unit">
                    家
                  </div>
                </div>
              </div>
              <div class="c-item">
                <div>食品包装</div>
                <div>
                  <div>
                    <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
                  </div>
                  <div class="unit">
                    家
                  </div>
                </div>
              </div>
              <div class="c-item">
                <div>食品包装</div>
                <div>
                  <div>
                    <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
                  </div>
                  <div class="unit">
                    家
                  </div>
                </div>
              </div>
              <div class="c-item">
                <div>食品包装</div>
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
          <div class="item">
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
            <div class="content">
              <div class="c-item">
                <div>食品包装</div>
                <div>
                  <div>
                    <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
                  </div>
                  <div class="unit">
                    家
                  </div>
                </div>
              </div>
              <div class="c-item">
                <div>食品包装</div>
                <div>
                  <div>
                    <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
                  </div>
                  <div class="unit">
                    家
                  </div>
                </div>
              </div>
              <div class="c-item">
                <div>食品包装</div>
                <div>
                  <div>
                    <CountTo :start-val="0" :end-val="10000" :duration="8000" separator="" />
                  </div>
                  <div class="unit">
                    家
                  </div>
                </div>
              </div>
              <div class="c-item">
                <div>食品包装</div>
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
        </div>
      </div>
      <div class="t-right">
        <div class="t-r-top">
          <SubTitle title="重大项目签单走势" />
          <div id="echarts1" class="box" />
        </div>
        <div class="t-r-bottom">
          <SubTitle title="新生/死亡企业走势" />
          <div id="echarts2" class="box" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="b-left">
        <SubTitle title="行业IPO" />
        <div id="echarts3" class="box" />
      </div>
      <div class="b-right">
        <SubTitle title="资源优势" />
        <div class="box">
          <div class="b-bg">
            <div>长江三角洲政策倾斜</div>
          </div>
          <div class="b-item i1">智能装备产业集群</div>
          <div class="b-item i2">水陆空复合交通网</div>
          <div class="b-item i3">大规模产业链</div>
          <div class="b-item i4">人文历史名称熏陶</div>
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
  data() {
    return {
      industryData: []
    }
  },
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
        grid: {
          left: '6%',
          right: '10%',
          bottom: '5%',
          top: '50px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ffffff'
            }
          }
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
            data: [820, 932, 901, 934, 1290, 1330],
            type: 'line',
            itemStyle: {
              normal: {
                color: '#61A5E8', // 改变折线点的颜色
                lineStyle: {
                  color: '#61A5E8' // 改变折线颜色
                }
              }
            },
            smooth: true
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
          bottom: '5%',
          top: '50px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ffffff'
            }
          }
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
            data: [820, 932, 901, 934, 1290, 1330],
            type: 'line',
            showSymbol: false,
            itemStyle: {
              normal: {
                color: '#7ECF51', // 改变折线点的颜色
                lineStyle: {
                  color: '#7ECF51' // 改变折线颜色
                }
              }
            },
            smooth: true
          },
          {
            data: [20, 32, 21, 34, 290, 330],
            type: 'line',
            showSymbol: false,
            itemStyle: {
              normal: {
                color: '#EC808D', // 改变折线点的颜色
                lineStyle: {
                  color: '#EC808D' // 改变折线颜色
                }
              }
            },
            smooth: true
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

        tooltip: {
          // 雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
          confine: true,
          enterable: true // 鼠标是否可以移动到tooltip区域内
        },
        radar: {
          name: {
            textStyle: {
              color: '#05D5FF',
              fontSize: 14
            }
          },
          shape: 'polygon',
          center: ['50%', '50%'],
          radius: '80%',
          startAngle: 90,
          scale: true,
          axisLine: {
            lineStyle: {
              color: 'rgba(5, 213, 255, .8)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: 'rgba(5, 213, 255, .8)' // 设置网格的颜色
            }
          },
          indicator: [
            {
              name: '智能装备',
              max: 100
            },
            {
              name: '冷链运输',
              max: 100
            },
            {
              name: '其他',
              max: 100
            },
            {
              name: '新能源',
              max: 100
            },
            {
              name: '健康食品',
              max: 100
            }
          ],
          splitArea: {
            show: false
          }
        },
        grid: {
          position: 'center'
        },
        polar: {
          center: ['50%', '50%'], // 默认全局居中
          radius: '0%'

        },
        angleAxis: {
          min: 0,
          interval: 5,
          clockwise: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        radiusAxis: {
          min: 0,
          interval: 20,
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '行业IPO',
            type: 'radar',
            symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 10, // 拐点的大小
            itemStyle: {
              normal: {
                color: '#05D5FF'
              }
            },
            areaStyle: {
              normal: { // 单项区域填充样式
                color: {
                  type: 'linear',
                  x: 0, // 右
                  y: 0, // 下
                  x2: 1, // 左
                  y2: 1, // 上
                  colorStops: [{
                    offset: 0,
                    color: '#00ffff'
                  }, {
                    offset: 0.5,
                    color: 'rgba(9,151,170,0.2)'
                  }, {
                    offset: 1,
                    color: '#00ffff'
                  }],
                  globalCoord: false
                },
                opacity: 1 // 区域透明度
              }
            },
            lineStyle: {
              width: 2,
              color: '#05D5FF'
            },
            label: {
              normal: {
                show: true,
                formatter: (params) => {
                  return params.value
                },
                color: '#fff'
              }
            },
            data: [
              {
                value: [20, 50, 60, 60, 90, 80]
              }
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
.left {
  width: 1100px;
  padding-left: 150px;

  .top {
    display: flex;

    .t-left,
    .t-right {
      width: 450px;
      height: 650px;
    }

    .t-left {
      margin-right: 50px;

      .box {
        height: calc(100% - 50px);
        padding: 30px 45px;

        .item {
          padding: 10px 0;

          &:not(:first-child) {
            margin-top: 20px;
          }

          .title {
            display: flex;
            height: 50px;
            line-height: 50px;

            &>div {
              &:nth-child(1) {
                width: 50px;
                height: 50px;
                background: url('../../../assets/AttractInvestment/icon1.png') no-repeat;
                background-size: 100% 100%;
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

          .content {
            color: #00ffff;
            display: flex;
            flex-wrap: wrap;
            padding: 0 60px;

            .c-item {
              width: 50%;
              font-size: 18px;
              margin-bottom: 20px;

              &>div {
                &:nth-child(1) {
                  padding: 10px 0;
                }

                &:nth-child(2) {
                  height: 40px;
                  line-height: 40px;
                  display: flex;
                  font-size: 25px;

                  .unit {
                    font-size: 12px;
                    margin-left: 4px;
                  }
                }
              }
            }
          }
        }
      }
    }

    .t-right {
      .t-r-top {
        height: 320px;
        margin-bottom: 10px;

        .box {
          height: calc(100% - 50px);
        }
      }

      .t-r-bottom {
        height: 320px;

        .box {
          height: calc(100% - 50px);
        }
      }
    }
  }

  .bottom {
    margin-top: 10px;
    display: flex;

    .b-left,
    .b-right {
      width: 450px;
      height: 320px;
    }

    .b-left {
      margin-right: 50px;

      .box {
        padding-top: 12px;
        height: calc(100% - 50px);
      }
    }

    .b-right {
      .box {
        position: relative;

        .b-bg {
          position: absolute;
          width: 400px;
          top: 83px;
          left: 30px;
          height: 122px;
          background: url('../../../assets/AttractInvestment/icon3.png') no-repeat;
          background-size: 100% 100%;

          &>div {
            position: absolute;
            top: 29px;
            left: 137px;
            color: #f59a23;
            font-size: 14px;
          }
        }

        .b-item {
          width: 137px;
          height: 40px;
          font-size: 14px;
          color: #80ffff;
          position: absolute;
          background: url('../../../assets/AttractInvestment/icon4.png') no-repeat;
          background-size: 100% 100%;
          text-align: center;
          line-height: 40px;

          &.i1 {
            top: 19px;
            left: 30px;
          }

          &.i2 {
            top: 19px;
            left: 294px;
          }

          &.i3 {
            top: 209px;
            left: 30px;
          }

          &.i4 {
            top: 209px;
            left: 294px;
          }
        }
      }
    }
  }
}
</style>
