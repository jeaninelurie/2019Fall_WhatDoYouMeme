<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from './components/Nav';

export default {
  components: {
    Nav
  }
}
</script>
