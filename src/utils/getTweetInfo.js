import { RETWEET_COLLECTION, USER_COLLECTION, LIKE_COLLECTION } from '../firebase'

export default async (tweet, currentUser) => {
    // Add userinfo
    const doc = await USER_COLLECTION.doc(tweet.uid).get()
    tweet.profile_image_url = doc.data().profile_image_url
    tweet.email = doc.data().email
    tweet.username = doc.data().username

    // Add retweetinfo
    const retweetSnapshot = await RETWEET_COLLECTION.where("from_tweet_id", "==",  tweet.id).where("uid", "==", currentUser.uid).get()
    if(retweetSnapshot.empty) {
        // 정보를 조회해서 아무것도 없다면 리트윗되지 않은 것이다.
        tweet.isRetweeted = false
    } else {
        tweet.isRetweeted = true
    }

    // Add likesInfo
    const likeSnapshot = await LIKE_COLLECTION.where("from_tweet_id", "==",  tweet.id).where("uid", "==", currentUser.uid).get()
    if(likeSnapshot.empty) {
        // 정보를 조회해서 아무것도 없다면 리트윗되지 않은 것이다.
        tweet.isLiked = false
    } else {
        tweet.isLiked = true
    }


    return tweet
}