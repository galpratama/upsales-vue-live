<template>
  <!-- Item -->
  <tr>
    <td class="inline-flex items-center gap-3">
      <img
        src="@/assets/images/product-2.png"
        class="w-[60px] h-[60px] rounded-2xl object-cover"
        alt=""
      />
      <div class="text-dark">
        <h3 class="text-base font-semibold">Green Latte</h3>
        <p class="mt-1 text-xs font-normal">Coffee</p>
      </div>
    </td>
    <td class="text-sm font-medium text-dark">Inactive</td>
    <td class="text-sm font-medium text-dark">$55</td>
    <td class="text-sm font-medium text-dark">113 qty</td>
    <td>
      <div class="flex items-center gap-3">
        <!-- Edit -->
        <a
          href="#"
          class="group transition-all relative rounded-full bg-white hover:bg-dark p-[13px] text-dark hover:text-white min-w-max"
        >
          <img
            src="@/assets/svg/ic-pencil.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </a>
        <!-- Show -->
        <a
          href="#"
          class="group transition-all relative rounded-full bg-white hover:bg-dark p-[13px] text-dark hover:text-white min-w-max"
        >
          <img
            src="@/assets/svg/ic-eye.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </a>
        <!-- Delete -->
        <a
          href="#"
          class="group transition-all relative rounded-full bg-white hover:bg-dark p-[13px] text-dark hover:text-white min-w-max"
        >
          <img
            src="@/assets/svg/ic-trash.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </a>
      </div>
    </td>
  </tr>
</template>
