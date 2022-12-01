<template>
  <img :src="`./assets/img/${imgSrc}`" alt="Some image" />
</template>

<script>
export default {
  name: "toyImage",
  props: {
    imgSrc: String,
  },
};
</script>

<style scoped>
img {
  width: 50px;
  border: 2px solid green;
  border-radius: 6px;
}
</style>
