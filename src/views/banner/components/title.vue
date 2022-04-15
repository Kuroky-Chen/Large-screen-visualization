<template>
  <div class="title-box">
    <div class="left">
      <div class="item-tab">区域全景洞察</div>
      <div class="item-tab">经济运行监测</div>
    </div>
    <div class="mid">
      <div class="item-title"> {{ title }}</div>
    </div>
    <div class="right">
      <div class="item-tab">产业招商概览</div>
      <div class="item-tab">园区产业图谱</div>
      <div class="item-tab">产业云图</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    // 中间标题
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin font-color {
  color: rgb(128, 255, 255);
}

@mixin tab-font-size {
  display: flex;
  align-items: center;
  font-size: 32px;
  justify-content: space-evenly;
}

.title-box {
  flex: 1;
  display: flex;
  @include font-color;

  .left {
    width: 590px;
    @include tab-font-size;
  }

  .mid {
    width: 960px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }

  .right {
    flex: 1;
    @include tab-font-size;
  }
}
</style>
