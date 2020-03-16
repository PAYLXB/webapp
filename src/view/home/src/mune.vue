<template>
    <div class='menu'>
       <mt-header :title="$route.meta.name">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click='$router.go(-1)'>back</mt-button>
      </router-link>
    </mt-header>
        <div >
            <mt-cell v-for="(item,idx) in munelist" :key="idx" :title="item.title" :to="item.path" is-link></mt-cell>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            munelist:[
                {title:'安装',path:'/installService'},
                {title:'信息查询',path:'/info'},
                {title:'实时数据查询',path:'/realtimeData'},
                {title:'不能安装记录',path:'/unableToList'}
            ]
        }
    }
}
</script>
<style lang="less" scope>
.menu{

    .mint-cell-text{
        font-size: 36px;
        
    }
}
</style>