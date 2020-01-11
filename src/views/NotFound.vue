<template>
<v-content>
  <v-skeleton-loader
    :loading="loading"
    transition="scale-transition"
    type="image"
  >
          <v-img
            :src="`https://picsum.photos/1900/1200?image=${40}`"
            :lazy-src="`https://picsum.photos/10/6?image=${40}`"
            class="white--text"
            gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            contain
          >
            <v-row
              align="center"
              justify="center"
              class="fill-height">
            <v-col
              align="center"
              justify="center">
                <div class="display-4 font-weight-bold">404</div>
                <div class="subtitle-2">Page Not Found :(</div>
            </v-col>
            </v-row>
          </v-img>
  </v-skeleton-loader>
          <hfooter />
</v-content>
</template>

<script>
import hfooter from '../components/Footer.vue'

export default {
  components: {
    hfooter
  },
  data: () => ({
    loading: true
  }),
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.loading = false, 500)
    // this.loading = false
  },
  methods: {
    randomNumber: function () {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1 // 63, 40
    }
  }
}
</script>
