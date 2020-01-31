<template>
  <v-app
    id="inspire"
  >
    <navigationPanel />

    <v-content>
      <v-container fluid style="padding: 0px 0px 0px 0px;">
        <router-view></router-view>
      </v-container>
    </v-content>

            <appBar>
        </appBar>
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
  data: () => ({

  }),
  created: function () {
    // this.$router.push({ path: '/home' })
  },
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'// :style="{background: $vuetify.theme.themes[theme].background}"
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .something {
    background-color: var(--v-primary-lighten1);
  }
</style>
