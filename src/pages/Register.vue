<template>
  <div class="flex flex-col items-center">
    <i :class="`fa-brands fa-airbnb text-6xl text-primary p-3 mt-10 ${loading ? 'animate-spin' : ''}`"></i>
    <div class="text-2xl font-bold m-1">내가 만든 사이트 회원가입</div>
    <input v-model="email" type="text" placeholder="이메일" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <input v-model="username" type="text" placeholder="아이디" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <input v-model="password" type="password" placeholder="비밀번호" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <button class="bg-blue-600 rounded-3xl text-center w-1/3 h-10 text-white m-2 " @click="onRegister">회원가입</button>
    <router-link to="/login">
    <button class="text-blue-600 text-sm py-2">계정이 이미 있으신가요? 로그인 하기</button>
    </router-link>
  </div>
</template>

<script>
import {ref} from 'vue'
import {auth} from '../firebase'
export default {
  setup() {
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const loading = ref(true);

    const onRegister = async () => {
      try {
        const credential = await auth.createUserWithEmailAndPassword(email.value, password.value)
        console.log(credential);
      } catch(e) {
        console.log("create user with email and password error", e);
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