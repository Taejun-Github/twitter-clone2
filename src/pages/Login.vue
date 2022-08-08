<template>
  <div class="flex flex-col items-center">
    <i :class="`fa-brands fa-airbnb text-6xl text-primary p-3 mt-10 ${loading ? 'animate-spin' : ''}`"></i>
    <div class="text-2xl font-bold m-1">내가 만든 사이트 로그인</div>
    <input v-model="username" type="text" placeholder="이메일" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <input v-model="password" type="text" placeholder="비밀번호" class="border border-gray-200 m-2 w-1/3 h-8 rounded-sm focus:ring-2 focus:outline-none focus:border-blue-300"/>
    <button class="bg-blue-600 rounded-3xl text-center w-1/3 h-10 text-white m-2 " @click="onlogin">로그인</button>
    <router-link to="/register">
    <button class="text-blue-600 text-sm py-2">계정이 없으신가요? 회원가입 하기</button>
    </router-link>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const loading = ref(true);

    const onlogin = () => {
      console.log(email.value, password.value);
    }

    return {
      email, password, onlogin, loading
    }
  }
}
</script>

<style>

</style>