<template>

  <v-layout app>
    <v-flex xs12 sm12 >
          <img class="responsive" src="../assets/main_bg.jpg">
          <!-- <HelloWorld msg="2018 DRONPIC"/> -->
          <br />
          <div class="bgimg">
            <br />
            <br />
            <br />

            <h2>{{ $lang.main_comments.innovation}}</h2>

          </div>
          <img  />
        </v-flex>
      </v-layout>

</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },

  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgimg {
    background-image: url('../assets/cloud.jpg');
    width:100%;
    height: auto;
}

.responsive {
    width: 100%;
    height: auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
