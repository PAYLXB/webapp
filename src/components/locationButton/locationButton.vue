<template>
  <mt-badge size="normal" class="badge" @click.native="getLocationA">地址</mt-badge>
</template>

<script>
import { getAddress } from "../../API/index";
export default {
  methods: {
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
            this.$emit('getLocation',res.data.formatted_address)
          }else{
            this.$emit('getLocation',null)
            alert("请求出错："+res.errorCode );
          }
        })
      // alert(
      //   "纬度2: " +
      //     position.coords.latitude +
      //     "\n" +
      //     "经度: " +
      //     position.coords.longitude +
      //     "\n" +
      //     "海拔: " +
      //     position.coords.altitude +
      //     "\n" +
      //     "水平精度: " +
      //     position.coords.accuracy +
      //     "\n" +
      //     "垂直精度: " +
      //     position.coords.altitudeAccura
      // );
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
    }
  }
};
</script>

<style scoped>
.badge{
     border: 1px solid #28e627;
    background-color: #ffffff;
    color: #28e627;
}
</style>