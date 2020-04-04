<template>
  <div>
    <template v-if="$vuetify.breakpoint.mdAndUp ? true : false">
      <v-navigation-drawer
        app
        :mini-variant="true"
        :mini-variant-width="120"
        :permanent="true"
        color="transparent"
        floating
        v-if="((curectRouterName !== 'article')&&(curectRouterName !== 'comments')) || $vuetify.breakpoint.lgAndUp"
      >
        <v-list dense color="transparent">
          <v-list-item>
            <h1 class="my-5 font-weight-medium headline">JB</h1>
            <h1 class="my-5 font-weight-medium headline">log</h1>
          </v-list-item>
        </v-list>

        <v-list dense color="transparent">
          <v-item-group v-model="selectedItems">
            <v-row
              v-for="(link, i) in links"
              :key="i"
              align="center"
              justify="center"
            >
              <v-item v-slot:default="{ active, toggle }">
                <v-btn icon class="ma-2" @click.stop="toggle">
                  <v-icon :color="active ? 'secondary' : ''">{{
                    link.icon
                  }}</v-icon>
                </v-btn>
              </v-item>
            </v-row>
          </v-item-group>
        </v-list>
      </v-navigation-drawer>
    </template>

    <template v-else>
      <v-bottom-navigation
        v-model="selectedItems"
        app
        shift
        color="secondary"
        background-color="tertiary"
        class="d-flex justify-space-around"
      >
        <v-btn v-for="(link, i) in links" :key="i" fab>
          <span>{{ link.text }}</span>
          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </template>

    <app-error></app-error>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppError from './AppError.vue'

export default {
  name: 'the-navigation-panel',
  components: {
    'app-error': AppError
  },
  data: () => ({
    loading: true,
    links: [
      { text: 'Home', icon: 'mdi-home', name: 'home', path: '/app/home' },
      {
        text: 'Category',
        icon: 'mdi-shape',
        name: 'categories',
        path: '/app/categories'
      },
      {
        text: 'Search',
        icon: 'mdi-magnify',
        name: 'search',
        path: '/app/search'
      }
    ]
  }),
  computed: {
    ...mapState('router', {
      curectRouterName: state => state.name
    }),
    selectedItems: {
      get () {
        return this.value
      },
      set (item) {
        if (
          item !== undefined &&
          this.$router.currentRoute.name !== this.links[item].name
        ) {
          this.$router.push(this.links[item].path)
        }
      }
    }
  },
  created: function () {
    // console.log(this.$store.state.appBar.drawer)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500)
    // this.loading = false
  },
  methods: {
    randomNumber: function (value) {
      return Math.floor(Math.random() * (value - 1 + 1)) + 1
    }
  }
}
</script>

<style scoped lang="scss"></style>
