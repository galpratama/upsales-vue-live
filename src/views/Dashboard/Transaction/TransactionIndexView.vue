<script setup lang="ts">
import TransactionTable from '@/components/Dashboard/Transaction/TransactionTable.vue'
import TransactionIndexHeader from '@/components/Dashboard/Transaction/TransactionIndexHeader.vue'
</script>
<template>
  <TransactionIndexHeader />

  <section class="w-full min-h-[90vh] p-4 bg-subtleGrey rounded-2xl flex flex-col">
    <TransactionTable />
  </section>
</template>
