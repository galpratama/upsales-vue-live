<script setup lang="ts">
import TransactionTable from '@/components/Dashboard/Transaction/TransactionTable.vue'
import TransactionIndexHeader from '@/components/Dashboard/Transaction/TransactionIndexHeader.vue'
</script>
<template>
  <TransactionIndexHeader />

  <section class="flex flex-col w-full p-4 bg-subtleGrey rounded-2xl">
    <TransactionTable />
  </section>
</template>
