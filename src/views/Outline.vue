<template>
  <!-- 25page -->
  <v-container>

    <v-card height="4.5em">
      <v-card-text>
        <p class="headline text-lg-center">
          {{ $lang.committee.outline }}
        </p>
      </v-card-text>
    </v-card>

    <div class="fp-container">
      <div class="p_box">
        <img src="../assets/outline/outline_img.jpg"/>
      </div>
      <div class="p_box">
        <img src="../assets/outline/outline_text.jpg"/>

      </div>
    </div>

  </v-container>

</template>

<!-- -->
<style scoped>
.jiral {
  align-items: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}

.p_box {
  margin: 0 auto;
  display:table;
  margin-bottom: 5em;
  /* background: yellow; */
}

.fp-container {
  position:relative;
  display: flex;              /* establish flex container */
  text-align: center;
  display: inline-block;
  max-width: 100%;
  margin-top: 2em;
  /* margin-left: 2em; */
  /* border: 1px solid #747474; */
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
