<template>
  <div class="container">
    <stretchWrapper>
      <el-tabs v-model="activeName" class="home-tabs" @tab-click="changeActive">
        <el-tab-pane label="Resource List" name="first">
          <ResourceList />
        </el-tab-pane>
        <el-tab-pane label="Upload Resource" name="second">
          <UploadResource />
        </el-tab-pane>
      </el-tabs>
    </stretchWrapper>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import UploadResource from './uploadResource.vue'
import ResourceList from './resourceList.vue'
const activeName = ref('first')
const changeActive = (tab) => {
  activeName.value = tab.paneName
}
</script>

<style lang="scss" scoped>

</style>