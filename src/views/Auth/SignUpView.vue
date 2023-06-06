<script setup lang="ts">
import HomeNavbar from '@/components/Layout/HomeNavbar.vue'
import SignUpHeader from '@/components/Layout/SignUpHeader.vue'
</script>

<template>
  <main>
    <section class="relative pb-[50px] bg-dark min-h-screen">
      <HomeNavbar />

      <div class="container mt-[60px] relative z-10">
        <div class="grid items-center justify-between gap-8 md:grid-cols-2">
          <SignUpHeader />

          <form
            action=""
            class="bg-white rounded-[30px] p-6 md:max-w-[435px] mx-auto w-full flex flex-col shadow-sm"
          >
            <p class="text-dark font-bold text-[26px] mb-5">Sign Up</p>

            <div class="flex flex-col gap-[18px]">
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Company name </label>
                <input
                  type="text"
                  name="company"
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
                  placeholder="Write your email"
                  class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark !border-danger !text-danger placeholder:font-normal font-medium"
                  value="mucho@shayna"
                  required
                />
              </div>
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Password </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Secure your strong password"
                  class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
                  required
                />
              </div>
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Category </label>
                <select
                  name="category"
                  class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none appearance-none border-borderLight focus:border-primary placeholder:text-placeholderText bg-[url('@/assets/svg/ic-chevron-down.svg')] bg-[calc(100%-20px)_center] bg-no-repeat invalid:required:text-placeholderText"
                  required
                >
                  <option value="" selected hidden disabled>Select company category</option>
                  <option value="fb">Food & Beverages</option>
                  <option value="cc">Clothing & Apparel</option>
                </select>
              </div>
            </div>
            <RouterLink :to="{ name: 'add-product' }" class="btn-primary mt-[30px]">
              Continue Create Account
            </RouterLink>
          </form>
        </div>
      </div>

      <img src="@/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
      <div class="right-triangle"></div>
    </section>
  </main>
</template>
