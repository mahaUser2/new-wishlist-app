<template>
  <div class="home">
    <h2>Wishlist</h2>
    <ToyImage
      v-for="toy in toysStore.returnFavs"
      :key="toy.id"
      :imgSrc="toy.url"
    ></ToyImage>
  </div>
</template>

<script>
// @ is an alias to /src

import ToyImage from "@/components/toyImage.vue";
import {useToysStore} from "@/stores/ToyStore";
import {mapStores} from "pinia";

export default {
  name: "WishlistView",
  computed: {
    ...mapStores(useToysStore), // toysStore
  },
  components: {ToyImage},
};
</script>
