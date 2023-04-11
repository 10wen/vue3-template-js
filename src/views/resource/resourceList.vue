<template>
  <div class="container">
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="Date" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Name" width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>address: {{ scope.row.address }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" />
      <el-table-column label="Name" prop="name" />
      <el-table-column align="right">
        <template #header>
          <div class="flex-row">
            <el-input v-model="search" size="small" placeholder="Type to search" />
            <el-button class="ml-10" size="small" type="primary" :icon="Search" />
          </div>
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <SmallPagination :total="totalRow" @handlePageChange="handlePageChange" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Timer, Search } from '@element-plus/icons-vue'

const totalRow = ref(100)
const handlePageChange = (currentPage) => {
  console.log('page change ', currentPage);
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
