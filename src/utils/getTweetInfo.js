import { RETWEET_COLLECTION, USER_COLLECTION } from '../firebase'

export default async (tweet, currentUser) => {
    // Add userinfo
    const doc = await USER_COLLECTION.doc(tweet.uid).get()
    tweet.profile_image_url = doc.data().profile_image_url
    tweet.email = doc.data().email
    tweet.username = doc.data().username

    // Add retweetinfo
    const snapshot = await RETWEET_COLLECTION.where("from_tweet_id", "==",  tweet.id).where("uid", "==", currentUser.uid).get()
    if(snapshot.empty) {
        // 정보를 조회해서 아무것도 없다면 리트윗되지 않은 것이다.
        tweet.isRetweeted = false
    } else {
        tweet.isRetweeted = true
    }

    return tweet
}