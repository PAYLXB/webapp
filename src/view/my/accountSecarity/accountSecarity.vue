<template>
  <div class="canCash">
     <mt-header title="账户安全">
      <router-link to="/home/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
     <div>
      <mt-cell title="修改登录密码" to="/loginPass"  is-link></mt-cell>
      <mt-cell title="修改二级密码" to="/secondPass"  is-link></mt-cell>
    </div>
    </div>
</template>
<script>
// import Footbar from "../../components/footBar/footBar"
export default {
  data() {
    return {
    };
  },
//   components:{Footbar},
  methods: {
    /**
     * params {}
     * 登陆接口请求
     */


  },

  watch: {
  }
};
</script>

<style scoped>
  .canCash{
    margin-top: 90px;
  }
</style>
