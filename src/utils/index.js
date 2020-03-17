import CONFIG from "@/utils/src/config";
import http from "./src/http";
import Vue from "vue";
import method from "./common";
import t from './errorCode'
  // 公共服务
Vue.prototype.$COMMON = CONFIG;
Vue.prototype.$method = method;
Vue.prototype.$http = http;
Vue.prototype.$t = t;
// password加密
