<template>
<v-card class="ma-4 pa-4">
    <article-content></article-content>
</v-card>
</template>

<script>
import { mapActions } from 'vuex'

import preLoder from '../components/ProgressCircular.vue'

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
  data: () => ({
    loading: true
  }),
  components: {
    'article-content': AsyncComponent
  },
  computed: {

  },
  created: function () {
    // console.log(this.$store.state.appBar.contentBar)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.loading = false, 500)
    // this.loading = false
  },
  beforeDestroy: function () {
    // this.toggleContentBar()
  },
  methods: {
    ...mapActions('appBar', [
      'toggleDrawer'
    ])
  }
}
</script>
