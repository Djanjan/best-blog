<template>
  <section style="height: 100vh;">
    <v-img
      :src="`https://picsum.photos/1900/1200?image=${40}`"
      :lazy-src="`https://picsum.photos/10/6?image=${40}`"
      class="v-img-full"
      gradient="to top, rgba(0,0,0,.4), rgba(0,0,0,.7)"
    >
      <v-layout align-center justify-center style="height:100%;">
        <v-row align="center" justify="center" style="position: absolute;">
          <v-col align="center" justify="center" class="white--text">
            <div class="display-4 font-weight-bold">404</div>
            <div class="subtitle-2">Page Not Found :(</div>
          </v-col>
        </v-row>
      </v-layout>
    </v-img>
    <v-row align="bottom" justify="bottom">
      <hfooter />
    </v-row>
  </section>
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
    setTimeout(() => (this.loading = false), 500)
    // this.loading = false
  },
  methods: {
    randomNumber: function () {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1 // 63, 40
    }
  }
}
</script>

<style lang="scss">
.v-img-full {
  height: 100vh;
}
</style>
