import axios from "axios";
import CONFIG from "@/utils/src/config";
/**
 * customize yourself according to business requirements
 * @param {Object} axios:required parameters
 * axios: { method, url, data, params, response}
 * @link: axios
 */
var instance = axios.create({
    baseURL: CONFIG.baseUrl,
    timeout: 60000,
    withCredentials: true,
    method: "post",
    headers: {
        post: {
            "Content-Type": "application/json"
        }
    }
});


//请求返回拦截，把数据返回到页面之前做些什么...
axios.interceptors.response.use((response) => {
    return request;
}, function (error) {
    return Promise.reject(error);
});

export default function http() {
        return axiosRequestMiddle(instance).apply(axios, arguments);
}



/**
 * @param {Function} fn: axios构造实例
 * @returns {Promise}
 */
const unauthorizedCode = [401, 402, 403, 41002];

function axiosRequestMiddle(fn) {
    return function (options) {
        return fn({
                method: "post",
                ...options,
                url: detailIEGETRequestCache(options)
            }).then(mess => {
           
            if (unauthorizedCode.indexOf(mess.data.errorCode) >= 0) {
                return (window.location.href = "/");
            }
            return mess.data;
            }).catch(error => {
                console.log(error)
                const code = error.response.status;
            if (code == 401) {
                return (window.location.href = "/");
            } else if (code == 400) {
                return {
                    flag: false,
                    errorCode: 400
                };
            } 
        });
    };
}

/**
 * 处理ie下get请求缓存问题
 * @param {Object} options={url, method}
 * @return {String} url
 */
function detailIEGETRequestCache(options) {
    const {
        method,
        url
    } = Object.assign({
        method: "post"
    }, options);
    // 如果ie下请求为get，加上时间戳，防止缓存
    if (method.toUpperCase() === "GET") {
        return url + "?&t=" + new Date().getTime();
    }
    return url;
}