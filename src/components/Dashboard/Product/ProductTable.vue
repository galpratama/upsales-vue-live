<script setup lang="ts">
import ProductItem from './ProductItem.vue'
</script>
<template>
  <div class="table-responsive mb-[14px]">
    <table class="w-full" id="tableProductsUp">
      <thead>
        <th class="w-[35%]">Item Information</th>
        <th class="w-[15%]">Status</th>
        <th class="w-[15%]">Price</th>
        <th class="w-[20%]">Stock</th>
        <th class="">Actions</th>
      </thead>
      <tbody>
        <ProductItem />
      </tbody>
    </table>
  </div>

  <div
    id="paginationLinks"
    class="mt-auto flex flex-nowrap overflow-x-auto items-center gap-[10px] w-max"
  >
    <a
      href="#"
      class="dashboard-link bg-white !p-[13px] min-w-max w-[46px] h-[46px] text-center font-bold leading-[21px] block is-active"
    >
      1
    </a>
    <a
      href="#"
      class="dashboard-link bg-white !p-[13px] min-w-max w-[46px] h-[46px] text-center font-bold leading-[21px] block"
    >
      2
    </a>
  </div>
</template>
