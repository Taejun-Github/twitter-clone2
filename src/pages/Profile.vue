<template>
    <div class="flex-1 flex">
        <!-- profile section -->
        <div class="flex-1 flex flex-col border-r border-gray-100">
            <!-- title -->
            <div class="px-3 py-2 flex border-b border-gray-100">
                <button class="mr-2">
                    <i class="fas fa-arrow-left text-blue-200 p-3 rounded-full hover:bg-blue-50"></i>
                </button>
                <div class="px-2">
                    <div class="font-bold">MCMH</div>
                    <div class="text-xs">100 트윗</div>
                </div>
            </div>
            <!-- background image -->
            <div class="bg-gray-200 h-40 relative flex-none">
                <!-- profile image -->
                <div class="border-4 w-28 h-28 border-white bg-gray-100 rounded-full absolute -bottom-14 left-2">
                    <img src="http://picsum.photos/200"
                        class="rounded-full opacity-80 hover:opacity-100 cursor-pointer" />

                </div>
            </div>
            <!-- profile edit button -->
            <div class="text-right mt-2 mr-2">
                <button
                    class="border border-primary text-sm py-2 text-primary px-3 hover:bg-green-50 fond-bold rounded-full">프로필
                    수정</button>
            </div>
            <!-- user info -->
            <div class="mx-3 mt-5">
                <div class="font-extrabold text-lg">name</div>
                <div class="text-gray">id</div>
                <div>
                    <span class="text-gray">가입일:</span>
                    <span class="text-gray">2011년 10월</span>
                </div>
                <div class="mt-1">
                    <span class="font-bold mr-1">11</span>
                    <span class="text-gray mr-3">팔로우 중</span>
                    <span class="font-bold mr-1">111</span>
                    <span class="text-gray">팔로워</span>
                </div>
            </div>
            <!-- tabs -->
            <div class="flex border-b border-gray-100 mt-3">
                <div class="py-3 fond-bold text-blue-200 hover:border-b hover:border-primary text-center
                 hover:bg-green-50 cursor-pointer hover:text-blue-500 w-1/4">
                    트윗
                </div>
                <div class="py-3 fond-bold text-blue-200 hover:border-b hover:border-primary text-center
                 hover:bg-green-50 cursor-pointer hover:text-blue-500 w-1/4">
                    트윗 및 답글
                </div>
                <div class="py-3 fond-bold text-blue-200 hover:border-b hover:border-primary text-center
                 hover:bg-green-50 cursor-pointer hover:text-blue-500 w-1/4">
                    미디어
                </div>
                <div class="py-3 fond-bold text-blue-200 hover:border-b hover:border-primary text-center
                 hover:bg-green-50 cursor-pointer hover:text-blue-500 w-1/4">
                    마음에 들어요
                </div>
            </div>
            <!-- Tweets -->
            <div class="overflow-y-auto ">
                <Tweet v-for="tweet in 10" :key="tweet"/>
            </div>
        </div>

        <!-- trend section -->
        <Trends></Trends>
    </div>
</template>

<script>
import Trends from '../components/Trends.vue';
import Tweet from '../components/Tweet.vue';
export default {
    components: { Trends, Tweet }
}
</script>

<style>
</style>