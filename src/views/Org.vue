<template>
  <v-container>
    <div class="fp-container">
        <img src="../assets/org.jpg"/>
    </div>
  </v-container>
</template>

<script>

  export default {
    // props: [images],
    data: () => ({
      image: '../assets/org.jpg'
    })
  }
</script>

<style scoped>
.fp-container {
  position:relative;
  display: inline-block;
  max-width: 100%;
  margin-top: 2em;
  /* margin-left: 2em; */
  border: 1px solid #747474;
}
.fp-container img {
  position: relative;
  display: block;
  max-width: 100%;
}
.fp-container a.hotspot {
  position: absolute;
  text-decoration: none;
}

.center {
  width: 50%;
  /* display: block; */
    margin: 0 auto;
}
</style>
