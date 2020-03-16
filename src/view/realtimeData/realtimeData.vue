<template>
  <div class="realtimeData">
    <!-- 顶部header -->
    <mt-header :title="$route.meta.name">
      <router-link :to="this.$route.params.vehicleId && '/info'" slot="left" v-if='this.$route.params.vehicleId'>
        <mt-button icon="back" >返回</mt-button>
      </router-link>
      <mt-button slot="right" v-if="show&&Userid==installId">
        <mt-badge size="normal" @click.native="installed">已安装</mt-badge>
      </mt-button>
    </mt-header>
    <div class='contBox'>
    <!-- select下拉选择框 及搜索框-->
    <selection :options="optionList" @search="getCarInfoList" />
    <!-- 主体列表 -->
    <div class="realtime">
      <div
        class="realtimeBox"
        @click="detail(item)"
        v-for="(item,index) in realtimeData"
        :key="index"
      >
        <div class="index">{{index+1}}</div>
        <div class="plateCode">{{item.plateCode}}</div>
        <ul class="ul">
          <li class="li">采集时间：{{item.obdTime}}</li>
          <!-- <li>车架号：{{item.cvn}}</li> -->
          <li>车架号：{{item.vin}}</li>
        </ul>
      </div>
    </div>
    <!-- row-click的弹框内容-->
    <realtimeDataDetail :item="item" ref="realtimeDataDetail"></realtimeDataDetail>
  </div>
  </div>
</template>

<script>
import selection from "../../components/selection/selection";
import realtimeDataDetail from "./src/realtimeDataDetail";
export default {
  components: {
    selection,
    realtimeDataDetail
  },
  data() {
    return {
      show: false,
      item: {},
      plateCode: "",
      search: {
        startTime: "",
        endTime: "",
        isAnalysis:true,
        vehicleId: this.$route.params.vehicleId
          ? this.$route.params.vehicleId
          : ""
      },
      optionList: [
        { name: "车牌号", value: "plateCode" },
        { name: "ICCID", value: "ICCID" },
      ],
      realtimeData: [],
      installId:'',
    };
  },
  computed: {
    Userid(){
      return  JSON.parse(sessionStorage.getItem("userInfo")).userId
      
    }
  },
  mounted() {
    var d = new Date();
    var month = this.addZero(d.getMonth() + 1);
    var date = this.addZero(d.getDate());
    var hours = this.addZero(d.getHours());
    var minutes = this.addZero(d.getMinutes());
    var seconds = this.addZero(d.getSeconds());
    this.search.startTime =
      d.getFullYear() + "-" + month + "-" + date + " " + "00:00:00";
    this.search.endTime =
      d.getFullYear() +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    if (this.$route.params.vehicleId) {
      this.getCarInfoList();
      return;
    }
  },
  methods: {
    detail(item) {
      this.$refs.realtimeDataDetail.popupVisible = true;
      this.item = item;
    },
    goBack(){
      if(this.$route.params.vehicleId){
        this.$router.push("/info");
      }else{
        this.$router.go(-1)
      }
    },
    async getCarInfoList(params) {
      let paramsA = {
        startTime: this.search.startTime,
        endTime: this.search.endTime,
        vehicleId: this.search.vehicleId,
        isAnalysis:true,
      };
      var newData = Object.assign({}, params, paramsA);

      this.$method.loadOpen();
      this.$http({
        url: "/fix/findRealTimeDataInfo",
        params: params ? newData : this.search,
        method: "get"
      }).then(res => {
        this.$method.loadClose();
        if (res.flag) {
            this.installId=res.data.userId
            console.log(this.Userid,this.installId)
          if (res.errorCode != 208) {
            res.data.state==1?this.show=false:this.show=true;
            this.realtimeData = res.data.page.records;
            this.plateCode = res.data.page.records[0].plateCode;
            return;
          } else {
            this.realtimeData = [];
            this.show = false;
            this.$method.messageBox();
            return;
          }
        } else {
          this.realtimeData = [];
          this.show = false;
          return;
        }

      });
    },
    installed() {
      this.$http({
        url: "fix/updateFixVehicleInfo",
        params: {
          plateCode: this.plateCode ? this.plateCode : "",
          vehicleId: this.search.vehicleId
        },
        method: "POST"
      }).then(res => {
        if (res.flag) {
          this.show = false;
          this.$method.messageBox("操作成功");
          return;
        } else {
          this.show = false;
          this.$method.messageBox(this.$t[res.errorCode]);
          return;
        }
      });
    },
    addZero(data) {
      if (data < 10) {
        return (data = "0" + data);
      } else {
        return data;
      }
    }
  }
};
</script>

<style lang='less'>
.realtimeData {
  position: relative;
  font-size: 28px;
  width: 100%;
  .dataheader{
    z-index: 999;
  }
  // .installed {
  //   color: #fff;
  //   width: 140px;
  //   height: 55px;
  //   color: #1495eb;
  //   border-radius: 16px;
  // }
  .realtimeBox {
    padding: 30px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    .index {
      width: 40px;
      height: 40px;
      background: #2979ff;
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      color: #ffffff;
      font-size: 24px;
    }
    .plateCode {
      color: #333333;
      font-size: 36px;
    }
    .ul {
      font-size: 28px;
      color: #999999;
      .li {
        margin-bottom: 20px;
      }
    }
    .mint-popup {
      width: 90% !important;
      height: 90% !important;
      overflow-y: auto !important;
      border-radius: 20px;
    }
  }
  .realtime {
    position: relative;
    z-index: 8;
  }
  .realtimeBox:nth-child(1) {
    border-top: 1px solid #eeeeee;
  }
}
</style>