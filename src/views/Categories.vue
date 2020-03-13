<template>
  <v-container fluid :class="$vuetify.breakpoint.mdAndUp ? 'pa-0' : ''">
    <tool-bar></tool-bar>
    <v-row>
      <v-col cols="12" lg="6">
        <app-layout title="New Category">
          <v-col v-for="n in 6" :key="n" cols="12" md="6">
            <category-card
              isHoverAndRipple
              title="Landscape design"
              subTitle="Greyhound divisely hello coldly fonwderfully"
              :id="n.toString()">
            </category-card>
          </v-col>
        </app-layout>
      </v-col>
      <v-col cols="12" lg="6">
        <app-layout title="All Category">
          <v-col v-for="n in 24" :key="n" cols="12" md="6">
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
        </app-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppLayout from '../components/AppLayout.vue'
import toolBar from '../components/TheToolBarHome.vue'

export default {
  name: 'categories-page',
  components: {
    'app-layout': AppLayout,
    'app-card-horizon': () => import('../components/AppCardHorizon.vue'),
    'category-card': () => import('../components/CategoryCard.vue'),
    'tool-bar': toolBar
  },
  data: () => ({}),
  computed: {},
  created: function () {
    // console.log(this.avatar)
  },
  methods: {
    toMovement: function () {
      this.$router.push({
        path: '/view',
        params: { id: this.movementId }
      })
    }
  }
}
</script>
