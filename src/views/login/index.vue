<template>
  <div class="login-container">
    <el-form
      ref="formRef"
      :rules="formRules"
      :model="formData"
      label-position="top"
      label-width="100px"
      style="width: 280px"
      class="login-form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="formData.username" :prefix-icon="UserFilled" clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="formData.password"
          :prefix-icon="CircleCheckFilled"
          show-password
          clearable
        />
      </el-form-item>
      <el-button type="primary" class="login-btn" @click="handleLogin">登錄</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, toRaw } from 'vue'
import { UserFilled, CircleCheckFilled } from '@element-plus/icons-vue'
import { login } from '@/api/all'
import { useUserStore } from '../../stores/userStore'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const userStore = useUserStore()
const router = useRouter()
const formData = reactive({
  username: '',
  password: ''
})
const formRef = ref(null)

const formRules = {
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

const isView = ref(false)
const viewPass = () => {
  isView.value = !isView.value
}

const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      const result = await login(toRaw(formData))
      if (result.code === 0) {
        userStore.setToken(result.data.token)
        userStore.userInfo = result.data.userInfo
        router.push('/')
      }
    } else {
      ElMessage({
        message: 'validate error.',
        type: 'warning'
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 1px 5px 1px rgba($color: #000000, $alpha: 0.1);

    .login-btn {
      align-self: center;
      margin-top: 10px;
    }
  }
}
</style>
