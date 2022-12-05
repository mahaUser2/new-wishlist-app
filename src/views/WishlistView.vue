<template>
  <div>
    <h2>Dear Santa, this is what I want for Christmas:</h2>
    <div class="favs">
      <!-- Loop through the favorites (where .isFav = true) from our ToyStore.toys. There are in the getter returnFavs -->
      <ToyImage
        v-for="toy in toysStore.returnFavs"
        :key="toy.id"
        :src="toy.url"
      />
    </div>
  </div>
</template>

<script>
// Import the store we created
import {useToysStore} from "@/stores/ToysStore";
// Import mapStores from Pinia - it lets us get the stuff we need from the store. Notive how we use it in the computed properties
import {mapStores} from "pinia";
import ToyImage from "@/components/toyImage.vue";

export default {
  name: "HomeView",
  components: {ToyImage},
  computed: {
    ...mapStores(useToysStore), //Creates the object toysStore to access state, getters and actions. Note we are using the spread operator to spread the object into the computed properties
  },
};
</script>

<style scoped>
img {
  width: 80px;
}

div:has(h2) {
  width: calc(100% - 300px);
}

.favs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
