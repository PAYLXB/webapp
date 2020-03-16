<template>
  <div>
    <mt-header title="登录" class="header"></mt-header>
    <div class="contBox">
      <mt-field label="公司编号" placeholder="请输入公司编号" v-model="enterpriseCode" class="field"></mt-field>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="account" class="field"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" class="field"></mt-field>
      <mt-button type="primary" @click="handleSubremovemit()" size="large" class="btn">
        <span v-if="loading">登录</span>
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
      enterpriseCode: "",
      account: "",
      password: "",
      loading: true
    };
  },
  methods: {
    /**
     * params {}
     * 登陆接口请求
     */
    handleSubremovemit() {
      let params = {
        enterpriseCode: this.enterpriseCode,
        account: this.account,
        password: this.$password.$SHA512(
          this.$password.$SHA512(this.password) + "&" + this.account
        ),
        language: "zh_CN"
      };
      if (this.enterpriseCode == "") {
        Toast("公司编号不能为空");
        return false;
      } else if (this.account == "") {
        Toast("用户名不能为空");
        return false;
      } else if (this.password == "") {
        Toast("密码不能为空");
        return false;
      } else {
        this.loading = false;
      }
      this.$http({
        url: "/login",
        params,
        method: "post"
      })
        .then(_ => {
          let { flag, data } = _;
          if (flag) {
            sessionStorage.setItem(
              "userInfo",
              JSON.stringify({
                userId: data.userId,
                username: data.userInfo.username,
                enterpriseName: data.userInfo.enterpriseName
              })
            );
            this.$router.push("/home");
          } else {
            alert("登陆失败，请检查您的账号密码");
            this.loading = true;
          }
        })
        .catch(err => {
          this.loading = true;
        });
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
}
.btn {
  width: 90%;
  margin: 5% 0 0 5%;
}
</style>