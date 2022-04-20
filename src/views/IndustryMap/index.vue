<template>
  <div class="body">
    <Left />
    <Middle />
    <Right />
  </div>
</template>

<script>
import Left from './components/left.vue'
import Middle from './components/middle.vue'
import Right from './components/right.vue'

export default {
  name: 'IndustryMap',
  components: { Left, Middle, Right },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
  padding-top: 50px;
  color: #00FFFF;
}
</style>
