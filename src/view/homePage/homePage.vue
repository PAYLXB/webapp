<template>
    <div class="homePage">
        <mt-header title="天天在职"></mt-header>
        <mt-swipe :auto="2000" class="swipe">
            <mt-swipe-item class="swipeItem1">1</mt-swipe-item>
            <mt-swipe-item class="swipeItem2">2</mt-swipe-item>
            <mt-swipe-item class="swipeItem3">3</mt-swipe-item>
            <mt-swipe-item class="swipeItem4">4</mt-swipe-item>
        </mt-swipe>
        <div class="textSwipe">
            <img class="textImg" src="../../assets/images/tabImg/home-blue.png">
            文字轮播文字轮播文字轮播文字轮播
        </div>
        <div class="activityBox">
            <div class="activity">
                <p>活动指标</p>
                <p style="color:red">活动说明></p>
            </div>
            <ul>
                <li class="activityList">
                    <p>活动直播39抖音助手</p>
                    <p>0</p>
                </li>
                <li class="activityList">
                    <p>活动直播39抖音助手</p>
                    <p>0</p>
                </li>
            </ul>
            <p class="activityEnd">活动已结束</p>
        </div>
        <div class="createBox">
            <div class="create">
                <p>刷量收益翻倍增长</p>
                <p>增长历史></p>
            </div>
            <p>剩余<span class="day">0.0</span>天</p>
            <ul class="createDetail">
                <li class="detail">
                    <p>刷量收益</p>
                    <p style="margin-top:7px">0.00</p>
                </li>
                <li class="detail">
                    <p>分享收益</p>
                    <p style="margin-top:7px">0.00</p>
                </li>
                <li class="detail">
                    <p>总收益</p>
                    <p style="margin-top:7px">0.00</p>
                </li>
            </ul>
        </div>
        <div class="helper">
            <p class="title">强势助手</p>
            <ul >
                <li class="helperList">
                    <div class="appDetail">
                        <!-- <img slot="icon" src="../../assets/images/tabImg/home-blue.png"> -->
                        <img src="../../assets/images/douyin.jpg" alt="" class="helperImg">
                        <div>
                            <p class="appTitle">抖音助手</p>
                            <p class="appTitle">单价：<span style="color:red">￥399</span></p>
                            <p class="appTitle">工作时长：<span style="color:#a1a1a1">344天</span></p>
                        </div>
                    </div>
                    <mt-button type="primary" class="apple">立即雇佣</mt-button>
                </li>
                <li class="helperList">
                    <div class="appDetail">
                        <!-- <img slot="icon" src="../../assets/images/tabImg/home-blue.png"> -->
                        <img src="../../assets/images/douyin.jpg" alt="" class="helperImg">
                        <div>
                            <p class="appTitle">抖音助手</p>
                            <p class="appTitle">单价：<span style="color:red">￥399</span></p>
                            <p class="appTitle">工作时长：<span style="color:#a1a1a1">344天</span></p>
                        </div>
                    </div>
                    <mt-button type="primary" class="apple">立即雇佣</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        methods: {

        }
    };
</script>

<style scoped>
    .homePage{
        background: #eee;
    }
    .swipe{
        height:300px;
        margin-top:90px;
    }
    .swipeItem1{
        background-color: blue;
    }
    .swipeItem2{
        background-color: red;
    }
    .swipeItem3{
        background-color: rgb(161, 105, 194);
    }
    .swipeItem3{
        background-color:rgb(201, 164, 97);
    }
    .textSwipe{
        height: 90px;
        margin: 20px 0 20px 0;
        background: #ffffff;
        border-radius: 45px;
        display: flex;
        align-items: center;
    }
    .textImg{
        height: 40px;
        width: 40px;
        margin: 0 15px 0 15px;
    }
    .activityBox{
        padding: 20px 10px 20px 10px;
        background: #ffffff;
        margin-bottom: 20px;
    }
    .activity{
        display: flex;
        justify-content: space-between;
    }
    .activityList{
        padding: 0 20px 0 20px;
        margin: 20px 0 20px 0;
        border-bottom: 1px solid #eeeeee;
        display: flex;
        justify-content: space-between;
    }
    .activityEnd{
        text-align: end;
    }

    .createBox{
        background: linear-gradient(to right,#2f89d3,#8db5f1);
        padding: 20px 20px 40px 20px;
        color: #ffffff;
        margin-bottom: 30px;
        border-radius: 20px;
    }
    .create{
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
    }
    .createDetail{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
    .detail{
        text-align: center;
    }
    .day{
        color: red;
        font-size: 60px;
        margin-left: 20px;
        margin-right: 20px;

    }

    .helper{
        background: #ffffff;
        padding: 20px 0 20px 0;
    }
    .title{
        text-align: center;
        color: #26a2ff;
    }
    .helperList{
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    .appDetail{
        display: flex;
    }
    .helperImg{
        width: 200px;
        height: 200px;
        border-radius: 30px;
        margin-right: 40px;
    }
    .appTitle{
        margin-top: 30px;
        font-weight: 600;
    }
    .apple{
        height: 70px;
        border-radius: 35px;
        background: linear-gradient(to right,#2f89d3,#8db5f1);
    }

</style>
