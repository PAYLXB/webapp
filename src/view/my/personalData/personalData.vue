<template>
  <div class="canCash">
     <mt-header title="我的资料">
      <router-link to="/home/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
      <div class="card">
        <ul class="cardtext">
          <li class="text">VIP1</li>
          <li class="text1">当前财富级别</li>
          <li class="text1">等级说明</li>
          <li class="text1">冲级剩余天数：<span style="color:#0449b1">—</span>天</li>
        </ul>
        <!-- <img src="" alt=""> -->
      </div>
      <p style="margin: 20px;">我的资料</p>
      <div class="item">
         <mt-cell title="手机号" class="item1" value="12134345566"></mt-cell>
         <div style="box-shadow: 0px 0px 20px #d2d5db;">
          <mt-cell title="真实姓名" value="修改"  is-link class="item2"></mt-cell>
          <mt-cell title="支付宝收款账号" value="修改" is-link ></mt-cell>
         </div>
         <mt-cell title="微信号"  value="修改" is-link class="item1"></mt-cell>
         <div style=" box-shadow: 0px 0px 20px #d2d5db;">

            <mt-cell title="开户行" value="修改" is-link class="item2"></mt-cell>
            <mt-cell title="银行卡号"  value="修改" is-link ></mt-cell>
         </div>
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
    background: #eee;
    padding-top: 10%;
    height: 100%;
  }
  .card{
    width: 90%;
    height: 300px;
    background: linear-gradient(to right,#2f89d3,#8db5f1);
    margin: 8% 0 5% 5%;
    box-shadow: 0px 0px 30px #9ea1a7;
    border-radius: 20px;
  }
  .cardtext{
    color:#fff;
    padding: 20px 30px;
  }
  .cardtext li{
    margin-top: 20px;
  }
  .text{
    font-size: 34px;
    font-weight: 600;
  }
  .item1 {
  box-shadow: 0px 0px 20px #d2d5db;
    margin-top: 40px;
  }
  .item2 {
    margin-top: 40px;
  }

</style>
