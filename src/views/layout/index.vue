<template>
  <div class="layout container">
    <aside class="left-aside" :style="{width: collspan?'64px':'200px'}">
      <h3 v-show="!collspan">{{site_title}}</h3>
      <menu-side :isCollapse="collspan"></menu-side>
      <div class="bottom-collspan">
        <el-button type="text" :icon="collspan?'el-icon-arrow-right':'el-icon-arrow-left'" @click="collspan=!collspan"></el-button>
      </div>
    </aside>
    <main class="right-container" :style="{left: collspan?'64px':'200px'}">
      <header class="top-header">
        <top-header></top-header>
      </header>
      <main class="main-container">
        <router-view> </router-view>
      </main>
    </main>
  </div>
</template>
<script>
import menuSide from "./menu-side";
import topHeader from "./top-header";
export default {
  components: {
    menuSide,
    topHeader
  },
  data() {
    return {
      site_title: '欢迎使用电商运营后台',
      collspan: false
    };
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .left-aside,
  .right-container {
    position: absolute;
    bottom: 0;
    top: 0;
  }
  .left-aside {
    left: 0;
    width: 200px;
    // border-right: 1px solid;
    box-sizing: border-box;
    background-color: #545c64;
    transition: .3s;
    .bottom-collspan{
      position: absolute;
      bottom: 0;
      width: inherit;
      .el-button{
        color: #fff;
      }
    }
  }
  .right-container {
    right: 0;
    left: 200px;
    transition: .3s;
    .top-header {
      position: relative;
      height: 60px;
      border-bottom: 1px solid #ddd;
      line-height: 60px;
      display: flex;
      flex-direction: row-reverse;
      padding-right: 20px;
    }
  }
}
</style>
