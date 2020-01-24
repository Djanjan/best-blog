<template>
  <div>
    <v-row v-for="n in 30" :key="n">
      <v-col>
        <v-card class="ma-5 mb-auto">
            <v-card class="text-center v-card--offset ml-2"
                max-width="calc(100% - 32px)" outlined>
                <h2 class="pt-2 mx-3">30</h2>
                <div class="font-weight-light" style="font-size: 12px;">january</div>
                <span class="font-weight-light" style="font-size: 12px;">2020</span>
            </v-card>

                    <v-hover
        v-slot:default="{ hover }"
        close-delay="100"
        >
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 21 + 12}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 21 + 12}`"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="100%"
            width="100%"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="primary"
              >
                <v-btn icon large
                  @click.stop="openArticle(n)"><v-icon>mdi-application</v-icon></v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-img>
                    </v-hover>
          <v-card-title>A Short Blog Post About Design</v-card-title>
          <v-card-subtitle>By Loredana Papp-Dinea Design | Inspiration Creative | 3 Comments</v-card-subtitle>

          <v-card-text class="font-weight-light">
            <div>Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus.
                Donec maximusLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est,
                feugiat nec elementum id, suscipit id nulla. Nulla sit amet luctus dolor. Etiam finibus
                 consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximus ipsum non ornare vestibulum...</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    loading: true,
    isActive: false,
    dialog: false
  }),
  computed: {
    getSrcImg: function () {
      return 'https://picsum.photos/1920/1080?random'
    }
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500)
    // this.loading = false
  },
  methods: {
    randomNumber: function (val) {
      return Math.floor(Math.random() * (val - 1 + 1)) + 1
    },
    openArticle: function (id) {
      this.updateContentBar({
        img: 'https://picsum.photos/1920/1080?image=' + (id * 21 + 12),
        title: 'Article ' + id
      })
      this.toggleContentBar()
      this.$router.push({ name: 'article', params: { id: id } })
    },
    ...mapActions('appBar', [
      'toggleDrawer',
      'toggleContentBar',
      'updateContentBar'
    ])
  }
}

/*

            */
</script>

<style lang="scss">
.v-card--offset {
  top: -28px;
  position: absolute;
  z-index: 1;
}
</style>
