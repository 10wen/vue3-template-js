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
          <el-table-column type="index" label="No." width="50" />
          <el-table-column prop="adminType" label="Role" />
          <el-table-column prop="nickname" label="Nickname" />
          <el-table-column prop="username" label="Username" />
          <el-table-column prop="createAt" label="CreateDate" />
          <el-table-column label="Action">
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
      <div class="edit-wrapper mr-20-0" v-else>
        <el-form
          ref="detailRef"
          :model="detailData"
          label-width="100px"
          style="width: 350px"
        >
          <el-form-item label="* role" prop="adminType">
            <el-select v-model="detailData.adminType"  placeholder="Select" style="width: 100%;">
              <el-option
                v-for="item in RoleOptions"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="nickname" prop="nickname">
            <el-input type="text" v-model="detailData.nickname" disabled />
          </el-form-item>
          <el-form-item label="username" prop="username">
            <el-input type="text" v-model="detailData.username" disabled />
          </el-form-item>
          <div style="display: flex; justify-content: space-around;">
            <el-form-item>
              <el-button type="primary" @click="cancelDetailChange">Cancel</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveDetailChange">Save</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </autoWrapper>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, toRaw } from 'vue'
import { useCommonStore } from '../../stores/comm';
import { getEvent, postEvent } from '../../api/all';
import { ElMessage } from 'element-plus';

const isEdit = ref(false)
const currentRow = ref()
const tableRef = ref()
const commStore = useCommonStore()
const data = [
  {
    createAt: '2016-05-03',
    adminType: 'Tom',
    username: 'Tom',
    nickname: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    createAt: '2016-05-03',
    adminType: 'Tom',
    nickname: 'Tom',
    username: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    createAt: '2016-05-03',
    adminType: 'Tom',
    nickname: 'Tom',
    username: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    createAt: '2016-05-03',
    adminType: 'Tom',
    username: 'Tom',
    nickname: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
const tableData = ref(data)



// const initData = async () => {
//   const result = await getEvent()
//   if (result.code === 0) {
//     tableData.value = result.data
//   }
// }

// onMounted(() => {
//   initData()
// })

const setCurrent = (row) => {
  tableRef.value.setCurrentRow(row)
}
const handleCurrentChange = (val) => {
  currentRow.value = val
}
const handleEdit = (index, row) => {
  isEdit.value = true
  detailData.value = toRaw(row)
  console.log(detailData);
}
const changeToAdd = () => {
  isEdit.value = true
}
const handleDelete = () => {
  commStore.openElMessageBox('warning','message',()=>alert('hello'))
}

const detailData = ref({})
const detailRef = ref(null)
const RoleOptions = ['normal', 'super']
const saveDetailChange = async () => {
  // const result = await postEvent()
  // if (result.code === 0) {
  //   ElMessage({})
  // } else {
  //   ElMessage({})
  // }
}
const cancelDetailChange = () => {
  // ElMessage({})
  // initData()
  isEdit.value = !isEdit.value
}


</script>

<style lang="scss" scoped>
.container {
  .edit-wrapper {
    width: 500px;
    padding: 50px;
  }
}

</style>
