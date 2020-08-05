<template>
  <div style="float: right; margin-right: 20px;">
    <p>&copy; 2020 <a href="https://jonasgoebel.net">Jonas Göbel</a></p>
  </div>
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
