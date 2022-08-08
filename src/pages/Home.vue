<template>
    <div class="flex-1 border-r border-gray-100 overflow-y-auto">
        <div class="flex flex-col">
            <!-- page title -->
            <div class="border-b border-gray-100 px-3 py-2 font-bold test-lg">홈</div>
            <!-- tweeting section -->
            <div class="flex px-3 py-3 border-b-8 border-gray-200">
                <img src="http://picsum.photos/200"
                    class="w-10 h-10 rounded-full hover:opacity-80 m-2 cursor-pointer" />
                <div class="flex-1 flex flex-col ml-2">
                    <textarea placeholder="입력하세요"
                        class="w-full test-lg font-bold focus:outline-none mb-3 mt-2 mr-2 resize-none"></textarea>
                    <div class="text-right mr-3">
                        <button
                            class="bg-primary hover:bg-dark text-white px-4 py-1 rounded-xl text-sm font-bold">트윗</button>
                    </div>
                </div>
            </div>
            <!-- tweets -->
            <Tweet  v-for="tweet in 5" :key="tweet"/>
        </div>
    </div>
    <Trends/>
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