<template>
  <div class="flex flex-wrap items-center justify-between gap-6 mb-[30px]">
    <header class="text-dark">
      <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">Transactions</h1>
      <p class="mt-1 text-sm md:mt-2 md:text-base">Making fortune from goods thing</p>
    </header>
    <RouterLink :to="{ name: 'dashboard-transaction-add' }" class="btn-primary md:px-9">
      Add New
    </RouterLink>
  </div>
</template>
