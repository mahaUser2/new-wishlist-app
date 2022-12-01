<!-- International class - slide #13 - 1.4 -->
<template>
  <div class="about">
    <h2>{{ getToy.name }}</h2>
    <ToyImage :imgSrc="getToy.url"></ToyImage>
    <p>{{ getToy.description }}</p>
  </div>
</template>

<script>
import ToyImage from "@/components/toyImage.vue";
import {useToysStore} from "@/stores/ToyStore";
import {mapStores} from "pinia";

export default {
  name: "ToyView",
  computed: {
    ...mapStores(useToysStore),
    getSlug() {
      return this.$route.params.slug;
    },
    getToy() {
      return this.toysStore.getToyBySlug(this.getSlug);
    },
  },
  components: {ToyImage},
};
</script>
