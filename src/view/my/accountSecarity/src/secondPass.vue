<template>
  <div class="canCash">
    <mt-header title="修改二级密码">
      <router-link to="/accountSecarity" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <p class="two">设置二级密码</p>
    <p style="color:#555;margin:5% 0 0 5%;">为了您的财产安全，请设置二级密码，请勿和登录密码一致</p>
    <div class="pass">
      <mt-field placeholder="请填写二级密码" type="password" v-model="password1"></mt-field>
      <mt-field placeholder="请再次确认二级密码" type="password" v-model="password2"></mt-field>
    </div>
    <mt-button type="primary" @click="handleSubremovemit()" size="large" class="btn">
      <span >提交</span>
    </mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        password1:"",
        password2:"",
    };
  },
  methods: {},

  watch: {}
};
</script>

<style scoped>
.canCash {
  margin-top: 90px;
}
.two{
  margin: 30% 0 0 5%;
    font-size: 40px;
    font-weight: 600;
}
.pass {
  margin: 15% 0 0 5%;
  width: 90%;
}
.btn {
  width: 90%;
  /* height: 100px; */
  margin: 10% 0 10% 5%;
  border-radius: 50px;
  background: linear-gradient(to right,#2f89d3,#8db5f1);
}
</style>
