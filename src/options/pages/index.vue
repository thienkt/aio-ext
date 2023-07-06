<script setup lang="ts">
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  // signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjZrXpPjHSVmbw9RCg0nr6XZiUTLZ_M1k",
  authDomain: "cr-ext.firebaseapp.com",
  projectId: "cr-ext",
  storageBucket: "cr-ext.appspot.com",
  messagingSenderId: "467415320196",
  appId: "1:467415320196:web:20d1a8f2d1d34d01ed64d1",
  measurementId: "G-SL62LVBH8T"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()
    console.log(provider)
    const result = await signInWithRedirect(auth, provider)
    // const result = await signInWithPopup(auth, provider)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="text-center m-4">
    <h1 class="text-3xl font-bold underline pb-6">TITLE_____________!</h1>
    <button
      class="w-12 h-4 bg-red-500 rounded-sm block m-auto"
      @click="signInWithGoogle"
    >
      {{ $i18n('save') }}
    </button>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
