<template>
  <div id="app">
    <navPanel />
    <router-view />
  </div>
</template>

<script>
import navPanel from './components/NavPanel.vue'

export default {
  name: 'Blog',
  components: { navPanel }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

#app{
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
