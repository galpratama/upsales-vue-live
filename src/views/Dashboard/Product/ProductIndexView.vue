<script setup lang="ts">
import ProductIndexHeader from '@/components/Dashboard/Product/ProductIndexHeader.vue'
import ProductTable from '@/components/Dashboard/Product/ProductTable.vue'
</script>

<template>
  <ProductIndexHeader />
  <section class="w-full min-h-[90vh] p-4 bg-subtleGrey rounded-2xl flex flex-col">
    <ProductTable />
  </section>
</template>
