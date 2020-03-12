<template>
<div>

<template v-if="$vuetify.breakpoint.mdAndUp ? true : false">
  <v-navigation-drawer
    v-model="updateDrawer"
    :src="navigationDrawer.src"
    app
    :mini-variant="true"
    :mini-variant-width="120"
    :permanent="true"
    color="transparent"
    floating
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
          :key="i" align="center" justify="center">
            <v-item v-slot:default="{ active, toggle }">
              <v-btn
                icon class="ma-2" @click.stop="toggle">
                <v-icon :color="active ? 'secondary' : ''">{{link.icon}}</v-icon>
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
    <v-btn v-for="(link, i) in links"
          :key="i"
          fab>
      <span>{{link.text}}</span>
      <v-icon>{{link.icon}}</v-icon>
    </v-btn>
</v-bottom-navigation>
</template>

</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    loading: true,
    links: [
      { text: 'Home', icon: 'mdi-home', share: 'home', allPath: '/app/home' },
      { text: 'Category', icon: 'mdi-shape', share: 'category', allPath: '/app/category' },
      { text: 'Search', icon: 'mdi-magnify', share: 'search', allPath: '/app/search' }
    ]
  }),
  computed: {
    ...mapState('appBar', {
      drawer: state => state.drawer
    }),
    ...mapState('theme', {
      navigationDrawer: state => state.navigationDrawer
    }),
    selectedItems: {
      get () {
        return this.value
      },
      set (item) {
        if ((item !== undefined) && (this.$router.currentRoute.path !== this.links[item].allPath)) {
          this.$router.push(this.links[item].share)
        }
      }
    },
    updateDrawer: {
      get () {
        return this.drawer
      },
      set (value) {
        this.setDrawer(value)
      }
    }
  },
  created: function () {
    // console.log(this.$store.state.appBar.drawer)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.loading = false, 500)
    // this.loading = false
  },
  methods: {
    randomNumber: function (value) {
      return Math.floor(Math.random() * (value - 1 + 1)) + 1
    },
    ...mapActions('appBar', [
      'setDrawer'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>
