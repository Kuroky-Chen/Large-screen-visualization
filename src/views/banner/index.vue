<template>
  <div class="banner">
    <Announcement :content="aContent" />
    <Title :title="title" />
    <Weather />
  </div>
</template>

<script>
import Announcement from './components/announcement.vue'
import Title from './components/title.vue'
import Weather from './components/weather.vue'

export default {
  name: 'Banner',
  components: { Announcement, Weather, Title },
  data() {
    return {
      aContent: '',
      title: '芜湖市繁昌区工业互联网平台'
    }
  },
  mounted() {
    const text = `"七一"将至，我们将迎来中国共产党建档100周年，回首这近一个世纪的风雨历程，我们党从血雨腥风`
    this.setAnnouncement(text)
  },
  methods: {
    setAnnouncement(val) {
      this.aContent = val
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 120px;
  background: url('../../assets/banner.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  color: #fff;
}
</style>
