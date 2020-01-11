<template>
  <v-navigation-drawer
    :value="drawer"
    src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    dark
    app
  >
    <v-skeleton-loader
      :loading="loading"
      transition="scale-transition"
      type="list-item-avatar-two-line"
    >
    <v-list dense>
      <v-list-group
        value="false"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/50.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Sandra Adams</v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
        </template>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logaut</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list-group>
    </v-list>
    </v-skeleton-loader>

      <v-divider></v-divider>

    <v-skeleton-loader
      :loading="loading"
      transition="scale-transition"
      type="list-item-three-line"
    >
    <v-list dense>
      <v-list-item-group
        v-model="selectedItems"
        active-class="primary"
        mandatory>
        <v-list-item
          link
          v-for="(link, i) in links"
          :key="i">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-skeleton-loader>

  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    loading: true,
    links: [
      { text: 'Home', icon: 'mdi-home', share: '/home' },
      { text: 'Contact', icon: 'mdi-contact-mail', share: '/' },
      { text: 'Settings', icon: 'mdi-settings', share: '/settings' }
    ]
  }),
  computed: {
    ...mapState('appBar', {
      drawer: state => state.drawer
    }),
    selectedItems: {
      get () {
        return this.value
      },
      set (item) {
        if ((item !== undefined) && (this.$router.currentRoute.path !== this.links[item].share)) {
          this.$router.push(this.links[item].share)
        }
      }
    }
  },
  created: function () {

  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.loading = false, 500)
    // this.loading = false
  },
  methods: {
    randomNumber: function () {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1
    }
  }
}
</script>
