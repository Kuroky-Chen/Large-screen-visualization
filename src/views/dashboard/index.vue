<template>
  <div class="wrap">
    <Banner />
    <component :is="curComponent" />
  </div>
</template>

<script>
import Banner from './../banner'
import IndustryCloud from './../IndustryCloud'

export default {
  name: 'Dashboard',
  components: { Banner, IndustryCloud },
  data() {
    return {
      curComponent: 'IndustryCloud'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: url('../../assets/bg.png') no-repeat;
  background-size: 100% 100%;
}
</style>
