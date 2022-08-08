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
            <div class="flex px-3 py-3 border-b border-gray-100" v-for="tweet in 10" :key="tweet">
                <img src="http://picsum.photos/200"
                    class="w-10 h-10 rounded-full hover:opacity-80 m-2 cursor-pointer" />
                <div class="ml-3 flex-1 flex flex-col space-y-1">
                    <div class="text-sm space-x-1">
                        <span class="font-bold">노무현</span>
                        <span class="text-gray-500" text-xs>@aropark</span>
                        <span>. </span>
                        <span class="text-gray-500" text-xs>16 days ago</span>
                    </div>
                    <!-- tweet body -->
                    <div>
                        테스트용 트윗
                    </div>
                    <!-- tweet actions -->
                    <div class="flex justify-between">
                        <div class="text-gray-500 hover:bg-blue-50 p-2 hover:text-blue-700 rounded-full">
                            <i class="far fa-comment  cursor-pointer"></i>
                            <span class="ml-1 text-gray-500 text-sm">11</span>
                        </div>
                        <div class="text-gray-500 hover:bg-green-50 p-2 hover:text-green-700 rounded-full">
                            <i class="fas fa-retweet  cursor-pointer"></i>
                            <span class="ml-1 text-gray-500 text-sm">11</span>
                        </div>
                        <div class="text-gray-500 hover:bg-red-50 p-2 hover:text-red-700 rounded-full">
                            <i class="far fa-heart  cursor-pointer"></i>
                            <span class="ml-1 text-gray-500 text-sm">11</span>
                        </div>
                        <div class="text-gray-500 hover:bg-yellow-50 p-2 hover:text-yellow-500 rounded-full">
                            <i class="far fa-share-square  cursor-pointer"></i>
                            <span class="ml-1 text-gray-500 text-sm"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>