<template>
  <div class="left">
    <div class="top">
      <div class="t-left">
        <SubTitle title="园区基建" />
        <div class="box">
          <div class="accumulated-construction">
            <div class="title">累计建设</div>
            <div class="bd">
              <Count width="42" height="70" size="50" margin="10" :count="9" />
              <Count width="42" height="70" size="50" margin="10" :count="9" />
              <Count width="42" height="70" size="50" margin="10" :count="9" />
              <Count width="42" height="70" size="50" margin="10" :count="9" />
              <Count width="42" height="70" size="50" margin="10" :count="9" />
            </div>
            <div class="unit">万元</div>
          </div>
          <div class="public-transport">
            <div>
              <CountTo :start-val="0" :end-val="3456" :duration="8000" separator="" />
              <p class="title">公共交通</p>
            </div>
            <div>
              <CountTo :start-val="0" :end-val="3456" :duration="8000" separator="" />
              <p class="title">公共交通</p>
            </div>
            <div>
              <CountTo :start-val="0" :end-val="3456" :duration="8000" separator="" />
              <p class="title">公共交通</p>
            </div>
          </div>
          <div class="chart">
            <div class="item">
              <div class="title">城乡交通</div>
              <div class="bd">
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
              </div>
            </div>
            <div class="item">
              <div class="title">健身广场</div>
              <div class="bd">
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
              </div>
            </div>
            <div class="item">
              <div class="title">湿地公园</div>
              <div class="bd">
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
              </div>
            </div>
            <div class="item">
              <div class="title">新规厂房</div>
              <div class="bd">
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
              </div>
            </div>
            <div class="item">
              <div class="title">办公楼</div>
              <div class="bd">
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
                <div class="c" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="t-right">
        <div class="t-r-top">
          <SubTitle title="外部省份销售输出" />
          <div class="box">
            <div class="img-box">
              <div class="title">总金额</div>
              <div class="bd">
                <CountTo :start-val="0" :end-val="3456" :duration="8000" separator="" />
              </div>
              <div class="unit">
                万元
              </div>
            </div>
            <div class="text-box">
              <div class="item">
                <div>
                  <CountTo :start-val="0" :end-val="888.88" :decimals="2" :duration="8000" separator="" />
                </div>
                <div>江苏省</div>
              </div>
              <div class="item">
                <div>
                  <CountTo :start-val="0" :end-val="888.88" :decimals="2" :duration="8000" separator="" />
                </div>
                <div>浙江省</div>
              </div>
              <div class="item">
                <div>
                  <CountTo :start-val="0" :end-val="888.88" :decimals="2" :duration="8000" separator="" />
                </div>
                <div>广东省</div>
              </div>
              <div class="item">
                <div>
                  <CountTo :start-val="0" :end-val="888.88" :decimals="2" :duration="8000" separator="" />
                </div>
                <div>福建省</div>
              </div>
            </div>
          </div>
        </div>
        <div class="t-r-bottom">
          <SubTitle title="销售趋势分析" />
          <div id="echarts1" class="box">1</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <SubTitle title="公告通知" width="900" />
      <div class="box">
        <div class="title">
          主题：工业和信息化部办公厅关于召开两化融合暨工业互联网平台大会的通知
        </div>
        <div class="tip">
          2018-10-22 12:00:00
        </div>
        <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSetting">
          <div class="bd">
            {{ listData }}
          </div>
        </vue-seamless-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import CountTo from 'vue-count-to'
import * as echarts from 'echarts'
import Count from '@/components/count'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: 'Left',
  components: { SubTitle, CountTo, vueSeamlessScroll, Count },
  data() {
    return {
      listData: ''
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
  mounted() {
    this.listData = `各省、自治区、直辖市及计划单列市、副省级省会城市、新疆生产建设兵团工业和信息化主管部门，有关中央企业、行业协会，有关单位：

            为贯彻落实党的十九大精神，宣传贯彻新一代信息技术与制造业融合发展的进展、经验和成效，培育工业互联网平台生态，推动两化深度融合发展，我部将与江苏省人民政府、国务院国有资产监督管理委员会、中华全国工商业联合会等单位定于2020年10月21日至22日在江苏省苏州市共同主办两化融合暨工业互联网平台大会。有关事项通知如下。

            一、基本情况

            （一）主题：融合新业态 产业新生态 发展新格局。

            （二）时间：2020年10月21日至22日。
            各省、自治区、直辖市及计划单列市、副省级省会城市、新疆生产建设兵团工业和信息化主管部门，有关中央企业、行业协会，有关单位：

            为贯彻落实党的十九大精神，宣传贯彻新一代信息技术与制造业融合发展的进展、经验和成效，培育工业互联网平台生态，推动两化深度融合发展，我部将与江苏省人民政府、国务院国有资产监督管理委员会、中华全国工商业联合会等单位定于2020年10月21日至22日在江苏省苏州市共同主办两化融合暨工业互联网平台大会。有关事项通知如下。

            一、基本情况

            （一）主题：融合新业态 产业新生态 发展新格局。

            （二）时间：2020年10月21日至22日。
            各省、自治区、直辖市及计划单列市、副省级省会城市、新疆生产建设兵团工业和信息化主管部门，有关中央企业、行业协会，有关单位：

            为贯彻落实党的十九大精神，宣传贯彻新一代信息技术与制造业融合发展的进展、经验和成效，培育工业互联网平台生态，推动两化深度融合发展，我部将与江苏省人民政府、国务院国有资产监督管理委员会、中华全国工商业联合会等单位定于2020年10月21日至22日在江苏省苏州市共同主办两化融合暨工业互联网平台大会。有关事项通知如下。

            一、基本情况

            （一）主题：融合新业态 产业新生态 发展新格局。

            （二）时间：2020年10月21日至22日。`
    this.echarts1Init()
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
            data: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07'],
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff'
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            show: false
          }
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            itemStyle: {
              normal: {
                color: 'rgb(74,217,145)', // 改变折线点的颜色
                lineStyle: {
                  color: 'rgb(74,217,145)' // 改变折线颜色
                }
              }
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(74,217,145)'
                },
                {
                  offset: 1,
                  color: 'rgba(255,255,255,0)'
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

    .t-left {
      width: 450px;
      height: 650px;
      margin-right: 50px;

      .box {
        height: calc(100% - 50px);

        .accumulated-construction {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 50px 0 25px 0;

          .title {
            width: 37px;
            height: 42px;
            font-size: 18px;
          }

          .bd {
            display: flex;
            margin: 0 10px 0 20px;
          }

          .unit {
            font-size: 22px;
          }
        }

        .public-transport {
          position: relative;
          display: flex;
          padding-left: 30px;

          div {
            width: 120px;
            height: 120px;
            background: url('../../../assets/IndustryMap/icon1.png') no-repeat;
            background-size: 100% 100%;
            font-size: 30px;
            color: #80FFFF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &:nth-child(1),
            &:nth-child(3) {
              margin-top: 60px;
            }

            &:nth-child(2) {
              margin: 0 12px;
            }
          }

          .title {
            color: #00ffff;
            font-size: 20px;
          }
        }

        .chart {
          margin-top: 40px;
          padding-left: 10px;

          .item {
            display: flex;
            align-items: center;
            padding: 10px 0;

            .title {
              font-size: 18px;
              width: 100px;
              text-align: right;
            }

            .bd {
              flex: 1;
              display: flex;
              padding-left: 6px;

              .c {
                width: 12px;
                height: 19px;
                margin-left: 4px;
                background: url('../../../assets/IndustryCloud/count.png') no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
      }
    }

    .t-right {
      width: 450px;
      height: 650px;

      .t-r-top {
        height: 320px;
        margin-bottom: 10px;

        .box {
          height: calc(100% - 50px);
          position: relative;

          .img-box {
            width: 316px;
            height: 105px;
            position: absolute;
            top: 116px;
            left: 58px;
            background: url('../../../assets/IndustryMap/icon2.png') no-repeat;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            padding: 0 30px;

            .title {
              font-size: 22px;
              width: 70px;
            }

            .bd {
              font-size: 45px;
              flex: 1;
              display: flex;
              justify-content: center;
            }

            .unit {
              font-size: 22px;
              width: 50px;
            }
          }

          .text-box {
            position: absolute;
            top: 35px;
            left: 50px;
            display: flex;

            .item {
              margin-right: 23px;
              width: 66px;
              height: 103px;
              background: url('../../../assets/IndustryCloud/count.png') no-repeat;
              background-size: 100% 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              &>div {
                &:nth-child(1) {
                  font-size: 16px;
                  color: #ffffff;
                  padding: 10px 0;
                }

                &:nth-child(2) {
                  font-size: 18px;
                }
              }
            }
          }

        }
      }

      .t-r-bottom {
        height: 320px;
        margin-bottom: 10px;

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

      padding: 30px 47px;
      padding-bottom: 0;

      .seamless-warp {
        height: calc(100% - 60px);
        margin-top: 10px;
        overflow: hidden;
      }

      .title {
        font-size: 18px;
        color: #80FFFF;
        text-align: center;
      }

      .tip {
        font-size: 12px;
        color: #cccccc;
      }

      .bd {
        margin-top: 10px;
        color: #ffffff;
        font-size: 14px;
      }
    }
  }
}
</style>
