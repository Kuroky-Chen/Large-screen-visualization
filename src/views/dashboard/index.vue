<template>
  <div class="wrap">
    <Banner />
  </div>
</template>

<script>
import Banner from './../banner'

export default {
  name: 'Dashboard',
  components: { Banner }
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
