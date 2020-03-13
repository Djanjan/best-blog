<template>
  <v-container fluid>
    <tool-bar></tool-bar>
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
              In expression an solicitude principles in do. Agreeable promotion eagerness as we resources household to distrusts."
              :id="n.toString()"></article-card>
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
              id="15"
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
            <app-card-horizon isHoverAndRipple>
              <template v-slot:img>
                <v-img
                  src="https://picsum.photos/500/300?random"
                  lazy-src="https://picsum.photos/10/6?random"
                  height="100%"
                  width="100%"
                >
                </v-img>
              </template>
              <v-list-item two-line class="text-right">
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1"  style="white-space: normal;">Landscape design</v-list-item-title>
                    <v-list-item-subtitle style="white-space: normal;">Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </app-card-horizon>
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
            <app-card-simple
              circleMin
              :title="'Statistic '+n">
              <v-list-item two-line class="text-right" style="padding-left: 110px;">
        <v-list-item-content>
          <v-list-item-title
            class="subtitle-1 mb-1"
            style="white-space: normal;"
            >Landscape design</v-list-item-title
          >
          <v-list-item-subtitle class="subtitle-2" style="white-space: normal;"
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
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
import toolBar from '../components/TheToolBarHome.vue'

export default {
  name: 'Home',
  components: {
    // 'list': list,
    'article-card': () => import('../components/ArticleCard.vue'),
    'app-card-simple': AppCardSimple,
    'app-card-horizon': () => import('../components/AppCardHorizon.vue'),
    'app-layount': AppLayout,
    hfooter,
    'tool-bar': toolBar
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
