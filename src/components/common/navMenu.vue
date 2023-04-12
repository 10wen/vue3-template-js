<template>
  <div class="container">
    <el-menu
      :default-active="route.name"
      class="el-menu-vertical"
      :collapse="commStore.navCollapse"
      @select="handleRoute"
    >
      <el-menu-item index="home">
        <el-icon><Menu /></el-icon>
        <template #title>Home Page</template>
      </el-menu-item>
      <el-menu-item index="activity">
        <el-icon><Menu /></el-icon>
        <template #title>Activity Management</template>
      </el-menu-item>
      <el-menu-item index="circle">
        <el-icon><Menu /></el-icon>
        <template #title>Circle Management</template>
      </el-menu-item>
      <el-menu-item index="dynamic">
        <el-icon><Menu /></el-icon>
        <template #title>Dynamic Management</template>
      </el-menu-item>
      <el-menu-item index="resource">
        <el-icon><Menu /></el-icon>
        <template #title>Resource Management</template>
      </el-menu-item>
      <el-menu-item index="message">
        <el-icon><Menu /></el-icon>
        <template #title>Message Management</template>
      </el-menu-item>
      <el-menu-item index="comment">
        <el-icon><Menu /></el-icon>
        <template #title>Comment Management</template>
      </el-menu-item>
      <el-menu-item index="complaints">
        <el-icon><Menu /></el-icon>
        <template #title>Complaints Management</template>
      </el-menu-item>
      <el-menu-item index="userList">
        <el-icon><Menu /></el-icon>
        <template #title>User Management</template>
      </el-menu-item>
      <el-menu-item index="systemadmin">
        <el-icon><WarningFilled /></el-icon>
        <template #title>System Admin</template>
      </el-menu-item>
      <el-menu-item index="account">
        <el-icon><UserFilled /></el-icon>
        <template #title>Account</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import {
  Menu,
  WarningFilled,
  UserFilled,
} from '@element-plus/icons-vue'
import { useCommonStore } from '../../stores/comm'
import { useUserStore } from '../../stores/userStore'
import { useRoute, useRouter } from 'vue-router'

const commStore = useCommonStore()
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const handleRoute = (index) => {
  router.push(index)
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  .el-menu-vertical {
    min-height: 100vh;
    &:not(.el-menu--collapse) {
      width: 250px;
    }

    .el-menu-item {
      font-weight: bold;
    }
  }
}
</style>
