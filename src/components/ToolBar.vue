<template>
  <div>
      <template v-if="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) && (curectPath.split('/')[2] !== 'article')">
        <v-app-bar
          absolute
          transition="slide-y-transition"
          color="transparent"
          height="70px"
          flat
        >
          <v-toolbar-title class="font-weight-bold headline">JBlog</v-toolbar-title>

          <v-progress-linear
            :active="false"
            :indeterminate="false"
            absolute
            top
            color="primary"
          ></v-progress-linear>

          <v-spacer></v-spacer>

          <login-button v-if="curectPath === '/app/home'"/>
          <v-btn v-else icon @click.stop="$router.push('settings')">
            <v-icon>mdi-cog</v-icon>
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

      <template v-else-if="(curectPath.split('/')[2] === 'article') && !$vuetify.breakpoint.lgAndUp">
        <v-toolbar
            flat
            color="transparent"
            absolute
            dark
            height="80px"
            width="100%"
          >
            <v-btn icon class="ml-1" @click.stop="$router.go(-1)">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-toolbar-title class="">JB</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items class="mr-7 hidden-xs-and-down">
              <v-btn dark text
                ><v-icon left>mdi-tag-text-outline</v-icon>other</v-btn
              >
            </v-toolbar-items>
          </v-toolbar>
      </template>

      <template v-else>

      </template>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

import menuContext from './MenuContext.vue'
import preLoder from '../components/ProgressCircular.vue'
import LoginButton from '../components/LoginButton.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    menuContext,
    // eslint-disable-next-line vue/no-unused-components
    'progress-bar': preLoder,
    'login-button': LoginButton
  },
  data: () => ({
    loading: true,
    curectPath: '/app/home'
  }),
  watch: {
    '$route.params.search': {
      handler: function () {
        this.curectPath = this.$router.currentRoute.path
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    ...mapState('theme', {
      appBarProp: state => state.appBar
    }),
    ...mapGetters('appBar', ['getContentBar']),
    selectedRouter: {
      get () {
        return this.$router.currentRoute.path
      }
    }
  },
  created: function () {
    // console.log(this.$router.currentRoute.path)
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
