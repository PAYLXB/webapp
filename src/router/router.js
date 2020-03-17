import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const constantRoutes = [
    {
        path: "*",
        redirect: "/home"
    },
    {
        name: "login",
        path: "/login",
        meta: {
            name: '登录',
            keepAlive: false
        },
        component: () => import("../view/login/login.vue")
    },
    {
        name: "regist",
        path: "/regist",
        meta: {
            name: '注册',
            keepAlive: false
        },
        component: () => import("../view/regist/regist.vue")
    },
    {
        name: "home",
        path: "/home",
        redirect:'/home/homePage',
        meta: {
            name: '首页',
            keepAlive: false
        },
        component: () => import("../view/home/home.vue"),
        children: [
            {
                name:'homePage',
                path:'homePage',
                meta:{
                    name:'天天在职',
                    keepAlive: false
                },
                component: () => import("../view/homePage/homePage.vue"),
            },
            {
                name:'placeOrder',
                path:'placeOrder',
                meta:{
                    name:'下单',
                    keepAlive: false
                },
                component: () => import("../view/placeOrder/placeOrder.vue"),
            },
            {
                name:'my',
                path:'my',
                meta:{
                    name:'我的',
                    keepAlive: false
                },
                component: () => import("../view/my/my.vue"),
            }
        ]
    },
    // {
    //     name: "placeOrder",
    //     path: "/placeOrder",
    //     meta: {
    //         name: '下单',
    //         keepAlive: false
    //     },
    //     component: () => import("../view/placeOrder/placeOrder.vue")
    // },
    // {
    //     name: "my",
    //     path: "/my",
    //     meta: {
    //         name: '我的',
    //         keepAlive: false
    //     },
    //     component: () => import("../view/my/my.vue")
    // },
    {
        name: "canCash",
        path: "/canCash",
        meta: {
            name: '可提现转账',
            keepAlive: false
        },
        component: () => import("../view/my/canCash/canCash.vue")
    },
    {
        name: "personalData",
        path: "/personalData",
        meta: {
            name: '个人资料',
            keepAlive: false
        },
        component: () => import("../view/my/personalData/personalData.vue")
    },
    {
        name: "accountSecarity",
        path: "/accountSecarity",
        meta: {
            name: '账户安全',
            keepAlive: false
        },
        component: () => import("../view/my/accountSecarity/accountSecarity.vue")

    },
    {
        name: "setCenter",
        path: "/setCenter",
        meta: {
            name: '设置中心',
            keepAlive: false
        },
        component: () => import("../view/my/setCenter/setCenter.vue")
    },
    {
        name: "recharge",
        path: "/recharge",
        meta: {
            name: '我要充值',
            keepAlive: false
        },
        component: () => import("../view/my/recharge/recharge.vue")
    },
    {
        name: "toCash",
        path: "/toCash",
        meta: {
            name: '我要体现',
            keepAlive: false
        },
        component: () => import("../view/my/toCash/toCash.vue")
    },
    {
        name: "assistant",
        path: "/assistant",
        meta: {
            name: '在岗助手',
            keepAlive: false
        },
        component: () => import("../view/my/assistant/assistant.vue")
    },
    {
        name: "myFans",
        path: "/myFans",
        meta: {
            name: '我的粉丝',
            keepAlive: false
        },
        component: () => import("../view/my/myFans/myFans.vue")
    },
    {
        name: "income",
        path: "/income",
        meta: {
            name: '收入明细',
            keepAlive: false
        },
        component: () => import("../view/my/income/income.vue")
    },
    {
        name: "friend",
        path: "/friend",
        meta: {
            name: '邀请好友',
            keepAlive: false
        },
        component: () => import("../view/my/friend/friend.vue")
    },
    // {
    //     path: '/content',
    //     component: () => import("../view/content/index.vue"),
    //     redirect: "/content",
    //     children: [
    //         {
    //             name: "installService",
    //             path: "/installService",
    //             meta: {
    //                 name: '安装',
    //                 flag: true,
    //                 keepAlive: false
    //             },
    //             component: () => import("../view/installService/installService.vue")
    //         },
    //         {
    //             name: "Infodetails",
    //             path: "/Infodetails",
    //             meta: {
    //                 name: '信息查询详情',
    //                 flag: true,
    //                 keepAlive: true
    //             },
    //             component: () => import("../view/InformationService/src/infodetails")
    //         },
    //         {
    //             name: "info",
    //             path: "/info",
    //             meta: {
    //                 name: '信息查询',

    //                 flag: true
    //             },
    //             component: () => import("../view/InformationService/InformationService.vue")
    //         },
    //         {
    //             name: "realtimeData",
    //             path: "/realtimeData",
    //             meta: {
    //                 name: '实时数据查询',
    //                 flag: true,
    //                 keepAlive: true
    //             },
    //             component: () => import("../view/realtimeData/realtimeData.vue")
    //         },
    //         {
    //             name: "unableToList",
    //             path: "/unableToList",
    //             meta: {
    //                 name: '不能安装记录',
    //                 flag: true,
    //                 keepAlive: false
    //             },
    //             component: () => import("../view/unableTo/src/unableToList.vue"),
    //         },
    //          {
    //              name: "unableToAdd",
    //              path: "/unableToAdd",
    //              meta: {
    //                  name: '新增',
    //                  flag: true,
    //                  keepAlive: false
    //              },
    //              component: () => import("../view/unableTo/src/unableToAdd.vue")
    //          },
    //         {
    //             name: "home",
    //             path: "/home",
    //             meta: {
    //                 name: '首页',
    //                 keepAlive: false
    //             },
    //             component: () => import("../view/home/home.vue")
    //         },
    //         {
    //             name: "mune",
    //             path: "/mune",
    //             meta: {
    //                 name: '菜单',
    //                 keepAlive: false
    //             },
    //             component: () => import("../view/home/src/mune.vue")
    //         },
        // ]
    // }
]


const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})
const router = createRouter()
export default router;
