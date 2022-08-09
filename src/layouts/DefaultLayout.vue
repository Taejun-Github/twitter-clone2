<template>
    <div class="flex h-screen container mx-auto relative">
        <!-- side section -->
        <div
            class="w-20 md:w-1/4 xl:w-1/4 pt-5 xl:ml-10 md:ml-10 flex flex-col justify-between border-r border-gray-100">
            <!-- 로고와 메뉴바 -->
            <div class="flex flex-col items-center xl:items-start">
                <!-- flext items-center의 경우에는 원래 align-items: flex-start; 인데, 이것은 주 방향과 수직인 교차축에 관련된 것이다.
        디폴트값은 교차축을 가득 채우는 것인데, items-start 옵션에서는 교차축의 맨 위에 있는 지점을 기준으로 아이템이 차지하는 공간만큼만 차지하도록 한다. -->
                <!-- 트위터 로고 아이콘 -->
                <i class="fa-brands fa-airbnb text-5xl text-primary xl:ml-3 mb-5 mt-5"></i>
                <!-- side 메뉴 부분  -->
                <div class="flex flex-col items-start">
                    <router-link :to="route.path" :class="`hover:text-hover 
                    hover:bg-lime-200 text-original p-2 xl:px-4 xl:py-2 
                        rounded-2xl mb-2 cursor-pointer ${router.currentRoute.value.name == route.name ? 'text-red-500': ''}`" v-for="route in routes" :key="route">
                        <div v-if="route.meta.isMenu">
                            <i :class="route.icon"></i>
                            <span class="ml-5 text-xl hidden xl:inline-block md:inline-block">{{ route.title }}</span>
                        </div>
                    </router-link>

                </div>
                <!-- tweet button -->
                <div class="w-12 xl:w-full md:w-40 pr-1 xl:pr-3 md:pr-3 flex justify-center">
                    <button class="mt-3 bg-primary text-white w-full h-12 rounded-full hover:bg-dark" @click="showModal">
                        <span class="hidden xl:block md:block">Tweet</span>
                        <i class="fas fa-plus xl:hidden md:hidden"></i>
                    </button>
                </div>
            </div>

            <!-- 프로필 버튼 -->
            <div class="xl:pr-5 mb-3 relative" @click="showProfileDropdown = true">
                <button class="hidden xl:flex px-2 py-1 w-full h-12 rounded-full hover:bg-gray-400 items-center">
                    <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full" />
                    <div class="ml-5 hidden xl:block md:block">
                        <div class="text-sm font-bold">{{currentUser.email}}</div>
                        <div class="text-xs text-gray-500 text-left">@{{currentUser.username}}</div>
                    </div>
                    <i class="ml-auto fa-solid fa-ellipsis fa-fw text-xl hidden xl:block md:block"></i>
                </button>
                <!-- margin left auto 클래스를 가진 태그가 한개이면 그 태그의 요소를 맨 오른쪽에 배치하고 남은 왼쪽 마진을 그 한개 태그가 모두 차지한다. 
          만약에 두개이면 남은 왼쪽 마진을 절반씩 나눈다. 세개이면 남은 왼쪽 마진을 3개의 태그가 나눈다-->

                <!-- large가 아닐 때 나와야 하는 것 -->
                <div class="xl:hidden flex justify-center">
                    <img :src="currentUser.profile_image_url"
                        class="w-10 h-10 rounded-full cursor-pointer hover:opacity-60" />
                </div>
            </div>
        </div>
        <!-- main section -->
        <div class="flex-1 flex h-screen">
            <router-view />
        </div>
        <!-- profile dropdown menu -->
        <div class="absolute bottom-20 left-10 shadow rounded-lg w-60 bg-white" v-if="showProfileDropdown" >
            <button class="hover:bg-gray-50 border-b border-gray-100 flex p-3 w-full items-center" @click="showProfileDropdown = false">
                <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full" />
                <div class="ml-2">
                    <div class="fontb-bold text-sm">{{currentUser.email}}</div>
                    <div class="text-left text-gray-500 text-sm">@{{currentUser.username}}</div>
                </div>
                <i class="fas fa-check text-primary ml-auto"></i>
            </button>
            <button class="p-3 hover:bg-gray-50 w-full text-left text-sm" @click="onLogout">
                로그아웃
            </button>
        </div>

        <tweet-modal v-if="showTweetModal" @closeModal="closeModal"></tweet-modal>
    </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import {auth} from '../firebase'
import router from '../router';
import store from '../store'
import TweetModal from '../components/TweetModal.vue'
export default {
    setup() {
        const routes = ref([]);
        const showProfileDropdown = ref(false);
        const showTweetModal = ref(false)

        const currentUser = computed(() => store.state.user);

        const showModal = () => {
            showTweetModal.value = true
        }
        const closeModal = () => {
            showTweetModal.value = false
        }

        const onLogout = async () => {
            await auth.signOut();
            store.commit("SET_USER", null);
            await router.replace("/login");
        };
        onBeforeMount(() => {
            routes.value = router.options.routes.filter(route => route.meta.isMenu == true);
            // console.log(router.currentRoute.value)
        });
        return { routes, showProfileDropdown, onLogout, currentUser, router ,showTweetModal, showModal, closeModal};
    },
    components: { TweetModal }
}
</script>

<style>
</style>