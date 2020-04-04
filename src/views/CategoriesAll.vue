<template>
  <app-layout title="All Category">
    <!--<template v-if="loading">
      <v-col v-for="(n, index) in limitPage" :key="index" cols="12" md="6">
        <v-skeleton-loader
          v-if="loading"
          transition="scale-transition"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </template>-->

    <v-col v-for="item in data" :key="item.id" cols="16" md="4">
      <category-card
        isHoverAndRipple
        :title="item.title"
        :subTitle="item.description"
        :id="item.id.toString()"
      >
      </category-card>
    </v-col>
    <v-col cols="12" md="12">
      <v-row>
        <v-col cols="12" md="12">
          <v-pagination
            v-model="selectedPage"
            :length="maxPage"
            :total-visible="$vuetify.breakpoint.mdAndUp ? 7 : 5"
            color="secondary"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-col>
  </app-layout>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

import pagination from '../mixins/pagination.js'

import AppLayout from '../components/AppLayout.vue'

export default {
  name: 'categories-all-page',
  mixins: [pagination],
  components: {
    'app-layout': AppLayout,
    'category-card': () => import('../components/CategoryCard.vue')
  },
  data () {
    return {
      loading: true,
      data: []
    }
  },
  computed: {
  },
  created: function () {
    // console.log(this.avatar)
  },
  mounted: function () {
    this.fetchData(this.page)
  },
  methods: {
    fetchData: function (page) {
      this.loading = true
      axios
        .get('/categories', {
          params: {
            limit: this.limitPage,
            page: page
          }
        })
        .then(response => {
          this.data = response.data.data.data
          this.maxPage = response.data.data.last_page
          // console.log(response.data.data)
          this.loading = false
        })
        .catch(error => {
          console.error(error)
          this.newError(error)
          this.loading = true
        })
    },
    ...mapActions('error', [ 'newError' ])
    /* toMovement: function () {
      this.$router.push({
        path: '/view',
        params: { id: this.movementId }
      })
    }, */
  }
}
</script>
