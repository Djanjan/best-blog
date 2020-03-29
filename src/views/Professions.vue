<template>
  <v-container fluid :class="$vuetify.breakpoint.mdAndUp ? 'pa-0' : ''">
    <tool-bar></tool-bar>
    <v-row>
      <v-col cols="12" lg="12">
        <professions-all></professions-all>
      </v-col>
    </v-row>
    <v-alert dense type="error" class="alert-fix" :value="isError">
      <strong> Connection failed.</strong> Try next time -- {{error}}
      <v-btn icon color="white" right @click.stop="closeAlert()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-alert>
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
    isError: function () {
      return this.error !== ''
    }
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
    },
    closeAlert: function () {
      this.error = ''
    }
  }
}
</script>
