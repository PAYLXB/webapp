<template>
  <div class="myPage">
        <mt-header title="我的"></mt-header>
        <div class="myHeader">
          <img src="../../assets/images/douyin.jpg" alt="" class="helperImg">
          <ul>
            <li class="userClass">
              <p style="font-weight:600;font-size:16px">15000269884</p>
            </li>
            <li class="userClass">
              <p class="userColor">ID:028332</p>
              <p class="userColor">等级:VIP1</p>
            </li>
            <li class="userClass">
              <p class="userColor">上级ID:284622</p>
              <p class="userColor">微信:15000269884</p>
              <p>复制</p>
            </li>
          </ul>
        </div>
         <div class="createBox">
            <ul class="createDetail">
                <li class="detail">
                    <p>我的余额</p>
                    <p style="margin-top:7px;font-size:22px;font-weight:600">￥0.00</p>
                </li>
                <li class="detail">
                    <p>已提现金额</p>
                    <p style="margin-top:7px;font-size:22px;font-weight:600">￥0.00</p>
                </li>
                <li class="detail">
                    <p>可提现金额</p>
                    <p style="margin-top:7px;font-size:22px;font-weight:600">￥0.00</p>
                </li>
            </ul>
            <div class="btnBox">
              <mt-button type="primary" class="apple" @click="recharge()">我要充值</mt-button>
              <mt-button type="primary" class="apple" @click="toCash()">我要提现</mt-button>
            </div>
        </div>
        <ul class="list">
          <li class="listLi" @click="goAssistant()">
            <img src="../../assets/images/douyin.jpg" alt="" class="listImg">
            <p>在岗助手</p>
          </li>
          <li class="listLi" @click="goMyFans()">
            <img src="../../assets/images/douyin.jpg" alt="" class="listImg">
            <p>我的粉丝</p>
          </li>
          <li class="listLi" @click="goIncome()">
            <img src="../../assets/images/douyin.jpg" alt="" class="listImg">
            <p>收入明细</p>
          </li>
          <li class="listLi" @click="goFriend()">
            <img src="../../assets/images/douyin.jpg" alt="" class="listImg">
            <p>邀请好友</p>
          </li>
        </ul>
        <div>
          <mt-cell title="可提现转账" to="/canCash" icon="more" is-link></mt-cell>
          <mt-cell title="个人资料" to="/personalData" icon="more" is-link></mt-cell>
          <mt-cell title="账户安全" to="/accountSecarity" icon="more" is-link></mt-cell>
          <mt-cell title="设置中心" to="/setCenter" icon="more" is-link></mt-cell>
          <mt-cell title="在线客服(7：00~2：00)" icon="more" is-link></mt-cell>
        </div>
        <mt-button type="primary" size="large" class="btn" @click="handleSubremovemit()">退出登录</mt-button>
        <!-- <Footbar></Footbar> -->
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
    handleSubremovemit(){this.$router.push("/login");},
    recharge(){this.$router.push("/recharge")},
    toCash(){this.$router.push("/toCash")},
    goAssistant(){this.$router.push("/assistant")},
    goMyFans(){this.$router.push("/myFans")},
    goIncome(){this.$router.push("/income")},
    goFriend(){this.$router.push("/friend")},

  },

  watch: {
  }
};
</script>

<style scoped>
.myPage{
  background: #eeeeee;
  padding-bottom:20px ;
}
.myHeader{
  background: #ffffff;
  padding:30px 20px 20px 20px ;
  display: flex;
  justify-content: flex-start;
  box-shadow: 5px 5px 10px #cccaca;
  margin-top: 90px;
}
.helperImg{
  width:150px;
  height: 150px;
  margin-right: 20px;
}
.userClass{
  display: flex;
  justify-content: flex-start;
}
.userColor{
  color: #a1a1a1;
  font-size: 18px;
  margin:20px 20px 0 0;
}


.createBox{
    background: linear-gradient(to right,#2f89d3,#8db5f1);
    padding: 20px 20px 40px 20px;
    color: #ffffff;
    margin:30px 0 30px 0;
    box-shadow: 5px 5px 10px #cccaca;
}
.create{
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}
.createDetail{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.detail{
    text-align: center;
}
.day{
    color: red;
    font-size: 60px;
    margin-left: 20px;
    margin-right: 20px;
}
.btnBox{
    display: flex;
  justify-content: space-around;
}
.apple{
    height: 60px;
    border-radius: 30px;
    margin-top: 30px;
    background: #ffffff;
    color: #2f89d3;
}


.list{
  background: #ffffff;
  padding: 50px 20px 50px 20px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  box-shadow: 5px 5px 10px #cccaca;
}
.listImg{
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
.listLi{
    text-align: center;
}


.btn{
  margin:40px 0;
  color:#2f89d3;
  background: #fff;
  font-size: 30px;
  box-shadow: 5px 5px 10px #cccaca;
}
</style>