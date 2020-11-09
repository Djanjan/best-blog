<template>
  <div @click.stop="openProfessionPage()">
    <app-card-horizon :custom-class="customClass" isHoverAndRipple :icon="icon">
      <template v-slot:img>
        <v-img
          :src="img"
          lazy-src="https://picsum.photos/10/6?random"
          height="100%"
          width="100%"
        >
        </v-img>
      </template>
      <v-list-item two-line class="text-right">
        <v-list-item-content>
          <v-list-item-title
            class="headline mb-1"
            style="white-space: normal;"
            >{{ title }}</v-list-item-title
          >
          <v-list-item-subtitle style="white-space: normal;">{{
            subTitle
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </app-card-horizon>
  </div>
</template>

<script>
import AppCardHorizon from "./AppCardHorizon.vue";

export default {
  name: "category-card",
  components: {
    "app-card-horizon": AppCardHorizon
  },
  props: {
    customClass: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default:
        "M 11 3 C 9.897 3 9 3.897 9 5 L 9 8.0234375 C 10.208 8.9364375 11 10.37 11 12 C 11 13.112 10.644734 14.119406 10.052734 14.941406 C 11.858734 15.895406 13 17.495766 13 19.384766 L 13 21 L 22 21 L 23 21 L 23 5 C 23 3.897 22.103 3 21 3 L 11 3 z M 13 7 L 15 7 L 15 9 L 13 9 L 13 7 z M 17 7 L 19 7 L 19 9 L 17 9 L 17 7 z M 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 9 12 A 3 3 0 0 0 6 9 z M 13 11 L 15 11 L 15 13 L 13 13 L 13 11 z M 17 11 L 19 11 L 19 13 L 17 13 L 17 11 z M 13 15 L 15 15 L 15 17 L 13 17 L 13 15 z M 17 15 L 19 15 L 19 17 L 17 17 L 17 15 z M 6 16 C 3.149 16 1 17.455766 1 19.384766 L 1 21 L 11 21 L 11 19.384766 C 11 17.455766 8.851 16 6 16 z"
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: "https://picsum.photos/500/300?random"
    }
  },
  data: () => ({}),
  methods: {
    openProfessionPage: function() {
      if (this.id !== "") {
        this.$router.push({
          name: "profession",
          params: { id: this.id }
        });
      }
    }
  }
};
</script>
