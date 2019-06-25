<template>
  <div class="login">
    <div class="bg"></div>
    <div class="login-container">
        <el-form label-width="66px" :model="formLogin" label-position="left" :rules="rules" ref="ruleForm" hide-required-asterisk>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="formLogin.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="formLogin.password" placeholder="请输入密码"></el-input>
            </el-form-item>
        </el-form>
        <div class="full-width">
            <el-button type="primary" @click="submitLogin" :loading="loading">登录</el-button>
        </div>
    </div>
  </div>
</template>
<script>
export default{
    data(){
        return{
            formLogin: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
                ]
            },
            loading: false
         };
    },
    mounted(){
    },
    watch:{
    },
    computed:{
    },
    methods:{
        submitLogin(){
            this.$refs.ruleForm.validate(valid => {
                if(valid){
                    this.handlerLogin();
                }else{
                    console.log('failure');
                    return false
                }
            })
        },
        handlerLogin(){
            const self = this
            self.loading = true;
            setTimeout(()=>{
                self.loading = false;
                self.$router.push({path:'/dashboard'})
            },3000);
        },
    }
};
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  .bg {
    height: inherit;
    background-image: url("../assets/background.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .login-container{
      position: absolute;
      top: 25vh;
      right: 10vh;
      width: 300px;
      padding: 40px 20px;
      border-radius: 4px;
      background-color: #fff;
      .full-width{
          .el-button{
              width: 100%;
          }
      }
  }
}
</style>
