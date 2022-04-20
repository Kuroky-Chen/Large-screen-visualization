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
        </div>
      </div>
      <div class="t-mid">
        <SubTitle title="区域固定资产总值" />
        <div class="box">1</div>
      </div>
      <div class="t-bottom">
        <SubTitle title="上市公司概览" />
        <div class="box">1</div>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import CountTo from 'vue-count-to'
import * as echarts from 'echarts'
import 'echarts-liquidfill/src/liquidFill.js'

export default {
  name: 'Right',
  components: { SubTitle, CountTo },
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
      }]
    }
  },
  mounted() {
    this.echarts4Init()
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

        .img-box {}
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
      }
    }
  }
}
</style>
