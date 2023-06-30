<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import axios from 'axios'
import type Transaction from '@/types/transaction'
const API_URL = import.meta.env.VITE_API_URL

const route = useRoute()

const transaction = ref<Transaction>({})

onMounted(() => {
  fetchTransaction()
})

async function fetchTransaction(): Promise<void> {
  // Send request to API
  try {
    const response = await axios.get(API_URL + '/transaction/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      },
      params: {
        id: route.params.id
      }
    })
    transaction.value = response.data.result
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <header class="text-dark mb-[30px]">
    <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">#18092</h1>
    <ul class="inline-flex items-center mt-1 md:mt-2" id="breadcrumbLink">
      <li>
        <RouterLink :to="{ name: 'dashboard-transaction-index' }" class="text-base text-dark">
          My Transactions
        </RouterLink>
      </li>
      <li>
        <a href="#" class="text-base text-dark"> Details </a>
      </li>
    </ul>
  </header>

  <section class="w-full max-w-[550px] bg-subtleGrey rounded-2xl p-6">
    <!-- Product -->
    <div class="flex flex-wrap items-center justify-between gap-5">
      <img
        :src="transaction.product?.photos?.[0]?.full_path"
        class="w-[100px] h-[100px] rounded-[30px] object-cover"
        alt=""
      />
      <div class="mr-auto text-dark">
        <h3 class="text-2xl font-bold">{{ transaction.product?.name }}</h3>
        <p class="mt-2 text-base font-normal">{{ transaction.product?.category?.name }}</p>
      </div>

      <div
        class="bg-[#48DD95] px-4 py-[6px] rounded-full w-max text-center text-base font-semibold text-white"
      >
        {{ transaction.status }}
      </div>
    </div>

    <!-- Product Details -->
    <ul class="flex flex-col gap-5 text-dark mt-[30px]">
      <li class="flex items-center justify-between text-base">
        <p>Date</p>
        <p class="font-semibold text-right">
          {{ new Date(transaction.created_at).toLocaleDateString('en-US') }}
        </p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>Price per item</p>
        <p class="font-semibold text-right">${{ transaction.product?.price }}</p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>Quantity</p>
        <p class="font-semibold text-right">{{ transaction.quantity }} qty</p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>VAT 10%</p>
        <p class="font-semibold text-right">${{ transaction.vat }}</p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>Grand total</p>
        <p class="font-semibold text-right">${{ transaction.total }}</p>
      </li>
      <li class="flex items-center justify-between text-base">
        <p>Payment</p>
        <p class="font-semibold text-right">{{ transaction.payment_method }}</p>
      </li>
    </ul>
  </section>
</template>
