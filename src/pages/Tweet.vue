<template>
  <div class="flex-1 flex">
    <div class="flex-1 border-r border-gray-100">
        <div class="flex flex-col">
            <!-- title -->
            <div class="flex items-center px-3 py-1 border-b border-gray-100">
                <button @click="router.go(-1)"> 
                <!-- router.go(-1)은 뒤로가기이다. -->
                    <i class="fas fa-arrow-left text-primary text-lg ml-3 hover:bg-blue-50 p-2 rounded-full h-10 w-10"></i>
                </button>
                <span class="font-bold text-lg ml-10">트윗</span>
            </div>
            
            <!-- tweet -->
            <div class="px-3 py-2 flex">
                <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer">
                <div class="ml-3">
                    <div class="font-bold">이메일</div>
                    <div class="text-gray text-sm">@id</div>
                </div>
            </div>
            <div class="px-3 py-2">
                본문
            </div>
            <div class="px-3 py-2 text-gray text-xs">날짜</div>
            <div class="h-px w-full bg-gray-100"></div>
            <div class="flex space-x-2 px-3 py-2 items-center">
                <span class="">1</span>
                <span class="text-sm text-gray">리트윗</span>
                <span class="ml-5">1</span>
                <span class="text-sm text-gray">마음에 들어요</span>
            </div>
            <div class="h-px w-full bg-gray-100"></div>
            <!-- button -->
            <div class="flex justify-around py-2">
                <button>
                    <i class="far fa-comment text-blue-400 text-xl hover:bg-blue-50 hover:text-primary p-2 rounded-full h-10 w-10"></i>
                </button>
                <button>
                    <i class="fas fa-retweet text-green-400 text-xl hover:bg-green-50 hover:text-primary p-2 rounded-full h-10 w-10"></i>
                </button>
                <button>
                    <i class="far fa-heart text-red-400 text-xl hover:bg-red-50 hover:text-primary p-2 rounded-full h-10 w-10"></i>
                </button>
            </div>
            <div class="h-px w-full bg-gray-100"></div>
            <!-- comments -->
            <div v-for="comment in 10" :key="comment" class="flex hover:bg-gray-100 cursor-pointer py-3 px-3 border-b border-gray-100">
                <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer mr-3">
                <div class="ml-2 flex-1">
                    <div class="flex items-center space-x-2">
                        <span class="font-bold">email</span>
                        <span class="text-gray text-sm">@id</span>
                        <span>10 days ago</span>
                    </div>
                    <div>댓글</div>
                </div>
                <button>
                    <i class="fas fa-trash text-red-400 hover:bg-red-50 w-10 h-10 rounded-full p-2"></i>
                </button>
            </div>
        </div>
    </div>
    <trends></trends>
  </div>
</template>

<script>
import Trends from '../components/Trends.vue'
import router from '../router'
export default {
  components: { Trends },
  setup() {
    return { router }
  },

}
</script>

<style>

</style>