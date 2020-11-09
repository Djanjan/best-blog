<template>
  <v-overlay :value="true" :absolute="absolute">
    <v-progress-circular
      indeterminate
      size="64"
      color="primary"
    ></v-progress-circular>
  </v-overlay>
</template>
<script>
export default {
  props: {
    absolute: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    overlay: false
  }),
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    }
  }
};
</script>
