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
            <div class="userInfo-box">
              <div>
                <el-image style="width: 100px; height: 100px" :src="props.row.avatarUrl" fit="cover" />
              </div>
              <div class="info">
                <div class="flex-column" style="justify-content: space-between;">
                  <span><el-text class="mx-1" type="info">userId : </el-text> {{ props.row.userId }}</span>
                  <span><el-text class="mx-1" type="info">username : </el-text> {{ props.row.username }}</span>
                  <span><el-text class="mx-1" type="info">nickname : </el-text> {{ props.row.nickname }}</span>
                  <span><el-text class="mx-1" type="info">signature : </el-text> {{ props.row.signature }}</span>
                </div>
                <div class="flex-column" style="justify-content: space-between;">
                  <span><el-text class="mx-1" type="info">resources : </el-text> {{ props.row.srcList.length || 0 }}</span>
                  <span><el-text class="mx-1" type="info">followings : </el-text> {{ props.row.followings.length || 0 }}</span>
                  <span><el-text class="mx-1" type="info">followers : </el-text> {{ props.row.followers.length || 0 }}</span>
                  <span><el-text class="mx-1" type="info">joinedCircles : </el-text> {{ props.row.joinedCircles.length || 0 }}</span>
                </div>
                <div class="flex-column-reverse mr-10">
                  <el-button type="normal" @click="handleEditUser">save</el-button>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column type="selection" width="55" />
        <el-table-column label="userId">
          <template #default="scope">{{ scope.row.userId }}</template>
        </el-table-column>
        <el-table-column property="nickname" label="nickname" />
        <el-table-column property="username" label="username" />
        <el-table-column property="signature" label="signature" show-overflow-tooltip />
        <el-table-column label="Action" width="200" align="center">
          <template #default="scope">
            <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)" disabled
              >Edit</el-button
            > -->
            <el-button
              size="small"
              type="danger"
              @click="handleDeleteUser(scope.$index, scope.row)"
              >Delete</el-button
            >
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
const handleDeleteUser = async () => {

}
const handleEditUser = async () => {

}

const tableData = [
  {
    userId: '2016-05-03',
    nickname: 'Tom',
    username: 'los Angeles',
    signature: 'No. 189, Grove St, Los Angeles',
    srcList: [],
    followings: [],
    followers: [],
    joinedCircles: []
  },
  {
    userId: '2016-05-03',
    nickname: 'Tom',
    username: 'los Angeles',
    signature: 'No. 189, Grove St, Los Angeles',
    srcList: [],
    followings: [],
    followers: [],
    joinedCircles: []
  },
  {
    userId: '2016-05-03',
    nickname: 'Tom',
    username: 'los Angeles',
    signature: 'No. 189, Grove St, Los Angeles',
    srcList: [],
    followings: [],
    followers: [],
    joinedCircles: []
  },
]
</script>

<style lang="scss" scoped>
.userInfo-box {
  padding: 20px 30px;
  display: flex;
  .info {
    flex: 1;
    margin-left: 40px;
    display: flex;
    justify-content: space-between;
  }
}

</style>
