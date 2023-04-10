<template>
  <div class="container">
    <autoWrapper>
      <el-form :model="formInline" class="form-group">
        <div class="form-item-group">
          <el-form-item label="Approved by">
            <el-input v-model="formInline.user" placeholder="Approved by" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="formInline.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </div>
        <div class="form-item-group">
          <el-form-item label="Approved by">
            <el-input v-model="formInline.user" placeholder="Approved by" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="formInline.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </autoWrapper>
    <stretchWrapper>
      <el-tabs v-model="activeName" class="home-tabs" @tab-click="changeActive">
        <el-tab-pane label="Category" name="first">
          <category />
        </el-tab-pane>
        <el-tab-pane label="Dynamic List" name="second">
          <dynamicList />
        </el-tab-pane>
      </el-tabs>
    </stretchWrapper>
  </div>
</template>

<script setup>
import category from './category.vue'
import dynamicList from './dynamicList.vue'

import { ref, reactive } from 'vue'
const activeName = ref('first')
const changeActive = (tab) => {
  activeName.value = tab.paneName
}

const formInline = reactive({
  user: '',
  region: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>

.container {
  .form-group {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
  }
}

</style>
