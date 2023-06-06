<template>
  <section id="scaleBusiness" class="py-[50px] container">
    <div class="grid md:grid-cols-2 items-center gap-[55px] justify-around">
      <div class="max-w-[430px]">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
          <img src="@/assets/svg/ic-crown.svg" class="w-5 h-5 filter-primary" alt="" />
          <p class="text-xs font-bold text-primary">190K+ business has joined</p>
        </div>
        <h2 class="text-start font-bold text-[32px] leading-[48px] text-dark my-4">
          Scale Your Business <br class="desktop-only" />
          From The Ground
        </h2>
        <p class="mb-[30px] text-lg leading-8 text-dark">
          Scaling can be hard lorem ipsum due lack of resources and automated system for the company
        </p>
        <div class="flex flex-col gap-4 md:flex-row">
          <RouterLink :to="{ name: 'signup' }" class="btn-primary !px-10"> Get Started </RouterLink>
          <a href="#" class="border btn-white border-borderLight !px-8"> Ask Demo </a>
        </div>
      </div>
      <div>
        <img src="@/assets/images/business-illustration.png" alt="" />
      </div>
    </div>
  </section>
</template>
