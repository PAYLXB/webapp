<template>
  <div class="canCash">
     <mt-header title="我的粉丝">
      <router-link to="/home/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
       <div class="card">
        <ul class="cardtext">
            <li><p>0</p>今日直推助手</li>
            <li><p>0</p>累计直推助手</li>
            <li><p>0</p>粉丝人数</li>
            <li class="cardtext1"><p>0</p>今日团队新增助手</li>
            <li class="cardtext1"><p>0</p>团队总助手</li>
        </ul>
      </div>
        <div class="detail">
          <ul class="detailBox">
            <li style="font-weight:600">13157693844</li>
            <li>VIP1</li>
            <li>助手数：0</li>
          </ul>
          <ul class="detailBox1">
            <li>ID:345922 0人</li>
            <li>注册时间：2020-02-02</li>
          </ul>
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
    padding: 60px 20px;
  }
  .cardtext{
    color: #ffffff;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .cardtext li{
    text-align: center;
    width: 33%;
  }
  .cardtext1{
    margin-top: 30px;
  }
  .detail{
    width: 100%;
    padding: 40px 30px;
    background: #eee;
    box-shadow: 0px 0px 30px #9ea1a7;
  }
  .detailBox{
    display: flex;
    justify-content: space-between;
  }
  .detailBox1{
    display: flex;
    margin-top:20px;
    justify-content: space-between;
  }
</style>
