<template>
  <div id="app">
    <h2>wellcom vue</h2>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才能点击+" @click="clickOdd">
    <input type="button" value="点击异步" @click="clickAsync">
    <div>现在的值为: {{count}}, 它现在是{{getOdd}}</div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
     //  mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
   computed: mapGetters([
         'count',
         'getOdd'
     ]),
     methods:mapActions([
       'increment',
       'decrement',
       'clickOdd',
       'clickAsync'
     ])
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
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
