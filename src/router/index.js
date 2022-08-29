import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Notification from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'
import HashTag from '../pages/HashTag.vue'
import BookMark from '../pages/BookMark.vue'
import List from '../pages/List.vue'
import More from '../pages/More.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import store from '../store'
import Tweet from '../pages/Tweet.vue'

const routes = [
    {path: '/', component: Home, name:'home', title: 'home', icon: 'fa-solid fa-house-user fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout', requireAuth: true}},
    {path: '/hashtag', name:'hashtag',component: HashTag, title: 'hashtag', icon: 'fa-solid fa-hashtag fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout' , requireAuth: true}}, //HashTag
    {path: '/notifications', name:'notifications',component: Notification, title: 'notifications', icon: 'fa-solid fa-bell fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout' , requireAuth: true}},
    {path: '/messages', name:'messages',component: Messages, title: 'messages', icon: 'fa-solid fa-message fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout' , requireAuth: true}},
    {path: '/bookmark', name:'bookmark',component: BookMark, title: 'bookmark', icon: 'fa-solid fa-bookmark fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout' , requireAuth: true}}, //Bookmark
    {path: '/list', name:'list',component: List, title: 'list', icon: 'fa-solid fa-list fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout' , requireAuth: true}}, //List
    {path: '/profile', name:'profile',component: Profile, title: 'profile', icon: 'fa-solid fa-user fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout' , requireAuth: true}},
    {path: '/more', name:'more',component: More, title: 'more', icon: 'fa-solid fa-angles-right fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout' , requireAuth: true}}, //More
    {path: '/register', name:'register',component: Register, meta: {isMenu: false, layout: 'EmptyLayout'}}, 
    {path: '/login', name:'login',component: Login, meta: {isMenu: false, layout: 'EmptyLayout'}}, 
    {path: '/tweet/:id', name:'tweet',component: Tweet, meta: {isMenu: false, layout: 'DefaultLayout' , requireAuth: true}},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const currentUser = store.state.user

    const requireAuth = to.matched.some(record => record.meta.requireAuth)
    // mdn에서 array의 some 함수를 봐야 한다. some 함수에서는 하나라도 참이면 true를 반환한다.
    // 따라서 login의 경우는 false, 나머지는 true
    if(requireAuth && !currentUser) next('/login') // 인증 정보가 없으면 login 페이지로 강제로 돌린다.
    else next() // 인증 정보가 있으면 가고자 하는 라우터를 그냥 가게 한다
})

export default router