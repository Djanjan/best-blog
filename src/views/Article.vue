<template>
  <div>
    <app-card-full
      isAvatar
      avatar="https://randomuser.me/api/portraits/women/34.jpg">
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
        </v-img>
      </template>
      <v-card-text class="text-center text--primary" style="padding-top:4px;">
        <div class="pa-3 pb-4 font-weight-regular title secondary--text">
          Mila Kabjert
        </div>
        <div class="pb-3 font-weight-regular display-1">Where to design</div>
      </v-card-text>

      <article-content></article-content>
    </app-card-full>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import preLoder from '../components/ProgressCircular.vue'
import AppCardFull from '../components/AppCardFull.vue'

const AsyncComponent = () => ({
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
})

export default {
  props: {
    articleId: {
      type: String,
      default: ''
    }
  },
  components: {
    'article-content': AsyncComponent,
    'app-card-full': AppCardFull
  },
  data: () => ({
    loading: true
  }),
  computed: {},
  created: function () {
    // console.log(this.$store.state.appBar.contentBar)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500)
    // this.loading = false
  },
  beforeDestroy: function () {
    // this.toggleContentBar()
  },
  methods: {
    ...mapActions('appBar', ['toggleDrawer'])
  }
}
</script>
