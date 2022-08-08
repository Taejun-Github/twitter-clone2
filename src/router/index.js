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

const routes = [
    {path: '/', component: Home, title: 'home', icon: 'fa-solid fa-house-user fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/hashtag', component: HashTag, title: 'hashtag', icon: 'fa-solid fa-hashtag fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout'}}, //HashTag
    {path: '/notifications', component: Notification, title: 'notifications', icon: 'fa-solid fa-bell fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/messages', component: Messages, title: 'messages', icon: 'fa-solid fa-message fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/bookmark', component: BookMark, title: 'bookmark', icon: 'fa-solid fa-bookmark fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout'}}, //Bookmark
    {path: '/list', component: List, title: 'list', icon: 'fa-solid fa-list fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout'}}, //List
    {path: '/profile', component: Profile, title: 'profile', icon: 'fa-solid fa-user fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/more', component: More, title: 'more', icon: 'fa-solid fa-angles-right fa-fw text-2xl', meta: {isMenu: true, layout: 'DefaultLayout'}}, //More
    {path: '/register', component: Register, meta: {isMenu: false, layout: 'EmptyLayout'}}, 
    {path: '/login', component: Login, meta: {isMenu: false, layout: 'EmptyLayout'}}, 
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router