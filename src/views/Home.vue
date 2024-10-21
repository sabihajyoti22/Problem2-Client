<template>
  <div class="w-full h-full flex justify-center items-center">
    <SignIn @signup="card = 2" v-if="card === 1" />
    <SignUp @signin="card = 1" v-else />
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
        card: 2 as number
      }
    }
  }
</script>