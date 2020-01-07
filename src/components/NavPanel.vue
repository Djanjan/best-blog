<template>
  <div class="nav-panel">
    <h1>Blog</h1>
    <ul>
      <li>lool</li>
      <li>loafol</li>
      <li>loafol</li>
      <li>loafsol</li>
      <li>ladfool</li>
      <li>lfaool</li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

.nav-panel {
    position: fixed;
    height: 100%;
    width: 250px;
    background-color: #121212;
}

h1{
    color: #9c4ccb;
    margin: 8%;
}

ul{
    list-style: none;
    padding: 10px 0 0 0;
    font-family: "Lucida Sans";

    %li{
        cursor: pointer;
        padding: 10px 10px 10px 20px;
        color:#b3b3b3;
    }

    li{
        @extend %li;
    }

    li:hover{
        @extend %li;
        color:#ffffff;
    }

    li.active{
        @extend %li;
        color:#ffffff;
        border-left: 5px solid #9c4ccb;
    }
}
</style>
