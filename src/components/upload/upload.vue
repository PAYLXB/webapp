<template>
  <div class="item" v-if="delFlg">
  
    <img
      @click="send_file"
      src="../../assets/images/addImg.png"
      ref="addImg"
      :class="imgFlag ?'addImg' :'delete none'"
    />
    <input
      name="url"
      type="file"
      class="upload_input"
      @change="change"
      ref="file"
      accept="image/*"
    />
    <div class="preBlock">
      <img class="preview" ref="preview" alt name="pic" @click="showImg"/>
    </div>
    <img
      :class="imgFlag ?'delete' :'delete show'"
      @click="deleteImg"
      v-if="power=='edit'"
      src="../../assets/images/delete.png"
      ref="deleteImg"
    />
    <mt-spinner type="double-bounce" v-if="loading" class="loadImg" :size="60"></mt-spinner>
   
  </div>
</template>
<script>
export default {
  props: {
    obj: {},
    deleteFlg: {
      default: true
    },
    power: "",
  },
  computed: {
    _file() {
      return this.$refs["file"];
    },
    _preview() {
      return this.$refs["preview"];
    }
  },
  data() {
    return {
      imgFlag: true,
      delFlg: true,
      loading: false,
      imgLook:false
    };
  },
  mounted(){
    let u = navigator.userAgent, app = '';
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(u.match(/MicroMessenger\/[0-9]/i) ||u.match(/MiuiBrowser\/[0-9]/i) ||u.match(/UCBrowser\/[0-9]/i) ){
        app= "weixin";
    }
    if (isAndroid && app!="weixin" ) {
        this.$refs.file.setAttribute('capture', 'camera');
    }
  },
  methods: {
    /**
     * 点击图片
     */
    showImg(e){
    //   this.imgLook=!this.imgLook
    //   if(this.imgLook){
    //     e.target.style.position= 'fixed';
    // e.target.style.height= '50%';
    // e.target.style.top= '30%';
    // e.target.style.background= '#fff';
    // e.target.style.zIndex= '99';
    //   }else{
    //     e.target.style.position= 'absolute';
    // e.target.style.height= '100%';
    // e.target.style.top= '0';
    // e.target.style.background= '#fff';
    // e.target.style.zIndex= '0';
    //   }

    this.$emit('clickImg',this.obj)
      
    },
    send_file() {
      setTimeout(() => {
        this._file.click();
      }, 5);
    },
    deleteImg() {
      this._file.value = "";
      this._preview.src = "";
      this._preview.className = "";
      this.imgFlag = true;
      !this.deleteFlg && (this.delFlg = false);
      this.loading = false;
      this.$emit("deleteImg", this.obj);
    },
    change(file) {
      this.html5Reader(file);
    },
    html5Reader(file) {
      let _this = this;
      let img = file.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = function(e) {
        _this._preview.src = this.result;
      };
      this.imgFlag = false;
      this.loading = true;
      this.$emit("loadEnd", this.obj, file.target.files[0], function() {
        _this.loading = false;
      });
    }
  },
  watch: {
    "obj.src"(val) {
      if (val) {
        this.imgFlag = false;
        this._preview.src = this.$COMMON.fileUrl + val;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  max-width: 250px;
  height: 190px;
  position: relative;
  margin: 20px;
  .addImg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    cursor: pointer;
  }
}
.loadImg {
  position: relative;
  left: 25%;
  top: 30px;
}
.preview,
.preBlock {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.show {
  display: block !important;
}
.none {
  display: none !important;
}
.delete {
  width: 30px;
  position: absolute;
  right: -30px;
  top: -15px;
  cursor: pointer;
  display: none;
}
.preBlock img {
  display: block;
  width: 100%;
  height: 100%;
}
.upload_input {
  display: block;
  width: 0;
  height: 0;
}
</style>