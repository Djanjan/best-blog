<template>
  <v-footer
    flat
    :light="light"
    :dark="dark"
    width="100%"
    class="transparent hidden-sm-and-down"
  >
    <v-row justify="center" class="pa-2">
      <v-col class="col-md-9">
        <v-btn v-for="link in links" :key="link" text rounded class="my-2">
          {{ link }}
        </v-btn>
      </v-col>

      <v-spacer></v-spacer>

      <v-col class="col-md-3">
        <v-card-text class="font-weight-light text-right">
          © {{ new Date().getFullYear() }} — <strong>Djan Production</strong>
        </v-card-text>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    loading: true,
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  }),
  mounted: function() {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500);
    // this.loading = false
  }
};
</script>
