<template>
    <app-layout title="All Posts">
    <!--<template v-if="loading">
      <v-col v-for="(n, index) in limitPage" :key="index" cols="12" md="6">
        <v-skeleton-loader
          v-if="loading"
          transition="scale-transition"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </template>-->

    <v-col v-for="item in data" :key="item.id" cols="12" md="6">
      <article-card
        :title="item.title"
        :subTitle="item.body"
        :id="item.id.toString()"
      ></article-card>
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

import AppLayout from '../components/AppLayout.vue'

export default {
  name: 'article-all-page',
  components: {
    'app-layout': AppLayout,
    'article-card': () => import('../components/ArticleCard.vue')
  },
  data () {
    return {
      loading: true,
      error: '',
      page: 1,
      maxPage: 1,
      limitPage: 6,
      data: []
    }
  },
  computed: {
    isError: function () {
      return this.error !== ''
    },
    selectedPage: {
      get () {
        return this.page
      },
      set (item) {
        if (item !== this.page) {
          this.page = item
          this.fetchData(item)
        }
      }
    }
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
        .get('/posts', {
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
