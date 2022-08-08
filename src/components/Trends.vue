<template>
    <div class="hidden lg:block w-2/5 px-4 py-6">
        <div class="relative mb-7">
            <!-- tweet search input-->
            <input type="text"
                class="rounded-full w-full p-2 pl-10 bg-gray-100 text-sm focus:ring-1 focus:ring-primary focus:bg-white focus:outline-none"
                placeholder="검색어를 입력해주세요" />
            <i class="fas fa-search absolute left-0 text-blue-300 ml-3 mt-2 cursor-pointer"></i>
        </div>
        <!--trend for me-->
        <div>
            <div class="w-full rounded-xl bg-gray-50 flex flex-col">
                <div class="flex items-center justify-between px-3 py-1 border-b border-gray-100">
                    <!-- 여기에서는 주 축이 가로축이다. 교차축이 세로축이다.-->
                    <span class="text-lg font-bold">나를 위한 트렌드</span>
                    <i
                        class="text-center fas fa-cog text-lg text-blue-300 hover:bg-blue-50 p-2 rounded-full w-10 h-10"></i>
                </div>
                <div class="px-3 py-1 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
                    <div class="flex item-center justify-between">
                        <span>대한민국에서 트렌드 중</span>
                        <i class="fa-solid fa-ellipsis text-lg"></i>
                    </div>
                    <div class="text-lg font-bold">러블리즈</div>
                    <div class="mb-2 mt-1">3534 트윗</div>
                </div>
                <div class="px-3 py-1 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
                    <div class="flex item-center justify-between">
                        <span>대한민국에서 트렌드 중</span>
                        <i class="fa-solid fa-ellipsis text-lg"></i>
                    </div>
                    <div class="text-lg font-bold">러블리즈</div>
                    <div class="mb-2 mt-1">3534 트윗</div>
                </div>
                <div class="px-3 py-1 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
                    <div class="flex item-center justify-between">
                        <span>대한민국에서 트렌드 중</span>
                        <i class="fa-solid fa-ellipsis text-lg"></i>
                    </div>
                    <div class="text-lg font-bold">러블리즈</div>
                    <div class="mb-2 mt-1">3534 트윗</div>
                </div>
                <div class="p-3 hover:bg-gray-100 cursor-pointer">
                    <span class="text-xl text-blue-500">더 보기</span>
                </div>
            </div>
        </div>
        <!--suggested follows-->
        <div class="mt-5">
            <div class="w-full rounded-xl bg-gray-50 flex flex-col">
                <div class="px-3 py-1 border-b border-gray-100">
                    <span class="text-lg font-bold">팔로우 추천</span>
                </div>
                <div class="px-3 py-1 border-b border-gray-100 hover:bg-gray-100 cursor-pointer" v-for="trend in 3"
                    :key="trend">
                    <div class="flex items-center">
                        <img src="http://picsum.photos/200" class="w-12 h-12 rounded-full mr-2">
                        <div class="flex-1 flex flex-col">
                            <div class="font-bold p-1">문재인</div>
                            <div class="text-xs p-1 text-gray-500 text-left">@pr_korea</div>
                        </div>
                        <div>
                            <button
                                class="border-2 border-primary hover:bg-blue-100 px-2 py-1 rounded-full text-purple-300 text-sm">
                                팔로우 </button>
                        </div>
                    </div>
                </div>
                <div class="p-3 hover:bg-gray-100 cursor-pointer">
                    <span class="text-xl text-blue-500">더 보기</span>
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