<template>
  <div class="section">
    <div class="title-text">
      今日趋势
    </div>
    <div class="content">
      <el-radio-group v-model="radio1">
        <template v-for="(item,index)
         of items">
          <el-radio-button :label="item.text" :key="index"></el-radio-button>
        </template>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: "0",
      items: [
        { text: "订单金额", val: "order-cash" },
        { text: "实收金额", val: "order-cash" },
        { text: "订单数", val: "order-cash" },
        { text: "下单人数", val: "order-cash" },
        { text: "经毛利率", val: "order-cash" },
        { text: "新客数", val: "order-cash" }
      ]
    };
  }
};
</script>
