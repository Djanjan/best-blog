<template>
        <v-btn icon :class="customClass" @click.stop="openLogin()">
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    customClass: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState('user', {
      logged: state => state.logged,
      userDate: state => state.date
    })
  },
  created: function () {
    // console.log(this.$store.state.appBar.drawer)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.loading = false, 500)
    // this.loading = false
  },
  methods: {
    randomNumber: function (value) {
      return Math.floor(Math.random() * (value - 1 + 1)) + 1
    },
    openLogin: function () {
      this.$router.push({ path: '/login' })
    },
    ...mapActions('user', [
      'toggleLogged',
      'logout'
    ]),
    ...mapActions([
      'toggleDialogLogin'
    ])
  }
}
</script>
