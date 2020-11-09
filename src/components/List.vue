<template>
  <v-container fluid>
    <v-row align="stretch" justify="space-between">
      <v-col v-for="n in 10" :key="n">
        <v-skeleton-loader
          :loading="loading"
          transition="scale-transition"
          min-height="100px"
          min-width="200px"
          type="card"
        >
          <v-hover v-slot:default="{ hover }" close-delay="100">
            <v-card :elevation="hover ? 16 : 2">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 10 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 10 + 10}`"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                min-height="100px"
                min-width="200px"
                aspect-ratio="1"
              >
                <v-card-title v-text="`Title ${n}`" />

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="primary">
                    <v-btn @click.stop="openArticle(n)">See article</v-btn>
                  </v-overlay>
                </v-fade-transition>

                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

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
          </v-hover>
        </v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    mass: Array
  },
  data: () => ({
    loading: true,
    isActive: false
  }),
  mounted: function() {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500);
    // this.loading = false
  },
  methods: {
    randomNumber: function() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    },
    openArticle: function(id) {
      this.$router.push({ name: "article", params: { id: id } });
    },
    ...mapActions("appBar", ["toggleDrawer"])
  }
};
</script>
