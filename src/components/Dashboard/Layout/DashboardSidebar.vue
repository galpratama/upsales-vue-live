<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'

const sidebarStore = useSidebarStore()

const props = defineProps<{
  activeMenu?: string
}>()
</script>

<template>
  <!-- START: Sidebar -->
  <aside
    :class="{ hidden: sidebarStore.isToggled }"
    class="bg-white lg:float-left w-full max-w-xs lg:max-w-max px-[30px] pt-7 lg:pt-[50px] pb-[70px] lg:flex flex-col h-full min-h-screen lg:max-h-full absolute lg:static lg:left-0 z-50 shadow-md lg:shadow-none overflow-y-auto lg:overflow-y-visible max-h-screen"
  >
    <!-- X icon -->
    <a
      href="javascript:void(0)"
      class="block w-6 h-6 mb-4 ml-auto lg:hidden"
      id="navbarToggler"
      @click="sidebarStore.toggle()"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </a>

    <!-- Logo -->
    <a href="@/pages/dashboard/">
      <img src="@/assets/svg/dashboard-logo.svg" class="w-auto h-10 lg:mx-auto" alt="" />
    </a>

    <!-- Dashboard Menu Sections -->
    <div class="flex flex-col w-full gap-10 mt-[50px]">
      <!-- Search Field in mobile-only -->
      <form action="" class="w-full max-w-[270px] mx-auto mobile-only">
        <input
          type="text"
          name="search"
          placeholder="Search report..."
          class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark bg-[url('@/assets/svg/ic-search.svg')] bg-[calc(100%-20px)_center] bg-no-repeat w-full"
        />
      </form>
      <section>
        <p class="mb-4 text-base text-dark">Daily Use</p>
        <div class="flex flex-col gap-[14px]">
          <RouterLink
            :to="{ name: 'dashboard' }"
            class="group dashboard-link"
            :class="{ 'is-active': props.activeMenu === 'dashboard' }"
          >
            <img
              src="@/assets/svg/ic-notification-status.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Overview
          </RouterLink>
          <RouterLink
            :to="{ name: 'dashboard-product-index' }"
            class="group dashboard-link"
            :class="{ 'is-active': props.activeMenu === 'product' }"
          >
            <img
              src="@/assets/svg/ic-box.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Products
          </RouterLink>
          <RouterLink :to="{ name: 'dashboard-transaction-index' }" class="group dashboard-link">
            <img
              src="@/assets/svg/ic-cart.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Transactions
          </RouterLink>
          <a href="#" class="group dashboard-link">
            <img
              src="@/assets/svg/ic-people.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Customers
          </a>
          <a href="#" class="group dashboard-link md:hidden">
            <img
              src="@/assets/svg/ic-bell.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Notifications
            <span
              class="min-w-max w-[26px] h-[26px] p-[8px] leading-3 text-[12px] text-white rounded-full bg-primary text-center relative"
            >
              8
            </span>
          </a>
          <a href="#" class="group dashboard-link md:hidden">
            <img
              src="@/assets/svg/ic-message.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Messages
            <span
              class="bg-primary rounded-full text-white font-bold text-[12px] p-2 h-7 w-7 min-w-max text-center leading-3"
            >
              12
            </span>
          </a>
        </div>
      </section>

      <section>
        <p class="mb-4 text-base text-dark">Business</p>
        <div class="flex flex-col gap-[14px]">
          <a href="#" class="group dashboard-link">
            <img
              src="@/assets/svg/ic-globe.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Merchants
          </a>
          <a href="#" class="group dashboard-link">
            <img
              src="@/assets/svg/ic-data.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            User Flow
          </a>
          <a href="#" class="group dashboard-link">
            <img
              src="@/assets/svg/ic-document.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Invoice
          </a>
          <a href="#" class="group dashboard-link">
            <img
              src="@/assets/svg/ic-gear.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Settings
          </a>
          <RouterLink :to="{ name: 'home' }" class="group dashboard-link">
            <img
              src="@/assets/svg/ic-logout.svg"
              class="transition-all group-hover:filter-white group-[.is-active]:filter-white"
              alt=""
            />
            Logout
          </RouterLink>
        </div>
      </section>
    </div>
  </aside>
  <div
    id="backdropDrawer"
    @click="sidebarStore.toggle()"
    :class="{ hidden: sidebarStore.isToggled }"
    class="fixed z-40 w-screen h-screen bg-gray-900 bg-opacity-50"
  ></div>
  <!-- END: Sidebar -->
</template>
