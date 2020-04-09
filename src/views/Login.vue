<template>
  <div>
    <template v-if="!$vuetify.breakpoint.xs">
      <v-toolbar flat color="transparent" absolute dark height="80px" width="100%">
        <v-btn icon @click="closePage()" class="ml-1">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-toolbar-title class="ml-7">Login Page</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="mr-7 hidden-xs-and-down">
          <v-btn dark text><v-icon left>mdi-home</v-icon>Home</v-btn>
          <v-btn dark text @click="openRegsterPage()"
            ><v-icon left>mdi-account-multiple-plus</v-icon>Register</v-btn
          >
          <v-btn dark text
            ><v-icon left>mdi-information-outline</v-icon>About</v-btn
          >
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
            <v-card class="px-5 pb-3" max-width="100%" width="400">
              <v-sheet
                class="v-sheet--offset mx-auto pa-8 text-center"
                color="secondary"
                elevation="12"
                dark
                max-width="calc(100% - 32px)"
              >
                <h1 class="display-2 font-weight-bold mb-2">
                  Login
                </h1>
                <v-btn icon class="ma-1">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon class="ma-1">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon class="ma-1">
                  <v-icon>mdi-github</v-icon>
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
                </form>

                <v-btn color="secondary" text rounded large @click="submit">
                  LET'S GO
                </v-btn>
              </v-card-text>
            </v-card>
          </v-layout>
        </v-img>
      </section>
    </template>

    <template v-else>
      <v-toolbar height="80px">
        <v-btn icon @click="closePage()" class="ml-1">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-toolbar-title class="ml-1">Login Page</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="mr-1">
          <v-btn icon text @click="openRegsterPage()"
            ><v-icon>mdi-account-multiple-plus</v-icon></v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card class="px-5 pb-3" min-width="100%">
        <v-sheet
          class="mx-auto pa-8 text-center mb-3"
          color="secondary"
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
          </form>

          <v-btn color="secondary" text rounded large @click="submit">
            LET'S GO
          </v-btn>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import axios from 'axios'

// import hfooter from '../components/Footer.vue'

export default {
  name: 'loginDialog',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(25) },
    email: { required, email },
    password: { required },
    submitStatus: ''
  },
  components: {
    // hfooter
  },
  data: () => ({
    loading: true,
    name: '',
    email: '',
    password: ''
  }),
  computed: {
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
    ...mapActions('user', ['authorization']),
    randomNumber: function (value) {
      return Math.floor(Math.random() * (value - 1 + 1)) + 1
    },
    openRegsterPage () {
      this.$router.push({ path: '/register' })
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'

        this.fetchData()
        /* setTimeout(() => {
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
        }, 500) */
      }
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.password = ''
    },
    fetchData: function () {
      this.loading = true
      axios
        .post('/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.data = response.data.data
          console.log(response.data.data)
          this.authorization({
            id: this.data.id,
            login: this.data.name,
            email: this.data.email,
            avatar: this.data.featured_img,
            token: this.data.token
          })
          this.submitStatus = 'OK'
          this.closePage()
          this.loading = false
        })
        .catch(error => {
          console.error(error)
          this.newError(error)
          this.loading = true
        })
    },
    closePage () {
      this.$router.push({
        name: 'home'
      })
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
  height: 100vh;
}
</style>
