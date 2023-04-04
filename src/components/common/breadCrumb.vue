<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" :to="item.name">
        <a href="/">{{ item.text }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => route.meta.breadcrumbs)
</script>

<style lang="scss" scoped>
.breadcrumb-wrapper {
  padding: 10px 0;
}
</style>
