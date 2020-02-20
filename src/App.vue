<template>
  <v-app id="inspire">

    <nav-panel-left />

    <v-content :class="!$vuetify.theme.dark ? 'background-lighten' : ''">
      <v-container fluid :style="$vuetify.breakpoint.mdAndUp ? 'padding: 0px 0px 0px 0px;' : 'padding: 40px 0px 0px 0px; margin: 0px 0px 40px 0px;'">
        <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
        </transition>
      </v-container>
    </v-content>

    <nav-panel-rigth/>

    <tool-bar/>

  </v-app>
</template>

<script>
import navigationPanelLeft from './components/NavigationPanel.vue'
import navigationPanelRigth from './components/NavigationPanelRigth.vue'
import toolBar from './components/ToolBar.vue'

export default {
  props: {
    source: String
  },
  components: {
    'nav-panel-left': navigationPanelLeft,
    'nav-panel-rigth': navigationPanelRigth,
    'tool-bar': toolBar
  },
  data: () => ({
  }),
  created: function () {
    // this.$router.push({ path: '/home' })
  },
  computed: {
    theme () {
      return this.$vuetify.theme.dark ? 'dark' : 'light' // :style="{background: $vuetify.theme.themes[theme].background}"
    }
  },
  methods: {}
}
</script>

<style scoped>
.background-lighten {
  background-image: linear-gradient(
    to bottom,
    var(--v-primary-base) 0%,
    var(--v-tertiary-base) 100%
  );
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
  transform: translateY(-150px);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
.slide-fade-leave {
  transform: translateY(0px);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateY(150px);
  opacity: 0;
}
</style>
