<template>
    <!-- Notifications -->
  <div class="flex-1 border-r border-gray-100 flex flex-col overflow-y-auto">
    <!-- Title -->
    <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
    <!-- Notifications -->
    <div class="flex flex-col hover:bg-gray-50 p-3 border-b border-gray-200 cursor-pointer" v-for="notification in 10" :key="notification">
        <div class="flex justify-between">
            <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-70" />
            <i class="fas fa-ellipsis-h text-gray-500 hover:bg-blue-50 hover:text-blue-500 rounded-full h-10 w-10 flex items-center justify-center"></i>
        </div>
        <div class="py-2"><span class="font-bold">노무현</span> 님의 최근 트윗</div>
        <div class="py-2 text-gray-500">트윗의 내용은 200자 미만입니다. 트윗의 내용은 200자 미만입니다. 트윗의 내용은 200자 미만입니다. 트윗의 내용은 200자 미만입니다.</div>
        <div class="text-xs text-gray-300 py-2">shangus@gmail.com</div>
    </div>
  </div>
  <!-- Trends -->
  <trends></trends>
</template>

<script>
import Trends from '../components/Trends.vue'
export default {
  components: { Trends },

}
</script>

<style>

</style>