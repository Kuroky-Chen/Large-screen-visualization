<template>
  <div class="subtitle" :style="{ width: `${width}px` }">
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String | Number,
      default: '450'
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  width: 450px;
  height: 50px;
  line-height: 50px;
  padding-left: 50px;
  font-size: 28px;
  background: url('../../assets/title.png') no-repeat;
  background-size: 450px 100%;
  font-weight: bold;
}
</style>
