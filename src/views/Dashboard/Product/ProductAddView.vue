<script setup lang="ts">
import { ref } from 'vue'

const photos = ref<string[]>([])

function uploadPhotos(e: any) {
  let files = e.target.files

  if (photos.value.length + files.length > 7) {
    alert('A product can only contains 7 photos')
    return false
  }

  for (let i = 0; i < files.length; i++) {
    photos.value.push(URL.createObjectURL(files[i]))
  }
}
</script>

<template>
  <header class="text-dark mb-[30px]">
    <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">Add New</h1>
    <ul class="inline-flex items-center mt-1 md:mt-2" id="breadcrumbLink">
      <li>
        <RouterLink :to="{ name: 'dashboard-product-index' }" class="text-base text-dark">
          My Products
        </RouterLink>
      </li>
      <li>
        <a href="#" class="text-base text-dark"> Add New </a>
      </li>
    </ul>
  </header>

  <section class="w-full max-w-[550px] bg-subtleGrey rounded-2xl p-4">
    <form action="" class="flex flex-col w-full" id="formProduct">
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
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Photos </label>

          <!-- Product photos -->
          <div class="grid justify-between grid-cols-2 gap-5 md:grid-cols-4 w-max">
            <input
              type="file"
              name="photo"
              id="photo"
              class="hidden"
              value=""
              accept="image/x-png,image/jpg,image/jpeg"
              multiple
              ref="file"
              @change="uploadPhotos($event)"
            />
            <button type="button" @click.prevent=";($refs.file as HTMLInputElement).click()">
              <img
                src="@/assets/svg/add-image.svg"
                class="w-[100px] h-[100px] object-cover rounded-[18px]"
                alt=""
              />
            </button>

            <!-- Photos template -->
            <template v-for="(photo, index) in photos" :key="index">
              <img :src="photo" class="w-[100px] h-[100px] object-cover rounded-[18px]" alt="" />
            </template>

            <!-- Shown when photos is not empty -->
            <img
              src="@/assets/svg/no-photo.svg"
              v-if="!photos.length"
              class="w-[100px] h-[100px] object-cover rounded-[18px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <RouterLink :to="{ name: 'dashboard-product-index' }" class="btn-primary mt-[30px]">
        Save Product
      </RouterLink>
    </form>
  </section>
</template>
