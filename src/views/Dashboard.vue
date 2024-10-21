<template>
  <div class="h-full flex flex-col gap-3 justify-center items-center font-bold text-white text-xl md:text-3xl">
    Wellcome {{ getUserFullname }}
  </div>
</template>

<script lang="ts">
  import { useAuthStore } from '../store/module/auth';
  export default {
    computed: {
      getUserFullname(){
        return useAuthStore().getUser.firstname +' '+useAuthStore().getUser.lastname
      }
    }
  }
</script>