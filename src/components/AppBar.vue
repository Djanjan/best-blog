<template>
  <v-app-bar
    absolute
    class="pl-5 transparent"
    app
    flat
    height="80px"
  >
    <v-app-bar-nav-icon
      class="v-btn--contained v-btn--fab v-btn--round v-size--small"
      @click.stop="toggleDrawer"
    />
    <v-toolbar-title>Blog</v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <menuContext />
  </v-app-bar>
</template>

<script>
import menuContext from './MenuContext.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    menuContext
  },
  methods: {
    ...mapActions('appBar', [
      'toggleDrawer'
    ])
  }
}
</script>
