<template>
  <div class="home">
    <mt-header title="首页"></mt-header>
    <div class='contBox'>
    <div class="header">
      <img src="../../assets/images/user.png" class="img" />
      <div class="text">
        <span class="ent">{{this._userInfo.enterpriseName}}</span>
        <span class="user">{{this._userInfo.username}}</span>
      </div>
    </div>
    <div class="content">
      <div class="div">
        <span class="content-text">已安装</span>
        <div class="circle blue">{{this.fixNum.fixNo}}</div>
      </div>
      <div class="div marginLeft">
        <span class="content-text">不能安装</span>
        <div class="circle orange">{{this.fixNum.cannotFixNo}}</div>
      </div>
      <div class="div marginLeft">
        <span class="content-text">今日安装</span>
        <div class="circle green">{{this.fixNum.todayFixNo}}</div>
      </div>
    </div>
    <div class="footer">
      <div class="mune-title">菜单</div>
      <div class="mune-btn">
        <div>
          <div class="btn1 btn" @click="goInfoDeatil" v-if="power['安装']"></div>
          <div class="btn3 btn" @click="goRealtime" v-if="power['实时数据']"></div>
        </div>
        <div>
          <div class="btn2 btn" @click="goInfo" v-if="power['信息查询']"></div>
          <div class="btn4 btn" @click="goUnable" v-if="power['不能安装记录']"></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
computed:{
    _userInfo(){
        return JSON.parse(sessionStorage.getItem("userInfo"));
    }
},
  data() {
    return {
      fixNum: {
        cannotFixNo: 0,
        fixNo: 0,
        todayFixNo: 0
      },
      power: {}
    };
  },
  methods: {
    goInfoDeatil() {
      this.$router.push("/installService");
    },
    goInfo() {
      this.$router.push("/info");
    },
    goRealtime() {
      this.$router.push("/realtimeData");
    },
    goUnable() {
      this.$router.push("/unableToList");
    },
    async getInstallationRecord() {
      let { flag, data } = await this.$http({
        url: "/home/getInstallationRecord",
        method: "get"
      });
      flag && (this.fixNum = data);
    },
    setMune(data) {
      this.power = {};
      data.map((item, idx) => {
        if (item.id == 5 && item.child[0].child.length > 0) {
          let lists = item.child[0].child;
          lists.forEach((list, idx) => {
            this.power[list.title] = true;
          });
        }
      });
    },
    async getRoleMune() {
      let { flag, data } = await this.$http({
        url: "/rolemenu/findMenuTree",
        method: "get"
      });
      flag && this.setMune(data);
    }
  },
  mounted() {
    this.getInstallationRecord();
    this.getRoleMune();
  }
};
</script>
<style lang="less" scoped>
.home {
  background-color: #f1f1f1;
  .header {
    display: flex;
    background: #656b79;
    padding: 63.5px 0px 27.5px 41px;
    margin: 0px;
    .img {
      width: 120px;
      height: 120px;
    }
    .text {
      color: #ffffff;
      margin-left: 32px;
      flex: 1;
      .ent {
        font-family: PingFangSC-Medium;
        font-size: 34px;
        vertical-align: super;
      }
      .user {
        font-family: PingFangSC-Regular;
        font-size: 28px;
        display: block;
      }
    }
  }
  .content {
    padding: 56px 50px 48px 50px;
    background: #ffffff;
    display: flex;
    .content-text {
      font-family: PingFangSC-Medium;
      font-size: 32px;
      color: #0d0e15;
    }
    .marginLeft {
      margin-left: 25px;
    }
    .div {
      text-align: center;
      text-align: -webkit-center;
      .circle {
        width: 160px;
        height: 160px;
        line-height: 160px;
        vertical-align: middle;
        border-radius: 100%;
        color: #fff;
        text-align: center;
        font-size: 46px;
        margin-top: 40px;
      }
      .blue {
        background: #23bfff;
        background-clip: padding-box;
        border: 11px solid rgba(35, 191, 255, 0.2);
      }
      .orange {
        background: #f4731c;
        border: 11px solid rgba(239, 69, 60, 0.2);
        background-clip: padding-box;
      }
      .green {
        background: #9cdd5d;
        border: 11px solid rgba(156, 221, 93, 0.2);
        background-clip: padding-box;
      }
    }
  }
  .footer {
    padding: 36px 36px 36px 36px;
    margin-top: 25px;
    background-color: #fff;
    .mune-title {
      font-family: PingFangSC-Semibold;
      font-size: 36px;
      color: #0d0e15;
    }
    .mune-btn {
      display: flex;
      margin-top: 35px;
      .btn {
        width: 300px;
        height: 180px;
        margin-bottom: 35px;
      }
      .btn1 {
        margin-right: 35px;
        background-image: url("../../assets/images/fix.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
      .btn2 {
        background-image: url("../../assets/images/infoSeach.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
      .btn3 {
        margin-right: 35px;
        background-image: url("../../assets/images/realtime.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
      .btn4 {
        background-image: url("../../assets/images/unfix.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>