import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage, ElMessageBox } from 'element-plus'

export const useCommonStore = defineStore('common', () => {
  // 切换左菜单的Collapse
  const navCollapse = ref(false)
  const changeNavCollapse = () => {
    navCollapse.value = !navCollapse.value
  }

  // 全局消息弹出框
  const openElMessageBox = (title, Msg, ConfirmCallback = () => {}, CancelCallBack = () => {}) => {
    ElMessageBox.confirm(Msg, title, {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    })
      .then(async () => {
        await ConfirmCallback()
        ElMessage({
          type: 'success',
          message: 'Delete completed'
        })
      })
      .catch(async () => {
        await CancelCallBack()
        ElMessage({
          type: 'info',
          message: 'Delete canceled'
        })
      })
  }

  return { navCollapse, changeNavCollapse, openElMessageBox }
})
