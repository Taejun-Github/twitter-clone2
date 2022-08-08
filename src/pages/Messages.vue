<template>
    <div class="flex-1 flex">
        <!-- chat list -->
        <div class="w-2/5 border-r border-gray-100">
            <div class="flex flex-col">
                <div class="flex justify-between items-center border-b border-gray-100">
                    <div class="p-3 font-bold text-lg h-14">쪽지</div>
                    <i class="fa-solid fa-message text-2xl text-blue-200 p-2 cursor-pointer"></i>
                </div>

                <!-- chat list -->
                <div class="flex p-3 py-4 hover:bg-gray-50 border-b border-gray-100" v-for="message in 5"
                    :key="message">
                    <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full cursor-pointer mr-2" />
                    <div>
                        <div class="flex items-center space-x-1">
                            <div class="font-bold mr-2">Name</div>
                            <div class="text-gray-500  text-sm pr-3">Id</div>
                            <div class="text-gray-500 text-sm">Date</div>
                        </div>
                        <div class="text-gray-500">message</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- chatting -->
        <div class="w-3/5 border-r border-gray-100">
            <div class="flex flex-col h-screen">
                <!-- title -->
                <div class="flex px-3 border-b border-gray-100 items-center h-14">
                    <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mr-2 cursor-pointer" />
                    <div>
                        <div class="font-bold text-lg">name</div>
                        <div class="text-sm text-gray-500">id</div>
                    </div>
                </div>
                <!-- user-info -->
                <div class="flex flex-col justify-center items-center p-6 border-b border-gray-100">
                    <div>
                        <span class="font-bold pr-3">ekekek@naver.com</span>
                        <span>@test123</span>
                    </div>
                    <div>
                        <span class="font-bold pr-2">28</span><span class="pr-3">팔로우 중</span>
                        <span class="font-bold pr-2">5</span><span>팔로워</span>
                    </div>
                    <div>
                        <span class="pr-3">가입일:</span>
                        <span>2022년 07월</span>
                    </div>
                </div>
                <div class="flex-1 bg-green-50 overflow-y-scroll">
                    <!-- chat bubble: my chat -->
                    <div class="text-right px-3 py-3">
                        <span class="bg-blue-300 text-white px-4 py-2 rounded-full">내 메시지</span>
                        <div class="mt-3 text-xs text-gray-500">
                            2034년 1월 29일 오전 1:05
                        </div>
                    </div>

                    <!-- chat bubble: your chat -->
                    <div class="text-left px-3 py-3" v-for="chat in 5" :key="chat">
                        <span class="bg-gray-100 px-4 py-2 rounded-full">상대 메시지</span>
                        <div class="mt-3 text-xs text-gray-500">
                            2034년 1월 29일 오전 1:05
                        </div>
                    </div>
                </div>
                <!-- chat input -->
                <div class="flex item-center bg-whtie border-t border-gray-100 sticky">
                    <i class="fa-solid fa-message p-2 text-lg text-green-400"></i>
                    <input type="text" class="m-2 py-1 px-2 rounded-md bg-gray-100 resize-none outline-none flex-1"
                        placeholder="새 쪽지 작성하기" />
                    <button class="text-center">
                        <i
                            class="far fa-paper-plane text-green-200 text-lg hover:bg-green-400 p-1 rounded-full w-10 h-10"></i>
                    </button>
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