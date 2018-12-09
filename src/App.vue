<template>
  <div id="app">
    <!--<chanePhone/>-->
    <collection/>
  </div>
</template>

<script>
import chanePhone from './components/chanePhone'
import collection from './components/collection'

export default {
  name: 'App',
  components: {
    chanePhone,
    collection
  }
}
</script>

<style>
#app {
  font-family: 'Arial', Helvetica, Arial, sans-serif;
}
</style>
