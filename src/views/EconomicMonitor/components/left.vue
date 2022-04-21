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
        <div class="box" />
      </div>
    </div>
    <div class="mid">
      <div class="m-left">
        <SubTitle title="企业增幅" />
        <div class="box" />
      </div>
      <div class="m-right">
        <SubTitle title="政府补助" />
        <div class="box" />
      </div>
    </div>
    <div class="bottom">
      <div class="b-left">
        <SubTitle title="税收走势图" />
        <div class="box" />
      </div>
      <div class="b-right">
        <SubTitle title="政府兑现" />
        <div class="box" />
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
  components: { SubTitle, CountTo }
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
      }
    }

    .m-right {
      @include chart;

      .box {
        height: calc(100% - 50px);
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
      }
    }
  }
}
</style>
