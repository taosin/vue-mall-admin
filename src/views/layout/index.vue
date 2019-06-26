<template>
  <div class="layout container">
    <aside class="left-aside">
      <h3>欢迎使用电商运营后台</h3>
      <menu-side></menu-side>
    </aside>
    <main class="right-container">
      <header class="top-header">dadasda</header>
      <main class="main-container">
        <router-view> </router-view>
      </main>
    </main>
  </div>
</template>
<script>
import menuSide from './menu-side';

export default{
    components:{
        menuSide
    },
    data(){
        return{
         };
    },
    mounted(){
    },
    watch:{
    },
    computed:{
   },
    methods:{
    }
};
</script>
<style lang="less" scoped>
.layout{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .left-aside,.right-container{
        position: absolute;
        bottom: 0;
        top: 0;
    }
    .left-aside{
        left: 0;
        width: 200px;
        // border-right: 1px solid;
        box-sizing: border-box;
        background-color: #5893d4;
    }
    .right-container{
        right: 0;
        left: 200px;
        .top-header{
            position: relative;
            height: 60px;
            border-bottom: 1px solid #ddd;
        }
    }
}
</style>
