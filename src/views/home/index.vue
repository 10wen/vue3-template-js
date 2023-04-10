<template>
  <div class="home-wrapper">
    <stretchWrapper>
      <el-tabs v-model="activeName" class="home-tabs" @tab-click="changeActive">
        <el-tab-pane label="Welcome" name="first">
          <welcome />
        </el-tab-pane>
        <el-tab-pane label="Home Page Management" name="second">
          <management />
        </el-tab-pane>
      </el-tabs>
    </stretchWrapper>
  </div>
</template>

<script setup>
import welcome from './welcome.vue'
import management from './management.vue'
import { ref } from 'vue'
const activeName = ref('first')
const changeActive = (tab) => {
  activeName.value = tab.paneName
}
</script>

<style lang="scss" scoped>
.home-wrapper {
}
</style>
