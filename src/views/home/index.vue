<template>
  <div>
    Home
    <el-button type="primary" @click="open">hello</el-button>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'

const open = () => {
  ElMessage('hello')
}
</script>

<style lang="scss" scoped></style>
