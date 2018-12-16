<template>
  <div id="app">
    <!--<chanePhone/>-->
    <!--<collection/>-->
    <!--<orderRecord/>-->
    <!--<collectionRecord/>-->
    <!--<addShop/>-->
    <uploadLisence />
  </div>
</template>

<script>
import chanePhone from './components/chanePhone'
import collection from './components/collection'
import orderRecord from './components/orderRecord'
import collectionRecord from './components/collectionRecord'
import addShop from './components/addShop'
import uploadLisence from './components/uploadLisence'

export default {
  name: 'App',
  components: {
    chanePhone,
    collection,
    orderRecord,
    collectionRecord,
    addShop,
    uploadLisence
  }
  // B5B5B5
}
</script>

<style>
#app {
  font-family: 'Arial', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
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
