<script setup lang="ts">
import { ref, onMounted } from 'vue'

import TransactionItem from './TransactionItem.vue'
import type Transaction from '@/types/transaction'

import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

onMounted(() => {
  fetchTransaction()
})

// Transactions
const transactions = ref<Transaction[]>([])
async function fetchTransaction(): Promise<void> {
  // Send request to API
  try {
    const response = await axios.get(API_URL + '/transaction', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      },
      params: {
        page: pagination.value.current_page
      }
    })
    transactions.value = response.data.result.data
    pagination.value = {
      current_page: response.data.result.current_page,
      last_page: response.data.result.last_page
    }
  } catch (error) {
    console.error(error)
  }
}
async function deleteTransaction(transaction_id: number) {
  const isConfirmed = confirm('Are you sure you want to delete this transaction?')
  if (!isConfirmed) return
  // Send request to API
  try {
    const { data } = await axios.delete(API_URL + '/transaction/' + transaction_id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    alert(data.meta.message)
    fetchTransaction()
  } catch (error) {
    console.error(error)
  }
}

// Pagination
const pagination = ref({
  current_page: 1,
  last_page: 0
})
function changePage(page: number): void {
  pagination.value.current_page = page
  fetchTransaction()
}
</script>
<template>
  <div class="table-responsive mb-[14px]">
    <table class="w-full" id="tableProductsUp">
      <thead>
        <th class="w-[35%]">Item Information</th>
        <th class="w-[15%]">Quantity</th>
        <th class="w-[15%]">Price</th>
        <th class="w-[20%]">Status</th>
        <th class="">Actions</th>
      </thead>
      <tbody>
        <TransactionItem
          v-for="transaction in transactions"
          :key="transaction.id"
          :transaction="transaction"
          @delete-transaction="(transaction_id) => deleteTransaction(transaction_id)"
        />
      </tbody>
    </table>
  </div>

  <div
    id="paginationLinks"
    class="mt-auto flex flex-nowrap overflow-x-auto items-center gap-[10px] w-max"
  >
    <button
      @click="changePage(page)"
      v-for="page in pagination.last_page"
      :key="page"
      :class="{ 'is-active': page === pagination.current_page }"
      class="dashboard-link bg-white !p-[13px] min-w-max w-[46px] h-[46px] text-center font-bold leading-[21px] block"
    >
      {{ page }}
    </button>
  </div>
</template>
