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
        <div class="box" />
      </div>
    </div>
    <div class="mid">
      <div class="m-left">
        <SubTitle title="月度税收走势图" />
        <div class="box" />
      </div>
      <div class="m-right">
        <SubTitle title="季度行业GDP TOP5" />
        <div class="box" />
      </div>
    </div>
    <div class="bottom">
      <SubTitle title="年度GDP增速" />
      <div class="box" />
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Subtitle'
import * as echarts from 'echarts'

export default {
  name: 'Right',
  components: { SubTitle }
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
  border: 1px solid #fff;

  .top {
    display: flex;
    margin-bottom: 10px;

    .t-left,
    .t-right {
      @include chart;

      .box {
        height: calc(100% - 50px);
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

    .t-right {}
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

    .m-right {}
  }

  .bottom {
    width: 950px;
    height: 320px;

    .box {
      height: calc(100% - 50px);
    }
  }
}
</style>
