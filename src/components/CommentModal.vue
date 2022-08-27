<template>
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('closeModal')">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex sm:items-center justify-center min-h-full text-center sm:p-0">
      
          <!-- content -->
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
          
          <div>
            <!-- original tweet -->
            <div class="flex px-4 pt-4 pb-3">
              <div class="flex flex-col">
                <img :src="tweet.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 m-2 cursor-pointer" />
                <div class="ml-5 w-0.5 h-full bg-gray-300 mt-2 -mb-1"></div>
              </div>  
              <div class="ml-2 flex-1">
                <div class="flex space-x-2">
                  <span class="font-bold text-sm">{{ tweet.email }}</span>
                  <span class="text-gray text-sm">{{ tweet.username }}</span>
                  <span class="text-gray text-sm">{{moment(tweet.created_at).fromNow()}}</span>
                </div>
                <div class="text-sm mt-2 mb-2">{{ tweet.tweet_body }}</div>
                <div class="space-x-2">
                  <span class="text-primary text-sm">{{ tweet.username }}</span> 
                  <span class="text-gray text-sm">님에게 보내는 답글</span>
                </div>
              </div>                                 
            </div>
            <!-- tweeting section -->
            <div class="flex px-4 pb-4">
                  <img :src="currentUser.profile_image_url"
                      class="w-10 h-10 rounded-full hover:opacity-80 m-2 cursor-pointer" />
                  <div class="flex-1 flex flex-col ml-2">
                      <textarea v-model="tweetBody" rows="5" placeholder="내 답글을 입력합니다"
                          class="w-full test-lg font-bold focus:outline-none mb-3 mt-2 mr-2 resize-none"></textarea>
                      <!-- button -->
                      <div class="text-right mr-3 hidden sm:block">
                          <button v-if="!tweetBody.length" @click="noTweet" class="bg-red-500 text-white px-4 py-1 rounded-xl text-sm font-bold">답글을 입력하세요</button>
                          <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-white px-4 py-1 rounded-xl text-sm font-bold">답글</button>
                      </div>
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
import moment from 'moment'
export default {
  props: ['tweet'],
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
      moment,
    }
  }
}
</script>

<style>

</style>