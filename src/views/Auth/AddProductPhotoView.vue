<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

import HomeNavbar from '@/components/Layout/HomeNavbar.vue'
import SignUpHeader from '@/components/Layout/SignUpHeader.vue'

import type Product from '@/types/product'

const API_URL = import.meta.env.VITE_API_URL

const route = useRoute()
const router = useRouter()

onMounted(() => {
  // Fetch product data
  fetchProduct()
})

// Product
const product = ref<Product>({
  name: '',
  sku: '',
  quantity: 0,
  price: 0,
  category_id: null
})
async function fetchProduct(): Promise<void> {
  // Fetch product data from API
  const { data } = await axios.get(API_URL + '/product', {
    params: { id: route.params.id },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
  })

  // Save product data to product ref
  product.value = data.result
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
        formData.append('product_id', route.params.id as string)
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
    alert('Product photos have been updated')
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
  <main>
    <section class="relative pb-[50px] bg-dark min-h-screen">
      <HomeNavbar />

      <div class="container mt-[60px] relative z-10">
        <div class="grid items-center justify-between gap-8 md:grid-cols-2">
          <SignUpHeader />

          <form
            @submit.prevent="uploadPhotos"
            class="bg-white rounded-[30px] p-6 md:max-w-[435px] min-h-[550px] w-full mx-auto flex flex-col shadow-sm"
            id="formProduct"
          >
            <p class="text-dark font-bold text-[26px] mb-5">Add Photos</p>
            <!-- Product name & category -->
            <div class="flex items-center w-full gap-3">
              <img src="@/assets/svg/default-image.svg" class="w-[60px] h-[60px]" alt="" />
              <div class="text-dark">
                <h3 class="text-base font-semibold">{{ product.name }}</h3>
                <p class="mt-1 text-xs font-normal">{{ product.category?.name ?? '-' }}</p>
              </div>
            </div>

            <!-- Product photos -->
            <div class="grid grid-cols-2 gap-5 mt-5 mb-20 lg:justify-between md:grid-cols-3">
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

            <button
              type="submit"
              class="mt-auto btn-primary"
              :class="{ 'opacity-70': isPhotoUploading }"
              :disabled="isPhotoUploading"
            >
              <span v-if="!isPhotoUploading">Update Product</span>
              <span v-else>Uploading...</span>
            </button>
          </form>
        </div>
      </div>

      <img src="@/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
      <div class="right-triangle"></div>
    </section>
  </main>
</template>
