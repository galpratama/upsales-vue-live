<template>
  <!-- Item -->
  <tr>
    <td class="inline-flex items-center gap-3">
      <img
        src="@/assets/images/product-1.png"
        class="w-[60px] h-[60px] rounded-2xl object-cover"
        alt=""
      />
      <div class="text-dark">
        <h3 class="text-base font-semibold">Air Jordan 2</h3>
        <p class="mt-1 text-xs font-normal">Sneakers</p>
      </div>
    </td>
    <td class="text-sm font-medium text-dark">821</td>
    <td class="text-sm font-medium text-dark">$18,000</td>
    <td class="text-sm font-medium text-dark">
      <div
        class="bg-[#48DD95] px-4 py-[6px] rounded-full max-w-[72px] w-full text-center text-[10px] leading-3 font-semibold text-white"
      >
        Success
      </div>
    </td>
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
