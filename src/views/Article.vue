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
      <v-card-text class="text-center text--primary" style="padding-top:4px;">
        <div class="pa-3 pb-4 font-weight-regular title secondary--text">
          Generator
        </div>
        <div class="pb-3 font-weight-regular display-1">{{data.title}}</div>
      </v-card-text>
      <!--<div class="ma-5">{{data.body}}</div>-->
      <article-content :html="data.body"></article-content>
    </app-card-full>
    <comments-page :id="id"></comments-page>
      </div>
    </template>
    <template v-else>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

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
  name: 'article-page',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  components: {
    'article-content': () => import('../components/ArticleShow.vue'),
    'app-card-full': () => import('../components/AppCardFull.vue'),
    'comments-page': () => import('./Comments.vue'),
    'tool-bar': () => import('../components/ArticleToolBar.vue')
  },
  data: () => ({
    loading: true,
    data: {}
  }),
  computed: { },
  created: function () {
    // console.log(this.$store.state.appBar.contentBar)
    // this.$router.push({ name: 'comments', params: { articleId: this.articleId } })
  },
  mounted: function () {
    this.fetchData()
  },
  beforeDestroy: function () {
    // this.toggleContentBar()
  },
  methods: {
    fetchData: function () {
      this.loading = true
      axios
        .get('/posts/' + this.id)
        .then(response => {
          this.data = response.data.data
          // console.log(this.data)
          this.loading = false
        })
        .catch(error => {
          console.error(error)
          this.error = error
          this.loading = true
        })
    }
  }
}
</script>
