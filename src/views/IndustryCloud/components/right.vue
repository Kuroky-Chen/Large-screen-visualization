<template>
  <div class="right">
    <div class="top">
      <div class="t-left">
        <div class="t-l-top">
          <SubTitle title="产业结构" />
          <div class="box">
            <div class="img-box">
              <div class="img" />
            </div>
            <div class="type">
              <div class="item">
                <div class="circle" />
                <div>类型1</div>
              </div>
              <div class="item">
                <div class="circle c2" />
                <div>类型2</div>
              </div>
              <div class="item">
                <div class="circle c3" />
                <div>类型3</div>
              </div>
              <div class="item">
                <div class="circle c4" />
                <div>类型4</div>
              </div>
              <div class="item">
                <div class="circle c5" />
                <div>类型5</div>
              </div>
            </div>
          </div>
        </div>
        <div class="t-l-bottom">
          <SubTitle title="企业存量" />
          <div id="echarts3" class="box" />
        </div>
      </div>
      <div class="t-right">
        <SubTitle title="人力投入分析" />
        <div class="box">
          <div class="table-box">
            <div class="table">
              <div class="th">
                <div>区域</div>
                <div>人力投入比</div>
                <div>周环比</div>
              </div>
              <div v-for="(item, i) in datas" :key="i" class="td">
                <div>x区域</div>
                <div>12022</div>
                <div class="sanjiao">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="b-left">
        <SubTitle title="未处理企业风险" />
        <div class="box">
          <div class="item">
            <div class="item-box">
              <div class="item-left">
                <div class="icon1" />
                <div class="icon2" />
              </div>
              <div class="item-right">
                <div>法律纠纷</div>
                <div>024</div>
              </div>
            </div>
            <div class="item-box">
              <div class="item-left">
                <div class="icon1" />
                <div class="icon2 r2" />
              </div>
              <div class="item-right">
                <div>违章建筑</div>
                <div>002</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-box">
              <div class="item-left">
                <div class="icon1" />
                <div class="icon2 r3" />
              </div>
              <div class="item-right">
                <div>偷税漏税</div>
                <div>052</div>
              </div>
            </div>
            <div class="item-box">
              <div class="item-left">
                <div class="icon1" />
                <div class="icon2 r4" />
              </div>
              <div class="item-right">
                <div>安全隐患</div>
                <div>022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="b-right">
        <SubTitle title="人员信息" />
        <div id="echarts4" class="box" />
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import * as echarts from 'echarts'

export default {
  name: 'Right',
  components: { SubTitle },
  data() {
    return {
      datas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1]
    }
  },
  mounted() {
    this.echarts3Init()
    this.echarts4Init()
  },
  methods: {
    echarts4Init() {
      const data = [
        {
          name: '男工',
          value: 100
        },
        {
          name: '女工',
          value: 75
        },
        {
          name: '本地户籍',
          value: 50
        },
        {
          name: '外来务工',
          value: 25
        },
        {
          name: '',
          value: 30
        }
      ]
      const arrName = getArrayValue(data, 'name')
      const arrValue = getArrayValue(data, 'value')
      const sumValue = eval(arrValue.join('+'))
      const objData = array2obj(data, 'name')
      const optionData = getData(data)

      function getArrayValue(array, key) {
        key = key || 'value'
        const res = []
        if (array) {
          array.forEach(function(t) {
            res.push(t[key])
          })
        }
        return res
      }

      function array2obj(array, key) {
        const resObj = {}
        for (let i = 0; i < array.length; i++) {
          resObj[array[i][key]] = array[i]
        }
        return resObj
      }

      function getData(data) {
        const res = {
          series: [],
          yAxis: []
        }
        for (let i = 0; i < data.length; i++) {
          res.series.push({
            name: '',
            type: 'pie',
            clockWise: true, // 顺时加载
            hoverAnimation: false, // 鼠标移入变大
            radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ['30%', '50%'],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              borderWidth: 5
            },
            data: [
              {
                value: data[i].value,
                name: data[i].name
              },
              {
                value: sumValue - data[i].value,
                name: '',
                itemStyle: {
                  color: 'rgba(0,0,0,0)',
                  borderWidth: 0
                },
                tooltip: {
                  show: false
                },
                hoverAnimation: false
              }
            ]
          })
          res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, // 顺时加载
            hoverAnimation: false, // 鼠标移入变大
            radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ['30%', '50%'],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              borderWidth: 5
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  color: 'rgb(3, 31, 62)',
                  borderWidth: 0
                },
                tooltip: {
                  show: false
                },
                hoverAnimation: false
              },
              {
                value: 2.5,
                name: '',
                itemStyle: {
                  color: 'rgba(0,0,0,0)',
                  borderWidth: 0
                },
                tooltip: {
                  show: false
                },
                hoverAnimation: false
              }
            ]
          })
          res.yAxis.push(((data[i].value / sumValue) * 100).toFixed(2) + '%')
        }
        return res
      }

      const chart = echarts.init(document.getElementById('echarts4'))
      // 绘制图表

      const option = {
        legend: {
          show: true,
          icon: 'circle',
          right: '5%',
          data: arrName,
          width: 50,
          padding: [0, 18],
          itemGap: 36,
          formatter: function(name) {
            return '{title|' + name + '} {value|' + objData[name].value + '}  {title|%}'
          },
          textStyle: {
            rich: {
              title: {
                fontSize: 20,
                lineHeight: 30,
                color: 'rgb(0, 178, 246)'
              },
              value: {
                fontSize: 18,
                lineHeight: 20,
                color: '#fff'
              }
            }
          }
        },
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: '{a}<br>{b}:{c}({d}%)'
        },
        color: ['rgb(9,187,247)', 'rgb(184,254,165)', 'rgb(253,218,23)', 'rgb(252,152,12)'],
        xAxis: [
          {
            show: false
          }
        ],
        series: optionData.series
      }
      chart.setOption({
        ...option
      })
    },
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
            type: 'pictorialBar',
            symbol: 'triangle',
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
  .right{
    width: 1100px;
    padding-right: 150px;
    .top {
      display: flex;
      .t-left {
        margin-right: 50px;
        .t-l-top {
          margin-bottom: 10px;
          .box {
            height: 270px;
            position: relative;
            .img-box {
              top: 40px;
              left: 110px;
              position: absolute;
              width: 230px;
              height: 167px;
              background: url('../../../assets/IndustryCloud/right1.png') no-repeat;
              background-size: 100% 100%;
              .img {
                position: relative;
                top: 9px;
                left: 30px;
                width: 175px;
                height: 138px;
                background: url('../../../assets/IndustryCloud/right2.png') no-repeat;
                background-size: 100% 100%;
              }
            }
            .type{
              top: 224px;
              left: 46px;
              position: absolute;
              display: flex;
              .item {
                display: flex;
                padding: 0 10px;
                color: #FFFFFF;
                .circle {
                  width: 10px;
                  height: 10px;
                  margin-top: 10px;
                  margin-right:10px;
                  background-color: rgba(255, 255, 255, 0);
                  border-width: 2px;
                  border-style: solid;
                  border-color: rgba(255, 221, 95, 1);
                  border-radius: 6px;
                  -moz-box-shadow: none;
                  -webkit-box-shadow: none;
                  box-shadow: none;
                  font-family: 'Arial Normal', 'Arial', sans-serif;
                  font-weight: 400;
                  font-style: normal;
                  color: #FFFFFF;
                  &.c2{
                    border-color: rgba(9, 205, 133, 1);
                  }
                  &.c3{
                    border-color: rgba(0, 60, 166, 1);
                  }
                  &.c4{
                    border-color: rgba(0, 113, 235, 1);
                  }
                  &.c5{
                    border-color: rgba(10, 178, 224, 1);
                  }
                }
                width: 75px;
                height: 30px;
                line-height: 30px;
                border-radius: 75px;
                text-align: center;
                font-size: 13px;
                background-color: rgba(255, 255, 255, 0.0980392156862745);
              }
            }
          }
        }
        .t-l-bottom {
          .box {
            height: 270px;
          }
        }
      }
      .t-right {
        .box {
          height: 600px;
          .table-box {
            padding: 20px 44px;
            .table {
              border-top: 2px solid #fff;
              .th, .td {
                font-size: 20px;
                display: flex;
                color: #cccccc;
                padding: 10px 0;
                &>div:nth-child(1) {
                  width: 140px;
                }
                &>div:nth-child(2) {
                  width: 140px;
                }
                &>div:nth-child(3) {
                  width: 70px;
                }
              }
              .td {
                color: #666666;
                .sanjiao {
                  color: red;
                  position: relative;
                  &::before {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    right: 0;
                    top: 8px;
                    width: 0;
                    height: 0;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-top: 10px solid red;
                  }
                }
              }
            }
          }
        }
      }
    }
    .bottom {
      margin-top:10px;
      display: flex;
      .b-left {
        width: 450px;
        margin-right: 50px;
        .box {
          width: 100%;
          height: 270px;
          .item {
            display: flex;
            width: 100%;
            height: 50%;
            .item-box {
              width: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              .item-left {
                width: 60px;
                height: 60px;
                position: relative;
                margin-right: 15px;
                .icon1{
                  position: absolute;
                  height: 60px;
                  width: 60px;
                  z-index: 10;
                  background: url('../../../assets/IndustryCloud/rbg.png') no-repeat;
                  background-size: 100% 100%;
                }
                .icon2{
                  position: absolute;
                  width: 26px;
                  height: 24px;
                  top:18px;
                  left:17px;
                  z-index: 100;
                  background: url('../../../assets/IndustryCloud/r1.png') no-repeat;
                  background-size: 100% 100%;
                  &.r2 {
                     top:12px;
                     left:18px;
                     width: 25px;
                     height: 36px;
                     background: url('../../../assets/IndustryCloud/r2.png') no-repeat;
                  }
                   &.r3 {
                      top:15px;
                      left:15px;
                      width: 30px;
                      height: 30px;
                      background: url('../../../assets/IndustryCloud/r3.png') no-repeat;
                  }
                   &.r4 {
                      top:12px;
                      left:14px;
                      width: 32px;
                      height: 36px;
                      background: url('../../../assets/IndustryCloud/r4.png') no-repeat;
                  }
                }
              }
              .item-right {
                &>div:nth-child(1) {
                  font-size: 16px;
                  color: #fff;
                }
                &>div:nth-child(2) {
                  font-size: 36px;
                  color: #44efff;
                }
              }
            }
          }
        }
      }
      .b-right {
        width: 450px;
        .box {
          height: 270px;
        }
      }
    }
  }
</style>
