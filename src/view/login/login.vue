<template>
  <div>
    <mt-header title="登录" class="header"></mt-header>
      <div style="margin-top:50px;font-size:16px;text-align:right;padding:25px;color:#26a2ff" @click="()=>{$router.push('/regist')}">
        注册
      </div>
    <div style="font-size:24px;margin-top:50px;margin-left:50px">
      {{hello}}

    </div>

    <div class="contBox">
      <mt-field placeholder="请输入用户名" v-model="formItem.account" class="field"></mt-field>
      <mt-field placeholder="请输入密码" type="password" v-model="formItem.password" class="field"></mt-field>
      <mt-button type="primary" @click="handleSubremovemit()" size="large" class="btn">
        <span v-if="loading">登录</span>
        <mt-spinner type="triple-bounce" color="#fff" v-if="!loading"></mt-spinner>
      </mt-button>
    </div>
    <p style="margin:30px 0 0 50px;color:#a1a1a1;">忘记密码</p>
  </div>
</template>

<script>
import { Toast, Spinner } from "mint-ui";
export default {
  data() {
    return {
      hello:'',
      formItem:{
        account:'',
        password:''
      },
      loading: true
    };
  },
  created(){
    this.getTimer()
  },
  methods: {
    /**
     * params {}
     * 登陆接口请求
     */
    getTimer(){
      let timer = new Date()
      let hours = timer.getHours()
      hours > 11 && hours <= 14
      ?
      this.hello = '中午好'
      :
      hours >14 && hours <= 20
      ?
      this.hello = '下午好'
      :
      hours >20 && hours <= 23
      ?
      this.hello = '晚上好'
      :
      hours >0 && hours <= 6
      ?
      this.hello = '凌晨好'
      :
      this.hello = '上午好'
      // console.log(timer.getHours())
    },
    handleSubremovemit() {
      if (this.formItem.account == "") {
        Toast("用户名不能为空");
        return false;
      } else if (this.formItem.password == "") {
        Toast("密码不能为空");
        return false;
      } else {
        this.loading = false;
      }
      this.$router.push("/home");
      // this.$http({
      //   url: "/login",
      //   params,
      //   method: "post"
      // })
        // .then(_ => {
        //   let { flag, data } = _;
        //   if (flag) {
        //     this.$router.push("/home");
        //   } else {
        //     // alert("登陆失败，请检查您的账号密码");
        //     // this.loading = true;
        //   }
        // })
        // .catch(err => {
        //   this.loading = true;
        // });
    }
  }
};
</script>

<style scoped>
.header {
  background: #26a2ff;
  font-size: 36px;
}
.field {
  border-bottom: 1px solid #eeeeee;
  height: 120px;
  color: #000000;
  font-size: 34px;
  padding: 0 10%;
}
.btn {
  width: 90%;
  /* height: 100px; */
  margin: 5% 0 0 5%;
  border-radius: 50px;
}
</style>