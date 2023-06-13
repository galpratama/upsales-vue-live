<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import axios from 'axios'

import HomeNavbar from '@/components/Layout/HomeNavbar.vue'
import SignUpHeader from '@/components/Layout/SignUpHeader.vue'

import { useUserStore } from '@/stores/user'
import { useCategoryStore } from '@/stores/category'

import type Register from '@/types/register'

const api_url = import.meta.env.VITE_API_URL

const router = useRouter()
const categoryStore = useCategoryStore()
const userStore = useUserStore()

onMounted(() => {
  // Redirect to home page if user already logged in
  if (userStore.isLoggedIn) router.push({ name: 'dashboard' })

  // if categories is empty, fetch categories
  if (categoryStore.categories.length === 0) categoryStore.fetchCategories()
})

const form = ref<Register>({
  name: '',
  email: '',
  password: '',
  category_id: null
})

async function register(): Promise<void> {
  try {
    // Send request to API
    const response = await axios.post(api_url + '/register', {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      category_id: form.value.category_id
    })

    // Save token to local storage
    localStorage.setItem('access_token', response.data.result.access_token)

    // Fetch user data
    userStore.fetchUser()

    // Redirect to home page
    router.push({ name: 'add-product' })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <main>
    <section class="relative pb-[50px] bg-dark min-h-screen">
      <HomeNavbar />

      <div class="container mt-[60px] relative z-10">
        <div class="grid items-center justify-between gap-8 md:grid-cols-2">
          <SignUpHeader />

          <form
            @submit.prevent="register"
            action=""
            method="POST"
            class="bg-white rounded-[30px] p-6 md:max-w-[435px] mx-auto w-full flex flex-col shadow-sm"
          >
            <p class="text-dark font-bold text-[26px] mb-5">Sign Up</p>

            <div class="flex flex-col gap-[18px]">
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Company name </label>
                <input
                  type="text"
                  name="name"
                  v-model="form.name"
                  placeholder="Write your company name"
                  class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
                  required
                />
              </div>
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Email address </label>
                <!-- Error state class: !border-danger !text-danger -->
                <input
                  type="email"
                  name="email"
                  v-model="form.email"
                  placeholder="Write your email"
                  class="px-5 py-4 text-base font-medium bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark placeholder:font-normal"
                  required
                />
              </div>
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Password </label>
                <input
                  type="password"
                  name="password"
                  v-model="form.password"
                  placeholder="Secure your strong password"
                  class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
                  required
                />
              </div>
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Category </label>
                <select
                  name="category_id"
                  v-model="form.category_id"
                  class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none appearance-none border-borderLight focus:border-primary placeholder:text-placeholderText bg-[url('@/assets/svg/ic-chevron-down.svg')] bg-[calc(100%-20px)_center] bg-no-repeat invalid:required:text-placeholderText"
                  required
                >
                  <option
                    v-for="category in categoryStore.categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
            <button class="btn-primary mt-[30px]" type="submit">Continue Create Account</button>
          </form>
        </div>
      </div>

      <img src="@/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
      <div class="right-triangle"></div>
    </section>
  </main>
</template>
