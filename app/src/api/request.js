// 对于axios进行二次封装
import axios from "axios";
// 引入进度条：
import nprogress from "nprogress";
// start:进度条开始 done：进度条结束
import store from "@/store";    

import "nprogress/nprogress.css";

// import { config } from "vue/types/umd";
// 1：利用axios对象的方法create，去创建一个axios实例
// 2：request就是axios。只不过在配置
const requests=axios.create({
    // 配置对象
    // 基础路径发请求的时候，路径当中会出现api
    baseURL:"/api",
    // 代表请求的超时时间为5s
    timeout:5000,
});
// 请求拦截器：在请求发出只之前：检测到
requests.interceptors.request.use((config)=>{
    // config：配置对象，对象里有一个属性很重要，headers请求头
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token
        // console.log(config.headers.userTempId)
    }
    nprogress.start();
    return config;

});
// 响应拦截器：：检测到
requests.interceptors.response.use((res)=>{
    // 成功的回调函数：服务器相应数据回来以后：响应拦截器可以检测到
    nprogress.done();
    return res.data;
},(error)=>{
    // 相应失败的回调函数
    return Promise.reject(new Error('Faile'));
})

// 对外暴露
export default requests;