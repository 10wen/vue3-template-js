<template>
  <div class="container pd-0-20">
    <div class="tab-content-header">
      <span>Category</span>
      <el-button type="primary" @click="onSubmit" disabled>Add Data</el-button>
    </div>
    
    <div class="data-table mr-20-0">
      <el-table :data="tableData" border stripe style="width: 100%" header-row-class-name="table-header">
        <el-table-column type="index" label="No." width="50" />
        <el-table-column prop="entityId" label="EntityId" />
        <el-table-column prop="entityNameEn" label="entityName(EN)" />
        <el-table-column prop="entityNameCn" label="entityName(CN)" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { getEvent } from '../../api/all';

const data = [
  {
    entityId: '2016-05-03',
    entityNameEn: 'Tom',
    entityNameCn: 'No. 189, Grove St, Los Angeles'
  },
  {
    entityId: '2016-05-03',
    entityNameEn: 'Tom',
    entityNameCn: 'No. 189, Grove St, Los Angeles'
  },
  {
    entityId: '2016-05-03',
    entityNameEn: 'Tom',
    entityNameCn: 'No. 189, Grove St, Los Angeles'
  },
  {
    entityId: '2016-05-03',
    entityNameEn: 'Tom',
    entityNameCn: 'No. 189, Grove St, Los Angeles'
  }
]

const tableData = reactive(data)

const initTable = async () => {
  const res = await getEvent('/entities')
  if (res.code === 0) {
    tableData = res.data
  }
}

onMounted(() => {
  initTable();
})

</script>

<style lang="scss" scoped>

</style>