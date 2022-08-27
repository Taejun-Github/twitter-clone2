<template>
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('closeModal')">
<!-- 배경을 클릭해도 모달이 꺼지게 한다. -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <!-- 	top: 0px; right: 0px; bottom: 0px; left: 0px; 을 나타내는 것이 inset-0이다. -->
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex sm:items-center justify-center min-h-full text-center sm:p-0">
      
      <!-- 이 안쪽부터는 이벤트 발생을 전달하지 않는다. @click.stop을 써주면 아래에서는 클릭을 적용하지 않음 -->
      <!-- 계속 헷갈리는 이유: 전체 화면이 커지면 모달은 sm이 되고, 전체 화면이 작아지면 모달은 sm보다 커진다. -->
      <!-- 그러므로 전체화면이 작아질 때 w-full이 적용되어 전체 화면이 되는 것이 전체화면이 커지면 sm:max-w-lg가 적용되어 모달의 w-full이 지워진다 -->
      <div @click.stop class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full">
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
                <img :src="currentUser.profile_image_url"
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
import {ref, computed} from 'vue'
import store from '../store'
import addTweet from '../utils/addTweet';
export default {
  setup(props, { emit }) {
    const tweetBody = ref('');
    const currentUser = computed(() => store.state.user)
    const onAddTweet = async () => {
          try {
          await addTweet(tweetBody.value, currentUser.value);
          tweetBody.value = ''
          emit('close-modal');
          } catch(e) {
              console.log('on add tweet error on homepage', e);
          }
        }
    return {
      tweetBody,
      onAddTweet,
      currentUser,
    }
  }
}
</script>

<style>

</style>