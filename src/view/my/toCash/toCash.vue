<template>
  <div class="canCash">
     <mt-header title="我要提现">
      <router-link to="/home/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
        <mt-button  slot="right">提现记录</mt-button>
    </mt-header>
      <div class="money">
        <p>我的可提现余额为：0.00元</p>
        <div class="count">
          <p class="single">¥</p>
          <mt-field  type="tel" v-model="phone" style="border-top:none"></mt-field>
          <p style="color:#2f89d3">全部提现</p>
        </div>
      </div>
      <p class="money">提现到</p>
      <div class="money">
        <p>体现说明</p>
        <p>体现说明敬请期待！</p>
      </div>
 <mt-button type="primary" @click="handleSubremovemit()" size="large" class="btn">
        <span>提现</span>
      </mt-button>
    </div>
</template>
<script>
// import Footbar from "../../components/footBar/footBar"
export default {
  data() {
    return {
      phone:""
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
  background: #eee;
  height: 100%;
}
.money{
  margin-top: 90px;
  padding: 20px 30px;
  background: #ffffff;
  border-bottom: 1px solid #eee;
    box-shadow: 0px 0px 30px #d6d8db;
}
.single{
  font-size: 40px;
  font-weight: 600;
}
.count{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn {
  width: 90%;
  /* height: 100px; */
  margin: 70% 0 0 5%;
  border-radius: 50px;
}
</style>
