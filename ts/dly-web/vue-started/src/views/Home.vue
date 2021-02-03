<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <message></message>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import message from '@/components/message.vue';
@Options({
  components: {
    message,
  },
})
export default class Home extends Vue {}
</script>
