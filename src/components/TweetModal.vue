<template>
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('closeModal')">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex sm:items-center justify-center min-h-full sm:p-4 text-center sm:p-0">
      
      <!-- 이 안쪽부터는 이벤트 발생을 전달하지 않는다. -->
      <div @click.stop class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full sm:max-w-lg">
          <div class="border-b border-gray-100 p-2 flex justify-between">
            <div>
              <button class="fas fa-times text-primary text-2xl p-2 h-10 w-10 hover:bg-green-50 rounded-full text-lg" @click="$emit('closeModal')"></button>
            </div>
            <div class="sm:hidden">
              <button v-if="!tweetBody.length" @click="noTweet" class="bg-red-500 text-white px-4 py-1 rounded-xl text-sm font-bold">트윗을 입력하세요</button>
              <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-white px-4 py-1 rounded-xl text-sm font-bold">트윗</button>
            </div>  
          </div>
          
          <div class="flex p-4">
                <img src="http://picsum.photos/100"
                    class="w-10 h-10 rounded-full hover:opacity-80 m-2 cursor-pointer" />
                <div class="flex-1 flex flex-col ml-2">
                    <textarea v-model="tweetBody" rows="5" placeholder="입력하세요"
                        class="w-full test-lg font-bold focus:outline-none mb-3 mt-2 mr-2 resize-none"></textarea>
                    <!-- button -->
                    <div class="text-right mr-3 hidden sm:block">
                        <button v-if="!tweetBody.length" @click="noTweet" class="bg-red-500 text-white px-4 py-1 rounded-xl text-sm font-bold">트윗을 입력하세요</button>
                        <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-white px-4 py-1 rounded-xl text-sm font-bold">트윗</button>
                    </div>
                </div>
          </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    const tweetBody = ref('')

    return {
      tweetBody,
    }
  }
}
</script>

<style>

</style>