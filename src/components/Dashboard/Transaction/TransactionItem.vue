<script setup lang="ts">
import type Transaction from '@/types/transaction'

const props = defineProps<{
  transaction: Transaction
}>()
</script>

<template>
  <!-- Item -->
  <tr>
    <td class="inline-flex items-center gap-3">
      <img
        :src="props.transaction.product?.photos?.[0]?.full_path"
        class="w-[60px] h-[60px] rounded-2xl object-cover"
        alt=""
      />
      <div class="text-dark">
        <h3 class="text-base font-semibold">{{ props.transaction.product?.name }}</h3>
        <p class="mt-1 text-xs font-normal">{{ props.transaction.product?.category?.name }}</p>
      </div>
    </td>
    <td class="text-sm font-medium text-dark">{{ props.transaction.quantity }}</td>
    <td class="text-sm font-medium text-dark">${{ props.transaction.total }}</td>
    <td class="text-sm font-medium text-dark">
      <div
        :class="{
          'bg-[#48DD95]': props.transaction.status === 'success',
          'bg-[#FF5B5B]': props.transaction.status === 'failed',
          'bg-[#FFC107]': props.transaction.status === 'pending'
        }"
        class="px-4 py-[6px] rounded-full max-w-[72px] w-full text-center text-[10px] leading-3 font-semibold text-white"
      >
        {{ props.transaction.status }}
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
        <RouterLink
          :to="{ name: 'dashboard-transaction-detail', params: { id: props.transaction.id } }"
          class="group transition-all relative rounded-full bg-white hover:bg-dark p-[13px] text-dark hover:text-white min-w-max"
        >
          <img
            src="@/assets/svg/ic-eye.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </RouterLink>
        <!-- Delete -->
        <button
          @click="$emit('deleteTransaction', props.transaction.id)"
          class="group transition-all relative rounded-full bg-white hover:bg-dark p-[13px] text-dark hover:text-white min-w-max"
        >
          <img
            src="@/assets/svg/ic-trash.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </button>
      </div>
    </td>
  </tr>
</template>
