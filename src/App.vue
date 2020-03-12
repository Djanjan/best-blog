<template>
  <v-app id="inspire">
    <router-view></router-view>
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
