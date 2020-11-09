<template>
  <section style="height: 100vh;">
    <v-img
      src="https://picsum.photos/1900/1200?random"
      :lazy-src="`https://picsum.photos/10/6?image=${40}`"
      class="v-img-full"
      gradient="to top, rgba(0,0,0,.4), rgba(0,0,0,.7)"
    >
      <v-layout align-center justify-center style="height:100%;">
        <v-row
          align="center"
          justify="center"
          style="position: absolute;"
          no-gutters
        >
          <v-col align="center" justify="center" class="white--text">
            <div class="display-4 font-weight-bold">Best Blog</div>
            <div class="subtitle-2">The Best Blog this world!!!</div>
            <v-row class="mt-6">
              <v-col>
                <v-btn
                  color="secondary"
                  rounded
                  large
                  @click.stop="$router.push({ path: '/app/home' })"
                >
                  Get Start
                </v-btn>
              </v-col>
            </v-row>
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
  mounted: function() {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500);
    // this.loading = false
  },
  methods: {
    randomNumber: function() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1; // 63, 40
    }
  }
};
</script>

<style lang="scss">
.v-img-full {
  height: 100vh;
}
</style>
