<template>
  <div class="top-bar-wrapper">
    <div class="collapse-box" @click="commStore.changeNavCollapse">
      <el-icon size="25" v-show="commStore.navCollapse"><Expand /></el-icon>
      <el-icon size="25" v-show="!commStore.navCollapse"><Fold /></el-icon>
    </div>
    <div class="user-info">
      <el-popover
        placement="bottom"
        title="Title"
        :width="200"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <div style="display: flex; align-items: center">
            <el-icon size="20"><UserFilled /></el-icon>
            <span class="fs-16 mg-lr-10">username</span>
            <el-icon><ArrowDownBold /></el-icon>
          </div>
        </template>
        <template #default> </template>
      </el-popover>
    </div>
  </div>
</template>

<script setup>
import { Expand, Fold, UserFilled, ArrowDownBold } from '@element-plus/icons-vue'
import { useCommonStore } from '../../stores/comm'

const commStore = useCommonStore()
</script>

<style lang="scss" scoped>
.top-bar-wrapper {
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 5px 1px rgba($color: #000000, $alpha: 0.1);
}
</style>
