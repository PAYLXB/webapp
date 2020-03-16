<template>
  <div style="position:relative">
    <mt-popup
      v-model="popupVisible"
      position="top"
      popup-transition="popup-fade"
      style="height:90%;width:80%;top:20px;overflow-y:auto;border-radius:20px"
    >
      <div class="dataDetail">
        <ul class="dataDetailBox">
          <div class="close" @click="popupVisible = false"></div>
          <p class="detailTitle">{{item.plateCode}}</p>
          <li>车架号：{{item.vin}}</li>
          <li>车速(km/h)：{{item.speed}}</li>
          <li>发动机净输出扭矩(%)：{{item.torqueOut}}</li>
          <li>摩擦扭矩百分比(%)：{{item.torqueRub}}</li>
          <li>发动机转速(rpm)：{{item.rotate}}</li>
          <li>发动机燃料流量(L/h)：{{item.fuelFlow}}</li>
          <li>SCR上游NOx传感器输出值：{{item.scrNOxUp}}</li>
          <li>SCR下游NOx传感器输出值：{{item.scrNOxDown}}</li>
          <li>反应剂余量(%)：{{item.reactant}}</li>
          <li>进气量(kg/h)：{{item.gasIn}}</li>
          <li>SCR进口温度(°C)：{{item.scrTempIn}}</li>
          <li>SCR出口温度(°C)：{{item.scrTempOut}}</li>
          <li>发动机冷却液温度(°C)：{{item.coolantTemp}}</li>
          <li>油箱液位(%)：{{item.fuelSensor}}</li>
          <li>定位状态：{{item.locateStatus==0?'有效定位':'无效定位'}}</li>
          <li>经度：{{item.longitude}}</li>
          <li>纬度：{{item.latitude}}</li>
          <li>累计里程(总行驶里程km)：{{item.mileage}}</li>
          <li>扭矩模式：{{item.torqueMode}}</li>
          <li>油门踏板：{{item.throttlePedal}}</li>
          <li>累计油耗(L)：{{item.fuel}}</li>
          <li>尿素箱温度(°C)：{{item.ureaboxTemp}}</li>
          <li>实际尿素喷射量(ml/h)：{{item.actualUreaInjection}}</li>
          <li>累计尿素消耗(g)：{{item.ureaConsumption}}</li>
          <li>DPF排气温度(°C)：{{item.dpfExhaustTemp}}</li>
          <li>OBD诊断协议：{{item.obdState}}</li>
          <li>MIL状态：{{item.milState}}</li>
          <li>软件标定识别号：{{item.softNo}}</li>
          <li>标定验证码：{{item.cvn}}</li>
          <li>故障码总数：{{item.faultCount}}</li>
          <li>故障码信息列表：{{item.faultList}}</li>
          <li>数据入库时间：{{item.dateTime}}</li>
          <li>采集时间：{{item.recvTime}}</li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  props: {
    item: {}
  },
  data() {
    return {
      dataDetail: {},
      popupVisible: false
    };
  },
  watch: {
  },
};
</script>

<style scoped>
.dataDetail {
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.dataDetailBox {
  position: relative;
  padding: 20px;
  width: 100%;
  background: #ffffff;
  list-style: none;
  box-sizing: border-box;
}
.dataDetailBox li {
  margin-top: 15px;
}
.close {
  position: fixed;
  right: 20px;
  width: 40px;
  height: 40px;
  background-image: url("../../../assets/images/delete.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.detailTitle {
  font-size: 40px;
  color: #333333;
  font-weight: 600;
}
</style>