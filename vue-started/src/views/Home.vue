<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <children :parentMessage ="message"></children>
    <button @click="changeMessage">메세지를 바꿔볼게요</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import children from '@/components/children.vue';
@Component({
  components: {
    children,
    
  },
})
export default class Home extends Vue {
  message:string ='hello world';  

  changeMessage() {
    this.message = 'change';
  }
}
</script>
