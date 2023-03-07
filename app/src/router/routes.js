// 引入路由组件
import Home from '@/pages/Home'
import Search from'@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
// 路由配置信息
export default[
    {
        path:"/shopcart",
        component:ShopCart,
        //  name:'addcartsuccess',
        meta:{isShow:true}
    },
    {
        path:"/addcartsuccess",
        component:AddCartSuccess,
         name:'addcartsuccess',
        meta:{isShow:true}
    },
    {
        path:"/detail/:skuid",
        component:Detail,
        meta:{isShow:true}
    },
    {
        path:'/home',
        component:Home,
        meta:{
            show:true
        }
    },
    {
        path:"/search/:keyword?",
        component:Search,
        meta:{
            show:true
        },
        name:"search",
        // 面试题4：路由组件能不能传递props数据：
    // 可以 有三种写法
    // 布尔值写法
    // props:true,

    // 对象写法:额外的给路由组件传递一些props
        // props:{a:1,b:2}
        // 函数写法：可以params参数、query参数，通过props传递给路由组件
        props:($route)=>{
            return {keyword:$route.params.keyword,k:$route.query.k};
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            show:false
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            show:false
        }
    },
// 重定向 在项目跑起来的时候立刻访问/, 让它重定向到首页
    {
        path:'*',
        redirect:'/home'
        
    }
]