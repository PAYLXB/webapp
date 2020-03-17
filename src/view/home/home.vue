<template>
    <div class="home">
        <router-view></router-view>
        <div>
            <div style="position: fixed;bottom: 0;width: 100%;background: #ffffff;padding: 5px;">
                <ul class="home_ul">
                    <li @click="()=>{$router.push('/home/homePage')}">
                        <img src="../../assets/images/tabImg/home-blue.png" alt="">
                        <p>首页</p>
                    </li>
                    <li @click="()=>{$router.push('/home/placeOrder')}">
                        <img src="../../assets/images/tabImg/home-blue.png" alt="">
                        <p>下单</p>
                    </li>
                    <li @click="()=>{$router.push('/home/my')}">
                        <img src="../../assets/images/tabImg/home-blue.png" alt="">
                        <p>我的</p>
                    </li>
                </ul>
            </div>
            <div style="height: 100px"></div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        selected:'1'
    };
  },
    created(){
        console.log(this.$route.fullPath)
        switch (this.$route.fullPath) {
            case '/home/homePage':
                return this.selected = '1'
            case '/home/placeOrder':
                return this.selected = '2'
            case '/home/my':
                return this.selected = '3'

        }
      },
  methods: {

  },
    watch: {
        selected(val,old) {
            // this.setIcon(old);
            switch (val) {
                case "1":
                    return this.$router.push("/home/homePage");
                case "2":
                    return this.$router.push("/home/placeOrder");
                case "3":
                    return this.$router.push("/home/my");
            }
        }
}
}
</script>

<style scoped>
.home{
    background: #eee;
    position: relative;
    /*height: 100%;*/
    /*overflow: hidden;*/
    /*overflow-y: auto;*/

}
    .home_ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
        .home_ul li img{
            /*flex: 1;*/
            width: 60px;
            height: 60px;
        }
</style>
