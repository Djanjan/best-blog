<template>
  <section :style="$vuetify.breakpoint.mdAndUp ? 'height: 100vh;' : 'height: 100vh; margin-bottom: -40px;'">
    <v-img
      src="@/assets/cat-what.gif"
      :lazy-src="`https://picsum.photos/10/6?image=${40}`"
      class="v-img-full"
      gradient="to top, rgba(0,0,0,.4), rgba(0,0,0,.7)"
    >
      <v-layout align-center justify-center style="height:100%;">
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" align="center" justify="center" class="white--text">
            <div>
              <div class="display-3 font-weight-bold text-center">Ohhh god what is it!</div>
              <div class="subtitle-1 text-center mt-5">You are lost...</div>
              <v-btn
                class="mt-3"
                color="secondary"
                rounded
                large
                @click.stop="$router.push({ path: '/app/home' })"
              >
                Back to homepage
              </v-btn>
            </div>
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
