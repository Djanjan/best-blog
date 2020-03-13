<template>
    <v-hover
      v-slot:default="{ hover }">
    <v-card
      :class="customClass + (isHoverAndRipple ? 'a-link' : '')"
      :elevation="applyHover(hover)"
      :ripple="applyRipple()">
        <v-row no-gutters>

        <v-col cols="5">
          <slot name="img"></slot>
        </v-col>

       <v-col cols="1" class="d-flex justify-start align-center">
       <div
          class="d-flex justify-center align-center"
          style="width: 0px;">
            <v-avatar :color="$vuetify.theme.dark ? '#424242':'white'" :size="circleSize+10">
                <v-avatar :color="circleColor" :size="circleSize">
                    <app-icon
                        :icon="icon"
                        :size="circleSize/2" color="white"></app-icon>
                    <!--<v-icon color="white" :size="circleSize/2">{{icon}}</v-icon>  style="white-space: normal;"-->
                </v-avatar>
            </v-avatar>
        </div>
       </v-col>

        <v-col cols="6">
          <slot></slot>
        </v-col>
        </v-row>
    </v-card>
    </v-hover>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'app-card-horizon',
  components: {
    'app-icon': AppIcon
  },
  props: {
    customClass: {
      type: String,
      default: ''
    },
    circleColor: {
      type: String,
      default: 'secondary'
    },
    circleSize: {
      type: Number,
      default: 80
    },
    icon: {
      type: String,
      default: 'M 11 3 C 9.897 3 9 3.897 9 5 L 9 8.0234375 C 10.208 8.9364375 11 10.37 11 12 C 11 13.112 10.644734 14.119406 10.052734 14.941406 C 11.858734 15.895406 13 17.495766 13 19.384766 L 13 21 L 22 21 L 23 21 L 23 5 C 23 3.897 22.103 3 21 3 L 11 3 z M 13 7 L 15 7 L 15 9 L 13 9 L 13 7 z M 17 7 L 19 7 L 19 9 L 17 9 L 17 7 z M 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 9 12 A 3 3 0 0 0 6 9 z M 13 11 L 15 11 L 15 13 L 13 13 L 13 11 z M 17 11 L 19 11 L 19 13 L 17 13 L 17 11 z M 13 15 L 15 15 L 15 17 L 13 17 L 13 15 z M 17 15 L 19 15 L 19 17 L 17 17 L 17 15 z M 6 16 C 3.149 16 1 17.455766 1 19.384766 L 1 21 L 11 21 L 11 19.384766 C 11 17.455766 8.851 16 6 16 z'
    },
    isHoverAndRipple: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
  }),
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
    }
  }
}
</script>

<style lang="scss" scoped>
.a-link {
  cursor: pointer;
}
</style>
