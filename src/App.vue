<template>
  <div class="bg-img">
    <div class="wrapper">
      <nav>
        <router-link to="/">WishList</router-link>
        --------------
        <br />
        --------------
        <!-- Dynamic navigation - one <router-link> per toy in the store -->
        <router-link
          v-for="toy in toysStore.toys"
          :key="toy.id"
          :to="`/toys/${toy.slug}`"
          >{{ toy.slug }}</router-link
        >
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
// Import the store we created
import {useToysStore} from "@/stores/ToysStore";
// Import mapStores from Pinia - it lets us get the stuff we need from the store. Notive how we use it in the computed properties
import {mapStores} from "pinia";

export default {
  name: "App",
  computed: {
    ...mapStores(useToysStore), //Creates the object toysStore to access state, getters and actions. Note we are using the spread operator to spread the object into the computed properties
  },
  created() {
    // This is what actually updates the toys in our store.
    this.toysStore.initiateToysFromApi();
  },
};
</script>

<style>
nav a {
  text-transform: capitalize;
  transition: 0.3s all;
  font-weight: bold;
}
nav a:not(:first-child) {
  margin-left: 10px;
}

nav a:not(:first-child):hover {
  color: rgb(41, 187, 41);
}

.bg-img {
  background-image: url("@/assets/img/negative-space-seasonal-ribbon-pinecones.jpg");
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  padding: 2rem;
  box-sizing: border-box;
}
.wrapper {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  justify-content: space-evenly;
}

nav {
  width: 300px;
}

nav a {
  padding: 5px;
  display: block;
  color: black;
  text-decoration: none;
}

.router-link-active {
  font-weight: bold;
  color: red;
}
</style>
