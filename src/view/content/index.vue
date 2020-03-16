<template>
  <div class="contnet">
    <!-- <mt-header :title="$route.meta.name">
      <router-link to="" slot="left" v-if="$route.meta.flag">
        <mt-button icon="back" @click="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right">dfdf</mt-button>
    </mt-header> -->
    <!-- <keep-alive> -->
      <router-view class="view"></router-view>
    <!-- </keep-alive> -->
    <mt-tabbar v-model="tabbarselected">
      <mt-tab-item id="0">
        <img slot="icon" src="../../assets/images/tabImg/home-gray.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="1">
        <img slot="icon" src="../../assets/images/tabImg/fix-gray.png" />
        安装
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  computed:{
    _img(){
      return document.querySelectorAll(".mint-tab-item-icon img");
    }
  },
  data() {
    return {
      tabbarselected: ""
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    // setIcon(val){
    //   switch (val) {
    //     case "0":
    //       return this._img[val].src="../../assets/images/tabImg/home-gray.png";
    //     case "1":
    //       return this._img[val].src="../../assets/images/tabImg/fix-gray.png";
    //     case "2":
    //       return this._img[val].src="../../assets/images/tabImg/mune-gray.png";
    //   }
    // }
  },
  watch: {
    tabbarselected(val,old) {
      // this.setIcon(old);
      switch (val) {
        case "0":
          return this.$router.push("/home");
        case "1":
          return this.$router.push("/installService");
      }
    }
  }
};
</script>

<style scoped lang='less'>
.contnet {
  height: 92%;
  overflow: scroll;
  .mt-header {
    height: 8%;
  }
  .view {
    height: 86%;
  }
  .mint-tabbar {
    height: 8%;
    position: fixed;
    background-color: #eee;
  }
}
</style>
