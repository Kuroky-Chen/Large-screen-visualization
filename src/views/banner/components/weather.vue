<template>
  <div class="weather">
    <div v-if="weatherInfo" class="detail">
      <div>
        图片
      </div>
      <div>
        <div>{{ weatherInfo.temperature }}℃ {{ weatherInfo.weather }} {{ weatherInfo.winddirection }}风</div>
        <div>相对湿度 {{ weatherInfo.humidity }}%</div>
        <!-- <div>空气指数：优</div> -->
      </div>
    </div>
    <div>{{ curTime }}</div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { getWeather } from '@/api/common'

export default {
  name: 'Weather',
  data() {
    return {
      curTime: null,
      timer: null,
      weatherInfo: null
    }
  },
  mounted() {
    this.weatherInit()
    this.dateInit()
  },
  methods: {
    dateInit() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }

      this.timer = setInterval(() => {
        const day = dayjs(new Date()).format('YYYY-MM-DD')
        const time = dayjs(new Date()).format('HH:mm:ss')
        this.curTime = `${day}  ${time}`
      }, 1000)
    },
    async weatherInit() {
      const params = {
        key: 'c6da8713389df35db8c99611e03410ca',
        city: '340222',
        extensions: 'base',
        output: 'JSON'
      }

      const { lives } = await getWeather(params)
      this.weatherInfo = lives ? lives[0] : null
      console.log(this.weatherInfo)
    }
  }
}
</script>

<style lang="scss" scoped>
.weather {
  width: 540px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  font-size: 25px;

  .detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
}
</style>
