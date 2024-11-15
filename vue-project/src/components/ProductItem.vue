<template>
    <div class="hover:border-2 border-blue-200">
        <div class="w-40">
            <img :src="product.image" alt="">
        </div>
        <div>
            <div class="text-lg text-black">{{ product.price }}</div>
            <div>{{ product.name }}</div>
            <div>{{ product.status }}</div>
        </div>
    </div>    
</template>
<script lang="ts" setup>
import type { Product } from '@/DTOs/products';
const props = defineProps(["product"])
</script>