<template>
  <div class="h-full flex flex-col gap-3 justify-center items-center font-bold text-white text-xl md:text-3xl">
    Your account has activated with user id: <span class="text-secondary">{{ userID }}</span> . Now you can <router-link
      :to="{name: 'home'}"
      class="text-secondary hover:cursor-pointer hover:underline"
    >
      Sign In
    </router-link>
  </div>
</template>

<script lang="ts">
  import { useAuthStore } from '../store/module/auth'
  export default {
    data() {
      return {
        userID: '' as string
      }
    },
    created(){
      if(this.$route.params.id){
        useAuthStore().activate(this.$route.params.id).then((res: any) => {
          this.userID = res.data._id
        })
      }
    }
  }
</script>