<template>
  <div>
    <el-dropdown split-button @click="handleClick" @command="handleCommand">
      <i class="el-icon-service"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="e" >个人信息</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    handleCommand(command) {
      if (command === 'logout') return this.$router.push({path: '/login'})
    },
    handleClick(){
        console.log(1231);
    }
  }
};
</script>