<template>
  <div class="user-list view">
    <div class="search-bar">
      <el-form :inline="true" :model="formInline" label-width="80px" label-position="left">
        <el-form-item label="订单号">
          <el-input v-model="formInline.user" placeholder="请输入订单号" class="form-width"></el-input>
        </el-form-item>
        <el-form-item label="收件人">
          <el-input v-model="formInline.user" placeholder="收件人姓名/手机号" class="form-width"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="formInline.region" placeholder="请选择" class="form-width">
            <el-option label="已审核" value="shanghai"></el-option>
            <el-option label="未审核" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="交易时间">
          <el-date-picker
            v-model="value2"
            type="datetimerange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00', '08:00:00']"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="订单来源">
          <el-select v-model="formInline.region" placeholder="请选择" class="form-width">
            <el-option label="线上" value="shanghai"></el-option>
            <el-option label="线下" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="default" @click="onSubmit">重置</el-button>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-list">
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="footer-pagination">
      <el-pagination background layout="total, prev, pager, next, jumper" :total="1000"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-list",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      activeName: "first",
      value2: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less">
.user-list {
  .search-bar {
    .form-width {
      width: 220px;
    }
  }
}
</style>
