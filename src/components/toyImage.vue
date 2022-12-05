<template>
  <img :src="`./assets/img/${src}`" alt="Some toy..." />
</template>

<script>
export default {
  name: "toyImage",
  // This component takes a prop called imgSrc of type String and use it as the src of the <img...
  props: {
    src: String,
  },
};
</script>

<style scoped>
img {
  border: 2px solid green;
  border-radius: 6px;
  padding: 5px;
}
</style>
