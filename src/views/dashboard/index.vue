<template>
  <div class="wrap">
    <Banner />
    <component :is="curComponent" />
  </div>
</template>

<script>
import Banner from './../banner'
import IndustryCloud from './../IndustryCloud'
import AttractInvestment from './../AttractInvestment'
import RegionalPanorama from './../RegionalPanorama'
import EconomicMonitor from './../EconomicMonitor'
import IndustryMap from './../IndustryMap'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('common')
const enums = {
  1: 'RegionalPanorama',
  2: 'EconomicMonitor',
  3: 'AttractInvestment',
  4: 'IndustryMap',
  5: 'IndustryCloud'
}

export default {
  name: 'Dashboard',
  components: { Banner, IndustryMap, EconomicMonitor, IndustryCloud, AttractInvestment, RegionalPanorama },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['tab']),
    curComponent() {
      return enums[this.tab]
    }
  },
  methods: {
    ...mapMutations(['setTab']),

    onTabClick(val) {
      this.setTab(val)
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
