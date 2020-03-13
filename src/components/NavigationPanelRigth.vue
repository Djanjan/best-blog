<template>
<div>

<template v-if="$vuetify.breakpoint.mdAndUp ? true : false">
      <v-navigation-drawer
    app
    :mini-variant="true"
    :mini-variant-width="120"
    :permanent="true"
    color="transparent"
    :right="true"
    floating
    v-if="(curectPath.split('/')[2] !== 'article') || $vuetify.breakpoint.lgAndUp"
  >
    <v-list-item>
      <login-button customClass="ma-6" v-if="curectPath === '/app/home'"/>
      <v-btn class="ma-6" v-else icon @click.stop="$router.push('settings')">
            <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-list-item>

  </v-navigation-drawer>
</template>

<template v-else>

</template>

</div>
</template>

<script>
import LoginButton from '../components/LoginButton.vue'

export default {
  components: {
    'login-button': LoginButton
  },
  data: () => ({
    loading: true,
    curectPath: 'article'
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
    }
  }
}
</script>
