<template>
  <div class="middle">
    <div class="img-box" />
    <div class="img-pedestal" />
    <div class="item i1">
      <div class="box">
        <div class="title">塑胶制品</div>
        <div class="count">
          <CountTo :start-val="0" :end-val="155" :duration="8000" separator="" />
          <div class="unit">家</div>
        </div>
      </div>
    </div>
    <div class="item i2">
      <div class="box">
        <div class="title">冷链运输</div>
        <div class="count">
          <CountTo :start-val="0" :end-val="155" :duration="8000" separator="" />
          <div class="unit">家</div>
        </div>
      </div>
    </div>
    <div class="item i3">
      <div class="box">
        <div class="title">健康食品</div>
        <div class="count">
          <CountTo :start-val="0" :end-val="155" :duration="8000" separator="" />
          <div class="unit">家</div>
        </div>
      </div>
    </div>
    <div class="item i4">
      <div class="box">
        <div class="title">新能源</div>
        <div class="count">
          <CountTo :start-val="0" :end-val="155" :duration="8000" separator="" />
          <div class="unit">家</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  name: 'Middle',
  components: { CountTo }
}
</script>

<style lang="scss" scoped>
.middle {
  width: 1584px;
  position: relative;

  .img-box {
    width: 857px;
    height: 857px;
    position: absolute;
    top: 63px;
    left: 380px;
    background: url('../../../assets/IndustryMap/mid.png') no-repeat;
    background-size: 100% 100%;
  }

  .img-pedestal {
    width: 1160px;
    height: 197px;
    position: absolute;
    top: 738px;
    left: 258px;
    background: url('../../../assets/IndustryMap/mid1.png') no-repeat;
    background-size: 100% 100%;
  }

  .item {
    position: absolute;
    width: 460px;
    height: 120px;
    background: url('../../../assets/IndustryMap/mid2.png') no-repeat;
    background-size: 100% 100%;
    font-weight: bold;

    .box {
      width: 100%;
      height: 100%;
      position: relative;

      .title {
        position: absolute;
        font-size: 28px;
        color: #80ffff;
        width: 60px;
      }

      .count {
        position: absolute;
        font-size: 80px;
        color: #ffff80;
        display: flex;
      }

      .unit {
        font-size: 30px;
        color: #ffffff;
        padding-top: 50px;
        padding-left: 10px;
      }

    }
  }

  .i1 {
    top: 224px;
    left: 114px;

    .title {
      top: 24px;
      left: 211px;
      line-height: 35px;
    }

    .count {
      top: 10px;
      left: -20px;
    }
  }

  .i2 {
    top: 579px;
    left: 61px;

    .title {
      top: 24px;
      left: 211px;
      line-height: 35px;
    }

    .count {
      top: 10px;
      left: -20px;
    }
  }

  .i3 {
    width: 450px;
    height: 120px;
    background: url('../../../assets/IndustryMap/mid3.png') no-repeat;
    background-size: 100% 100%;
    top: 293px;
    left: 1074px;

    .title {
      top: 24px;
      right: 200px;
      line-height: 35px;
    }

    .count {
      top: 10px;
      right: -20px;
    }
  }

  .i4 {
    width: 450px;
    height: 120px;
    background: url('../../../assets/IndustryMap/mid3.png') no-repeat;
    background-size: 100% 100%;
    top: 554px;
    left: 1074px;

    .title {
      top: 24px;
      right: 200px;
      line-height: 35px;
    }

    .count {
      top: 10px;
      right: -20px;
    }
  }
}
</style>
