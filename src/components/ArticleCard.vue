<template>
    <card-full
        :custom-class="this.customClass"
        :isAvatar="this.isAvatar"
        :icon="this.icon"
        :avatar="this.avatar"
        :isHoverAndRipple="true"
        >
              <template v-slot:img>
                <v-img
                  min-height="150px"
                  max-height="250px"
                  src="https://picsum.photos/500/300?random"
                  lazy-src="https://picsum.photos/10/6?random"
                  :aspect-ratio="16/9"
                  transition="fade-transition"
                  @click.stop="$router.push('article/1')"
                >
                </v-img>
              </template>

              <v-card-text class="text-center text--primary" style="padding-top:4px;">
                <h2 class="pb-3 font-weight-regular title">{{title}}</h2>
                <div class="pa-3 pb-4 font-weight-light">
                  {{subTitle}}
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-text class="px-6">
                <v-row align="center">
                  <div class="font-weight-light caption">
                    <v-icon medium>mdi-clock-outline</v-icon>
                    {{lastUpdate}}
                  </div>
                  <v-spacer></v-spacer>

                  <v-btn icon small>
                    <v-icon class="">mdi-bookmark</v-icon>
                  </v-btn>

                </v-row>
              </v-card-text>
    </card-full>
</template>

<script>
import AppCardFull from './AppCardFull.vue'

export default {
  name: 'ArticleCard',
  props: {
    customClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    lastUpdate: {
      type: String,
      default: 'Update now'
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
  components: {
    'card-full': AppCardFull
  },
  data: () => ({
    article: null,
    loading: true
  }),
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.loading = false), 1000)
    // this.loading = false
  }
}
</script>
