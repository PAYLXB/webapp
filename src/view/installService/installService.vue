<template>
  <div class="installService">
    <mt-header :title="$route.meta.name">
      <router-link :to="$route.meta.name=='信息查询详情' ? '/info' :'/home'" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="realTime">
        <mt-badge size="normal" v-if="$route.meta.name=='信息查询详情'">实时数据</mt-badge>
      </mt-button>
    </mt-header>
    <div class="contBox">
      <!-- 点击图片弹出 -->
      <mt-popup v-model="popupVisible" v-if='popupVisible' popup-transition="popup-fade" >
        <mt-swipe   :show-indicators="true" :defaultIndex='popuptIndex'>
          <mt-swipe-item v-for="item in srcList" :key="item.name"  >
            <img :src="$COMMON.fileUrl+item.src" />
          </mt-swipe-item>
        </mt-swipe>
      </mt-popup>
      <plateNumber v-show="plateNflag" class="plateNumber" @getplatelicense="getPlate"></plateNumber>
      <mt-field
        label="车牌号"
        placeholder="请输入车牌信息"
        @focus.native.capture="plateNflag=true"
        v-model="plateCode"
      ></mt-field>
      <mt-field label="车牌颜色" v-model="plateColor" :disabled="true"></mt-field>
      <mt-field label="VIN" v-model="carVin" :disabled="true"></mt-field>
      <mt-field label="企业名称" v-model="enterpriseName" :disabled="true"></mt-field>
      <mt-field label="排放标准" v-model="pf" :disabled="true"></mt-field>
      <mt-field label="设备ID" placeholder="请输入设备ID查询" v-model="terminalCode">
        <mt-badge
          size="normal"
          class="badge"
          @click.native="getterminalA"
          v-if="$route.meta.name!='信息查询详情'"
        >查询</mt-badge>
      </mt-field>
      <mt-field label="ICCID" v-model="iccid" :disabled="true"></mt-field>
      <mt-field label="地址" v-model="address"></mt-field>

      <ul>
        <li v-for="(item,idx) in imageList" :key="idx">
          <div>
            <upload
              :obj="item"
              @loadEnd="loadEnd"
              @deleteImg="deleteImg"
              @clickImg='showpopup'
              :power="$route.meta.name=='信息查询详情' ? 'look' : 'edit'"
            />
            <div>{{item.name}}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="but" v-if="$route.meta.name!='信息查询详情'">
      <mt-button type="primary" @click="submit">提交</mt-button>
    </div>
  </div>
</template>

<script>
import plateNumber from "../../components/plateNumber/plateNumber";
import upload from "../../components/upload/upload";
import {
  getPlateLicense,
  uploadImg,
  fixEvVehicle,
  getTerminalByCode,
  findFixVehicleDetail,
  getAddress
} from "../../API/index";
export default {
  components: {
    upload,
    plateNumber
  },
  data() {
    return {
      popuptIndex:3,
      popupVisible: false,
      plateCode: "", //车牌号
      plateColor: "", //车颜色
      carVin: "", //vin
      iccid: "", //iccid
      enterpriseName: "", //企业名称
      pf: "", //排放标准
      terminalCode: "", //设备id
      terminalId: "", //设备id
      address: "", //地址
      plateNflag: false, //显示车牌键盘
      imageList: [
        { name: "整车照片", index: 1, src: null },
        { name: "排气管", index: 2, src: null },
        { name: "尿素罐", index: 3, src: null },
        { name: "车辆与设备", index: 4, src: null },
        { name: "OBD插座", index: 5, src: null },
        { name: "车辆铭牌", index: 6, src: null },
        { name: "车辆行驶证", index: 7, src: null },
        { name: "仪表盘", index: 8, src: null },
        { name: "设备安装位置", index: 9, src: null },
        { name: "车主协议", index: 10, src: null }
      ]
    };
  },
  computed: {
    srcList(){
      let arr=this.imageList.filter(item=>{
        if(item.src) return item
      })
      return arr
    }
  },
  /**
   * 判断页面是新安装还是查看详情
   */
  mounted() {
    if (this.$route.meta.name == "信息查询详情") {
      this.getInfoDetail();
    }
  },
  methods: {
    showpopup(obj){
      //点击的index在srclist的index是多少
      this.srcList.map((item,index)=>{
        if(item.index==obj.index){
          this.popuptIndex=index
        }
      })
        this.popupVisible=true
    },
    /**
     * 地理位置请求
     */
    getLocationA() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
      } else {
        alert("您的浏览器不支持使用HTML 5来获取地理位置服务");
      }
    },
    //定位数据获取成功响应
    onSuccess(position) {
      getAddress({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      }).then(res => {
        if (res.data) {
          this.address = res.data.formatted_address;
        } else {
          this.$method.messageBox(res.errorCode + "获取失败，请手动输入");
        }
      });
    },
    //定位数据获取失败响应
    onError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("您拒绝对获取地理位置的请求");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("位置信息是不可用的");
          break;
        case error.TIMEOUT:
          alert("请求您的地理位置超时");
          break;
        case error.UNKNOWN_ERROR:
          alert("未知错误");
          break;
      }
    },

    /**
     * 获取设备
     */
    getterminalA() {
      if (this.terminalCode) {
        //请求查询
        getTerminalByCode({ code: this.terminalCode }).then(res => {
          if (res.data) {
            if (res.vehicleId != null && res.vehicleId != "") {
              if (res.vehicleId != this.vehicleId) {
                this.$method.messageBox("当前设备已绑定其他车辆");
                this.terminalId = "";
                this.iccid = "";
              }
            } else {
              this.terminalId = res.data.id;
              this.iccid = res.data.iccid;
            }
          } else {
            this.$method.messageBox();
          }
        });
      } else {
        this.$method.messageBox("获取失败，请手动输入");
      }
    },
    /**
     * 点击车牌号显示键盘
     */
    focusplateCode() {
      this.plateNflag = true;
    },
    async getInfoDetail() {
      this.$method.loadOpen();
      let { flag, data, errorCode } = await findFixVehicleDetail({
        vehicleId: this.$route.params.vehicleId
      });
      this.$method.loadClose();
      if (flag) {
        this.copydata(data);
        for (let idx in this.imageList) {
          this.imageList[idx].src = data["img" + (Number(idx) + 1)];
        }
      } else {
        this.$method.messageBox(this.$t[errorCode]);
      }
    },
    realTime() {
      this.$router.push({
        name: "realtimeData",
        params: {
          vehicleId: this.$route.params.vehicleId,
          plateCode: this.plateCode
        }
      });
    },
    /**
     * 查询车辆信息
     */
    getPlate(val) {
      this.plateNflag = false;
      if (!val) return;
      this.plateCode = val;
      getPlateLicense(val).then(res => {
        if (res.errorCode == 208) {
          return this.$method.messageBox("该车未录入信息,不支持安装");
        }
        if (res.data) {
          this.copydata(res.data);
        }
      });
    },
    /**
     * 赋值
     */
    copydata(data) {
      this.plateCode = data.plateCode || null;
      this.plateColor = this.$fiflter.setPlateColor(data.plateColor) || null;
      this.carVin = data.vin || data.carVin || null;
      this.iccid = data.iccid || null;
      this.enterpriseName = data.enterpriseName || null;
      this.pf = this.$fiflter.setPf(data.pf) || null;
      this.terminalCode = data.terminalCode || null;
      this.vehicleId = data.id || null;
      this.terminalId = data.terminalId || null;
      this.address = data.address || null;
      if (this.$route.meta.name != "信息查询详情" && (!data.address)) {
        this.getLocationA()
      }
    },
    /**
     * 图片上传
     */
    loadEnd(obj, target, callBack) {
      //创立FormData对象
      var formData = new FormData(); //实例化一个formData对象
      formData.append("file", target); //this.files对象转换为字符串
      uploadImg(formData).then(res => {
        if (res.flag) {
          //后台dcn地址
          this.imageList[obj.index - 1].src = res.data.message;
          callBack && callBack();
        }
      });
    },
    /**
     * 删除照片
     */
    deleteImg(obj) {
      this.imageList[obj.index - 1].src = null;
    },
    /**
     * 提交代码
     */
    submit() {
      console.log(this.plateColor);
      if (!this.plateColor) return this.$method.messageBox("请填写正确车牌号");
      if (!this.address) return this.$method.messageBox("请填写地址");
      let data = {
        vehicleId: this.vehicleId,
        terminalId: this.terminalId,
        address: this.address
      };
      let flag = false;
      this.imageList.some(item => {
        //最后一张可以没有src
        if (!item.src && item.index != 10) {
          flag = true;
          this.$method.messageBox("图片未上传完整");
          return true;
        }
        data["img" + item.index] = item.src;
      });
      if (!flag) {
        fixEvVehicle(data).then(res => {
          if (res.errorCode == 200) {
            this.$method.messageBox("提交成功");
            //提交成功跳转实时数据页面
            return this.$router.push({
              name: "realtimeData",
              params: { plateCode: this.plateCode }
            });
          }
          if (res.errorCode == 208) {
            return this.$method.messageBox("设备不存在或者公司不一致");
          }
          this.$method.messageBox(this.$t[res.errorCode]);
        });
      }
    }
  },
  watch: {
    
  }
};
</script>

<style lang='less'>
.installService {

    
  ul {
    overflow: hidden;
    li {
      float: left;
      width: 40%;
      text-align: center;
      margin: 5%;
    }
  }
}
</style>