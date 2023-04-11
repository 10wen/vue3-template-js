<template>
  <div class="container pd-0-20">
    <div class="tab-content-header">
      <span>Normal User List</span>
      <div> 
        <el-button type="warning" plain @click="onSubmit">Del Data</el-button>
        <el-button type="primary" plain @click="onSubmit">Add Data</el-button>
      </div>
    </div>
    
    <div class="data-table mr-20-0">
      <el-table 
        ref="tableRef"
        :data="tableData" 
        border 
        style="width: 100%"
        :header-cell-style="{background:'#FAFCFF'}"
        cell-class-name="pointer"
      >
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick"
              >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
      <SmallPagination 
        :total="totalRow"
        @handlePageChange="handlePageChange" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const totalRow = ref(100)
const handlePageChange = (currentPage) => {
  console.log('page change ', currentPage);
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
// .container {
//   padding: 0 20px;

// }
</style>
