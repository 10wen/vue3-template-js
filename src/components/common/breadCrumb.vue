<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" :to="item.name">
        <a href="/" style="cursor: pointer; font-weight: bold;">{{ item.text }}</a>
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
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  box-shadow: 0px 1px 5px 1px rgba($color: #000000, $alpha: 0.1);

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #f4f3f4;
  }
}
</style>
