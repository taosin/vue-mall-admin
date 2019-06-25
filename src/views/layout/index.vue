<template>
  <div class="layout container">
    <aside class="left-aside">dasdad</aside>
    <main class="right-container">
      <header class="top-header">dadasda</header>
      <main class="main-container">
          dadad
        <router-view> </router-view>
      </main>
    </main>
  </div>
</template>

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
        border-right: 1px solid;
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
