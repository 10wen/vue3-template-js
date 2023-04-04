<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="commStore.navCollapse ? '64px' : '200px'">
        <navMenu />
      </el-aside>
      <el-container>
        <el-header style="padding: 0">
          <topBar />
        </el-header>
        <el-main style="padding: 0">
          <breadCrumb style="padding: 20px" />
          <div class="content">
            <RouterView />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { useCommonStore } from '../stores/comm'

const commStore = useCommonStore()
</script>

<style lang="scss" scoped>
.common-layout {
  .content {
    width: 100%;
    padding: 10px 20px;
  }
}
</style>
