<template>
  <div class="md:w-[450px] bg-primary py-12 px-4 mx-3 md:mx-0 text-white">
    <fieldset
      class="border-2 border-secondary p-4 rounded-lg mb-2"
    >
      <legend class="text-2xl text-bold text-white px-1">
        Sign In
      </legend>

      <form
        @submit.prevent="signIn"
      >
        <input
          v-model="user._id"
          type="text"
          placeholder="User ID"
          class="w-full outline-none rounded-full p-3 mb-3 border border-secondary bg-transparent"
        >

        <div class="relative">
          <input
            v-model="user.password"
            :type="showPass ? 'text' : 'password'"
            placeholder="Password"
            class="w-full outline-none rounded-full p-3 mb-3 border border-secondary bg-transparent"
          >

          <div
            class="absolute top-4 right-4 hover:cursor-pointer"
            @click="showPass = !showPass"
          >
            <svg
              v-if="!showPass"
              stroke="white"
              fill="white"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z" /></svg>

            <svg
              v-else
              stroke="white"
              fill="white"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z" /></svg>
          </div>
        </div>

        <div
          v-if="error"
          class="text-red-500 text-xs mb-3"
        >
          {{ '* '+error }}
        </div>

        <label>
          <input
            v-model="rememberMe"
            type="checkbox"
            name="checkbox"
            class="accent-secondary mb-5"
          >
          <span class="ml-3 font-medium text-sm">Remember Me</span>
        </label>

        <div class="text-center">
          Don't have an account? Then <span
            class="text-secondary font-bold hover:cursor-pointer hover:underline"
            @click="$emit('signup')"
          >Sign Up</span>
        </div>

        <button
          type="submit"
          :disabled="disableSignIn"
          class="w-full h-12 rounded-full mt-12 p-3 text-center bg-secondary disabled:bg-slate-600 font-bold"
        >
          <div v-if="!loader">Sign In</div>
          <div class="loader mx-auto" v-else />
        </button>
      </form>
    </fieldset>
  </div>
</template>

<script lang="ts">
  import { useAuthStore } from '../../store/module/auth';

  export default {
    emits: ['signup'],
    data() {
      return {
        rememberMe: false as boolean,
        showPass: false,
        layout: 1,
        user: {
          _id: '',
          password: ''
        },
        error: '',
        loader: false as boolean
      }
    },
    computed: {
      disableSignIn(){
        return !this.user._id || !this.user.password
      },
    },
    created(){
      if(JSON.parse(window.localStorage.getItem('id') || '')){
        this.rememberMe = true
        this.user._id = JSON.parse(window.localStorage.getItem('id') || '')
      }
    },
    methods: {
      signIn(){
        this.loader = true
        useAuthStore().signIn(this.user).then((res: any) => {
          useAuthStore().setUser(res.data)
          this.$router.push({name: 'dashboard'})
          if(this.rememberMe){
            window.localStorage.setItem('id', JSON.stringify(res.data._id))
          }else{
            window.localStorage.removeItem('id')
          }
          this.loader = false
        }).catch((err: any) => {
          this.error = err.response.data.message
          this.loader = false
        })
      }
    }
  }
</script>