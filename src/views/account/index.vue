<template>
  <div class="container">
    <autoWrapper>
      <div class="form-wrapper">
        <el-form
          ref="formRef"
          :rules="formRules"
          :model="formData"
          label-width="100px"
          style="width: 350px"
        >
          <el-form-item label="role" prop="adminType">
            <el-input type="text" v-model="formData.adminType"  disabled />
          </el-form-item>
          <el-form-item label="nickname" prop="nickname">
            <el-input type="text" v-model="formData.nickname" clearable />
          </el-form-item>
          <el-form-item label="username" prop="username">
            <el-input type="text" v-model="formData.username" clearable />
          </el-form-item>
          <el-form-item label="password" prop="password">
            <el-input
              type="password"
              v-model="formData.password"
              show-password
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Save</el-button>
          </el-form-item>
        </el-form>
      </div>
    </autoWrapper>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, toRaw } from 'vue'
import { useUserStore } from '../../stores/userStore'
import { ElMessage } from 'element-plus'
import { UserService } from '../../api/all';
import { computed } from '@vue/reactivity';

const userStore = useUserStore()
const formData = reactive(computed(() => (userStore.userInfo)))
const formRef = ref(null)

const isView = ref(false)
const viewPass = () => {
  isView.value = !isView.value
}

const onSubmit = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      const result = await UserService.updateUserInfo(toRaw(formData))
      if (result.code === 0) {
        userStore.userInfo = result.data.userInfo
      }
    } else {
      ElMessage({
        message: 'validate error.',
        type: 'warning'
      })
    }
  })
}


const formRules = {
  nickname: [
    { min: 5, max: 10, message: 'Length should be 5 to 10', trigger: 'blur' }
  ],
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' },
    { min: 5, max: 10, message: 'Length should be 5 to 10', trigger: 'blur' },
    { pattern: /^[A-Za-z0-9]+$/, message: 'Enter a a-z A-Z and 0-9 characters', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 5, max: 16, message: 'Length should be 5 to 16', trigger: 'blur' },
    {
      pattern: /^[A-Za-z0-9]+$/,
      message: 'Enter a a-z A-Z and 0-9 characters',
      trigger: ['blur', 'change']
    }
  ]
}

</script>

<style lang="scss" scoped>
.container {
  .form-wrapper {
    width: 500px;
    padding: 50px;
  }
}
</style>