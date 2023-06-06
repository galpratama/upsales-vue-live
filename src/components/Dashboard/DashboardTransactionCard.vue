<template>
  <!-- START: Latest Transactions -->
  <div class="w-full min-h-[325px] bg-subtleGrey rounded-2xl p-4">
    <p class="text-base font-semibold text-dark">
      Latest Transactions <br />
      <span class="text-sm font-normal">This Week</span>
    </p>

    <table class="w-full table-auto" id="tableProductsUp">
      <!-- This empty <thead> intended to set the width of each column -->
      <thead>
        <th style="width: 40%"></th>
        <th style="width: 30%"></th>
        <th style="width: 30%"></th>
        <th></th>
      </thead>
      <tbody>
        <!-- Item -->
        <tr>
          <td class="inline-flex items-center gap-3">
            <img
              src="@/assets/images/product-1.png"
              class="hidden md:block w-[60px] h-[60px] rounded-2xl object-cover"
              alt=""
            />
            <div class="text-dark">
              <h3 class="text-base font-semibold">Air Jordan 2</h3>
              <p class="mt-1 text-xs font-normal">Sneakers</p>
            </div>
          </td>
          <td class="text-sm font-medium text-dark">3 items</td>
          <td class="text-sm font-bold text-dark">$18,000</td>
          <td class="">
            <div
              class="bg-[#48DD95] px-[9px] py-[6px] rounded-full max-w-[60px] text-center text-[10px] leading-3 font-semibold text-white ml-auto"
            >
              Success
            </div>
          </td>
        </tr>
        <!-- Item -->
        <tr>
          <td class="inline-flex items-center gap-3">
            <img
              src="@/assets/images/product-2.png"
              class="hidden md:block w-[60px] h-[60px] rounded-2xl object-cover"
              alt=""
            />
            <div class="text-dark">
              <h3 class="text-base font-semibold">Matcha Latte</h3>
              <p class="mt-1 text-xs font-normal">Coffe</p>
            </div>
          </td>
          <td class="text-sm font-medium text-dark">1 items</td>
          <td class="text-sm font-bold text-dark">$800</td>
          <td>
            <div
              class="bg-[#DD4848] px-[9px] py-[6px] rounded-full max-w-[60px] text-center text-[10px] leading-3 font-semibold text-white ml-auto"
            >
              Failed
            </div>
          </td>
        </tr>
        <!-- Item -->
        <tr>
          <td class="inline-flex items-center gap-3">
            <img
              src="@/assets/images/product-3.png"
              class="hidden md:block w-[60px] h-[60px] rounded-2xl object-cover"
              alt=""
            />
            <div class="text-dark">
              <h3 class="text-base font-semibold">Pizza Nanas</h3>
              <p class="mt-1 text-xs font-normal">Pizza</p>
            </div>
          </td>
          <td class="text-sm font-medium text-dark">3 items</td>
          <td class="text-sm font-bold text-dark">$429,000</td>
          <td>
            <div
              class="bg-[#48DD95] px-[9px] py-[6px] rounded-full max-w-[60px] text-center text-[10px] leading-3 font-semibold text-white ml-auto"
            >
              Success
            </div>
          </td>
        </tr>
        <!-- Item -->
        <tr>
          <td class="inline-flex items-center gap-3">
            <img
              src="@/assets/images/product-4.png"
              class="hidden md:block w-[60px] h-[60px] rounded-2xl object-cover"
              alt=""
            />
            <div class="text-dark">
              <h3 class="text-base font-semibold">Wibag</h3>
              <p class="mt-1 text-xs font-normal">Bag</p>
            </div>
          </td>
          <td class="text-sm font-medium text-dark">1 items</td>
          <td class="text-sm font-bold text-dark">$2,300,000</td>
          <td>
            <div
              class="bg-[#48DD95] px-[9px] py-[6px] rounded-full max-w-[60px] text-center text-[10px] leading-3 font-semibold text-white ml-auto"
            >
              Success
            </div>
          </td>
        </tr>
        <!-- Item -->
        <tr>
          <td class="inline-flex items-center gap-3">
            <img
              src="@/assets/images/product-4.png"
              class="hidden md:block w-[60px] h-[60px] rounded-2xl object-cover"
              alt=""
            />
            <div class="text-dark">
              <h3 class="text-base font-semibold">Wibag</h3>
              <p class="mt-1 text-xs font-normal">Bag</p>
            </div>
          </td>
          <td class="text-sm font-medium text-dark">1 items</td>
          <td class="text-sm font-bold text-dark">$2,300,000</td>
          <td>
            <div
              class="bg-[#48DD95] px-[9px] py-[6px] rounded-full max-w-[60px] text-center text-[10px] leading-3 font-semibold text-white ml-auto"
            >
              Success
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- END: Latest Transactions -->
</template>
