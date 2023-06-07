<script setup lang="ts">
import TransactionItem from './TransactionItem.vue'
</script>
<template>
  <div class="table-responsive mb-[14px]">
    <table class="w-full" id="tableProductsUp">
      <thead>
        <th class="w-[35%]">Item Information</th>
        <th class="w-[15%]">Quantity</th>
        <th class="w-[15%]">Price</th>
        <th class="w-[20%]">Status</th>
        <th class="">Actions</th>
      </thead>
      <tbody>
        <TransactionItem v-for="n in 10" :key="n" />
      </tbody>
    </table>
  </div>

  <div
    id="paginationLinks"
    class="mt-auto flex flex-nowrap overflow-x-auto items-center gap-[10px] w-max"
  >
    <a
      href="#"
      v-for="n in 5"
      :key="n"
      :class="{ 'is-active': n === 1 }"
      class="dashboard-link bg-white !p-[13px] min-w-max w-[46px] h-[46px] text-center font-bold leading-[21px] block"
    >
      1
    </a>
  </div>
</template>
