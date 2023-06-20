<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'

const sidebarStore = useSidebarStore()
</script>

<template>
  <nav class="container flex flex-col pt-4 lg:flex-row lg:items-center lg:justify-between lg:pt-10">
    <div class="flex items-center justify-between mb-6 lg:mb-0">
      <RouterLink to="/">
        <img src="@/assets/svg/app-logo.svg" class="w-full" alt="" />
      </RouterLink>

      <a
        href="javascript:void(0)"
        class="w-6 h-6 mobile-tablet"
        id="navbarToggler"
        @click="sidebarStore.toggle()"
      >
        <img src="@/assets/svg/ic-hamburger.svg" alt="" />
      </a>
    </div>

    <div :class="{ hidden: sidebarStore.isToggled }" class="w-full lg:block" id="navigationMenu">
      <div
        class="flex flex-col justify-between w-full gap-4 lg:mx-auto lg:flex-row lg:items-center"
      >
        <div class="flex flex-col lg:mx-auto lg:items-center lg:flex-row gap-x-10 gap-y-4">
          <RouterLink to="/" class="nav-link active"> Home </RouterLink>
          <a href="#" class="nav-link"> Features </a>
          <a href="#" class="nav-link"> Pricing </a>
          <a href="#" class="nav-link"> Case study </a>
          <a href="#" class="nav-link"> About </a>
        </div>
        <div class="flex flex-col lg:items-center lg:flex-row gap-x-5 gap-y-4">
          <RouterLink :to="{ name: 'signin' }" class="btn-white"> My Account </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
