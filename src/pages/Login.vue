<template>
  <div class="flex flex-col items-center">
    <i :class="`fa-brands fa-airbnb text-6xl text-primary p-3 mt-10 ${loading ? 'animate-spin' : ''}`"></i>
    <div class="text-2xl font-bold m-1">내가 만든 사이트 로그인</div>
    <input v-model="email" type="text" placeholder="이메일" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <input @keyup.enter="onlogin" v-model="password" type="password" placeholder="비밀번호" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <button v-if="loading" class="bg-blue-100 rounded-3xl text-center w-1/3 h-10 text-white m-2">로그인 중</button>
    <button v-else class="bg-blue-600 rounded-3xl text-center w-1/3 h-10 text-white m-2" @click="onlogin">로그인</button>
    <router-link to="/register">
    <button class="text-blue-600 text-sm py-2">계정이 없으신가요? 회원가입 하기</button>
    </router-link>
  </div>
</template>

<script>
import {ref} from 'vue'
import {auth} from '../firebase'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const loading = ref(false);
    const router = useRouter()

    const onlogin = async () => {
      try {
        loading.value = true;
        const {user} = await auth.signInWithEmailAndPassword(email.value, password.value)
        console.log(user.uid)
        router.replace("/")
      } catch(e) {
          switch(e.message) {
            case "auth/invalid-email":
              alert('잘못된 이메일 형식입니다')
              break
            case "auth/wrong-password":
              alert("잘못된 비밀번호")
              break;
            case "auth/user-not-found":
              alert("유저가 발견되지 않았습니다")
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
      email, password, onlogin, loading
    }
  }
}
</script>

<style>

</style>