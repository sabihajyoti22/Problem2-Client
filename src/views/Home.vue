<template>
  <div class="w-full h-full flex justify-center items-center bg-violet-500">
    <SignIn v-if="loggedIn" />
    <SignUp v-else />
  </div>
</template>

<script lang="ts">
import SignIn from '../components/cards/SignIn.vue'
import SignUp from '../components/cards/SignUp.vue'

  export default {
    components: {
      SignIn,
      SignUp
    },
    data() {
      return {
        loggedIn: false as boolean
      }
    }
  }
</script>