<script setup lang="ts">
import ProductIndexHeader from '@/components/Dashboard/Product/ProductIndexHeader.vue'
import ProductTable from '@/components/Dashboard/Product/ProductTable.vue'
</script>

<template>
  <ProductIndexHeader />
  <section class="flex flex-col w-full p-4 bg-subtleGrey rounded-2xl">
    <ProductTable />
  </section>
</template>
