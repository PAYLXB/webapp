<template>
  <div class="header" >
    <div class="borderbottom">
      <select class="select" @change="change">
        <option v-for="(item,index) in options" :key="index" :value="item.value">{{item.name}}</option>
      </select>
      <plateNumber v-if='plateNflag'  @getplatelicense='getPlateLicense' ></plateNumber>
      <span v-if="searchNme== 'state'">
      <label v-for="(item , idx) in radioList"  :key="idx" >
        <input type="radio" name="radio" :value="item.value" @click="getRadioVal" >
        {{item.label}}
      </label>
      </span>
      <mt-search v-model="inputsearch" cancel-text class="input"  @focus.native.capture='activeBlur' v-if="searchNme!='state'" ></mt-search>
    </div>
  </div>
</template>

<script>
import plateNumber from "../plateNumber/plateNumber";
export default {
  components: {
    plateNumber
  },
  props: {
    options: Array
  },
  data() {
    return {
      inputsearch: "",
      searchNme: "plateCode",
      radioList: [
        { label: "已安装", value: "1" },
        { label: "待确认", value: "0" }
      ],
      state: "",
      plateNflag:false
    };
  },
  methods: {
    change(val) {
      this.searchNme = val.target.value;
      if(this.searchNme=="plateCode"){
        this.plateNflag=true;
      }else{
         this.plateNflag=false;
      }
      this.$emit("select-change", val.target.selectedIndex);
    },
    activeBlur(){
      if(this.searchNme =="plateCode"){
        document.activeElement.blur()
        this.plateNflag=true
      }
   
    },
    getRadioVal(val) {
      this.$emit('search',{'state':val.target.value});
    },
    getPlateLicense(val){
      this.plateNflag=false;
      if(val == this.inputsearch){
        this.$emit('search',{'plateCode':val});
      }else{
        this.inputsearch =val;
      }
    }
  },
  watch: {
    inputsearch(val){
      let obj = this.searchNme == "plateCode" ? {'plateCode':val} : {'iccid':val};
      this.$emit('search',obj);
    }
  }
};
</script>

<style  lang='less'>
.header {
  .bbottom {
    border-bottom: 1px solid #eee;
  }
  .select {
    border: none;
    background: #fff;
    height: 80px;
    width: 30%;
    font-size: 36px;
    padding-left: 15px;
    outline: none;
  }

  .input {
    float: right;
    height: 80px;
    width: 65%;
    .mint-searchbar {
      height: 100%;
    }
    .mint-search-list{
      z-index: -1;
    }
    .mint-searchbar-inner {
      i {
        margin-right: 15px;
      }
    }
    .mint-searchbar-core {
      font-size: 28px;
    }
    .mint-searchbar {
      background-color: #fff;
      padding: 0;
    }
  }
}
</style>