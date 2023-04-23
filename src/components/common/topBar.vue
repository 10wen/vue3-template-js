<template>
  <div class="top-bar-wrapper">
    <div class="collapse-box row-center" @click="commStore.changeNavCollapse">
      <el-icon size="25" v-show="commStore.navCollapse"><Expand /></el-icon>
      <el-icon size="25" v-show="!commStore.navCollapse"><Fold /></el-icon>
      <span class="logo">Neuser</span>
    </div>
    <div class="user-info">
      <screenFull />
      <selectLang />
      <el-popover placement="bottom" :width="200" trigger="click" hide-after="0">
        <template #reference>
          <div style="display: flex; align-items: center">
            <el-icon size="20"><UserFilled /></el-icon>
            <span class="fs-16 mg-lr-10">{{ userStore.userInfo.username }}</span>
            <el-icon><ArrowDownBold /></el-icon>
          </div>
        </template>
        <template #default>
          <el-button style="width: 100%" link type="primary" @click="logout">{{ $t('message.logout') }}</el-button>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script setup>
import { Expand, Fold, UserFilled, ArrowDownBold } from '@element-plus/icons-vue'
import { useCommonStore } from '../../stores/comm'
import { useUserStore } from '../../stores/userStore'
import { useRouter } from 'vue-router'

const commStore = useCommonStore()
const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.setToken('')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.top-bar-wrapper {
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // box-shadow: 0px 1px 5px 1px rgba($color: #000000, $alpha: 0.1);

  .collapse-box .logo {
    font-size: 20px;
    line-height: 100%;
    font-weight: bold; 
    margin: 1px 10px;
  }

  .user-info {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
