<template>
    <div class="flex-1 border-r border-gray-100 overflow-y-auto">
        <div class="flex flex-col">
            <!-- page title -->
            <div class="border-b border-gray-100 px-3 py-2 font-bold test-lg">홈</div>
            <!-- tweeting section -->
            <div class="flex px-3 py-3 border-b-8 border-gray-200">
                <img :src="currentUser.profile_image_url"
                    class="w-10 h-10 rounded-full hover:opacity-80 m-2 cursor-pointer" />
                <div class="flex-1 flex flex-col ml-2">
                    <textarea v-model="tweetBody" placeholder="입력하세요"
                        class="w-full test-lg font-bold focus:outline-none mb-3 mt-2 mr-2 resize-none"></textarea>
                    <div class="text-right mr-3">
                        <button v-if="!tweetBody.length" @click="noTweet" class="bg-red-500 text-white px-4 py-1 rounded-xl text-sm font-bold">트윗을 입력하세요</button>
                        <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-white px-4 py-1 rounded-xl text-sm font-bold">트윗</button>
                    </div>
                </div>
            </div>
            <!-- tweets -->
            <Tweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" :currentUser="currentUser"/>
        </div>
    </div>
    <Trends/>
</template>

<script>
import Trends from '../components/Trends.vue';
import Tweet from '../components/Tweet.vue';
import {ref, computed, onBeforeMount} from 'vue'
import store from '../store'
import {TWEET_COLLECTION, USER_COLLECTION} from '../firebase'
import addTweet from '../utils/addTweet';

export default {
    components: { Trends, Tweet },
    setup() {
        const tweetBody = ref('')
        const currentUser = computed(() => store.state.user)
        // 이것은 프록시 객체를 가져오는 것이고 currentUser.value를 불러야 진짜 데이터가 소환된다.
        const tweets = ref([])

        onBeforeMount(()=> {
            TWEET_COLLECTION.orderBy('created_at', 'desc').onSnapshot(snapshot => {
                snapshot.docChanges().forEach(async (change) => {
                    let tweet = await getUserInfo(change.doc.data())
                    if(change.type === 'added') {
                        tweets.value.splice(change.newIndex, 0, tweet)
                    } else if(change.type === 'modified') {
                        tweets.value.splice(change.oldIndex, 1, tweet)
                    } else if(change.type === 'removed') {
                        tweets.value.splice(change.oldIndex, 1)
                    }
                })
            })
        })

        const getUserInfo = async (tweet) => {
            const doc = await USER_COLLECTION.doc(tweet.uid).get()
            tweet = {...tweet, ...doc.data()}
            return tweet
        }

        const noTweet = () => {
            alert('트윗을 입력하지 않았습니다')
        }
        const onAddTweet = async () => {
            try {
            await addTweet(tweetBody.value, currentUser.value);
            tweetBody.value = ''
            } catch(e) {
                console.log('on add tweet error on homepage', e);
            }
        }

        return {currentUser, tweetBody, onAddTweet, noTweet, tweets}
    }
}
</script>

<style>
</style>