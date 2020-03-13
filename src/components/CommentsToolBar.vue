<template>
    <v-toolbar flat color="transparent" height="80px" width="100%" v-if="(curectRouterName !== 'article') && !$vuetify.breakpoint.lgAndUp">
      <v-btn icon class="ml-1" @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title class="font-weight-bold">JB</v-toolbar-title>
    </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
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
