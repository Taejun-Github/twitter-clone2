<template>
    <!-- tweets -->
    <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
        <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 m-2 cursor-pointer" />
        <div class="ml-3 flex-1 flex flex-col space-y-1">
            <div class="text-sm space-x-1">
                <span class="font-bold">{{tweet.email}}</span>
                <span class="text-gray-500" text-xs>@{{tweet.usrname}}</span>
                <span>. </span>
                <span class="text-gray-500" text-xs>{{moment(tweet.created_at).fromNow()}}</span>
            </div>
            <!-- tweet body -->
            <div>
                {{tweet.tweet_body}}
            </div>
            <!-- tweet actions -->
            <div class="flex justify-between">
                <div class="text-gray-500 hover:bg-blue-50 p-2 hover:text-blue-700 rounded-full">
                    <i class="far fa-comment  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm">{{tweet.num_comments}}</span>
                </div>
                <div class="text-gray-500 hover:bg-green-50 p-2 hover:text-green-700 rounded-full">
                    <i class="fas fa-retweet  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm">{{tweet.num_retweets}}</span>
                </div>
                <div class="text-gray-500 hover:bg-red-50 p-2 hover:text-red-700 rounded-full">
                    <i class="far fa-heart  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm">{{tweet.num_likes}}</span>
                </div>
                <div class="text-gray-500 hover:bg-yellow-50 p-2 hover:text-yellow-500 rounded-full">
                    <i class="far fa-share-square  cursor-pointer"></i>
                    <span class="ml-1 text-gray-500 text-sm"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: ['currentUser', 'tweet'],

    setup() {
        return {
            moment,
        }
    }
}
</script>

<style>
</style>