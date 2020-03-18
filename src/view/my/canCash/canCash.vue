<template>
  <div class="canCash">
    <mt-header title="可提现互转">
      <router-link to="/home/my" slot="left">
        <mt-button icon="back"></mt-button>
<!--        <mt-button @click="handleClose"></mt-button>-->
      </router-link>
      <mt-button  slot="right">提现记录</mt-button>
    </mt-header>
       <mt-field label="我可提现余额：" v-model="money" class="item1" readonly></mt-field>
      <div class="item">
        <mt-field label="收款人ID：" placeholder="请输入收款人ID" v-model="username"></mt-field>
        <mt-field label="转出金额：" placeholder="请输入转出金额" v-model="username"></mt-field>
        <mt-field label="手续费(0%)：" v-model="username" readonly></mt-field>
        <mt-field label="二级密码：" placeholder="请输入二级密码" v-model="username"></mt-field>
      </div>

    <mt-button type="primary" @click="handleSubremovemit()" size="large" class="btn">
      <span >立即转出</span>
    </mt-button>
    </div>
</template>
<script>
// import Footbar from "../../components/footBar/footBar"
export default {
  data() {
    return {
      money:"000"
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
    background: #eee;
    padding-top: 20%;
    height: 100%;
  }
  .item{

  margin-top: 6%;
  box-shadow: 0px 0px 20px #d2d5db;
  }
.item1 {
  box-shadow: 0px 0px 20px #d2d5db;
}

.btn {
  width: 90%;
  /* height: 100px; */
  margin: 10% 0 10% 5%;
  border-radius: 50px;
  background: linear-gradient(to right,#2f89d3,#8db5f1);
}
</style>
