import {defineStore} from "pinia";
import importedToys from "@/assets/data/toys_v2";

export const useToysStore = defineStore("toys", {
  state() {
    return {
      // Initially we have no toys, but when we call the action initiateToysFromApi() we get the state
      toys: [],
    };
  },
  actions: {
    getToyBySlug(slug) {
      // In the toys - get the first toy that has the passed slug (called from "views/ToyPageView.vue")
      return this.toys.find((toy) => toy.slug === slug);
    },
    async initiateToysFromApi() {
      // Fake API call here - it updated the toys in the state with the "/assets/data/toys_v2.js". Called from App.vue
      this.toys = importedToys;
    },
  },
  getters: {
    // Returns all the favorites/wishlist - called from "views/WishlistView.vue"
    returnFavs(state) {
      return state.toys.filter((toy) => toy.isFav);
    },
  },
});
