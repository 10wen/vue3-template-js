<template>
  <div class="locale-changer">
    <el-select v-model="$i18n.locale" style="border: none;" size="small">
      <!-- <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option> -->
      <el-option v-for="locale in langs" :key="`locale-${locale.value}`" 
        :value="locale.value" 
        :label="locale.label"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
// import { useI18n } from 'vue-i18n'
// const { locale, t } = useI18n()
// locale.value = 'zh_CN'

// import I18n from '../i18n'
// I18n.global.locale = 'zh_CN'

const langs = [
  { label: 'EN', value: 'en_US'},
  { label: '简', value: 'zh_CN'},
  { label: '繁', value: 'zh_HK'},
]
</script>

<style lang="scss" scoped>
.locale-changer {
  width: 60px;
  margin-right: 5px;
  border: none;
}
</style>