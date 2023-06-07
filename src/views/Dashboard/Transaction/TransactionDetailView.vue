<script setup lang="ts"></script>
<template>
  <header class="text-dark mb-[30px]">
    <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">#18092</h1>
    <ul class="inline-flex items-center mt-1 md:mt-2" id="breadcrumbLink">
      <li>
        <a href="@/pages/dashboard/transactions/index.html" class="text-base text-dark">
          My Transactions
        </a>
      </li>
      <li>
        <a href="@/pages/dashboard/transactions/details.html" class="text-base text-dark">
          Details
        </a>
      </li>
    </ul>
  </header>

  <section class="w-full max-w-[550px] bg-subtleGrey rounded-2xl p-6">
    <!-- Product -->
    <div class="flex flex-wrap items-center justify-between gap-5">
      <img
        src="@/assets/images/product-1.png"
        class="w-[100px] h-[100px] rounded-[30px] object-cover"
        alt=""
      />
      <div class="mr-auto text-dark">
        <h3 class="text-2xl font-bold">Air Jordan 2</h3>
        <p class="mt-2 text-base font-normal">Sneakers</p>
      </div>
      <div
        class="bg-[#48DD95] px-4 py-[6px] rounded-full w-max text-center text-base font-semibold text-white"
      >
        Success
      </div>
    </div>

    <!-- Product Details -->
    <ul class="flex flex-col gap-5 text-dark mt-[30px]">
      <li class="flex items-center justify-between text-base">
        <p>Date</p>
        <p class="font-semibold text-right">Jan 12 2023</p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>Price per item</p>
        <p class="font-semibold text-right">$90,000</p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>Quantity</p>
        <p class="font-semibold text-right">183 qty</p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>VAT 10%</p>
        <p class="font-semibold text-right">$183,409</p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>Grand total</p>
        <p class="font-semibold text-right">$52,390,000</p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>Payment</p>
        <p class="font-semibold text-right">Gopay</p>
      </li>
    </ul>
  </section>
</template>
