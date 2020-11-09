<template>
  <div>
    <template v-if="!loading">
      <div>
        <app-card-full
          isAvatar
          avatar="https://randomuser.me/api/portraits/women/34.jpg"
        >
          <template v-slot:img>
            <v-img
              min-height="250px"
              max-height="350px"
              src="https://picsum.photos/800/500?random"
              lazy-src="https://picsum.photos/10/6?random"
              :aspect-ratio="16 / 9"
              transition="fade-transition"
              gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.7)"
            >
              <tool-bar></tool-bar>
            </v-img>
          </template>
          <v-card-text
            class="text-center text--primary"
            style="padding-top:4px;"
          >
            <div class="pa-3 pb-4 font-weight-regular title secondary--text">
              {{ dataUser.name }}
            </div>
            <div class="pb-3 font-weight-regular display-1">
              {{ data.title }}
            </div>
          </v-card-text>
          <!--<div class="ma-5">{{data.body}}</div>-->
          <article-content :html="data.body"></article-content>
        </app-card-full>
        <comments-page :id="id"></comments-page>
      </div>
    </template>
    <template v-else>
      <v-skeleton-loader
        transition="scale-transition"
        type="card"
        width="100%"
        height="100%"
      >
      </v-skeleton-loader>
      <v-skeleton-loader
        transition="scale-transition"
        type="article"
        width="50%"
        height="20%"
      >
      </v-skeleton-loader>
      <v-skeleton-loader
        transition="scale-transition"
        type="article"
        width="50%"
        height="20%"
      >
      </v-skeleton-loader>
      <v-skeleton-loader
        transition="scale-transition"
        type="article"
        width="50%"
        height="20%"
      >
      </v-skeleton-loader>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

/* const AsyncComponent = () => ({
  component: new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(import('../components/ArticleShow.vue'))
    }, 3000)
  }),
  loading: preLoder,
  error: {
    template: '<div>...error</div>'
  },
  delay: 200,
  timeout: 5000
}) */

export default {
  name: "article-page",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  components: {
    "article-content": () => import("../components/ArticleShow.vue"),
    "app-card-full": () => import("../components/AppCardFull.vue"),
    "comments-page": () => import("./Comments.vue"),
    "tool-bar": () => import("../components/ArticleToolBar.vue")
  },
  data: () => ({
    loading: true,
    dataUser: {},
    data: {}
  }),
  computed: {},
  created: function() {
    // console.log(this.$store.state.appBar.contentBar)
    // this.$router.push({ name: 'comments', params: { articleId: this.articleId } })
  },
  mounted: function() {
    this.fetchData();
  },
  beforeDestroy: function() {
    // this.toggleContentBar()
  },
  methods: {
    ...mapActions("error", ["newError"]),
    fetchData: function() {
      this.loading = true;
      axios
        .get("/articles/" + this.id)
        .then(response => {
          this.data = response.data.data;
          // console.log(this.data)
          this.fetchUserData();
        })
        .catch(error => {
          console.error(error);
          this.newError(error);
          this.loading = true;
        });
    },
    fetchUserData: function() {
      axios
        .get("/users/" + this.data.user_id)
        .then(response => {
          this.dataUser = response.data.data;
          // console.log(this.data)
          this.loading = false;
        })
        .catch(error => {
          console.error(error);
          this.newError(error);
          this.loading = true;
        });
    }
  }
};
</script>
