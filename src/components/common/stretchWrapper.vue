<template>
  <div class="content-wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.content-wrapper {
  width: 100%;
  min-height: calc(100vh - 300px);
  margin-top: 10px;
  background-color: #fff;
  .content {
    padding: 20px;
  }
}
</style>
