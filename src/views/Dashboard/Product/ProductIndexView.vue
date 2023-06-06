<script setup lang="ts">
import DashboardSidebar from '@/components/Dashboard/Layout/DashboardSidebar.vue'
import DashboardTopBar from '@/components/Dashboard/Layout/DashboardTopBar.vue'
import ProductIndexHeader from '@/components/Dashboard/Product/ProductIndexHeader.vue'
import ProductTable from '@/components/Dashboard/Product/ProductTable.vue'
</script>

<template>
  <div class="flex min-h-screen pb-10">
    <DashboardSidebar activeMenu="product" />
    <main class="lg:pt-[50px] lg:px-[50px] p-4 w-full lg:border-l lg:border-l-borderLight">
      <DashboardTopBar />
      <ProductIndexHeader />
      <section class="w-full min-h-[90vh] p-4 bg-subtleGrey rounded-2xl flex flex-col">
        <ProductTable />
      </section>
    </main>
  </div>
</template>
