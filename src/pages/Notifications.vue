<template>
    <!-- Notifications -->
  <div class="flex-1 border-r border-gray-100 flex flex-col overflow-y-auto">
    <!-- Title -->
    <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
    <!-- Notifications -->
    <div class="flex flex-col hover:bg-gray-50 p-3 border-b border-gray-200 cursor-pointer" v-for="notification in notifications" :key="notification.id">
        <div class="flex justify-between">
            <router-link :to="`/profile/${notification.uid}`">
              <img :src="notification.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-70" />
            </router-link>
            <i class="fas fa-ellipsis-h text-gray-500 hover:bg-blue-50 hover:text-blue-500 rounded-full h-10 w-10 flex items-center justify-center"></i>
        </div>
        <div class="py-2">
          <span class="font-bold">{{ notification.username }}</span> 님의 최근 트윗
        </div>
        <router-link :to="`/tweet/${notification.id}`" class="py-2 text-gray-500">{{ notification.tweet_body }}</router-link>
    </div>
  </div>
  <!-- Trends -->
  <trends></trends>
</template>

<script>
import Trends from '../components/Trends.vue'
import {ref, computed, onBeforeMount} from 'vue'
import store from '../store'
import { TWEET_COLLECTION } from '../firebase'
import getTweetInfo from '../utils/getTweetInfo'
export default {
  components: { Trends },
  setup() {
    const currentUser = computed(() => store.state.user)
    const notifications = ref([])

    onBeforeMount(() => {
      currentUser.value.followings.forEach(async (following) => {

        const dateFrom = Date.now() - 60 * 60 * 24 * 7 * 1000 // before 7 days
        const snapshot = await TWEET_COLLECTION.where('created_at', '>', dateFrom).where("uid", "==", following).orderBy("created_at", "desc").get()
        snapshot.docs.forEach(async (doc) => {
          let tweet = await getTweetInfo(doc.data(), currentUser.value)
          notifications.value.push(tweet)
        })
      })
    })

    return {
      currentUser,
      notifications,

    }
  }
}
</script>

<style>

</style>