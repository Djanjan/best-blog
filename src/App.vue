<template>
  <v-app
    id="inspire"
  >
    <navigationPanel />

    <appBar />

    <router-view />
  </v-app>
</template>

<script>
import navigationPanel from './components/NavigationPanel.vue'
import appBar from './components/AppBar.vue'

export default {
  props: {
    source: String
  },
  components: {
    navigationPanel,
    appBar
  },
  computed: {

  },
  data: () => ({

  }),
  created: function () {
    // this.$router.push({ path: '/home' })
  },
  methods: {

  }
}
</script>

<style lang="scss">
.row{
  padding: 0px 15px 0px 0px;
}
</style>
