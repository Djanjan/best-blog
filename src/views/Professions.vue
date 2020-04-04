<template>
  <v-container fluid :class="$vuetify.breakpoint.mdAndUp ? 'pa-0' : ''">
    <tool-bar></tool-bar>
    <v-row>
      <v-col cols="12" lg="12">
        <professions-all></professions-all>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import toolBar from '../components/TheToolBarHome.vue'

export default {
  name: 'professions-page',
  components: {
    'professions-all': () => import('./ProfessionsAll.vue'),
    'tool-bar': toolBar
  },
  data: () => ({
    error: ''
  }),
  computed: {
  },
  created: function () {
    // console.log(this.avatar)
  },
  mounted: function () {
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
