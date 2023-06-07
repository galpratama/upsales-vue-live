<script setup lang="ts"></script>
<template>
  <div class="flex min-h-screen pb-10">
    <div
      class="flex flex-col items-center text-center max-w-[285px] m-auto h-full"
      id="warningSection"
    >
      <img
        src="@/assets/images/barcode-example.png"
        class="mb-[35px] max-w-[237px] h-auto w-full mt-auto"
        alt=""
      />
      <h4 class="text-[26px] text-dark font-bold">Scan & Pay</h4>
      <p class="text-[16px] leading-[26px] text-dark mb-5 mt-4">
        Continue to get your great items today that makes you happy
      </p>
      <a href="@/pages/dashboard/transactions/details.html" class="btn-primary md:px-12"> Done </a>
    </div>
  </div>
</template>
