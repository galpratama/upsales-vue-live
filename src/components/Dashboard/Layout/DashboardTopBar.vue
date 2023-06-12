<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { defineProps } from 'vue'

const sidebarStore = useSidebarStore()
const props = defineProps<{
  isDashboard?: boolean
}>()
</script>

<template>
  <!-- START: Top Bar -->
  <nav class="flex items-center lg:justify-between mb-[30px] gap-4">
    <!-- Mobile Sidebar Toggler -->
    <a
      href="javascript:void(0)"
      class="w-6 h-6 mobile-tablet"
      id="navbarTogglerHead"
      @click="sidebarStore.toggle()"
    >
      <img src="@/assets/svg/ic-hamburger.svg" class="invert" alt="" />
    </a>
    <header class="text-dark" v-if="props.isDashboard">
      <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">Overview</h1>
      <p class="mt-1 text-sm md:mt-2 md:text-base">Read data and improve sales</p>
    </header>

    <!-- Search Field in desktop-tablet -->
    <!-- The other pages has class 'w-[60%] max-w-[550px]' for <form> search -->
    <form
      action=""
      class="desktop-tablet"
      :class="isDashboard ? 'w-full max-w-[270px]' : 'w-[60%] max-w-[550px]'"
    >
      <input
        type="text"
        name="search"
        placeholder="Search report..."
        class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark bg-[url('@/assets/svg/ic-search.svg')] bg-[calc(100%-20px)_center] bg-no-repeat w-full"
      />
    </form>

    <div class="flex items-center gap-[10px] ml-auto lg:ml-0">
      <!-- Notifications -->
      <a
        href="#"
        class="group transition-all relative rounded-full border-2 border-borderLight bg-white hover:bg-dark p-[13px] text-dark hover:text-white min-w-max hidden md:block"
      >
        <span
          class="bg-primary rounded-full text-white font-bold text-[11px] absolute top-0 -right-1 p-[5px] h-5 w-5 min-w-max text-center leading-3"
        >
          6
        </span>
        <img
          src="@/assets/svg/ic-bell.svg"
          class="w-6 h-6 transition-all group-hover:filter-white"
          alt=""
        />
      </a>
      <!-- Messages -->
      <a
        href="#"
        class="group transition-all relative rounded-full border-2 border-borderLight bg-white hover:bg-dark p-[13px] text-dark hover:text-white min-w-max hidden md:block"
      >
        <span
          class="bg-primary rounded-full text-white font-bold text-[11px] absolute top-0 -right-1 p-[5px] h-5 w-5 min-w-max text-center leading-3"
        >
          12
        </span>
        <img
          src="@/assets/svg/ic-message.svg"
          class="w-6 h-6 transition-all group-hover:filter-white"
          alt=""
        />
      </a>
      <!-- User Avatar -->
      <a href="#" class="min-w-max">
        <img
          src="@/assets/images/user.png"
          class="w-[50px] h-[50px] rounded-full object-cover"
          alt=""
        />
      </a>
    </div>
  </nav>
  <!-- END: Top Bar -->
</template>
