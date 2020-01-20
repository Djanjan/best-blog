<template>
  <v-app
    id="inspire"
  >
    <navigationPanel />

    <appBar>
    </appBar>

    <v-content>
      <v-container fluid style="padding: 0px 0px 0px 0px;">
        <router-view></router-view>
      </v-container>
    </v-content>

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
