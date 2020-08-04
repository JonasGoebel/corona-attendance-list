<template>
    <p>&copy; 2020 <a href="https://jonasgoebel.net">Jonas Göbel</a></p>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
