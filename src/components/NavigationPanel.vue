<template>
  <v-navigation-drawer
    v-model="updateDrawer"
    :src="navigationDrawer.src"
    app
    :color="
        $vuetify.theme.dark ? 'primary darken-1' : 'primary lighten-1'
      "
    :permanent="$vuetify.breakpoint.md ? true : false"
    :expand-on-hover="$vuetify.breakpoint.md ? true : false"
  >
    <v-list dense>
      <v-list-item>
          <h1 class="my-5 font-weight-medium headline">JB</h1>
          <h1 class="my-5 font-weight-medium headline">log</h1>
      </v-list-item>
    </v-list>

    <v-skeleton-loader
      :loading="loading"
      transition="scale-transition"
      type="list-item-avatar-two-line"
    >
    <div>
    <template v-if="logged">
    <v-list dense>
      <v-list-group
        value="false"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-avatar>
            <v-img :src="userDate.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{userDate.login}}</v-list-item-title>
            <v-list-item-subtitle>{{userDate.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </template>

        <v-list-item link @click.stop="logout()">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list-group>
    </v-list>
    </template>

    <template v-else>
      <v-list>
        <v-list-item
          link
          @click.stop="toggleDialogLogin()">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <loginDialog/>
      <register-dialog />

    </template>
    </div>
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
        active-class="secondary lighten-1"
        >
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
import { mapActions, mapState } from 'vuex'

import loginDialog from '../views/Login.vue'
import registerDialog from '../views/Register.vue'

export default {
  components: {
    loginDialog,
    'register-dialog': registerDialog
  },
  data: () => ({
    loading: true,
    openLoginPage: false,
    links: [
      { text: 'Home', icon: 'mdi-home', share: '/home' },
      { text: 'Contact', icon: 'mdi-contact-mail', share: '/' },
      { text: 'Editor', icon: 'mdi-clipboard-text-multiple', share: '/editor' },
      { text: 'Settings', icon: 'mdi-settings', share: '/settings' }
    ]
  }),
  computed: {
    ...mapState('appBar', {
      drawer: state => state.drawer
    }),
    ...mapState('theme', {
      navigationDrawer: state => state.navigationDrawer
    }),
    ...mapState('user', {
      logged: state => state.logged,
      userDate: state => state.date
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
    ]),
    ...mapActions('user', [
      'toggleLogged',
      'logout'
    ]),
    ...mapActions([
      'toggleDialogLogin'
    ])
  }
}
</script>
