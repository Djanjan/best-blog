<template>
  <div>
    <v-card-text class="mt-7">
      <v-skeleton-loader
        :loading="loading"
        transition="scale-transition"
        type="text"
        class="mb-3"
      >
        <strong class="mb-3 d-inline-block title font-weight-light"
          >Theme</strong
        >
      </v-skeleton-loader>

      <v-card class="pl-4">
        <v-skeleton-loader
          :loading="loading"
          transition="scale-transition"
          type="list-item-three-line"
        >
          <v-row justify="space-around">
            <v-col>
              <span>Primary</span>
              <v-chip-group
                column
                active-class="black--text"
                v-model="selectedColorPrimary"
              >
                <v-chip
                  v-for="(color, i) in colors"
                  :key="i"
                  :color="color.cod"
                  filter
                >
                  {{ color.name }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-skeleton-loader>

        <v-divider></v-divider>

        <v-skeleton-loader
          :loading="loading"
          transition="scale-transition"
          type="list-item-three-line"
        >
          <v-row justify="space-around">
            <v-col>
              <span>Secondary</span>
              <v-chip-group
                column
                active-class="secondary--text"
                v-model="selectedColorSecondary"
              >
                <v-chip
                  v-for="(color, i) in colors"
                  :key="i"
                  :color="color.cod"
                  filter
                  outlined
                >
                  {{ color.name }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-skeleton-loader>

        <v-divider></v-divider>

        <v-skeleton-loader
          :loading="loading"
          transition="scale-transition"
          type="list-item-three-line"
        >
          <v-row justify="space-around">
            <v-col>
              <span>Mode Dark</span>
              <v-switch v-model="selectedMode" color="primary"> </v-switch>
            </v-col>
          </v-row>
        </v-skeleton-loader>

      </v-card>
    </v-card-text>

    <v-card-text class="pa-6">
      <v-card class="pa-4">
        <v-skeleton-loader
          :loading="loading"
          transition="scale-transition"
          type="list-item-three-line"
        >
          <v-list two-line subheader>
            <v-subheader>General</v-subheader>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Profile photo</v-list-item-title>
                <v-list-item-subtitle
                  >Change your Google+ profile photo</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Show your status</v-list-item-title>
                <v-list-item-subtitle
                  >Your status is visible to everyone</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-skeleton-loader>

        <v-divider></v-divider>

        <v-skeleton-loader
          :loading="loading"
          transition="scale-transition"
          type="list-item-three-line"
        >
          <v-list subheader two-line flat>
            <v-subheader>Hangout notifications</v-subheader>

            <v-list-item-group v-model="settings" multiple>
              <v-list-item>
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="active"
                      color="primary"
                      @click="toggle"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle
                      >Allow notifications</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-list-item>
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="active"
                      color="primary"
                      @click="toggle"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Sound</v-list-item-title>
                    <v-list-item-subtitle
                      >Hangouts message</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-list-item>
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="active"
                      color="primary"
                      @click="toggle"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Video sounds</v-list-item-title>
                    <v-list-item-subtitle
                      >Hangouts video call</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-list-item>
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="active"
                      color="primary"
                      @click="toggle"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Invites</v-list-item-title>
                    <v-list-item-subtitle
                      >Notify when receiving invites</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-skeleton-loader>
      </v-card>
    </v-card-text>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    loading: true,
    settings: [],
    colors: [
      { cod: '#F44336', name: 'red' },
      { cod: '#E91E63', name: 'pink' },
      { cod: '#9C27B0', name: 'purple' },
      { cod: '#673AB7', name: 'deep-purple' },
      { cod: '#3F51B5', name: 'indigo' },
      { cod: '#2196F3', name: 'blue' },
      { cod: '#00BCD4', name: 'cyan' },
      { cod: '#4CAF50', name: 'green' },
      { cod: '#8BC34A', name: 'light-green' },
      { cod: '#CDDC39', name: 'lime' },
      { cod: '#FF5722', name: 'deep-orange' }
    ],
    colorsD: [
      { cod: '#F44336', name: 'red' },
      { cod: '#E91E63', name: 'pink' },
      { cod: '#9C27B0', name: 'purple' },
      { cod: '#673AB7', name: 'deep-purple' },
      { cod: '#3F51B5', name: 'indigo' },
      { cod: '#2196F3', name: 'blue' },
      { cod: '#00BCD4', name: 'cyan' },
      { cod: '#4CAF50', name: 'green' },
      { cod: '#8BC34A', name: 'light-green' },
      { cod: '#CDDC39', name: 'lime' },
      { cod: '#FF5722', name: 'deep-orange' },
      { cod: undefined, name: 'default' }
    ],
    images: [
      { src: 'https://cdn.vuetifyjs.com/images/backgrounds/bg.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/backgrounds/md.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/backgrounds/md2.jpg' }
    ]
  }),
  computed: {
    ...mapState('theme', {
      appBarProp: state => state.appBar
    }),
    selectedColorPrimary: {
      get () {
        return this.value
      },
      set (item) {
        if (item !== undefined) {
          this.$vuetify.theme.themes.light.primary = this.colors[item].cod
          this.$vuetify.theme.themes.dark.primary = this.colors[item].cod
        }
      }
    },
    selectedColorSecondary: {
      get () {
        return this.value
      },
      set (item) {
        if (item !== undefined) {
          this.$vuetify.theme.themes.light.secondary = this.colors[item].cod
          this.$vuetify.theme.themes.dark.secondary = this.colors[item].cod
        }
      }
    },
    selectedMode: {
      get () {
        return this.$vuetify.theme.dark
      },
      set (item) {
        if (item !== undefined) {
          this.$vuetify.theme.dark = item
        }
      }
    }
  },
  created: function () {

  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 500)
    // this.loading = false
  },
  methods: {
    ...mapActions('theme', [
      'setNavigationDrawer',
      'setAppBar'
    ])
  }
}
</script>
