<template>
  <div id="app">
    <!--<chanePhone/>-->
    <!--<collection/>-->
    <orderRecord/>
  </div>
</template>

<script>
import chanePhone from './components/chanePhone'
import collection from './components/collection'
import orderRecord from './components/orderRecord'

export default {
  name: 'App',
  components: {
    chanePhone,
    collection,
    orderRecord
  }
  // B5B5B5
}
</script>

<style>
#app {
  font-family: 'Arial', Helvetica, Arial, sans-serif;
}
#app input::-webkit-input-placeholder {
  color: #B5B5B5;
}
#app input:-moz-placeholder {
  color: #B5B5B5;
}
#app input::-moz-placeholder {
  color: #B5B5B5;
}
#app input::-ms-input-placeholder {
  color: #B5B5B5;
}
ul{
  margin: 0;
  padding: 0;
}
</style>
