import {defineStore} from "pinia";
import importedToys from "@/assets/data/toys_v2";

export const useToysStore = defineStore("toys", {
  // state
  state() {
    return {
      toys: [],
    };
  },
  // actions
  actions: {
    getDataFromApi() {
      // Pretend to get stuff from an api...
      this.toys = importedToys;
    },
    getToyBySlug(slug) {
      return this.toys.find((toy) => toy.slug === slug);
    },
  },
  // getters
  getters: {
    returnFavs() {
      return this.toys.filter((toy) => toy.isFav === true);
    },
  },
});
