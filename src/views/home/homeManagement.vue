<template>
  <div class="container pd-0-20">
    <div class="tab-content-header">
      <span>Home Page Carousel</span>
    </div>

    <div class="upload-container">
      <div class="image-preview" v-if="srcList.length">
        <div v-for="(img,index) in srcList" :key="index">
          <el-image 
            :src="img"
            :zoom-rate="1.2"
            :preview-src-list="srcList"
            :initial-index="index"
            fit="cover"
            class="image-item"
          />
          <div class="delete-icon" @click="handleRemove(img)"><el-icon><CloseBold /></el-icon></div>
        </div>
      </div>
      <el-upload
        action="http://127.0.0.1:3012/file/upload"
        limit="5"
        list-type="picture-card"
        accept=".jpg, .jpeg, .png"
        :on-preview="handlePictureCardPreview"
        :before-remove="handleBeforeRomove"
        :on-success="uploadSuccess"
        :show-file-list="false"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, toRaw } from 'vue'
import { Plus,CloseBold  } from '@element-plus/icons-vue'
import { FileService, getEvent } from '../../api/all'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const srcList = ref([])

const initData = async () => {
  const res = await getEvent('/carousel')
  if (res.code === 0) {
    srcList.value = res.data
  }
}
onMounted(() => {
  initData()
})

const handleRemove = async (img) => {
  let filename = img.split('/').pop()
  const result = await FileService.delete({ filename })
  if (result.code === 0) {
    srcList.value = srcList.value.filter(item => item !== img)
  }
}

const handlePictureCardPreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}

const uploadSuccess = (response) => {
  srcList.value.push(response.url)
}



</script>

<style lang="scss" scoped>
.upload-container {
  width: 50%;
  padding: 50px;
  border: 1px solid #f4f3f4;
  display: flex;

  .image-preview {
    position: relative;
    display: flex;
    flex-direction: row;
    .image-item {
      width: 148px; 
      height: 148px;
      margin: 0 10px;
    }
    .delete-icon {
      width: 20px;
      height: 20px;
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: -5px;
      right: 5px;
      text-align: center;
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
  }
}
</style>
