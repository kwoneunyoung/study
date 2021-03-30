<template>
  <div id="app">
    <InstarHeader></InstarHeader>
    <InstarContent></InstarContent>
    <InstarFooter></InstarFooter>

  </div>
</template>

<script>
import InstarHeader from './components/InstarHeader.vue'
import InstarContent from './components/InstarContent.vue'
import InstarFooter from './components/InstarFooter.vue'


export default {
  components : {
    'InstarHeader' : InstarHeader,
    'InstarContent' : InstarContent,
    'InstarFooter' : InstarFooter
   
  }
}
</script>

<style>
</style>