<template>
  <div>
    <h3>{{ getToy.name }}</h3>
    <ToyImage :src="getToy.url"></ToyImage>
    <p>{{ getToy.description }}</p>
    <label for="isFav">Add to wishlist:</label>
    <!-- The input is 2-way bound to the isFav property in the currently selected toy -->
    <input type="checkbox" id="isFav" v-model="getToy.isFav" />
  </div>
</template>

<script>
import ToyImage from "@/components/toyImage.vue";
// Import the store we created
import {useToysStore} from "@/stores/ToysStore";
// Import mapStores from Pinia - it lets us get the stuff we need from the store. Notive how we use it in the computed properties
import {mapStores} from "pinia";

export default {
  name: "ToyPage",
  computed: {
    getToy() {
      // Get slug from the url. ...params.slug we use .slug because we defined this in our router in the "/toys/:slug"
      let slug = this.$route.params.slug;
      // From out ToyStore, call the action getToyBySlug to get the toy that matches the slug from the above line
      return this.toysStore.getToyBySlug(slug);
    },
    ...mapStores(useToysStore), //Creates the object toysStore to access state, getters and actions. Note we are using the spread operator to spread the object into the computed properties
  },
  components: {ToyImage},
};
</script>

<style scoped>
div {
  width: calc(100% - 300px);
}
img {
  width: 200px;
  margin: 20px 0;
}
</style>
