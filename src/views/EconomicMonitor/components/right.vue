<template>
  <div class="right">
    <div class="top">
      <div class="t-left">
        <SubTitle title="税收情况" />
        <div class="box">
          <div class="img-box" />
          <div class="text-item t1">
            <div>地区1</div>
            <div>30.76%</div>
          </div>
          <div class="text-item t2">
            <div>地区2</div>
            <div>24.65%</div>
          </div>
          <div class="text-item t3">
            <div>地区3</div>
            <div>24.45%</div>
          </div>
          <div class="text-item t4">
            <div>地区4</div>
            <div>11.13%</div>
          </div>
        </div>
      </div>
      <div class="t-right">
        <SubTitle title="季度企业GDP TOP3" />
        <div class="box">
          <div class="bb-top">
            <div class="icon" />
            <div class="text">蚌埠时代塑业</div>
          </div>
          <div class="bb-bottom">
            <div class="bb-left">
              <div class="icon" />
              <div class="text">应天新能源</div>
            </div>
            <div class="bb-right">
              <div class="icon" />
              <div class="text">中国建材集团</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="m-left">
        <SubTitle title="月度税收走势图" />
        <div id="echarts3" class="box" />
      </div>
      <div class="m-right">
        <SubTitle title="季度行业GDP TOP5" />
        <div class="box">
          <div class="th">
            <div>行业</div>
            <div>排名</div>
            <div>成交额</div>
          </div>
          <div v-for="(item, i) in top5" :key="i" class="td">
            <div>{{ item.name }}</div>
            <div>{{ item.rank }}</div>
            <div>{{ item.count }} <span class="unit">万</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <SubTitle title="年度GDP增速" />
      <div class="box">
        <div class="img-box">
          <div class="year year1">2018</div>
          <div class="year year2">2019</div>
          <div class="year year3">2020</div>
          <div class="year year4">2021</div>
          <div class="year year5">2022</div>
          <div class="val val1">
            <CountTo :start-val="0" :end-val="120" :duration="8000" separator="" />
            <div class="unit">
              %
            </div>
          </div>
          <div class="val val2">
            <CountTo :start-val="0" :end-val="120" :duration="8000" separator="" />
            <div class="unit">
              %
            </div>
          </div>
          <div class="val val3">
            <CountTo :start-val="0" :end-val="120" :duration="8000" separator="" />
            <div class="unit">
              %
            </div>
          </div>
          <div class="val val4">
            <CountTo :start-val="0" :end-val="120" :duration="8000" separator="" />
            <div class="unit">
              %
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import * as echarts from 'echarts'
import CountTo from 'vue-count-to'

export default {
  name: 'Right',
  components: { SubTitle, CountTo },
  data() {
    return {
      top5: []
    }
  },
  created() {
    for (let i = 0; i < 5; i++) {
      this.top5.push({
        name: '冶金',
        rank: `TOP${i + 1}`,
        count: '18127'
      })
    }
  },
  mounted() {
    this.echarts3Init()
  },
  methods: {
    echarts3Init() {
      const chart = echarts.init(document.getElementById('echarts3'))
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
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: [10, 10],
            itemStyle: {
              normal: {
                color: 'rgb(97,165,232)', // 改变折线点的颜色
                lineStyle: {
                  color: 'rgb(97,165,232)' // 改变折线颜色
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

.right {
  width: 1100px;
  padding-right: 150px;

  .top {
    display: flex;
    margin-bottom: 10px;

    .t-left,
    .t-right {
      @include chart;

      .box {
        height: calc(100% - 50px);
        padding: 0 40px 20px;
        font-size: 18px;
      }
    }

    .t-left {
      margin-right: 50px;

      .box {
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

    .t-right {
      .bb-top {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #eecb5f;

        .icon {
          width: 80px;
          height: 110px;
          background: url('../../../assets/EconomicMonitor/icon6.png') no-repeat;
          background-size: 100% 100%;
        }
      }

      .bb-bottom {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        .bb-left {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 50%;
          color: #d7d7d7;

          .icon {
            width: 80px;
            height: 110px;
            background: url('../../../assets/EconomicMonitor/icon7.png') no-repeat;
            background-size: 100% 100%;
          }
        }

        .bb-right {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 50%;
          color: #e3935d;

          .icon {
            width: 80px;
            height: 110px;
            background: url('../../../assets/EconomicMonitor/icon8.png') no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }

  .mid {
    display: flex;
    margin-bottom: 10px;

    .m-left,
    .m-right {
      @include chart;

      .box {
        height: calc(100% - 50px);
      }
    }

    .m-left {
      margin-right: 50px;
    }

    .m-right {
      .box {
        padding: 20px 50px;
        padding-bottom: 0;
      }

      .th,
      .td {
        display: flex;
        height: 38px;
        line-height: 38px;
        padding-left: 20px;
        font-size: 15px;

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
        background: rgba(76, 76, 76, .6);
      }

      .td {
        height: 40px;
        line-height: 40px;
        margin-top: 2px;

        &>div {
          &:nth-child(1) {
            color: #00B3B3;
          }

          &:nth-child(2) {
            color: #EECB5F;
          }

          &:nth-child(3) {
            color: #FF6600;
            font-size: 18px;

            .unit {
              font-size: 12px;
              color: #fff;
            }
          }
        }
      }
    }
  }

  .bottom {
    width: 950px;
    height: 320px;

    .box {
      height: calc(100% - 50px);

      .img-box {
        margin-left: 42px;
        margin-top: 25px;
        width: 880px;
        height: 216px;
        background: url('../../../assets/EconomicMonitor/icon9.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        font-weight: bold;

        .unit {
          font-size: 12px;
          color: #fff;
          margin-left: 6px;
        }

        .year {
          font-size: 22px;
          position: absolute;
        }

        .year1 {
          top: 148px;
          left: 23px;
        }

        .year2 {
          top: 86px;
          left: 246px;
        }

        .year3 {
          top: 116px;
          left: 375px;
        }

        .year4 {
          top: 33px;
          left: 591px;
        }

        .year5 {
          top: 49px;
          left: 800px;
        }

        .val {
          font-size: 25px;
          color: #FF6600;
          position: absolute;
          display: flex;
          align-items: center;
        }

        .val1 {
          top: 20px;
          left: 110px;
        }

        .val2 {
          top: 13px;
          left: 306px;
        }

        .val3 {
          top: 17px;
          left: 471px;
        }

        .val4 {
          top: 137px;
          left: 640px;
        }

      }
    }
  }
}
</style>
