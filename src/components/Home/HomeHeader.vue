<script setup lang="ts">
import HomeNavbar from '@/components/Layout/HomeNavbar.vue'
</script>

<template>
  <section class="relative pb-[50px] bg-dark max-h-[955px]">
    <HomeNavbar />
    <header class="container flex flex-col items-center mt-[70px] relative z-20">
      <h1
        class="text-center text-light font-bold text-4xl md:text-[55px] leading-tight md:leading-[80px] mb-6"
      >
        Your Sales Go <br class="mobile-only" />
        <span class="italic text-primary">Up</span> & <span class="italic text-primary"> Up</span>
        <br />
        With Our Robust Ecosystem
      </h1>
      <ul class="flex sm:flex-row flex-col sm:items-center gap-4 md:gap-[30px] mb-[50px]">
        <li class="flex items-center gap-2 text-base text-light">
          <img src="@/assets/svg/ic-check.svg" class="w-6 h-6" alt="" />
          No credit card required
        </li>
        <li class="flex items-center gap-2 text-base text-light">
          <img src="@/assets/svg/ic-check.svg" class="w-6 h-6" alt="" />
          Live support 24/7
        </li>
        <li class="flex items-center gap-2 text-base text-light">
          <img src="@/assets/svg/ic-check.svg" class="w-6 h-6" alt="" />
          Trusted by 39K companies
        </li>
      </ul>
      <div class="flex gap-4 md:flex-row flex-col justify-center w-full mb-[60px]">
        <RouterLink :to="{ name: 'signup' }" class="btn-primary">Get Started</RouterLink>
        <a href="#" class="btn-white">Ask Demo</a>
      </div>

      <img
        src="@/assets/images/showcase-project.png"
        class="max-w-[895px] h-auto w-full object-cover rounded-3xl shadow-[12px_12px_60px_rgba(197,202,227,0.25)] z-50"
        alt=""
      />
    </header>

    <img src="@/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
    <div class="right-triangle"></div>
  </section>
</template>
