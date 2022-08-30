<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"
        @click="$emit('closeModal')">
        <!-- 배경을 클릭해도 모달이 꺼지게 한다. -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <!-- 	top: 0px; right: 0px; bottom: 0px; left: 0px; 을 나타내는 것이 inset-0이다. -->
        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex sm:items-center justify-center min-h-full text-center sm:p-0">
                <!-- contents -->
                <div @click.stop
                    class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full">
                    <div class="border-b border-gray-100 p-2 flex justify-between">
                        <div class="flex items-center">
                            <button
                                class="fas fa-times flex items-center justify-center text-primary text-2xl p-2 h-10 w-10 hover:bg-green-50 rounded-full text-lg"
                                @click="$emit('closeModal')"></button>
                            <span class="font-bold text-lg">프로필 수정</span>
                        </div>
                        <div class="text-right mr-2">
                            <button @click="onSaveProfile" class="hover:bg-dark bg-primary text-white font-bold px-3 py-1 rounded-full">저장</button>
                        </div>
                    </div>
                    <div class="h-60">
                        <div class="bg-gray-300 h-40 relative flex-none flex items-center justify-center">
                            <img ref="backgroundImage" :src="currentUser.background_image_url" class="object-cover absolute h-full w-full z-10">
                            <button @click="onChangeBackgroundImage" class="z-30 absolute h-10 w-10 hover:text-red-500 rounded-full fas fa-camera text-white text-2xl"></button>
                            <input @change="previewBackgroundImage" type="file" accept="image/*" id="backgroundImageInput" class="hidden"/>

                            <img ref="profileImage" :src="currentUser.profile_image_url" class="w-28 h-28 absolute z-20 left-2 -bottom-14 rounded-full" />
                            <button @click="onChangeProfileImage" class="absolute left-11 -bottom-5 z-30 h-10 w-10 hover:text-red-500 text-gray-500 rounded-full fas fa-camera text-white text-2xl"></button>
                            <input @change="previewprofileImage" type="file" accept="image/*" id="profileImageInput" class="hidden"/>
                        </div>
                    </div>

                    <div class="flex flex-col p-2">
                        <div class="mx-2 my-1 px-2 py-1 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary">
                            <div class="text-sm">이름</div>
                            <input type="text" :value="currentUser.email" class="text-black focus:outline-none" />
                        </div>
                        <div class="mx-2 my-1 px-2 py-5 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary">
                            <div class="text-sm">자기소개</div>
                            <input type="text" placeholder="자기소개" class="text-black focus:outline-none" />
                        </div>
                        <div class="mx-2 my-1 px-2 py-3 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary">
                            <div class="text-sm">위치</div>
                            <input type="text" placeholder="위치" class="text-black focus:outline-none" />
                        </div>
                        <div class="mx-2 my-1 px-2 py-3 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary">
                            <div class="text-sm">웹사이트</div>
                            <input type="text" placeholder="웹사이트" class="text-black focus:outline-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed} from 'vue'
import store from '../store'
import addTweet from '../utils/addTweet';
import { storage, USER_COLLECTION } from '../firebase'
import { useRoute } from 'vue-router';

export default {
    setup(props, { emit }) {
        const tweetBody = ref('');
        const currentUser = computed(() => store.state.user)
        const profileImage = ref(null)
        const profileImageData = ref(null)
        const backgroundImage = ref(null)
        const backgroundImageData = ref(null)


        const onAddTweet = async () => {
            try {
                await addTweet(tweetBody.value, currentUser.value);
                tweetBody.value = ''
                emit('close-modal');
            } catch (e) {
                console.log('on add tweet error on homepage', e);
            }
        }

        const onChangeBackgroundImage = () => {
            document.getElementById('backgroundImageInput').click()
        }

        const onChangeProfileImage = () => {
            document.getElementById('profileImageInput').click()
        }

        const previewBackgroundImage = (event) => {
            const file = event.target.files[0]
            let reader = new FileReader()
            backgroundImageData.value = file

            reader.onload = function(event) {
                backgroundImage.value.src = event.target.result // ref="backgroundImage" src="/background.png"에서 src 부분을 수정하는 것
            }
            reader.readAsDataURL(file)
        }

        const previewprofileImage = (event) => {
            const file = event.target.files[0]
            let reader = new FileReader()
            profileImageData.value = file

            reader.onload = function(event) {
                profileImage.value.src = event.target.result // ref="backgroundImage" src="/background.png"에서 src 부분을 수정하는 것
            }
            reader.readAsDataURL(file)
        }

        const onSaveProfile = async () => {
            if(!profileImageData.value && !backgroundImage.value) {
                alert('사진을 넣지 않았습니다')
                return
            }

            if(profileImageData.value) {
                try {
                    const uploadTask = await storage.ref(`profile/${currentUser.value.uid}/profile`).put(profileImageData.value)
                    const url = await uploadTask.ref.getDownloadURL()
                    await USER_COLLECTION.doc(currentUser.value.uid).update({
                        profile_image_url: url,
                    })
                    store.commit("SET_PROFILE_IMAGE", url)
                } catch(e) {
                    console.log(`profile image data error: ${e}`)

                    // 400 에러가 떴던 이유와 해결법
                    /* First go to Storage, Rules tab and change allow read, write: if false; to true; as shown bellow.
                        rules_version = '2';
                        service firebase.storage {
                            match /b/{bucket}/o {
                                match /{allPaths=**} {
                                    allow read, write: if true;
                                }
                            }
                        }
                    */
                }
            }

            if(backgroundImageData.value) {
                try {
                    const uploadTask = await storage.ref(`background/${currentUser.value.uid}/background`).put(backgroundImageData.value)
                    const url = await uploadTask.ref.getDownloadURL()
                    await USER_COLLECTION.doc(currentUser.value.uid).update({
                        background_image_url: url,
                    })
                    store.commit("SET_BACKGROUND_IMAGE", url)
                } catch(e) {
                    console.log(`background image data error: ${e}`)
                }
            }

            emit('close-modal')
        }
        return {
            tweetBody,
            onAddTweet,
            currentUser,
            onChangeBackgroundImage,
            onChangeProfileImage,
            previewBackgroundImage,
            previewprofileImage,
            backgroundImage,
            profileImage,
            onSaveProfile,
            profileImageData,
            backgroundImageData,
        }
    }
}
</script>

<style>
</style>