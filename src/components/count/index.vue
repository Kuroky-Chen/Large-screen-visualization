<template>
  <div class="count-box"
    :style="{ marginRight: `${margin}px`, width: `${width}px`, height: `${height}px`, fontSize: `${size}px` }">
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'Count',
  props: {
    count: {
      type: String | Number,
      default: '9'
    },
    width: {
      type: String | Number,
      default: '37'
    },
    height: {
      type: String | Number,
      default: '62'
    },
    size: {
      type: String | Number,
      default: '60'
    },
    margin: {
      type: String | Number,
      default: '18'
    }
  }
}
</script>

<style lang="scss" scoped>
.count-box {
  background: url('../../assets/IndustryCloud/count.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
