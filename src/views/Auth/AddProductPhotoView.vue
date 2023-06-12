<script setup lang="ts">
import { ref } from 'vue'

import HomeNavbar from '@/components/Layout/HomeNavbar.vue'
import SignUpHeader from '@/components/Layout/SignUpHeader.vue'

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
  <main>
    <section class="relative pb-[50px] bg-dark min-h-screen">
      <HomeNavbar />

      <div class="container mt-[60px] relative z-10">
        <div class="grid items-center justify-between gap-8 md:grid-cols-2">
          <SignUpHeader />

          <form
            action=""
            class="bg-white rounded-[30px] p-6 md:max-w-[435px] min-h-[550px] w-full mx-auto flex flex-col shadow-sm"
            id="formProduct"
          >
            <p class="text-dark font-bold text-[26px] mb-5">Add Photos</p>
            <!-- Product name & category -->
            <div class="flex items-center w-full gap-3">
              <img src="@/assets/svg/default-image.svg" class="w-[60px] h-[60px]" alt="" />
              <div class="text-dark">
                <h3 class="text-base font-semibold">Air Jordan 2</h3>
                <p class="mt-1 text-xs font-normal">Sneakers</p>
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
                @change="uploadPhotos($event)"
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

            <RouterLink :to="{ name: 'dashboard' }" class="mt-auto btn-primary">
              Update Product
            </RouterLink>
          </form>
        </div>
      </div>

      <img src="@/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
      <div class="right-triangle"></div>
    </section>
  </main>
</template>
