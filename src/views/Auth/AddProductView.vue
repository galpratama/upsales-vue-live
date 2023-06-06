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
            <p class="text-dark font-bold text-[26px] mb-5">Add First Product</p>

            <div class="flex flex-col gap-[18px]">
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Product name </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Write your product name"
                  class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
                />
              </div>
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Product SKU </label>
                <input
                  type="text"
                  name="product_sku"
                  placeholder="Write your product sku"
                  class="px-5 py-4 text-base font-medium bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark placeholder:font-normal"
                />
              </div>
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Quantity </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Write your product quantity"
                  class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
                />
              </div>
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Price </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Insert your product price"
                  class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
                />
              </div>
              <!-- form group -->
              <div class="flex flex-col gap-2">
                <label for="" class="text-base font-medium text-dark"> Category </label>
                <select
                  name="category"
                  class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none appearance-none border-borderLight focus:border-primary placeholder:text-placeholderText bg-[url('@/assets/svg/ic-chevron-down.svg')] bg-[calc(100%-20px)_center] bg-no-repeat"
                  required
                >
                  <option value="" hidden disabled selected>Select product category</option>
                  <option value="fb">Food & Beverages</option>
                  <option value="cc">Clothing & Apparel</option>
                </select>
              </div>
            </div>
            <RouterLink :to="{ name: 'add-product-photo' }" class="btn-primary mt-[30px]">
              Save Product
            </RouterLink>
          </form>
        </div>
      </div>

      <img src="@/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
      <div class="right-triangle"></div>
    </section>
  </main>
</template>
