<template>
    <!-- tweets -->
    <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
        <router-link :to="`/profile/${tweet.uid}`">
        <img :src="tweet.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 m-2 cursor-pointer" />
        </router-link>
        <div class="ml-3 flex-1 flex flex-col space-y-1">
            <div class="text-sm flex justify-between items-center">
                <div class="space-x-1">
                    <span class="font-bold">{{tweet.email}}</span>
                    <span class="text-gray-500" text-xs>@{{tweet.usrname}}</span>
                    <span>. </span>
                    <span class="text-gray-500" text-xs>{{moment(tweet.created_at).fromNow()}}</span>
                </div>
                <button v-if="currentUser.uid === tweet.uid" @click="onDeleteTweet(tweet)">
                    <i class="fas fa-trash text-red-400 p-2 rounded-full hover:bg-red-50"></i>
                </button>
            </div>
            <!-- tweet body -->
            <router-link :to="`/tweet/${tweet.id}`" class="hover:text-cyan-400">
                {{tweet.tweet_body}}
            </router-link>
            <!-- tweet actions -->
            <div class="flex justify-between">
                <!-- comment button -->
                <div @click="showCommentModal = true" class="text-gray-500 hover:bg-blue-50 p-2 hover:text-blue-700 rounded-full">
                    <i class="far fa-comment  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm">{{tweet.num_comments}}</span>
                </div>

                <!-- retweet button -->
                <div v-if="!tweet.isRetweeted" class="text-gray-500 hover:bg-green-50 p-2 hover:text-green-700 rounded-full" @click="handleRetweet(tweet)">
                    <i class="fas fa-retweet  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm">{{tweet.num_retweets}}</span>
                </div>
                <div v-else class="text-green-400 p-2 hover:text-green-700 rounded-full" @click="handleRetweet(tweet)">
                    <i class="fas fa-retweet  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm">{{tweet.num_retweets}}</span>
                </div>

                <!-- like button -->
                <div v-if="!tweet.isLiked" class="text-gray-500 hover:bg-red-50 p-2 hover:text-red-700 rounded-full" @click="handleLikes(tweet)">
                    <i class="far fa-heart  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm">{{tweet.num_likes}}</span>
                </div>
                <div v-else class="text-red-400 p-2 hover:text-green-700 rounded-full" @click="handleLikes(tweet)">
                    <i class="far fa-heart  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm">{{tweet.num_likes}}</span>
                </div>

                <!-- share button -->
                <div class="text-gray-500 hover:bg-yellow-50 p-2 hover:text-yellow-500 rounded-full">
                    <i class="far fa-share-square  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm"></span>
                </div>
            </div>
        </div>
    </div>
    <comment-modal :tweet="tweet" v-if="showCommentModal" @closeModal="closeModal"></comment-modal>
</template>

<script>
import moment from 'moment'
import { ref } from 'vue'
import CommentModal from './CommentModal.vue';
import handleRetweet from '../utils/handleRetweet';
import handleLikes from '../utils/handleLikes';
import { COMMENT_COLLECTION, LIKE_COLLECTION, RETWEET_COLLECTION, TWEET_COLLECTION, USER_COLLECTION } from '../firebase';
import firebase from '../firebase'

export default {
  components: { CommentModal },
    props: ['currentUser', 'tweet'],

    setup() {
        const showCommentModal = ref(false);

        const closeModal = () => {
            showCommentModal.value = false
        }
        const onDeleteTweet = async (tweet) => {

            if (confirm("????????? ????????? ?????????????????????????")) {
            // deleteTweet
            await TWEET_COLLECTION.doc(tweet.id).delete()
            // deleteComment
            const commentSnapshot = await COMMENT_COLLECTION.where("from_tweet_id", "==", tweet.id).get()
            commentSnapshot.docs.forEach(async (doc) => await doc.ref.delete())
            // deleteLikes
            const likeSnapshot = await LIKE_COLLECTION.where("from_tweet_id", "==", tweet.id).get()
            likeSnapshot.docs.forEach(async (doc) => await doc.ref.delete())
            // deleteRetweets
            const retweetSnapshot = await RETWEET_COLLECTION.where("from_tweet_id", "==", tweet.id).get()
            retweetSnapshot.docs.forEach(async (doc) => await doc.ref.delete())
            // user collection - num_tweets (-1)
            await USER_COLLECTION.doc(tweet.uid).update({
                num_tweets: firebase.firestore.FieldValue.increment(-1)
            })
            }
        }
        return {
            moment,
            showCommentModal,
            closeModal,
            handleRetweet,
            handleLikes,
            onDeleteTweet,
        }
    }
}
</script>

<style>
</style>