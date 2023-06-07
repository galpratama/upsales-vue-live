<script setup lang="ts"></script>
<template>
  <header class="text-dark mb-[30px]">
    <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">Add New</h1>
    <ul class="inline-flex items-center mt-1 md:mt-2" id="breadcrumbLink">
      <li>
        <a href="@/pages/dashboard/transactions/index.html" class="text-base text-dark">
          My Transactions
        </a>
      </li>
      <li>
        <a href="@/pages/dashboard/transactions/add.html" class="text-base text-dark"> Add New </a>
      </li>
    </ul>
  </header>

  <section class="w-full max-w-[550px] bg-subtleGrey rounded-2xl p-4">
    <form action="" class="flex flex-col w-full">
      <div class="flex flex-col gap-[18px]">
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Product </label>
          <select
            name="category"
            class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none appearance-none border-borderLight focus:border-primary placeholder:text-placeholderText bg-[url('@/assets/svg/ic-chevron-down.svg')] bg-[calc(100%-20px)_center] bg-no-repeat"
            required
          >
            <option value="" hidden disabled selected>Select the product</option>
            <option value="fb">Food & Beverages</option>
            <option value="cc">Clothing & Apparel</option>
          </select>
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Quantity </label>
          <input
            type="number"
            name="quantity"
            placeholder="Write your product quantity"
            class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
          />
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Price </label>
          <input
            type="number"
            name="price"
            placeholder="Insert your product price"
            class="px-5 py-4 text-base bg-[#E9EAED] border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
            value="$0"
          />
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> VAT 10% </label>
          <input
            type="number"
            name="vat"
            placeholder="Insert your product price"
            class="px-5 py-4 text-base bg-[#E9EAED] border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
            value="$0"
          />
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Grand Total </label>
          <input
            type="number"
            name="grand_total"
            placeholder="Insert your product price"
            class="px-5 py-4 text-base bg-[#E9EAED] border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
            value="$0"
          />
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Payment </label>
          <div class="grid items-center grid-cols-2 gap-3 sm:gap-5 sm:w-max">
            <div class="relative boxPayment w-full sm:max-w-[180px]">
              <input
                type="radio"
                value="gojek"
                name="paymentMethod"
                id="gojek"
                class="absolute inset-0 z-50 opacity-0 cursor-pointer"
              />
              <label
                for="gojek"
                class="flex flex-col items-center justify-center gap-4 border border-lightGrey rounded-[20px] p-4 sm:p-5 min-h-[80px]"
              >
                <img src="@/assets/svg/logo-gojek.svg" class="h-6 sm:h-full" alt="" />
                <p class="text-base font-medium">Gopay</p>
              </label>
            </div>
            <div class="relative boxPayment w-full sm:max-w-[180px]">
              <input
                type="radio"
                value="mastercard"
                name="paymentMethod"
                id="mastercard"
                class="absolute inset-0 z-50 opacity-0 cursor-pointer"
              />
              <label
                for="mastercard"
                class="flex flex-col items-center justify-center gap-4 border border-lightGrey rounded-[20px] p-4 sm:p-5 min-h-[80px]"
              >
                <img src="@/assets/svg/logo-mastercard.svg" class="h-6 sm:h-full" alt="" />
                <p class="text-base font-medium">Mastercard</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <a href="@/pages/dashboard/transactions/qr-code.html" class="btn-primary mt-[30px]">
        Checkout Now
      </a>
    </form>
  </section>
</template>
