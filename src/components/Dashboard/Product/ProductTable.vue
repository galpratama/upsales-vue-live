<script setup lang="ts">
import { ref, onMounted } from 'vue'

import ProductItem from './ProductItem.vue'
import type Product from '@/types/product'

import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

onMounted(() => {
  fetchProduct()
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
        page: pagination.value.current_page
      }
    })
    products.value = response.data.result.data
    pagination.value = {
      current_page: response.data.result.current_page,
      last_page: response.data.result.last_page
    }
  } catch (error) {
    console.error(error)
  }
}
async function deleteProduct(product_id: number) {
  const isConfirmed = confirm('Are you sure you want to delete this product?')
  if (!isConfirmed) return
  // Send request to API
  try {
    const { data } = await axios.delete(API_URL + '/product/' + product_id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    alert(data.meta.message)
    fetchProduct()
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
  fetchProduct()
}
</script>
<template>
  <div class="table-responsive mb-[14px]">
    <table class="w-full" id="tableProductsUp">
      <thead>
        <th class="w-[35%]">Item Information</th>
        <th class="w-[15%]">Status</th>
        <th class="w-[15%]">Price</th>
        <th class="w-[20%]">Stock</th>
        <th class="">Actions</th>
      </thead>
      <tbody>
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
          @delete-product="(product_id) => deleteProduct(product_id)"
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
