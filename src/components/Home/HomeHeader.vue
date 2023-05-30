<template>
  <section class="relative pb-[50px] bg-dark max-h-[955px]">
    <nav
      class="container flex flex-col pt-4 lg:flex-row lg:items-center lg:justify-between lg:pt-10"
    >
      <div class="flex items-center justify-between mb-6 lg:mb-0">
        <a href="/">
          <img src="@/assets/svg/app-logo.svg" class="w-full" alt="" />
        </a>

        <a href="javascript:void(0)" class="w-6 h-6 mobile-tablet" id="navbarToggler">
          <img src="@/assets/svg/ic-hamburger.svg" alt="" />
        </a>
      </div>

      <div class="hidden w-full lg:block" id="navigationMenu">
        <div
          class="flex flex-col justify-between w-full gap-4 lg:mx-auto lg:flex-row lg:items-center"
        >
          <div class="flex flex-col lg:mx-auto lg:items-center lg:flex-row gap-x-10 gap-y-4">
            <a href="#" class="nav-link active"> Home </a>
            <a href="#" class="nav-link"> Features </a>
            <a href="#" class="nav-link"> Pricing </a>
            <a href="#" class="nav-link"> Case study </a>
            <a href="#" class="nav-link"> About </a>
          </div>
          <div class="flex flex-col lg:items-center lg:flex-row gap-x-5 gap-y-4">
            <a href="#" class="btn-white"> My Account </a>
          </div>
        </div>
      </div>
    </nav>

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
        <a href="auth/sign-up.html" class="btn-primary">Get Started</a>
        <a href="#" class="btn-white">Ask Demo</a>
      </div>

      <img
        src="@/assets/images/showcase-project.png"
        class="max-w-[895px] h-auto w-full object-cover rounded-3xl shadow-[12px_12px_60px_rgba(197,202,227,0.25)] z-50"
        alt=""
      />
    </header>

    <!-- Ornament Option 1 -->
    <!-- <img src="@/assets/svg/dark-background.svg" class="absolute inset-x-0 top-0 w-full -z-10" alt=""> -->

    <!-- Ornament Option 2 -->
    <img src="@/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
    <div class="right-triangle"></div>
  </section>
</template>
