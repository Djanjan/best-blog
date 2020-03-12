<template>
    <v-card-text>
    <div class="mb-1 headline"  :style="'white-space: normal; margin-left:'+(20+circleSize)+'px'">Landscape design</div>

    <v-card
      :class="customClass">

    <div style="height: 0px;">
      <template v-if="!circleMin">
        <v-avatar :color="$vuetify.theme.dark ? '#424242':'white'" :size="circleSize+10" :style="'top:' + -((circleSize/2)+6) + 'px ; left:15px'">
        <v-avatar :color="circleColor" :size="circleSize">
          <v-icon v-if="!isAvatar" color="white" :size="circleSize/2">{{icon}}</v-icon>
          <img v-else :src="this.avatar"/>
        </v-avatar>
        </v-avatar>
      </template>

      <template v-else>
        <v-avatar :color="circleColor" :size="circleSize" :style="'top:' + -((circleSize/2)) + 'px ; left:15px'">
          <v-icon v-if="!isAvatar" color="white" :size="circleSize/2">{{icon}}</v-icon>
          <img v-else :src="this.avatar"/>
        </v-avatar>
      </template>
    </div>

    <v-list-item two-line class="text-right" style="padding-left: 110px;">
                <v-list-item-content>
                    <v-list-item-title class="subtitle-1 mb-1"  style="white-space: normal;">Landscape design</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-2" style="white-space: normal;">Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>
    </v-list-item>

     <v-divider class="mx-4"></v-divider>

    <v-card-text class="px-6">
                <v-row align="center">
                  <div class="font-weight-light caption">
                    <v-icon medium>mdi-clock-outline</v-icon>
                    Last Update
                  </div>
                  <v-spacer></v-spacer>

                  <v-btn icon small>
                    <v-icon class="">mdi-bookmark</v-icon>
                  </v-btn>

                </v-row>
    </v-card-text>

    </v-card>
    </v-card-text>
</template>

<script>
export default {
  name: 'app-card-simple',
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
    circleMin: {
      type: Boolean,
      default: false
    },
    isAvatar: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'mdi-account-tie'
    },
    avatar: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  })
}
</script>
