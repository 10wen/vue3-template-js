<template>
  <div class="container">
    <el-menu
      :default-active="route.name"
      class="el-menu-vertical"
      :collapse="commStore.navCollapse"
      @select="handleRoute"
    >
      <el-menu-item index="home">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Home Page</template>
      </el-menu-item>
      <el-menu-item index="activity">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Activity Management</template>
      </el-menu-item>
      <el-menu-item index="circle">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Circle Management</template>
      </el-menu-item>
      <el-menu-item index="dynamic">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Dynamic Management</template>
      </el-menu-item>
      <el-menu-item index="resource">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Resource Management</template>
      </el-menu-item>
      <el-menu-item index="message">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Message Management</template>
      </el-menu-item>
      <el-menu-item index="comment">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Comment Management</template>
      </el-menu-item>
      <el-menu-item index="complaints">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Complaints Management</template>
      </el-menu-item>
      <el-menu-item index="userList">
        <el-icon><UserFilled /></el-icon>
        <template #title>User Management</template>
      </el-menu-item>
      <el-menu-item index="systemadmin" disabled>
        <el-icon><WarnTriangleFilled /></el-icon>
        <template #title>System Admin</template>
      </el-menu-item>
      <el-menu-item index="account">
        <el-icon><HomeFilled /></el-icon>
        <!-- <template #title>Account</template> -->
        <span>Account</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { HomeFilled, UserFilled, WarnTriangleFilled } from '@element-plus/icons-vue'
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
