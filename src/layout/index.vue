<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="commStore.navCollapse ? '64px' : '250px'" class="aside">
        <navMenu />
      </el-aside>
      <el-container>
        <el-header style="padding: 0">
          <topBar />
        </el-header>
        <el-main style="padding: 0; background-color: #f4f3f4">
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
  .aside {
    transition: width 0.2s linear;
  }
  .content {
    width: 100%;
    padding: 10px 20px;
  }
}
</style>
