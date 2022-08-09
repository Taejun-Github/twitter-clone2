<template>
  <div class="flex flex-col items-center">
    <i :class="`fa-brands fa-airbnb text-6xl text-primary p-3 mt-10 ${loading ? 'animate-spin' : ''}`"></i>
    <div class="text-2xl font-bold m-1">내가 만든 사이트 회원가입</div>
    <input v-model="email" type="text" placeholder="이메일" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <input v-model="username" type="text" placeholder="아이디" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <input v-model="password" type="password" placeholder="비밀번호" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <button v-if="loading" class="bg-blue-200 rounded-3xl text-center w-1/3 h-10 text-white m-2">회원가입 중</button>
    <button v-else class="bg-blue-500 rounded-3xl text-center w-1/3 h-10 text-white m-2 " @click="onRegister">회원가입</button>
    <router-link to="/login">
    <button class="text-blue-600 text-sm py-2">계정이 이미 있으신가요? 로그인 하기</button>
    </router-link>
  </div>
</template>

<script>
import {ref} from 'vue'
import {auth, db, USER_COLLECTION} from '../firebase'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const loading = ref(false);
    const router = useRouter()

    const onRegister = async () => {

      if(!username.value || !email.value || !password.value) {
        alert("유저네임, 이메일, 비밀번호를 모두 입력해주세요");
        return
      }

      try {
        loading.value = true
        const credential = await auth.createUserWithEmailAndPassword(email.value, password.value)
        const user = credential.user;
        const doc = USER_COLLECTION.doc(user.uid);
        await doc.set({
          uid: user.uid,
          email: email.value,
          username: username.value,
          profile_image_url: '/profile.jpeg',
          num_tweets: 0,
          followers: [],
          followings: [],
          created_at: Date.now()
        })
        alert("회원 가입에 성공했습니다. 로그인해 주세요")
        router.push('/login')

      } catch(e) {
         switch(e.message) {
            case "auth/invalid-email":
              alert('잘못된 이메일 형식입니다')
              break
            case "auth/weak-password":
              alert("너무 쉬운 비밀번호")
              break;
            case "auth/email-already-in-use":
              alert("이미 가입되어 있는 이메일입니다.")
              break
            default:
              alert(e.message)
              break
         }
      } finally {
        loading.value = false;
      }
    }

    return {
      username, email, password, onRegister, loading
    }
  }
}
</script>

<style>

</style>