<template>
    <v-hover
      v-slot:default="{ hover }">
    <v-card
      :class="customClass"
      :elevation="hover ? 20 : 2">

    <slot name="img"></slot>

    <div
      class="d-flex justify-center"
      :style="'height:'+circleSize/2 +'px;'">
      <v-avatar
        :color="$vuetify.theme.dark ? '#424242':'white'"
        :size="circleSize+12"
        :style="'top:' + -((circleSize/2)+4) + 'px ;'">
        <v-avatar
          :color="circleColor"
          :size="circleSize">
          <v-icon
            v-if="!isAvatar"
            color="white"
            :size="circleSize/2"
          >
            {{icon}}
          </v-icon>

          <img v-else :src="avatar"/>
        </v-avatar>
      </v-avatar>
    </div>

    <slot></slot>

    </v-card>
    </v-hover>
</template>

<script>
export default {
  name: 'app-card-full',
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
      default: 90
    },
    isAvatar: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    }
  },
  data: () => ({

  }),
  computed: {

  },
  created: function () {
    // console.log(this.avatar)
  }
}
</script>
