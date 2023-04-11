<template>
  <div class="home-wrapper">
    <stretchWrapper>
      <el-tabs v-model="activeName" class="home-tabs" @tab-click="changeActive">
        <el-tab-pane label="Welcome" name="first">
          <Welcome />
        </el-tab-pane>
        <el-tab-pane label="Home Page Management" name="second">
          <HomeManagement />
        </el-tab-pane>
        <el-tab-pane label="System entities" name="third" :disabled="false">
          <SystemEntities />
        </el-tab-pane>
      </el-tabs>
    </stretchWrapper>
  </div>
</template>

<script setup>
import Welcome from './welcome.vue'
import HomeManagement from './homeManagement.vue'
import { ref } from 'vue'
import SystemEntities from './systemEntities.vue';
const activeName = ref('first')
const changeActive = (tab) => {
  activeName.value = tab.paneName
}
</script>

<style lang="scss" scoped>
.home-wrapper {
}
</style>
