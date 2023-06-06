<template>
  <!-- START: Statistic Card -->
  <div class="flex gap-5 overflow-x-auto md:grid md:grid-cols-3">
    <!-- Card -->
    <div class="flex flex-col p-4 min-w-[190px] w-full bg-subtleGrey rounded-2xl">
      <div class="bg-[#2816F9] rounded-full p-[11px] w-[46px] h-[46px]">
        <img src="@/assets/svg/ic-card.svg" class="object-cover w-6 h-6 filter-white" alt="" />
      </div>
      <div class="text-2xl text-dark font-bold mt-4 mb-[6px]">$80,000</div>
      <p class="text-sm text-dark">Sales</p>
    </div>
    <!-- Card -->
    <div class="flex flex-col p-4 min-w-[190px] w-full bg-subtleGrey rounded-2xl">
      <div class="bg-[#F98316] rounded-full p-[11px] w-[46px] h-[46px]">
        <img src="@/assets/svg/ic-people.svg" class="object-cover w-6 h-6 filter-white" alt="" />
      </div>
      <div class="text-2xl text-dark font-bold mt-4 mb-[6px]">58,200</div>
      <p class="text-sm text-dark">Customers</p>
    </div>
    <!-- Card -->
    <div class="flex flex-col p-4 min-w-[190px] w-full bg-subtleGrey rounded-2xl">
      <div class="bg-[#F916B9] rounded-full p-[11px] w-[46px] h-[46px]">
        <img src="@/assets/svg/ic-box.svg" class="object-cover w-6 h-6 filter-white" alt="" />
      </div>
      <div class="text-2xl text-dark font-bold mt-4 mb-[6px]">$80,000</div>
      <p class="text-sm text-dark">Sales</p>
    </div>
  </div>
  <!-- END: Statistic Card -->
</template>
