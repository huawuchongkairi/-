// 配置路由的地方
import Vue  from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);
import routes from "./routes";
// 先把VueRouter原型对象的pushbaocunyifen
let originPush=VueRouter.prototype.push;
let originReplce=VueRouter.prototype.replace;

// 重写
// 
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        originReplce.call(this,location,resolve,reject)
    }else{
        originReplce.call(this,location,()=>{},()=>{})
    }
}

// 配置路由
export default new VueRouter({
    // 配置路由 
    routes,
    scrollBehavior() {
        //滚动行为这个函数,需要有返回值,返回值为一个对象。
        //经常可以设置滚动条x|y位置 [x|y数值的设置一般最小是零]
        return { y: 0 };
    }
})