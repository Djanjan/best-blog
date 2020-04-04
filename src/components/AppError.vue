<template>
    <v-alert dense type="error" class="alert-fix" :value="isError">
      <strong> Connection failed.</strong> Try next time -- {{error}}
      <v-btn icon color="white" right @click.stop="closeAlert()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-alert>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app-error',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('error', {
      error: state => state.error
    }),
    isError: function () {
      return this.error !== ''
    }
  },
  created: function () {
    // console.log(this.avatar)
  },
  methods: {
    ...mapActions('error', [ 'newError' ]),
    closeAlert: function () {
      this.newError('')
    }
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
