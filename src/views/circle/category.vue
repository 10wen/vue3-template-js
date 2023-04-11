<template>
  <div class="container pd-0-20">
    <div class="tab-content-header">
      Category
      <el-button type="primary" @click="onSubmit">Add Data</el-button>
    </div>
    
    <div class="data-table mr-20-0">
      <el-table :data="tableData" border stripe style="width: 100%" header-row-class-name="table-header">
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <SmallPagination 
        :total="totalRow"
        @handlePageChange="handlePageChange" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const totalRow = ref(100)

const handlePageChange = (currentPage) => {
  console.log('change current page',currentPage);
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<style lang="scss" scoped>

</style>
