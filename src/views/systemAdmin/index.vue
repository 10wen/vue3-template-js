<template>
  <div class="container mr-20-0">
    <autoWrapper>
      <div class="data-table mr-20-0" v-if="!isEdit">
        <div class="float-right mrbot-10 ">
          <el-button type="primary" plain @click="changeToAdd">Add admin</el-button>
        </div>
        <el-table
          ref="tableRef"
          :data="tableData" 
          border 
          highlight-current-row
          style="width: 100%"
          :header-cell-style="{background:'#FAFCFF'}"
          @current-change="handleCurrentChange"
        >
          <el-table-column type="index" width="50" />
          <el-table-column prop="date" label="Date" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="address" label="Address" />
          <el-table-column label="Operations">
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="data-edit mr-20-0" v-else>
        edit form
      </div>
    </autoWrapper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCommonStore } from '../../stores/comm';

const isEdit = ref(false)
const currentRow = ref()
const tableRef = ref()
const commStore = useCommonStore()

const setCurrent = (row) => {
  tableRef.value.setCurrentRow(row)
}
const handleCurrentChange = (val) => {
  currentRow.value = val
}
const handleEdit = () => {
  isEdit.value = true
  handleDelete()
}
const changeToAdd = () => {
  isEdit.value = true
}
const handleDelete = () => {
  commStore.openElMessageBox('warning','message',()=>alert('hello'))
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

<style lang="scss" scoped></style>
