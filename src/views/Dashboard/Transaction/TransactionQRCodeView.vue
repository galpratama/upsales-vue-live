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
  <div class="flex min-h-screen pb-10">
    <div
      class="flex flex-col items-center text-center max-w-[285px] m-auto h-full"
      id="warningSection"
    >
      <img
        :src="transaction.payment_url"
        class="mb-[35px] max-w-[237px] h-auto w-full mt-auto"
        alt=""
      />
      <h4 class="text-[26px] text-dark font-bold">Scan & Pay</h4>
      <p class="text-[16px] leading-[26px] text-dark mb-5 mt-4">
        Continue to get your great items today that makes you happy
      </p>
      <RouterLink
        :to="{ name: 'dashboard-transaction-detail', params: { id: route.params.id } }"
        class="btn-primary md:px-12"
      >
        Done
      </RouterLink>
    </div>
  </div>
</template>
