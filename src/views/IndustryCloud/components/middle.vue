<template>
  <div class="middle">
    <div class="bg" />
    <div class="flow f1">
      <div class="top">
        <div class="val">
          <CountTo :start-val="2000" :end-val="9999" :duration="18000" separator="" />
        </div>
        <div class="unit">家</div>
      </div>
      <div class="bt">健康食品</div>
    </div>

    <div class="flow f2">
      <div class="top">
        <div class="val">
          <CountTo :start-val="2000" :end-val="9999" :duration="18000" separator="" />
        </div>
        <div class="unit">家</div>
      </div>
      <div class="bt">健康食品</div>
    </div>

    <div class="flow f3">
      <div class="top">
        <div class="val">
          <CountTo :start-val="2000" :end-val="9999" :duration="18000" separator="" />
        </div>
        <div class="unit">家</div>
      </div>
      <div class="bt">健康食品</div>
    </div>

    <div class="flow f4">
      <div class="top">
        <div class="val">
          <CountTo :start-val="2000" :end-val="9999" :duration="18000" separator="" />
        </div>
        <div class="unit">家</div>
      </div>
      <div class="bt">健康食品</div>
    </div>

    <div class="flow f5">
      <div class="top">
        <div class="val">
          <CountTo :start-val="2000" :end-val="9999" :duration="18000" separator="" />
        </div>
        <div class="unit">家</div>
      </div>
      <div class="bt">健康食品</div>
    </div>

    <div class="flow f6">
      <div class="top">
        <div class="val">
          <CountTo :start-val="2000" :end-val="9999" :duration="18000" separator="" />
        </div>
        <div class="unit">家</div>
      </div>
      <div class="bt">健康食品</div>
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
  .middle{
    width: 1584px;
    position: relative;
    .bg {
      position: absolute;
      top:48%;
      left:50%;
      transform: translate(-50%, -50%);
      width: 804px;
      height: 804px;
      background: url('../../../assets/IndustryCloud/midbg.png') no-repeat;
      background-size: 100% 100%;
    }
    .flow{
      width: 230px;
      height: 230px;
      position: absolute;
      background: url('../../../assets/IndustryCloud/mid2.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &.f1 {
        left: 430px;
        top: 0px;
      }
      &.f2 {
        left: 890px;
        top: 0px;
      }
      &.f3 {
        left: 130px;
        top: 400px;
      }
      &.f4 {
        left: 1200px;
        top: 400px;
      }
      &.f5 {
        left: 430px;
        top: 770px;
      }
      &.f6 {
        left: 890px;
        top: 770px;
      }
      .top{
        display: flex;
        .val{
          font-size:60px;
          color: #fff;
        }
        .unit {
          padding-top: 34px;
          padding-left: 5px;
          font-size: 20px;
          color: #80FFFF;
        }
      }
      .bt{
        font-size: 30px;
        color: #80FFFF;
        text-align: center;
      }
    }
  }
</style>
