<template>
  <div>
    <mt-header :title="$route.meta.name">
      <router-link to="/unableToList" slot="left">
        <mt-button icon="back" >返回</mt-button>
      </router-link>
    </mt-header>
    <div class="contBox">
       <!-- 点击图片弹出 -->
      <mt-popup v-model="popupVisible" v-if='popupVisible' popup-transition="popup-fade" >
        <mt-swipe  :show-indicators="true" :defaultIndex='popuptIndex'>
          <mt-swipe-item v-for="item in srcList" :key="item.index" >
            <img :src="$COMMON.fileUrl+item.src" />
          </mt-swipe-item>
        </mt-swipe>
      </mt-popup>
      <plateNumber v-show="plateNflag" @getplatelicense="getPlate" />
      <mt-field
        label="车牌号"
        
        v-model="plateCode"
        @focus.native.capture="plateNflag=true"
      ></mt-field>
      <mt-field label="车辆颜色"  v-model="plateColor"></mt-field>
      <mt-field label="VIN"  v-model="carVin"></mt-field>
      <mt-field label="企业名称"  v-model="enterpriseName"></mt-field>
     
      <mt-field label="地址"  v-model="address"></mt-field>
         <mt-field label="备注"  v-model="remark"></mt-field>
      <div class="imageList">
        <upload
          power="edit"
          class="upload"
          v-for="(item) in uploadList"
          :key="item.index"
          :obj="item"
          :deleteFlg="false"
           @clickImg='showpopup'
          @loadEnd="loadEnd"  @deleteImg='deleteImg'
        />
      </div>
      <div class="but">
        <mt-button type="primary" @click="submit">提交</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import plateNumber from "../../../components/plateNumber/plateNumber";
import upload from "../../../components/upload/upload";
import {
  getPlateLicense,
  uploadImg,
  getAddress,
  insertNotInstallRecordInfoList
} from "../../../API/index";
export default {
  components: {
    plateNumber,
    upload
  },
  computed: {
    srcList(){
      let arr=this.uploadList.filter(item=>{
        if(item.src) return item
      })
      return arr
    }
  },
  data() {
    return {
      popuptIndex:0,
popupVisible:false,
      count: 1,
      plateCode: "", //车牌号
      plateColor: "",
      carVin: "",
      enterpriseName: "",
      address: "", //地址
      enterpriseId: "",
      vehicleId: "",
      userId: "",
      plateNflag: false, //显示车牌键盘,
      remark:'',//备注
      uploadList: [{ index: 0, src: null }]
    };
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
     * 获取位置信息
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
           longitude:position.coords.longitude,
           latitude:position.coords.latitude
         }).then(res=>{
           if(res.data){
            this.address = res.data.formatted_address;
         }else{
           this.$method.messageBox(res.errorCode+'获取失败，请手动输入' );
          }
        })
    },
    //定位数据获取失败响应
    onError(error) {
      debugger
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
     * 图片上传完成
     */
    loadEnd(obj, target,cbk) {
      //创立FormData对象
      var formData = new FormData(); //实例化一个formData对象
      formData.append("file", target); //this.files对象转换为字符串
      uploadImg(formData).then(res => {
        if (res.flag) {
          //后台dcn地址
          this.uploadList[obj.index].src = res.data.message;
          cbk();
        }
      });
      //上传的图片在数组中的下标，最后一张图片加载完成添加+
      let index = this.uploadList.indexOf(obj);
      if (index != this.uploadList.length - 1) return;
      this.uploadList.push({
        index: this.count++
      });
    },

    /**
     * 删除图片  删除src
     */
    deleteImg(obj) {
      //  let index=this.uploadList.indexOf(obj)
      // this.uploadList.splice(obj,1)
      obj.src = null;
    },

    /**
     * 查询车辆信息
     */
    getPlate(val) {
      this.plateNflag = false;
      if(!val)return
      this.plateCode = val;
      getPlateLicense(val).then(res => {
        if (res.data) {
          this.copydata(res.data);
        }
      });
    },

    /**
     * 赋值
     */
    copydata(data) {
      this.plateColor = this.$fiflter.setPlateColor(data.plateColor) || null;
      this.carVin = data.carVin || null;
      this.iccid = data.iccid || null;
      this.enterpriseName = data.enterpriseName || null;
      this.enterpriseId = data.enterpriseId || null;
      this.vehicleId = data.id || null;
      this.userId =JSON.parse(sessionStorage.getItem("userInfo")).userId || null;
      this.address = data.address || null;
      if (!data.address) {
        this.getLocationA()
      }
    },
    /**
     * 提交表单
     */
    submit() {
      if (!this.plateColor) return this.$method.messageBox("请填写正确车牌号");
      if (!this.address) return this.$method.messageBox("请填写地址");
      let data = {
        enterpriseId: this.enterpriseId,
        vehicleId: this.vehicleId,
        userId: this.userId,
        address: this.address,
        remark:this.remark
      };
      let files = [];
      this.uploadList.forEach((item, index) => {
        if (item.src) {
          files.push(item.src);
        }
      });
      if (!files.length) return this.$method.messageBox("请上传图片");
      data.imgs = files.join(",");
      this.$method.loadOpen();
      insertNotInstallRecordInfoList(data).then(res => {
        if (res.flag) {
          this.$method.messageBox("提交成功");
          //提交成功跳转不能安装页面
          this.$router.push("/unableToList");
        } else {
          this.$method.messageBox(this.$t[res.errorCode]);
        }
        this.$method.loadClose();
      });
    }
  }
};
</script>

<style scoped lang='less'>
.imageList {
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  .upload {
    width: 250px;
  height: 190px;
  }
}
</style>