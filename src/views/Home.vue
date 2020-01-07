<template>
  <div id="wrapper">
    <div class="under-page">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}

/*
 #wrapper {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 250px;
    padding-right: 250px;
    background-color: #181818;
}
*/
</script>

<style lang="scss">



  .under-page{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2% 0% 0% 2%;
  }

</style>
