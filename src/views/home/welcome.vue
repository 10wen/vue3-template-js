<template>
  <div class="container">
    <el-descriptions
      title="Vertical list with border"
      :column="3"
      :size="size"
      border
      style="width: 60%"
    >
      <el-descriptions-item
        label="Description"
        span="3"
        label-align="right"
        align="center"
        width="180px"
        label-class-name="my-label"
        class-name="my-content"
      >
        Welcome to Neuser CMS
      </el-descriptions-item>
      <el-descriptions-item label="Telephone" label-align="right" align="center" width="180px"
        >18100000000</el-descriptions-item
      >
      <el-descriptions-item label="Place" :span="2" label-align="right" align="center" width="180px">
        Suzho
      </el-descriptions-item>
      <el-descriptions-item label="Remarks" label-align="right" align="center" width="180px">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address" label-align="right" align="center" width="180px"
        >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const size = ref('')
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px'
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default
  }
})
</script>

<style lang="scss">
.my-content {
  height: 150px;
}
</style>
