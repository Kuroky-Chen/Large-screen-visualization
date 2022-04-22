<template>
  <div class="middle">
    <div v-for="(item, i) in datas" :key="i" class="item" :class="`position${i}`">
      <div class="name">{{ item.name }}</div>
      <div class="count">{{ item.count }}<span class="unit">万元</span></div>
      <div class="percent">
        同比: {{ item.percent }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Middle',
  data() {
    return {
      datas: []
    }
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.datas.push({
        name: '某某村',
        count: 123,
        percent: 50
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.middle {
  width: 1584px;
  position: relative;

  .item {
    width: 176px;
    height: 176px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('../../../assets/EconomicMonitor/icon5.png') no-repeat;
    background-size: 100% 100%;
    font-size: 19px;

    @for $i from 0 through 9 {
      &.position#{$i} {
        @if $i<5 {
          top: $i * 198px;
          left: ($i + 1) * -120px + 500px;
        }

        @if $i==3 {
          left: ($i - 1) * -120px + 500px;
        }

        @if $i==4 {
          left: ($i - 3) * -120px + 500px;
        }

        @if $i>4 and $i < 10 {
          top: ($i - 5) * 198px;
          right: ($i - 5 + 1) * -120px + 500px;
        }

        @if $i==8 {
          right: ($i - 5 - 1) * -120px + 500px;
        }

        @if $i==9 {
          right: ($i - 5 - 3) * -120px + 500px;
        }
      }
    }

    .name {
      color: #80FFFF;
    }

    .count {
      font-size: 35px;
      color: #80FFFF;

      .unit {
        font-size: 15px;
        color: #fff;
      }
    }

    .percent {
      color: #70FF00;

    }
  }
}
</style>
