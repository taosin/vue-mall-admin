<template>
  <div class="section">
    <div class="title-text">
      核心指标
    </div>
    <div class="content">
      <el-row :gutter="20">
        <template v-for="(item, index) in items">
          <el-col :span="6" :key="index">
            <div class="card">
              <i :class="item.icon"></i>
              <div class="title-and-value">
                <p>
                  {{ item.title }}
                </p>
                <p class="money">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </el-col>
        </template>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      items: [
        {
          title: "订单金额",
          value: 3232.12,
          tip: "今日已支付订单金额汇总",
          icon: "el-icon-money"
        },
        {
          title: "实收金额",
          value: 3232.12,
          tip: "今日已支付订单实收金额汇总",
          icon: "el-icon-s-order"
        },
        {
          title: "订单总数",
          value: 3232.12,
          tip: "今日已支付订单数量汇总",
          icon: "el-icon-s-order"
        },
        {
          title: "注册用户",
          value: 3232.12,
          tip: "今日新注册用户数量汇总",
          icon: "el-icon-user"
        }
      ]
    };
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="less">
.section {
  width: inherit;
  .card {
    border: 1px solid;
    display: flex;
    align-items: center;
    padding: 15px 30px;
    i {
      font-size: 60px;
    }
  }
}
</style>
