<script setup lang="ts">
import TransactionTable from '@/components/Dashboard/Transaction/TransactionTable.vue'
</script>
<template>
  <div class="flex flex-wrap items-center justify-between gap-6 mb-[30px]">
    <header class="text-dark">
      <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">Transactions</h1>
      <p class="mt-1 text-sm md:mt-2 md:text-base">Making fortune from goods thing</p>
    </header>
    <a href="add.html" class="btn-primary md:px-9"> Add New </a>
  </div>

  <section class="w-full min-h-[90vh] p-4 bg-subtleGrey rounded-2xl flex flex-col">
    <TransactionTable />
  </section>
</template>
