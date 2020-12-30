<template>
  <form action="">
    <div>
        <label for="username">id: </label>
        <input id="username" type="text">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password">
    </div>
    <button>login</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      username : '',
      password: '',
    }
  }
}
</script>

<style>

</style>