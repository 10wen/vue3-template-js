<template>
  <div class="container">
    <autoWrapper>
      <el-form :model="searchFormData" class="form-group">
        <div class="form-item-group">
          <el-form-item label="userType">
            <el-select v-model="searchFormData.userType" placeholder="userType" disabled>
              <el-option label="normal" value="normal" selected />
              <el-option label="certified" value="certified" />
            </el-select>
          </el-form-item>
          <el-form-item label="nickname">
            <el-input v-model="searchFormData.nickname" placeholder="nickname" />
          </el-form-item>
        </div>
        <div class="form-item-group">
          <el-form-item label="username">
            <el-input v-model="searchFormData.username" placeholder="username" />
          </el-form-item>
          <el-form-item label="signature">
            <el-input v-model="searchFormData.signature" placeholder="signature" />
          </el-form-item>
        </div>
        <div class="flex-column">
          <el-form-item>
            <el-button type="normal" @click="onReset">Reset</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onQuery">Query</el-button>
          </el-form-item>
        </div>
      </el-form>
    </autoWrapper>
    <stretchWrapper>
      <el-tabs v-model="activeName" class="home-tabs" @tab-click="changeActive">
        <el-tab-pane label="Authorization User" name="certified">
          <AuthUserList :listData="AuthData" />
        </el-tab-pane>
        <el-tab-pane label="Normal User" name="normal">
          <NormalUserList :listData="normalData" />
        </el-tab-pane>
      </el-tabs>
    </stretchWrapper>
  </div>
</template>

<script setup>
import { ref, reactive, toRaw } from 'vue'
import NormalUserList from './normalUserList.vue';
import AuthUserList from './authUserList.vue';
const activeName = ref('certified')
const changeActive = (tab) => {
  activeName.value = tab.paneName
  searchFormData.value.userType = tab.paneName
}
const AuthData = reactive([])
const normalData = reactive([])

const searchFormData = ref({
  userType: 'normal',
  nickname: '',
  username: '',
  signature: ''
})
const onReset = () => {
  searchFormData.value = {
    ...toRaw(searchFormData.value),
    nickname: '',
    username: '',
    signature: ''
  }
}
const onQuery = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>

</style>