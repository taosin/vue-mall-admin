<template>
  <div class="side-menu">
    <el-menu
      :collapse="isCollapse"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
    <template v-for="(item, i) in datas">
      <el-menu-item index="2" :key="i">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    },
    datas: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      sideBg: "#409EFF",
      menus: [
        {
          title: "首页",
          path: "/dashboard"
        },
        {
          title: "用户管理",
          path: "/user",
          children: [
            {
              title: "用户列表",
              path: "list"
            },
            {
              title: "用户分析",
              path: "analisys"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less">
.side-menu {
  .el-menu {
    border: none;
  }
}
</style>
