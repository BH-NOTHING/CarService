<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <ChanePhone/>
  </div>
</template>

<script>
import ChanePhone from './components/ChanePhone'

export default {
  name: 'App',
  components: {
    ChanePhone
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
