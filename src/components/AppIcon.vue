<template>
<div>
    <template v-if="!isIconMdi">
      <v-avatar tile :size="size">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          :width="size" :height="size"
          viewBox="0 0 24 24"
          :style="'fill:'+color+';'">  <path :d="icon"></path></svg>
      </v-avatar>
    </template>

    <template v-else>
      <v-icon>{{icon}}</v-icon>
    </template>
</div>
</template>

<script>
export default {
  name: 'app-icon',
  props: {
    customClass: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 24
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'rgba(0, 0, 0, 0.54)'
    }
  },
  data: () => ({

  }),
  computed: {
    isIconMdi: function () {
      return this.icon.indexOf('mdi') === 0
    }
  }
}
</script>
