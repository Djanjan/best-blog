<template>
  <div>
    <template v-if="this.articls.length !== 0">
      <v-row v-for="(article, i) in this.articls" :key="i">
        <v-col>
          <v-skeleton-loader
            :loading="loading"
            transition="scale-transition"
            type="card"
          >
            <article-card
              :article="{
                id: article.id,
                title: article.title,
                slug: article.slug,
                subTitle:
                  'By Loredana Papp-Dinea Design | Inspiration Creative | 3 Comments',
                created: article.created_at
              }"
            ></article-card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </template>
    <template v-else-if="this.articls.length === 0 || this.error !== null">
      <v-row v-for="n in 10" :key="n">
        <v-col>
          <v-skeleton-loader
            :loading="loading"
            transition="scale-transition"
            type="card"
          >
            <article-card
              :article="{
                id: n,
                title: 'A Short Blog Post About Design',
                slug:
                  'Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximusLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla. Nulla sit amet luctus dolor. Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximus ipsum non ornare vestibulum...',
                subTitle:
                  'By Loredana Papp-Dinea Design | Inspiration Creative | 3 Comments',
                created: '2020-01-30 08:08:00'
              }"
            ></article-card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </template>
    <v-alert class="v-alert-custom" :value="snackbar" type="error">
      {{ this.error }}
    </v-alert>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

import articleMin from "./ArticleMin.vue";

export default {
  components: {
    "article-card": articleMin
  },
  data: () => ({
    loading: true,
    isActive: false,
    articls: [],
    snackbar: false,
    error: null
  }),
  computed: {
    getSrcImg: function() {
      return "https://picsum.photos/1920/1080?random";
    }
  },
  created: function() {
    this.getArticls();
  },
  mounted: function() {
    // eslint-disable-next-line no-return-assign
    // setTimeout(() => (this.loading = false), 500)
    // this.loading = false
  },
  methods: {
    randomNumber: function(val) {
      return Math.floor(Math.random() * (val - 1 + 1)) + 1;
    },
    getArticls: async function() {
      try {
        const response = await axios.get("/all-post");
        // console.log(response)
        this.articls = response.data.data;

        this.loading = false;
      } catch (err) {
        console.error(err);
        this.error = err;

        this.errorServer();

        this.loading = false;
      }
    },
    errorServer: function() {
      this.snackbar = true;
      setTimeout(() => (this.snackbar = false), 3000);
    },
    ...mapActions("appBar", ["toggleDrawer"])
  }
};

/*

            */
</script>

<style lang="scss">
.v-card--offset {
  top: -28px;
  position: absolute;
  z-index: 1;
}

.v-alert-custom {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 90%;
  z-index: 10;
  transform: translateX(-50%);
}
</style>
