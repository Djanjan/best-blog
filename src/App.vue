<template>
  <v-app id="inspire">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>

export default {
  props: {
    source: String
  },
  components: {
  },
  data: () => ({
  }),
  created: function () {
    // this.$router.push({ path: '/home' })
  },
  computed: {
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
  opacity: 0;
}
.slide-fade-enter-to {
  opacity: 1;
}
.slide-fade-leave {
  opacity: 1;
}
.slide-fade-leave-to {
  opacity: 0;
}
</style>
