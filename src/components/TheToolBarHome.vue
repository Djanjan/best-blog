<template>
<v-row
  v-if="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
  <v-toolbar
    transition="slide-y-transition"
    color="transparent"
    height="50px"
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

    <login-button/>

    <v-btn
      v-show="false"
      fab
      dark
      fixed
      bottom
      right
      color="secondary"
      class="mb-3"
      :style="{ left: '50%', transform: 'translateX(-50%)' }"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-toolbar>
</v-row>
</template>

<script>
import { mapState } from 'vuex'

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
    loading: true
  }),
  computed: {
    ...mapState('router', {
      curectRouterName: state => state.name
    })
  },
  created: function () {
    // console.log(this.$router.currentRoute.path)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500)
  },
  methods: {}
}
</script>

<style lang="scss"></style>
