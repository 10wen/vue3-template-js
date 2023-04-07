<template>
  <div class="wrapper">
    <el-icon size="20" @click="toggle">
      <FullScreen v-if="!isFullscreen" />
      <SwitchButton v-if="isFullscreen" />
    </el-icon>
  </div>
</template>

<script setup>
import { FullScreen, SwitchButton } from '@element-plus/icons-vue'
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>

<style lang="scss" scoped>
.wrapper {
  margin-right: 10px;
  display: flex;
  align-items: center;
}
</style>
