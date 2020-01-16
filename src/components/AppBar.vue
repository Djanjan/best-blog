<template>
<div>
<template v-if="!contentBar.prominent">
    <v-app-bar
    absolute
    app
    flat
    color="transparent"
    height="80px"
    transition="slide-y-transition"
  >
    <v-app-bar-nav-icon
      class="ma-2 v-btn--contained v-btn--fab v-btn--round v-size--small"
      @click.stop="toggleDrawer"
    />
    <v-toolbar-title>Blog</v-toolbar-title>

    <v-progress-linear
        :active="false"
        :indeterminate="false"
        absolute
        top
        color="primary"
    ></v-progress-linear>

    <v-spacer />

    <v-btn
      icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <menuContext />
  </v-app-bar>
</template>

<template v-else>
  <v-app-bar
    absolute
    app
    height="350px"
    prominent
    dark
    flat
    :color="contentBar.color"
    :src="contentBar.img"
    :style="`background-image: linear-gradient(${$vuetify.theme.themes.light.primary}, ${$vuetify.theme.themes.light.secondary});`"
    transition="slide-y-transition"
  >
    <v-app-bar-nav-icon
      class="ma-2"
      elevation="24"
      @click.stop="toggleDrawer"
    />
    <v-toolbar-title>{{contentBar.title}}</v-toolbar-title>

    <v-progress-linear
        :active="false"
        :indeterminate="false"
        absolute
        top
        color="primary"
    ></v-progress-linear>

    <v-spacer />

    <v-btn
      class="mt-3"
      icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn
      icon
      class="mt-3">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn
      icon
      large
      class="mt-3"
      color="primary"
      @click.stop="closeContentBar">
      <v-icon>mdi-close</v-icon>
    </v-btn>

  </v-app-bar>
</template>
</div>
</template>

<script>
import menuContext from './MenuContext.vue'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  components: {
    menuContext
  },
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState('appBar', {
      contentBar: state => state.contentBar
    }),
    ...mapGetters('appBar', [
      'getContentBar'
    ])
  },
  created: function () {
    // console.log(this.$store.state.appBar.contentBar)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.loading = false, 500)
  },
  methods: {
    closeContentBar: function () {
      this.$router.go(-1)
    },
    ...mapActions('appBar', [
      'toggleDrawer',
      'toggleContentBar',
      'updateContentBar'
    ])
  }
}
</script>

<style lang="scss">

</style>
