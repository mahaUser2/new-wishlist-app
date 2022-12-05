<template>
  <div class="page404">
    <h2>Oops! The requested page cannot be found.</h2>
    <router-link to="/">Back to Home...</router-link>
  </div>
</template>

<script>
export default {
  name: "Page404View",
};
</script>

<style scoped>
.page404 {
  text-align: center;
}
h2 {
  color: red;
  font-weight: bold;
}
</style>
