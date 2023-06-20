<script setup lang="ts">
import type Product from '@/types/product'

const props = defineProps<{
  product: Product
}>()
</script>
<template>
  <!-- Item -->
  <tr>
    <td class="inline-flex items-center gap-3">
      <img
        :src="props.product.photos?.[0]?.full_path"
        class="w-[60px] h-[60px] rounded-2xl object-cover"
        alt=""
      />
      <div class="text-dark">
        <h3 class="text-base font-semibold">{{ props.product.name }}</h3>
        <p class="mt-1 text-xs font-normal">{{ props.product.category?.name }}</p>
      </div>
    </td>
    <td class="text-sm font-medium text-dark">{{ props.product.status }}</td>
    <td class="text-sm font-medium text-dark">${{ props.product.price }}</td>
    <td class="text-sm font-medium text-dark">{{ props.product.quantity }} qty</td>
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
        <button
          @click="$emit('deleteProduct', props.product.id)"
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
