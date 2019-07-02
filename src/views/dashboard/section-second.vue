<template>
  <div class="section">
    <div class="title-text">
      今日趋势
    </div>
    <div class="content">
      <el-radio-group v-model="radio1">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio1: '北京',
    };
  }
}
</script>
