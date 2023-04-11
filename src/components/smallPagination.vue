<template>
  <div class="container mrtop-10 float-right">
    <el-pagination
      :total="total"
      :current-page="currentPage"
      :page-size="pageSize"
      small
      :background="background"
      layout="total, prev, pager, next, jumper"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  total: Number
})
const emit = defineEmits(['handlePageChange'])

const currentPage = ref(1)
const pageSize = ref(10)
const background = ref(false)

const handleCurrentChange = (val) => {
  currentPage.value = val
  emit('handlePageChange', val)
}
</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
</style>
