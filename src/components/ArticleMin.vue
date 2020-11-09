<template>
  <div>
    <v-card class="ma-5 mb-auto">
      <v-card
        class="text-center v-card--offset ml-2"
        max-width="calc(100% - 32px)"
        outlined
      >
        <h2 class="pt-2 mx-3">
          {{ article.created.split(" ")[0].split("-")[2] }}
        </h2>
        <div class="font-weight-light mx-2" style="font-size: 12px;">
          january
        </div>
        <span class="font-weight-light" style="font-size: 12px;">{{
          article.created.split("-")[0]
        }}</span>
      </v-card>

      <v-hover v-slot:default="{ hover }" close-delay="100">
        <v-img
          :src="`https://picsum.photos/500/300?image=${article.id * 30 + 12}`"
          :lazy-src="`https://picsum.photos/10/6?image=${article.id * 30 + 12}`"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="100%"
          width="100%"
          aspect-ratio="1.7"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-row>
          </template>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="primary">
              <v-btn icon large @click.stop="openArticle(article.id)"
                ><v-icon>mdi-application</v-icon></v-btn
              >
            </v-overlay>
          </v-fade-transition>
        </v-img>
      </v-hover>
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle>{{ article.subTitle }}</v-card-subtitle>

      <v-card-text class="font-weight-light">
        <div>{{ article.slug }}</div>
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
  </div>
</template>
<script>
export default {
  props: {
    article: {
      id: Number,
      title: String,
      subTitle: String,
      slug: String,
      created: String
    }
  },
  data: () => ({
    loading: true
  }),
  computed: {
    getSrcImg: function() {
      return "https://picsum.photos/1920/1080?random";
    }
  },
  created: function() {},
  mounted: function() {
    // console.log(this.article)
  },
  methods: {
    openArticle: function(id) {
      this.$router.push({ name: "article", params: { id: id } });
    }
  }
};
</script>
