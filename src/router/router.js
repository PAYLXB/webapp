import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const constantRoutes = [{
        path: "*",
        redirect: "/login"
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
        name: "home",
        path: "/home",
        meta: {
            name: '首页',
            keepAlive: false
        },
        component: () => import("../view/home/home.vue")
    },
    {
        name: "installService",
        path: "/installService",
        meta: {
            name: '安装',
            keepAlive: false
        },
        component: () => import("../view/installService/installService.vue")
    },
    {
        path: '/content',
        component: () => import("../view/content/index.vue"),
        redirect: "/content",
        children: [
            {
                name: "installService",
                path: "/installService",
                meta: {
                    name: '安装',
                    flag: true,
                    keepAlive: false
                },
                component: () => import("../view/installService/installService.vue")
            },
            {
                name: "Infodetails",
                path: "/Infodetails",
                meta: {
                    name: '信息查询详情',
                    flag: true,
                    keepAlive: true
                },
                component: () => import("../view/InformationService/src/infodetails")
            },
            {
                name: "info",
                path: "/info",
                meta: {
                    name: '信息查询',
                    
                    flag: true
                },
                component: () => import("../view/InformationService/InformationService.vue")
            },
            {
                name: "realtimeData",
                path: "/realtimeData",
                meta: {
                    name: '实时数据查询',
                    flag: true,
                    keepAlive: true
                },
                component: () => import("../view/realtimeData/realtimeData.vue")
            },
            {
                name: "unableToList",
                path: "/unableToList",
                meta: {
                    name: '不能安装记录',
                    flag: true,
                    keepAlive: false
                },
                component: () => import("../view/unableTo/src/unableToList.vue"),
            },
             {
                 name: "unableToAdd",
                 path: "/unableToAdd",
                 meta: {
                     name: '新增',
                     flag: true,
                     keepAlive: false
                 },
                 component: () => import("../view/unableTo/src/unableToAdd.vue")
             },
            {
                name: "home",
                path: "/home",
                meta: {
                    name: '首页',
                    keepAlive: false
                },
                component: () => import("../view/home/home.vue")
            },
            {
                name: "mune",
                path: "/mune",
                meta: {
                    name: '菜单',
                    keepAlive: false
                },
                component: () => import("../view/home/src/mune.vue")
            },
        ]
    }
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