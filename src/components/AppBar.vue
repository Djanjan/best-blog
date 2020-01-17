<template>
<div>
<template v-if="!contentBar.prominent">
    <v-app-bar
    app
    flat
    height="80px"
    min-width="130px"
    transition="slide-y-transition"
    :collapse="!collapseOnScroll"
    :collapse-on-scroll="collapseOnScroll"
    elevation="16"
  >
    <v-app-bar-nav-icon
      class="ml-2 v-btn--contained v-btn--fab v-btn--round v-size--small"
      @click.stop="toggleDrawer"
    />
    <v-toolbar-title>Blog</v-toolbar-title>

    <v-progress-linear
        :active="false"
        :indeterminate="false"
        absolute
        top
        color="primary"
    ></v-progress-linear>

    <v-spacer />

    <v-checkbox
      v-model="collapseOnScroll"
      color="primary"
      hide-details
      class="ml-5"
    ></v-checkbox>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <menuContext />
  </v-app-bar>
</template>

<template v-else>
  <v-app-bar
    app
    height="350px"
    min-height="80px"
    prominent
    dark
    flat
    :color="contentBar.color"
    :src="contentBar.img"
    :style="`background-image: linear-gradient(${$vuetify.theme.themes.light.secondary}, ${$vuetify.theme.themes.light.primary});`"
    transition="slide-y-transition"
    shrink-on-scroll
    elevation="16"
  >

    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          min-height="80px"
          gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)"
        ></v-img>
    </template>

    <v-app-bar-nav-icon
      class="ma-2"
      elevation="24"
      @click.stop="toggleDrawer"
    />
    <v-toolbar-title class="pb-6">{{contentBar.title}}</v-toolbar-title>

    <v-progress-linear
        :active="false"
        :indeterminate="false"
        absolute
        top
        color="primary"
    ></v-progress-linear>

    <v-spacer />

    <v-btn
      class="mt-3"
      icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn
      icon
      class="mt-3">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn
      icon
      large
      class="mt-3"
      color="primary"
      @click.stop="closeContentBar">
      <v-icon>mdi-close</v-icon>
    </v-btn>

  </v-app-bar>
</template>
</div>
</template>

<script>
import menuContext from './MenuContext.vue'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  components: {
    menuContext
  },
  data: () => ({
    loading: true,
    collapseOnScroll: true
  }),
  computed: {
    ...mapState('appBar', {
      contentBar: state => state.contentBar
    }),
    ...mapGetters('appBar', [
      'getContentBar'
    ])
  },
  created: function () {
    // console.log(this.$store.state.appBar.contentBar)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.loading = false, 500)
  },
  methods: {
    closeContentBar: function () {
      this.$router.go(-1)
    },
    ...mapActions('appBar', [
      'toggleDrawer',
      'toggleContentBar',
      'updateContentBar'
    ])
  }
}
</script>

<style lang="scss">
.v-toolbar__content{
  min-height:80px;
}

.v-toolbar__title{
  align-self: flex-end;
  padding-bottom: 23px;
}
</style>
