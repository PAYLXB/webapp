<template>
  <div class="info">
    <mt-header :title="$route.meta.name">
      <!-- <router-link to slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link> -->
    </mt-header>
    <div class='contBox head'>
      <selection :options="optionList" @search="getCarInfoList" />
    <ul class="list">
      <li v-for="(item,idx) in list" :key="idx">
        <div class="title" @click="infoDetail(item)">
          <span class="plateCode">
            {{item.plateCode}}
            <span
              :class="item.f_state==1 ? 'state green' :'state purple'  "
            >{{item.f_state==1 ? '已安装' : '待确认'}}</span>
          </span>
          <span class="ent">{{item.enterpriseName}}</span>
        </div>
        <div class="rightBtn">
          <button class="btn" @click="realtimeData(item)">实时数据</button>
        </div>
      </li>
    </ul>
    </div>

  </div>
</template>
<script>
import selection from "../../components/selection/selection";
export default {
  components: {
    selection
  },
  data() {
    return {
      search: {
        plateCode: "",
        iccid: "",
        state: ""
      },
      list: [],
      optionList: [
        { name: "车牌号", value: "plateCode" },
        { name: "ICCID", value: "ICCID" },
        { name: "安装状态", value: "state" }
      ]
    };
  },
  methods: {
    selectChange() {},
    realtimeData(item) {
      this.$router.push({name:'realtimeData',params:{vehicleId:item.vehicleId,plateCode: item.plateCode }});
    },
    infoDetail(item) {
      this.$router.push({name:"Infodetails",params:{vehicleId:item.vehicleId,title:'信息查询详情'}});
    },
    async getCarInfoList(params) {
      this.$method.loadOpen();
      let { flag, data ,errorCode} = await this.$http({
        url: "fixVehicle/findFixEvVehiclePage",
        params: params ? params : this.search
      });
      this.$method.loadClose();
      (flag && errorCode !=208) ? (this.list = data.records) : (this.list = [],this.$method.messageBox());
    }
  },
  mounted() {
    this.getCarInfoList();
  }
};
</script>

<style  scoped lang="less">
.info {
  height: 100%;
  .head {
    border: 1px solid #eee;
  }
  .list {
    padding: 0px 30px;
    height: 100%;
    overflow: auto;
    li {
      border-bottom: 1px solid #eee;
      padding: 46px 0px;
      display: flex;
      line-height: 60px;
      .title {
        flex: 1;
        .plateCode {
          vertical-align: middle;
          font-size: 36px;
          color: #333333;
          .state {
            font-size: 12px;
            margin-left: 38px;
            border-radius: 2px;
            border-radius: 2px;
            font-size: 24px;
            padding: 5px;
          }
          .green {
            background: rgba(57, 182, 73, 0.1);
            color: #39b649;
          }
          .purple {
            background: rgba(189, 16, 224, 0.1);
            color: #bd10e0;
          }
        }
        .ent {
          font-size: 28px;
          color: #999999;
          display: block;
          margin-top: 10px;
        }
      }
      .rightBtn {
        color: #888;
        display: flex;
        align-items: center;
        .btn {
          color: #fff;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 30px;
          padding: 24px 14px;
          background: #26a2ff;
        }
      }
    }
  }
}
</style>