<script setup lang="ts">
</script>

<template>
  <main>
    <h1 class="text-2xl text-center">Product List</h1>
    <div>
      
    </div>
    <div class="flex flex-row gap-4 mt-4">
      <div v-for="product in products">
        <ProductItem :product="product" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from "vue"
import ProductItem from "../components/ProductItem.vue"
import { productsStore } from "@/stores/products"
const productStore = productsStore()

const products = computed(() => {
  return productStore.allProducts
})

onMounted(() => {
  productStore.getProducts()
})

</script>
