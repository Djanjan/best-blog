<template>
  <div :class="customClass">
    <v-row align="center">
      <v-col>
        <h2 class="font-weight-medium">{{ title }}</h2>
      </v-col>

      <v-col v-if="movementId !== ''">
        <h4
          class="text-right font-weight-medium a-link"
          @click.stop="toMovement()"
        >
          see all
        </h4>
      </v-col>
    </v-row>

    <v-row align="start" justify="space-between">
      <slot></slot>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "app-layout",
  props: {
    customClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    movementId: {
      type: String,
      default: ""
    }
  },
  data: () => ({}),
  computed: {},
  created: function() {
    // console.log(this.avatar)
  },
  methods: {
    toMovement: function() {
      this.$router.push({
        path: "/view",
        params: { movementId: this.movementId }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.a-link {
  cursor: pointer;
}
</style>
