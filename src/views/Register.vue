<template>
  <v-dialog
    v-model="openDialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    class="overflow-hidden"
  >
    <template v-if="!$vuetify.breakpoint.xs">
    <v-toolbar flat color="transparent" absolute dark height="80px">
      <v-btn icon @click="toggleDialogRegister()" class="ml-1">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-toolbar-title class="ml-7">Register Page</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="mr-7 hidden-xs-and-down">
        <v-btn dark text><v-icon left>mdi-home</v-icon>Home</v-btn>
        <v-btn dark text @click.stop="toggleDialogRegister()"
          ><v-icon left>mdi-exit-to-app</v-icon>Login</v-btn
        >
        <v-btn dark text
          ><v-icon left>mdi-information-outline</v-icon>About</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>

    <section style="height: 120vh;">
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
              color="secondary"
            ></v-progress-circular>
          </v-row>
        </template>
        <v-layout
          align-center
          column
          justify-center
          style="margin-top: 4em; height:100%"
        >
          <v-card class="px-5 pb-3" max-width="100%" width="800">
            <v-sheet
              class="v-sheet--offset mx-auto pa-8 text-center"
              color="secondary"
              elevation="12"
              dark
              max-width="calc(100% - 32px)"
            >
              <h1 class="display-2 font-weight-bold mb-2">
                Register
              </h1>
            </v-sheet>
            <v-row>
              <v-col class="col-md-6 col-12">
                <v-row no-gutters>
                    <v-col class="col-12">
                    <v-list-item>
                        <v-list-item-icon class="mr-4 mt-5 mt-md-4">
                            <v-icon style="font-size: 36px;" color="pink">mdi-chart-timeline-variant</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="py-2">
                            <v-list-item-title class="mb-4 mt-3 font-weight-light">Marketing</v-list-item-title>
                            <v-list-item-subtitle style="white-space: normal;">
                                We've created the marketing
                                campaign of the website.
                                It was a very interesting collaboration.
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-col>
                    <v-col class="col-12">
                    <v-list-item>
                        <v-list-item-icon class="mr-4 mt-5 mt-md-4">
                            <v-icon style="font-size: 36px;" color="deep-purple">mdi-code-tags</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="py-2">
                            <v-list-item-title class="mb-4 mt-3 font-weight-light">Fully Coded in HTML5</v-list-item-title>
                            <v-list-item-subtitle style="white-space: normal;">
                                We've developed the website
                                with HTML5 and CSS3.
                                The client has access to the code using GitHub.
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-col>
                    <v-col class="col-12">
                    <v-list-item>
                        <v-list-item-icon class="mr-4 mt-5 mt-md-4">
                            <v-icon style="font-size: 36px;" color="blue">mdi-account-multiple</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="py-2">
                            <v-list-item-title class="mb-4 mt-3 font-weight-light">Built Audience</v-list-item-title>
                            <v-list-item-subtitle style="white-space: normal;">
                                There is also a Fully Customizable CMS Admin Dashboard for this product.
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-col>

                </v-row>
              </v-col>

              <v-col class="col-md-6 col-12">
                <v-card-text class="text-center mx-auto">
                  <v-btn dark fab class="ma-1" color="deep-purple">
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn dark fab class="ma-1" color="blue">
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn dark fab class="ma-1">
                    <v-icon>mdi-github-box</v-icon>
                  </v-btn>
                  <div class="text-center grey--text body-1 font-weight-light">
                    Or Login
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
                      color="secondary"
                      required
                      @change="$v.checkbox.$touch()"
                      @blur="$v.checkbox.$touch()"
                    ></v-checkbox>
                  </form>

                  <v-btn color="secondary" outlined rounded large @click="submit">
                    GET STARTED
                  </v-btn>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-layout>
      </v-img>
    </section>
    </template>

    <template v-else>
      <v-toolbar height="80px">
        <v-btn icon @click="toggleDialogRegister()" class="ml-1">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-toolbar-title class="ml-1">Register Page</v-toolbar-title>

        <v-spacer></v-spacer>

      <v-toolbar-items class="mr-1">
        <v-btn icon text @click.stop="toggleDialogRegister()"
          ><v-icon left>mdi-exit-to-app</v-icon></v-btn
        >
      </v-toolbar-items>
    </v-toolbar>

    <v-card class="px-5 pb-3" min-width="100%">
            <v-sheet
              class="mx-auto pa-8 text-center"
              color="secondary"
              elevation="12"
              dark
              max-width="calc(100% - 32px)"
            >
              <h1 class="display-2 font-weight-bold mb-2">
                Register
              </h1>
            </v-sheet>
            <v-row>
              <v-col class="col-md-6 col-12">
                <v-card-text class="text-center mx-auto">
                  <v-btn dark fab class="ma-1" color="deep-purple">
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn dark fab class="ma-1" color="blue">
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn dark fab class="ma-1">
                    <v-icon>mdi-github-box</v-icon>
                  </v-btn>
                  <div class="text-center grey--text body-1 font-weight-light">
                    Or Login
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
                      color="secondary"
                      required
                      @change="$v.checkbox.$touch()"
                      @blur="$v.checkbox.$touch()"
                    ></v-checkbox>
                  </form>

                  <v-btn color="secondary" outlined rounded large @click="submit">
                    GET STARTED
                  </v-btn>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

// import hfooter from '../components/Footer.vue'

export default {
  name: 'registerDialog',
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
    // hfooter
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
      openDialog: state => state.dialogRegister
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
    ...mapActions(['toggleDialogRegister', 'toggleDialogLogin']),
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
            avatar:
              'https://randomuser.me/api/portraits/men/' +
              this.randomNumber(99) +
              '.jpg'
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
  height: 120vh;
}
</style>
