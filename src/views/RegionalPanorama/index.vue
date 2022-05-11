<template>
  <div class="body">
    <div class="left-wrap">
      <Left ref="Left" />
    </div>
    <div class="right-wrap">
      <Right ref="Right" />
    </div>
    <iframe
      class="iframe"
      src="http://112.132.146.198:8081/airlookmap/sceneShow.html?sceneServiceId=1465217253976391681&sceneServiceType=preview"
      frameborder="0"
    />
  </div>
</template>

<script>
import Left from './components/left.vue'
import Middle from './components/middle.vue'
import Right from './components/right.vue'
import request from '@/utils/request'

export default {
  name: 'RegionalPanorama',
  components: { Left, Middle, Right },
  data() {
    return {

    }
  },
  mounted() {
    this.carousel()
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    carousel() {
      request({
        url: '/api/basedata/screenRefresh/getScreenRefreshById/1523196275942625280', // 区域全景洞察 接口刷新时间
        method: 'post'
      }).then(res => {
        this.timer = setInterval(() => {
          this.$refs.Left.init()
          this.$refs.Middle.init()
          this.$refs.Right.init()
        }, res.data.refreshtime)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  height: calc(100% - 120px);
  color: #00FFFF;
  position: relative;
  background: #ffffff;
  .left-wrap{
    width: 1100px;
    height:100%;
    position:absolute;
    top: 0;
    left: 0;
    z-index: 8;
  }
  .right-wrap{
    width: 1100px;
    height:100%;
    position:absolute;
    top: 0;
    right: 0;
    z-index: 8;
  }
  .iframe {
    position:absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
  }
}
</style>
