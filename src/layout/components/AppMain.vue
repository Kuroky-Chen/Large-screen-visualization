<template>
  <div
    ref="scaleBox"
    class="scaleBox"
    :style="{
      width: state.width + 'px',
      height: state.height + 'px',
      transform: state.transform,
      marginTop: - state.mtValue + 'px'
    }"
  >
    <slot />
  </div>
</template>

<script>
import { debounce } from 'lodash-es'
export default {
  name: 'AppMain',
  data() {
    return {
      state: {
        width: 3784,
        height: 1204,
        transform: 'scale(1) translate(-50%, -50%)',
        mtValue: 0
      }
    }
  },
  mounted() {
    this.setScale()
    window.addEventListener(
      'resize',
      debounce(() => {
        this.setScale()
      }, 100)
    )
  },
  methods: {
    getScale() {
      const wh = window.innerHeight / this.state.height
      const ww = window.innerWidth / this.state.width
      return ww < wh ? ww : wh
    },

    setScale() {
      const scaleValue = this.getScale()
      this.state.transform = 'scale(' + scaleValue + ') translate(-50%, -50%)'
      this.state.mtValue =
        (window.innerHeight - this.$refs.scaleBox.clientHeight * scaleValue) / 2
    }
  }
}
</script>

<style lang="scss">
.scaleBox {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
}
</style>
