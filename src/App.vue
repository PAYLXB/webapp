<template>
  <div id="app">
    <router-view></router-view>
    
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      naviga: 'value',
    }
  },
 
}
</script>
<style lang="less" scoped>
#app{
  height: 100%;
}
</style>

