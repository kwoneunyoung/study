<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <children parentMessage="hello world"></children>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Children from '@/components/children.vue';


@Component({
  components: {
    Children,
  },
})
export default class Home extends Vue {}
</script>
