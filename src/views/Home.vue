<template>


  <!-- fill-height -->

  <!-- <img class="responsive" src="../assets/main_bg.jpg"> -->
  <!-- <HelloWorld msg="2018 DRONPIC"/> -->


  <!-- <v-flex xs12 sm12 lg12>
  <div class="container">
  <img class="my-img" src="../assets/main_bg.jpg">
  <div class="content">
  <p class="text">up</p></div></div>

  <div class="container">
  <img class="my-img" src="../assets/cloud.jpg">
  <div class="content">
  <p class="text-md-center">force</p>
  <div>
  <h1 class="text-md-center">{{ $lang.main_comments.innovation}}</h1>
  <h1 class="text-md-center">{{ $lang.main_comments.beOne}}</h1>
  <h1 class="text-md-center">{{ $lang.main_comments.beOne}}</h1>
  <h1 class="text-md-center">{{ $lang.main_comments.youngDream}}</h1>
  <br />
  <h4 class="text-md-center">{{ $lang.main_comments.likeBee}}</h4></div></div></div></v-flex > -->

  <v-app >

    <v-parallax :src="require('@/assets/main_bg.jpg')">

      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-bold mb-2 p_font_shadow">{{ $lang.menu.title}}</h1>
        <h2 class="subheading p_font_shadow">{{ $lang.menu.sub_title}}</h2>
      </v-layout>



    </v-parallax>

    <v-subheader light>{{ $lang._order.concept }}</v-subheader>




    <v-parallax :src="require('@/assets/cloud.jpg')">

      <v-layout align-center column justify-center>
        <h2 class="font-weight-bold p_font_shadow">{{ $lang.main_comments.innovation}}</h2>
        <h2 class="font-weight-bold p_font_shadow">{{ $lang.main_comments.beOne}}</h2>
        <h2 class="font-weight-bold p_font_shadow">{{ $lang.main_comments.beOne}}</h2>
        <h2 class="font-weight-bold p_font_shadow">{{ $lang.main_comments.youngDream}}</h2>
        <br />
        <h4 class="font-weight-bold p_font_shadow">{{ $lang.main_comments.likeBee}}</h4>
      </v-layout>

    </v-parallax>

  </v-app>

  <!-- </v-flex> -->


</template>

<script>

export default {
  components: {
  },

  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.p_font_shadow {
  text-shadow: 2px 2px 8px #000;
}

.v-subheader {
  font-size: 20px;
  margin-top: 5%;
  margin-left: 2%;
  margin-bottom: 1%;
}

.container {
  position: relative;
  max-width: 100%;
  /* margin: 0 auto; */
}

.content {
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    rgba(0,0,0, 0),
    rgba(0,0,0, .4));
    /* color: #f1f1f1; */
    width: 100%;
    height: 100%;
  }

  .text {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform:translate(-50%, -50%);
    color:white;
  }

  .text-md-center {
    /* width: 100%; */
    height: auto;
    /* left: 50%; */
    /* bottom: 50%; */
    /* position:absolute; */
    /* text-align: center; */
    /* transform:translate(-50%, -50%); */
    /* align-content: center; */
    color:white;
  }


  .outer {
    position:relative;
    display: block;
    /* position: absolute; */
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(0,0,0, .9),
      rgba(0,0,0, 5));
      /* opacity: 0.7; */
      top: 0;

    }

    .my-img {
      /* position:relative; */
      display: block;
      /* position: absolute; */
      width: 100%;
      height: auto;

      /* opacity: 0.7; */
      top: 0;
      /* z-index: -1; */
    }

    .overlay {
      display: none;
    }

    /* .outer {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;

    } */


    .bgimg {
      background-image: url('../assets/cloud.jpg');
      width:100%;
      height: auto;
      background-position: center;
    }





    .my_selector {
      background: linear-gradient(
        rgba(0,0,0, 0),
        rgba(0,0,0, .9));
        min-height: 634px;
      }

      .my_box {
        text-align: center;
        color: white;
        background-image: linear-gradient(
          rgba(0,0,0,0),
          rgba(0,0,0,.5)
          ),url('../assets/main_bg.jpg');
          background-size:100%;
          width: 100%;
          height: 100%;
          background-position: center;

        }

        .main_top_bg {
          background-image: linear-gradient(
            rgba(0,0,0,0),
            rgba(0,0,0,.2)
            ),url('../assets/main_bg.jpg');
            background-size:100%;
            height: auto;
            background-position: center;
            color:white;
            /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2); */
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
