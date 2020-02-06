<template>
  <div>
      <template v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-app-bar
          app
          transition="slide-y-transition"
          hide-on-scroll
          elevation="16"
          :color="
            $vuetify.theme.dark ? 'primary darken-1' : 'primary lighten-1'
          "
          style="top: initial;"
          bottom
        >
          <v-app-bar-nav-icon
            class=""
            :style="appBarProp.isMin ? 'background: ' + appBarProp.color : ''"
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

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn
            v-show="false"
            fab
            dark
            fixed
            bottom
            right
            color="secondary"
            @click.stop="toggleDrawer"
            class="mb-3"
            :style="{left: '50%', transform:'translateX(-50%)'}"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-app-bar>
      </template>

      <template v-else>

      </template>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

import menuContext from './MenuContext.vue'
import preLoder from '../components/ProgressCircular.vue'
//  color="transparent"
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    menuContext,
    // eslint-disable-next-line vue/no-unused-components
    'progress-bar': preLoder
  },
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState('theme', {
      appBarProp: state => state.appBar
    }),
    ...mapGetters('appBar', ['getContentBar'])
  },
  created: function () {
    // console.log(this.$store.state.appBar.contentBar)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500)
  },
  methods: {
    ...mapActions('appBar', [
      'toggleDrawer'
    ])
  }
}

</script>

<style lang="scss">

</style>
