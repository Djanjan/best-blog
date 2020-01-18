<template>
  <v-dialog
    v-model="openDialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    class="overflow-hidden"
  >
    <v-toolbar flat color="transparent" absolute dark height="80px">
      <v-btn icon @click="toggleDialog()" class="ml-1">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-toolbar-title class="ml-7">Login Page</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="mr-7 hidden-sm-and-down">
        <v-btn dark text>Home</v-btn>
        <v-btn dark text>Register</v-btn>
        <v-btn dark text>About</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <section style="height: 100vh;">
      <v-img
        src="https://picsum.photos/1900/1200?random"
        lazy-src="https://picsum.photos/10/6?random"
        class="v-img-full"
        gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.8)"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-row>
        </template>
        <v-layout
          white--text
          align-center
          column
          justify-center
          style="margin-top: 8em;"
        >
          <v-card class="px-5 pb-3" max-width="100%" width="400">
            <v-sheet
              class="v-sheet--offset mx-auto pa-8 text-center"
              color="primary"
              elevation="12"
              dark
              max-width="calc(100% - 32px)"
            >
              <h1 class="display-2 font-weight-bold mb-2">
                Login
              </h1>
              <v-btn icon class="ma-1">
                <v-icon>mdi-facebook-box</v-icon>
              </v-btn>
              <v-btn icon class="ma-1">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon class="ma-1">
                <v-icon>mdi-github-box</v-icon>
              </v-btn>
            </v-sheet>

            <v-card-text class="text-center mx-auto">
              <div class="text-center grey--text body-1 font-weight-light">
                Or Registary
              </div>

              <form>
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="25"
                  label="Name"
                  prepend-icon="mdi-face"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  prepend-icon="mdi-email"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  label="Password"
                  prepend-icon="mdi-lock-outline"
                  required
                  @change="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field>
                <v-checkbox
                  v-model="checkbox"
                  :error-messages="checkboxErrors"
                  label="Do you agree?"
                  color="primary"
                  required
                  @change="$v.checkbox.$touch()"
                  @blur="$v.checkbox.$touch()"
                ></v-checkbox>
              </form>

              <v-btn color="primary" text rounded large @click="submit">
                LET'S GO
              </v-btn>
            </v-card-text>
          </v-card>
          <hfooter />
        </v-layout>
      </v-img>
    </section>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

import hfooter from '../components/Footer.vue'

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(25) },
    email: { required, email },
    password: { required },
    checkbox: {
      checked (val) {
        return val
      }
    },
    submitStatus: ''
  },
  components: {
    hfooter
  },
  data: () => ({
    loading: true,
    name: '',
    email: '',
    password: '',
    checkbox: false
  }),
  computed: {
    ...mapState({
      openDialog: state => state.dialog
    }),
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 25 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500)
    // this.loading = false
  },
  methods: {
    ...mapActions(['toggleDialog']),
    ...mapActions('user', ['authorization']),
    randomNumber: function (value) {
      return Math.floor(Math.random() * (value - 1 + 1)) + 1
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.authorization({
            login: this.name,
            email: this.email,
            password: this.password,
            avatar: 'https://randomuser.me/api/portraits/men/' + this.randomNumber(99) + '.jpg'
          })
          this.submitStatus = 'OK'
        }, 500)
      }
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.password = ''
      this.checkbox = false
    }
  }
}
</script>

<style lang="scss">
.v-sheet--offset {
  top: -24px;
  position: relative;
}

.v-img-full {
  height: 110vh;
}
</style>
