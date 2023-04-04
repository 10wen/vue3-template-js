<template>
  <div class="nav-menu-wrapper">
    <el-menu
      router
      default-active="home"
      class="el-menu-vertical"
      :collapse="commStore.navCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="home">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator One</template>
      </el-menu-item>
      <el-menu-item index="user">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="home" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="user">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
      <el-sub-menu index="home">
        <template #title>
          <el-icon><HomeFilled /></el-icon>
          <span>Home</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="5-1">item one</el-menu-item>
          <el-menu-item index="5-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="5-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="5-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="5-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { HomeFilled, Menu as IconMenu, Document, Setting } from '@element-plus/icons-vue'
import { useCommonStore } from '../../stores/comm'

const commStore = useCommonStore()
</script>

<style lang="scss" scoped>
.nav-menu-wrapper {
  height: 100vh;
  .el-menu-vertical {
    min-height: 100vh;
    &:not(.el-menu--collapse) {
      width: 200px;
    }
  }
}
</style>
