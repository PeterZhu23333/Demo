<template>
  <div>
    <el-button>123</el-button>
  </div>
</template>

<script>
// {} 命名导出
import { registerAPI } from './api'
export default {
  async created () {
    const res = await registerAPI()
    console.log(res);
  }
}
</script>

<style>
</style>