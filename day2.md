2:Home模块组件拆分
--先把静态页面完成
--拆分出静态组件
--获取服务器的数据进行展示
--动态业务

3：三级联动组件完成
---由于三级联动，在Home，Search，Detail把三级联动注册为全局组件
好处：只需要注册一次。就可以在任意地方使用

4:完成其他组件

项目很小：完全可以在组件的生命周期函数中发请求
项目大：axios.get('xxx')

8:nprogress进度条的使用;


9:vuex状态管理库
1.vuex是什么？
vuex是官方提供的一个插件，状态管理库，集中式管理项目组件共用的数据

切记：并不是全部项目都需要Vuex，如果项目很小，完全不需要vuex，如果项目大，组件数据多
state
mutations
actions
getters
modules


9.2:vuex基本使用