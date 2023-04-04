import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  // 切换左菜单的Collapse
  const navCollapse = ref(false)
  const changeNavCollapse = () => {
    navCollapse.value = !navCollapse.value
  }

  return { navCollapse, changeNavCollapse }
})
