<template>
  <v-container fluid :class="$vuetify.breakpoint.mdAndUp ? 'pa-0' : ''">
    <tool-bar></tool-bar>
    <v-row>
      <v-col cols="12" lg="12">
        <categories-all></categories-all>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

import toolBar from '../components/TheToolBarHome.vue'

// const PATH_IMG = 'http://rest.jobhunter.rest/public/uploads/'

export default {
  name: 'categories-page',
  components: {
    'categories-all': () => import('./CategoriesAll.vue'),
    'tool-bar': toolBar
  },
  data () {
    return {
      loading: true,
      page: 1,
      data: []
    }
  },
  computed: {
  },
  created: function () {
    // console.log(this.avatar)
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      axios
        .get('/categories', {
          params: {
            limit: 12,
            page: 1
          }
        })
        .then(response => {
          this.data = response.data.data
          // console.log(this.data)
          this.loading = false
        })
        .catch(error => {
          console.error(error)
          this.newError(error)
          this.loading = true
        })
    },
    toMovement: function () {
      this.$router.push({
        path: '/view',
        params: { id: this.movementId }
      })
    },
    ...mapActions('error', [ 'newError' ])
  }
}
</script>

<style lang="scss" scoped>
.alert-fix {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 90%;
  z-index: 10;
  transform: translateX(-50%);
}
</style>
