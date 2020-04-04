<template>
  <app-layout title="Professions select specialization">
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
      <profession-card
        isHoverAndRipple
        :title="item.title"
        :subTitle="item.body"
        :id="item.id.toString()"
      >
      </profession-card>
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

import AppLayout from '../components/AppLayout.vue'

export default {
  name: 'professions-all-page',
  components: {
    'app-layout': AppLayout,
    'profession-card': () => import('../components/ProfessionCard.vue')
  },
  data () {
    return {
      loading: true,
      error: '',
      page: 1,
      maxPage: 1,
      limitPage: 12,
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
        .get('/professions/categories/' + this.$router.currentRoute.params.id, {
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
          this.error = error
          this.loading = true
        })
    }
    /* toMovement: function () {
      this.$router.push({
        path: '/view',
        params: { id: this.movementId }
      })
    }, */
  }
}
</script>
