<template>
  <div class="nav-menu-wrapper">
    <el-menu
      :default-active="route.name"
      class="el-menu-vertical"
      :collapse="commStore.navCollapse"
      @select="handleRoute"
    >
      <el-menu-item index="home">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Home</template>
      </el-menu-item>
      <el-menu-item index="dynamic">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Dynamic</template>
      </el-menu-item>
      <el-menu-item index="home" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-sub-menu index="user">
        <template #title>
          <el-icon><UserFilled /></el-icon>
          <span>User Control</span>
        </template>
        <el-menu-item index="userList">User List</el-menu-item>
        <el-menu-item index="roleList" :disabled="userStore.role === 'normal'"
          >Role List</el-menu-item
        >
      </el-sub-menu>
      <!-- <el-sub-menu index="user">
        <template #title>
          <el-icon><UserFilled /></el-icon>
          <span>User Control</span>
        </template>
        <el-menu-item index="userList">User List</el-menu-item>
        <el-menu-item index="userRole" disabled>User Role</el-menu-item>
        <el-menu-item index="adminUser">Admin User</el-menu-item>
        <el-sub-menu index="5-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="5-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
    </el-menu>
  </div>
</template>

<script setup>
import { HomeFilled, UserFilled, Document, Setting } from '@element-plus/icons-vue'
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
.nav-menu-wrapper {
  height: 100vh;
  .el-menu-vertical {
    min-height: 100vh;
    &:not(.el-menu--collapse) {
      width: 250px;
    }
  }
}
</style>
