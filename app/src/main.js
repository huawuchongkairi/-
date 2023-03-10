import Vue from 'vue'
import App from './App.vue'
// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
import Carsousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carsousel.name,Carsousel);
Vue.component(Pagination.name,Pagination)
// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store';



import '@/mock/mockServe'

import 'swiper/css/swiper.css'
import  * as http from '@/api';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this 
  },
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store 
}).$mount('#app')
