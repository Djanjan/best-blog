<template>
  <v-footer
    padless
    flat
    class="transparent"
  >
    <v-card-text
      flat
      tile
    >
      <v-skeleton-loader
        :loading="loading"
        transition="scale-transition"
        type="text"
      >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-col>
          <v-card-text class="font-weight-light text-right">
            © {{ new Date().getFullYear() }} — <strong>Djan Production</strong>
          </v-card-text>
        </v-col>

      </v-row>
      </v-skeleton-loader>
    </v-card-text>

  </v-footer>
</template>

<script>
export default {
  data: () => ({
    loading: true,
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
  }),
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.loading = false, 500)
    // this.loading = false
  }
}
</script>
