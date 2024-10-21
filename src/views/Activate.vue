<template>
  <div class="h-full flex flex-col gap-3 justify-center items-center font-bold text-white text-3xl">
    Your account has activated. Now you can <router-link
      :to="{name: 'home'}"
      class="text-secondary"
    >
      Sign In
    </router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>