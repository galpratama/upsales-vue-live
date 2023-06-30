<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import axios from 'axios'

const router = useRouter()

import { useCategoryStore } from '@/stores/category'

import type Product from '@/types/product'

const API_URL = import.meta.env.VITE_API_URL

const categoryStore = useCategoryStore()

onMounted(() => {
  // Fetch categories
  categoryStore.fetchCategories()
})

const form = ref<Product>({
  name: '',
  sku: '',
  quantity: 0,
  price: 0,
  category_id: null
})

const product = ref<Product>({
  id: 0,
  name: '',
  sku: '',
  quantity: 0,
  price: 0,
  category_id: null
})

async function addProduct(e: any): Promise<void> {
  // Send request to API
  try {
    const response = await axios.post(API_URL + '/product', form.value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })

    // If success, store product id to ref
    product.value = response.data.result

    // If there's photos, upload photos
    if (photos.value.length > 0) {
      await uploadPhotos()
    }

    // Redirect to dashboard product page
    router.push({ name: 'dashboard-product-index' })
  } catch (error) {
    console.error(error)
  }
}

// Photos
const photos = ref<string[]>([])
const isPhotoUploading = ref<boolean>(false)
function selectPhotos(e: any) {
  // Get files from input
  let files = e.target.files

  // Check if files is empty or not more than 7 files
  if (photos.value.length + files.length > 7) {
    alert('A product can only contains 7 photos')
    return false
  }

  // Push photos to photos ref and convert to blob URL for preview image in template (DOM)
  for (let i = 0; i < files.length; i++) {
    photos.value.push(URL.createObjectURL(files[i]))
  }
}
async function uploadPhotos(): Promise<void> {
  // Set isPhotoUploading to true
  isPhotoUploading.value = true

  try {
    await Promise.all(
      photos.value.map(async (photo) => {
        // Convert blob URL to blob file
        const blob = await fetch(photo).then((r) => r.blob())

        // Create form data
        const formData = new FormData()
        formData.append('product_id', String(product.value.id))
        formData.append('photo', blob)

        try {
          // Upload photo to API
          await axios.post(API_URL + '/product/photo', formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
          })
        } catch (error) {
          console.error(error)
        }
      })
    )
  } catch (error) {
    console.error(error)
  } finally {
    // Set isPhotoUploading to false
    isPhotoUploading.value = false

    // Redirect to dashboard
    router.push({ name: 'dashboard' })
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
    <form @submit.prevent="addProduct">
      <p class="text-dark font-bold text-[26px] mb-5">Add First Product</p>

      <div class="flex flex-col gap-[18px]">
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Product name </label>
          <input
            type="text"
            name="name"
            v-model="form.name"
            placeholder="Write your product name"
            class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
          />
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Product SKU </label>
          <input
            type="text"
            name="sku"
            v-model="form.sku"
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
            v-model="form.quantity"
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
            v-model="form.price"
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
            v-model="form.category_id"
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
      <div class="flex flex-col gap-2">
        <div class="grid grid-cols-2 gap-5 mt-5 mb-4 lg:justify-between md:grid-cols-3">
          <input
            type="file"
            name="photo"
            id="photo"
            class="hidden"
            value=""
            accept="image/x-png,image/jpg,image/jpeg"
            multiple
            ref="file"
            @change="selectPhotos($event)"
          />
          <button
            type="button"
            @click.prevent=";($refs.file as HTMLInputElement).click()"
            class="w-max h-max"
          >
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

      <button
        type="submit"
        class="mt-auto btn-primary"
        :class="{ 'opacity-70': isPhotoUploading }"
        :disabled="isPhotoUploading"
      >
        <span v-if="!isPhotoUploading">Save Product</span>
        <span v-else>Uploading...</span>
      </button>
    </form>
  </section>
</template>
