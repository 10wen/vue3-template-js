<template>
  <div class="container pd-0-20">
    <div class="tab-content-header">
      <span>Authorization User List</span>
      <div>
        <el-button type="warning" plain @click="onSubmit">Del Data</el-button>
        <el-button type="primary" plain @click="onSubmit">Add Data</el-button>
      </div>
    </div>
    <div class="data-table mr-20-0">
      <el-table
        ref="multipleTableRef"
        :data="tableData" 
        border 
        style="width: 100%"
        :header-cell-style="{background:'#FAFCFF'}"
        cell-class-name="pointer"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="expand">
          <template #default="props">
            <div m="4">
              <p m="t-0 b-2">State: {{ props.row.state }}</p>
              <p m="t-0 b-2">City: {{ props.row.city }}</p>
              <p m="t-0 b-2">Address: {{ props.row.address }}</p>
              <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
              <h3>Family</h3>
              <el-table :data="props.row.family" :border="childBorder">
                <el-table-column label="Name" prop="name" />
                <el-table-column label="State" prop="state" />
                <el-table-column label="City" prop="city" />
                <el-table-column label="Address" prop="address" />
                <el-table-column label="Zip" prop="zip" />
              </el-table>
            </div>
          </template>
        </el-table-column>
        <el-table-column type="selection" width="55" />
        <el-table-column label="Date">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="Name" />
        <el-table-column property="address" label="Address" show-overflow-tooltip />
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

const multipleTableRef = ref()
const multipleSelection = ref([])
const toggleSelection = (rows) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value.clearSelection()
  }
}
const handleSelectionChange = (val) => {
  multipleSelection.value = val
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
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<style lang="scss" scoped></style>
