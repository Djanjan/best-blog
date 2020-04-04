<template>
  <div>
    <app-card-full :circleSize="120" icon="M 9 3 L 9 4 L 4 4 C 2.897 4 2 4.897 2 6 L 2 10 L 2 14 L 2 18 C 2 19.103 2.897 20 4 20 L 12.181641 20 C 11.952641 19.353 11.952641 18.647 12.181641 18 L 4 18 L 4 16 L 13 16 C 13 15.228 13.300297 14.532 13.779297 14 L 4 14 L 4 10 L 4 6 L 20 6 L 20 12.181641 C 20.409 12.326641 20.794094 12.551906 21.121094 12.878906 L 21.242188 13 L 22 13 L 22 6 C 22 4.897 21.103 4 20 4 L 15 4 L 15 3 L 9 3 z M 12 10 A 1 1 0 0 0 11 11 A 1 1 0 0 0 12 12 A 1 1 0 0 0 13 11 A 1 1 0 0 0 12 10 z M 18.984375 14 A 1.0001 1.0001 0 0 0 18.292969 14.292969 L 17.585938 15 L 16 15 A 1.0001 1.0001 0 0 0 15 16 L 15 17.585938 L 14.292969 18.292969 A 1.0001 1.0001 0 0 0 14.292969 19.707031 L 15 20.414062 L 15 22 A 1.0001 1.0001 0 0 0 16 23 L 17.585938 23 L 18.292969 23.707031 A 1.0001 1.0001 0 0 0 19.707031 23.707031 L 20.414062 23 L 22 23 A 1.0001 1.0001 0 0 0 23 22 L 23 20.414062 L 23.707031 19.707031 A 1.0001 1.0001 0 0 0 23.707031 18.292969 L 23 17.585938 L 23 16 A 1.0001 1.0001 0 0 0 22 15 L 20.414062 15 L 19.707031 14.292969 A 1.0001 1.0001 0 0 0 18.984375 14 z M 19 16.414062 L 19.292969 16.707031 A 1.0001 1.0001 0 0 0 20 17 L 21 17 L 21 18 A 1.0001 1.0001 0 0 0 21.292969 18.707031 L 21.585938 19 L 21.292969 19.292969 A 1.0001 1.0001 0 0 0 21 20 L 21 21 L 20 21 A 1.0001 1.0001 0 0 0 19.292969 21.292969 L 19 21.585938 L 18.707031 21.292969 A 1.0001 1.0001 0 0 0 18 21 L 17 21 L 17 20 A 1.0001 1.0001 0 0 0 16.707031 19.292969 L 16.414062 19 L 16.707031 18.707031 A 1.0001 1.0001 0 0 0 17 18 L 17 17 L 18 17 A 1.0001 1.0001 0 0 0 18.707031 16.707031 L 19 16.414062 z">
      <template v-slot:img>
        <v-img
          min-height="150px"
          max-height="250px"
          src="https://picsum.photos/500/300?random"
          lazy-src="https://picsum.photos/10/6?random"
          :aspect-ratio="16 / 9"
          transition="fade-transition"
        >
        </v-img>
      </template>

      <v-card-text class="text-center text--primary" style="padding-top: 4px;">
        <h2 class="mt-2 pb-3 font-weight-regular title">{{ data.title }}</h2>
        <div class="pa-3 pb-4 font-weight-light">
          {{ data.body }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="px-6">
        <v-row align="center">
          <div class="font-weight-light caption">
            <v-icon medium>mdi-clock-outline</v-icon>
            Latest
          </div>
          <v-spacer></v-spacer>

          <v-btn icon small>
            <v-icon class="">mdi-bookmark</v-icon>
          </v-btn>
        </v-row>
      </v-card-text>
    </app-card-full>
  </div>
</template>

<script>
import axios from 'axios'

import AppCardFull from '../components/AppCardFull.vue'

export default {
  name: 'profession-page',
  components: {
    'app-card-full': AppCardFull
  },
  data () {
    return {
      loading: true,
      error: '',
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
        .get('/professions/' + this.$router.currentRoute.params.id)
        .then((response) => {
          this.data = response.data.data
          // console.log(response.data.data)
          this.loading = false
        })
        .catch((error) => {
          console.error(error)
          this.error = error
          this.loading = true
        })
    }
  }
}
</script>
