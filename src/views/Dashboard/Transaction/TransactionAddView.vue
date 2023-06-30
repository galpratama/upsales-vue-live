<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

import type Product from '@/types/product'

import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

const router = useRouter()
onMounted(() => {
  fetchProduct()
})

const form = ref({
  product_id: 0,
  quantity: 1,
  payment_method: 'gopay'
})

// Products
const products = ref<Product[]>([])
async function fetchProduct(): Promise<void> {
  // Send request to API
  try {
    const response = await axios.get(API_URL + '/product', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      },
      params: {
        limit: 10000
      }
    })
    products.value = response.data.result.data
  } catch (error) {
    console.error(error)
  }
}
// computed selectedProduct
const selectedProduct = computed<Product | null>(() => {
  return products.value.find((product) => product.id === form.value.product_id) || null
})

async function addTransaction(e: any): Promise<void> {
  // Send request to API
  try {
    const response = await axios.post(API_URL + '/transaction', form.value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })

    // If success, redirect to pay page
    router.push({ name: 'dashboard-transaction-pay', params: { id: response.data.result.id } })
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <header class="text-dark mb-[30px]">
    <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">Add New</h1>
    <ul class="inline-flex items-center mt-1 md:mt-2" id="breadcrumbLink">
      <li>
        <RouterLink :to="{ name: 'dashboard-transaction-index' }" class="text-base text-dark">
          My Transactions
        </RouterLink>
      </li>
      <li>
        <a href="#" class="text-base text-dark"> Add New </a>
      </li>
    </ul>
  </header>

  <section class="w-full max-w-[550px] bg-subtleGrey rounded-2xl p-4">
    <form @submit.prevent="addTransaction" class="flex flex-col w-full">
      <div class="flex flex-col gap-[18px]">
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Product </label>
          <select
            name="product"
            class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none appearance-none border-borderLight focus:border-primary placeholder:text-placeholderText bg-[url('@/assets/svg/ic-chevron-down.svg')] bg-[calc(100%-20px)_center] bg-no-repeat"
            v-model="form.product_id"
            required
          >
            <option v-for="product in products" :key="product.id" :value="product.id">
              {{ product.name }}
            </option>
          </select>
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Quantity </label>
          <input
            type="number"
            name="quantity"
            v-model="form.quantity"
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
            :value="selectedProduct?.price"
            placeholder="Insert your product price"
            class="px-5 py-4 text-base bg-[#E9EAED] border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
          />
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> VAT 10% </label>
          <input
            type="number"
            name="vat"
            step="any"
            :value="(selectedProduct?.price ?? 0) * 0.1"
            placeholder="Insert your product price"
            class="px-5 py-4 text-base bg-[#E9EAED] border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
          />
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Grand Total </label>
          <input
            type="number"
            name="grand_total"
            step="any"
            :value="
              (selectedProduct?.price ?? 0) * form.quantity +
              (selectedProduct?.price ?? 0) * 0.1 * form.quantity
            "
            placeholder="Insert your product price"
            class="px-5 py-4 text-base bg-[#E9EAED] border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
          />
        </div>
        <!-- form group -->
        <div class="flex flex-col gap-2">
          <label for="" class="text-base font-medium text-dark"> Payment </label>
          <div class="grid items-center grid-cols-2 gap-3 sm:gap-5 sm:w-max">
            <div class="relative boxPayment w-full sm:max-w-[180px]">
              <input
                type="radio"
                value="gopay"
                name="paymentMethod"
                id="gopay"
                v-model="form.payment_method"
                class="absolute inset-0 z-50 opacity-0 cursor-pointer"
              />
              <label
                for="gopay"
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
                v-model="form.payment_method"
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
      <!-- Disabled if product not selected -->
      <button type="submit" class="btn-primary mt-[30px]">Checkout Now</button>
    </form>
  </section>
</template>
