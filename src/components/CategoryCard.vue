<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :class="customClass + (isHoverAndRipple ? 'a-link' : '')"
      :elevation="applyHover(hover)"
      :ripple="applyRipple()"
      @click.stop="openProfessionsPage()"
    >
      <v-img
        :src="img"
        lazy-src="https://picsum.photos/10/6?random"
        height="100%"
        width="100%"
        gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.8)"
      >
        <v-layout align-center justify-center style="height:100%;">
          <v-row
            align="center"
            justify="center"
            style="position: absolute;"
            no-gutters
          >
            <v-col align="center" justify="center" class="white--text">
              <app-icon :icon="icon"
                        :size="circleSize/2" color="white"></app-icon>
              <v-list-item class="text-center">
                <v-list-item-content>
                  <v-list-item-title
                    class="title white--text"
                    style="white-space: normal;"
                    >{{ title }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-layout>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'app-card-full',
  props: {
    customClass: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    circleSize: {
      type: Number,
      default: 120
    },
    icon: {
      type: String,
      default: 'M 11 3 C 9.897 3 9 3.897 9 5 L 9 8.0234375 C 10.208 8.9364375 11 10.37 11 12 C 11 13.112 10.644734 14.119406 10.052734 14.941406 C 11.858734 15.895406 13 17.495766 13 19.384766 L 13 21 L 22 21 L 23 21 L 23 5 C 23 3.897 22.103 3 21 3 L 11 3 z M 13 7 L 15 7 L 15 9 L 13 9 L 13 7 z M 17 7 L 19 7 L 19 9 L 17 9 L 17 7 z M 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 9 12 A 3 3 0 0 0 6 9 z M 13 11 L 15 11 L 15 13 L 13 13 L 13 11 z M 17 11 L 19 11 L 19 13 L 17 13 L 17 11 z M 13 15 L 15 15 L 15 17 L 13 17 L 13 15 z M 17 15 L 19 15 L 19 17 L 17 17 L 17 15 z M 6 16 C 3.149 16 1 17.455766 1 19.384766 L 1 21 L 11 21 L 11 19.384766 C 11 17.455766 8.851 16 6 16 z'
    },
    img: {
      type: String,
      default: 'https://picsum.photos/500/300?random'
    },
    isHoverAndRipple: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'app-icon': AppIcon
  },
  data: () => ({}),
  computed: {},
  created: function () {
    // console.log(this.avatar)
  },
  methods: {
    applyHover: function (hover) {
      if (this.isHoverAndRipple) {
        return hover ? 20 : 2
      } else {
        return ''
      }
    },
    applyRipple: function () {
      if (this.isHoverAndRipple) {
        return { class: 'primary--text' }
      } else {
        return false
      }
    },
    openProfessionsPage: function () {
      if (this.id !== '') {
        this.$router.push({
          name: 'professions',
          params: { id: this.id }
        })
      }
    }
  }
}
</script>
