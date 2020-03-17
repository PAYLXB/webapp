<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Footbar></Footbar> -->

  </div>
</template>

<script>

// import Footbar from "./components/footBar/footBar"
export default {
  name: 'app',
  data() {
    return {
      naviga: 'value',
    }
  },
  // components:{Footbar},

}
</script>
<style lang="less" scoped>
#app{
  height: 100%;
}
</style>

