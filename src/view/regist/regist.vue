<template>
  <div>
    <mt-header title="登录" class="header"></mt-header>
    <div style="font-size:24px;margin-top:100px;margin-left:50px">{{hello}}</div>

    <div class="contBox">
      <mt-field placeholder="手机号" v-model="formItem.phoneNu" class="field"></mt-field>
      <mt-field placeholder="短信验证码" v-model="formItem.messageCode" class="field">
        <p>发送</p>
      </mt-field>
      <mt-field placeholder="邀请码" v-model="formItem.invateCode" class="field"></mt-field>
      <mt-field placeholder="登录密码" type="password" v-model="formItem.password" class="field"></mt-field>
      <mt-field placeholder="确认登录密码" type="password" v-model="formItem.comfire" class="field"></mt-field>
      <input  v-model="value" type="checkbox"  style="margin:15px 6px 0 31px"/>
      <span v-if="loading">我已查看并阅读<a href="javascript:;">《注册协议》</a>、<a href="javascript:;">隐私保护政策</a></span>


      <mt-button type="primary" @click="handleSubremovemit()" size="large" class="btn">
        <span v-if="loading">注册</span>
        <mt-spinner type="triple-bounce" color="#fff" v-if="!loading"></mt-spinner>
      </mt-button>
    </div>
  </div>
</template>

<script>
import { Toast, Spinner } from "mint-ui";
export default {
  data() {
    return {
      hello: "注册",
      formItem: {
        phoneNu: "",
        password: "",
        messageCode: "",
        invateCode: "",
        comfire: ""
      },
      loading: true,
      value:[]
    };
  },
  methods: {
    /**
     * params {}
     * 登陆接口请求
     */

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