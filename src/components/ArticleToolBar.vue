<template>
  <v-row v-if="!$vuetify.breakpoint.lgAndUp">
    <v-toolbar flat color="transparent" dark height="80px" width="100%">
      <v-btn icon class="ml-1" @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title class="">JB</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="mr-7 hidden-xs-and-down">
        <v-btn text><v-icon left>mdi-tag-text-outline</v-icon>other</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState("router", {
      curectRouterName: state => state.name
    })
  },
  created: function() {
    // console.log(this.$router.currentRoute.path)
  },
  mounted: function() {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500);
  },
  methods: {}
};
</script>

<style lang="scss"></style>
