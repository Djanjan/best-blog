<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12" lg="6">
          <v-row align="start" justify="space-between">
          <v-col
           v-for="n in 3"
            :key="n"
            cols="12" md="6">
            <v-skeleton-loader
              :loading="loading"
              transition="scale-transition"
              type="card"
            >
            <article-card
              title="Where to begin"
              sub-title="Indulgence contrasted sufficient to unpleasant in in insensible favourable.
              In expression an solicitude principles in do. Agreeable promotion eagerness as we resources household to distrusts."></article-card>
            </v-skeleton-loader>

          </v-col>

          <v-col cols="12" md="6">
            <article-card
              custom-class=""
              isAvatar
              avatar="https://randomuser.me/api/portraits/women/14.jpg"
              title="Where to begin"
              sub-title="Indulgence contrasted sufficient to unpleasant in in insensible favourable.
              In expression an solicitude principles in do. Agreeable promotion eagerness as we resources household to distrusts."
            ></article-card>
          </v-col>
        </v-row>

      </v-col>

      <v-col cols="12" lg="6">
        <app-layount
          title="Popular profession">
          <v-col
            v-for="n in 6"
            :key="n"
            cols="12" md="6">
            <app-card-category isHoverAndRipple>
            </app-card-category>
          </v-col>
        </app-layount>
      </v-col>

      <v-col cols="12" lg="6">
        <app-layount
          title="Statistic profession"
          movementId="134134">
          <v-col
            v-for="n in 6"
            :key="n"
            cols="12" md="6">
            <app-card-simple circleMin>
            </app-card-simple>
          </v-col>
        </app-layount>
      </v-col>
    </v-row>

    <hfooter />
  </v-container>
</template>

<script>
// import list from '../components/ListExpand.vue'
import hfooter from '../components/Footer.vue'

import AppCardSimple from '../components/AppCardSimple.vue'
import AppLayout from '../components/AppLayout.vue'

export default {
  name: 'Home',
  components: {
    // 'list': list,
    'article-card': () => import('../components/ArticleCard.vue'),
    'app-card-simple': AppCardSimple,
    'app-card-category': () => import('../components/AppCardCategory.vue'),
    'app-layount': AppLayout,
    hfooter
  },
  data: () => ({
    cards: '',
    loading: true
  }),
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 1000)
    // this.loading = false
  }
}
</script>
