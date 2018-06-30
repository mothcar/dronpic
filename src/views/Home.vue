<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      INTERNATIONAL DRONPIC COMMITTE
    </p>
    <h3>Link Test</h3>
    <ul>
      <li><a href="https://naver.com" target="_blank">Naver</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://google.com" target="_blank">Google</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="http://www.me.go.kr/home/web/main.do" target="_blank">대한민국 환경부</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
