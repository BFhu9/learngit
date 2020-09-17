import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/article/:id',//配置动态路由页面
    name:'article',
    component: () => import(/* webpackChunkName: "about" */ '../views/article.vue')
  },
    {
    path:'/lifecom',//配置动态路由页面
    name:'lifecom',
    component: () => import(/* webpackChunkName: "about" */ '../views/lifecom.vue')
  }
]
// history模式：H5提供的接口，当pushstate发生改变时，不会向服务器发送请求
// 缺点：但是在服务器端需要进行配置，将任意的页面路径请求，都返回该vue页面给浏览器，让写好的vue应用自动渲染页面
// hash模式：除了多个#之外，最大的好处就是不会向服务器发送请求，不需要服务器做配置
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//生命周期节点
    // beforeRouteEnter((to,from,next)=>{})
    // beforeRouteUpdate()
    // beforeRouteLeave()
router.beforeEach((to,from,next)=>{
  console.log('My is 路由守卫！！');
  // console.log(to);
  console.log(from);
  next();
})
// router.afterEach((to,from,next)=>{})
export default router
