<template>
  <div class="user-list view">
    <div class="search-bar">
      <el-form :inline="true" :model="formInline" label-width="80px" label-position="left">
        <el-form-item label="用户名称">
          <el-input v-model="formInline.user" placeholder="审批人" class="form-width"></el-input>
        </el-form-item>
        <el-form-item label="用户 ID">
          <el-input v-model="formInline.user" placeholder="审批人" class="form-width"></el-input>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-select v-model="formInline.region" placeholder="请选择" class="form-width">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="当前状态">
          <el-select v-model="formInline.region" placeholder="请选择" class="form-width">
            <el-option label="已审核" value="shanghai"></el-option>
            <el-option label="未审核" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="default" @click="onSubmit">重置</el-button>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tab-bar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="已上线" name="first"></el-tab-pane>
        <el-tab-pane label="未上线" name="second"></el-tab-pane>
      </el-tabs>
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
