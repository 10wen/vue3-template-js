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
          class="login-form"
        >
          <el-form-item label="role" prop="role">
            <el-input type="text" v-model="formData.username"  disabled />
          </el-form-item>
          <el-form-item label="name" prop="username">
            <el-input type="text" v-model="formData.username" clearable />
          </el-form-item>
          <el-form-item label="pass" prop="password">
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
import { reactive, ref, toRaw } from 'vue'
import { updateUserInfo } from '@/api/all'
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


const isView = ref(false)
const viewPass = () => {
  isView.value = !isView.value
}

const onSubmit = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      const result = await updateUserInfo(toRaw(formData))
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

</script>

<style lang="scss" scoped>
.container {
  .form-wrapper {
    width: 500px;
    padding: 50px;
  }
}
</style>