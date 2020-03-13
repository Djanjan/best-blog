<template>
  <section :style="$vuetify.breakpoint.mdAndUp ? 'height: 100vh;' : 'height: 100vh; margin-bottom: -40px;'">
    <v-img
      src="https://colorlib.com/preview/theme/cocoon/assets/img/bg/about.png"
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
  </section>
</template>

<script>

export default {
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
