<template>
  <div class="announcement">
    <div>公告</div>
    <div>icon</div>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'Announcement',
  props: {
    // 公告内容
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.announcement {
  width: 820px;
  padding-left: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;

  &>div {
    &:nth-child(1) {
      width: 80px;
    }

    &:nth-child(2) {
      width: 70px;
    }

    &:nth-child(3) {
      flex: 1;
    }
  }
}
</style>
