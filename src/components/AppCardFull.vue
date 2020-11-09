<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :class="customClass + (isHoverAndRipple ? 'a-link' : '')"
      :elevation="applyHover(hover)"
      :ripple="applyRipple()"
    >
      <slot name="img"></slot>

      <div
        class="d-flex justify-center"
        :style="'height:' + circleSize / 2 + 'px;'"
      >
        <v-avatar
          :color="$vuetify.theme.dark ? '#1E1E1E' : 'white'"
          :size="circleSize + 12"
          :style="'top:' + -(circleSize / 2 + 4) + 'px ;'"
        >
          <v-avatar :color="circleColor" :size="circleSize">
            <v-icon v-if="!isAvatar" color="white" :size="circleSize / 2">
              {{ icon }}
            </v-icon>

            <img
              v-else
              :lazy-src="`https://picsum.photos/10/6?image=${3}`"
              :src="avatar"
            />
          </v-avatar>
        </v-avatar>
      </div>

      <slot></slot>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "app-card-full",
  props: {
    customClass: {
      type: String,
      default: ""
    },
    circleColor: {
      type: String,
      default: "secondary"
    },
    circleSize: {
      type: Number,
      default: 90
    },
    isAvatar: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    avatar: {
      type: String,
      default: ""
    },
    isHoverAndRipple: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {},
  created: function() {
    // console.log(this.avatar)
  },
  methods: {
    applyHover: function(hover) {
      if (this.isHoverAndRipple) {
        return hover ? 20 : 2;
      } else {
        return "";
      }
    },
    applyRipple: function() {
      if (this.isHoverAndRipple) {
        return { class: "primary--text" };
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.a-link {
  cursor: pointer;
}
</style>
