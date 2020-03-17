<template>
  <div>

      <mt-tabbar v-model="selected">
        <mt-tab-item id="1">
            <img slot="icon" src="../../assets/images/tabImg/home-blue.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="2">
            <img slot="icon" src="../../assets/images/tabImg/home-blue.png">
            下单
        </mt-tab-item>
        <mt-tab-item id="3">
            <img slot="icon" src="../../assets/images/tabImg/home-blue.png">
            我的
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
        selected:"1"
    };
  },
  methods: {
    /**
     * params {}
     * 登陆接口请求
     */


  },

  watch: {
    selected(val,old) {
      // this.setIcon(old);
      switch (val) {
        case "1":
          return this.$router.push("/home");
        case "2":
          return this.$router.push("/placeOrder");
        case "3":
          return this.$router.push("/my");
      }
    }
  }
};
</script>

<style scoped>
</style>