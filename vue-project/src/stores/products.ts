import { defineStore } from 'pinia'
import type { Product } from "../DTOs/products"
import { Status } from "../DTOs/products"

interface State {
    products: Product[]
  }
  

export const productsStore = defineStore('products', {
    state: (): State => {
        return {
          products: [],
        }
    },
    actions: {
        addProducts(product: Product) {
          this.products.push(product)
        },
        getProducts() {
          this.products = [
            {
              image: "https://placehold.co/600x400",
              name: "Toy Car",
              price: 99,
              category: "Toys",
              status: Status.in
            },
            {
              image: "https://placehold.co/600x400",
              name: "Muppet",
              price: 22,
              category: "Toys",
              status: Status.in
            },
            {
              image: "https://placehold.co/600x400",
              name: "Hair brush",
              price: 15,
              category: "Home",
              status: Status.in
            },
            {
              image: "https://placehold.co/600x400",
              name: "Tooth paste",
              price: 5,
              category: "Health",
              status: Status.in
            }
          ]

        }
    },
    getters: {
      allProducts: (state): Product[] => {
        return state.products
      }
    }
})