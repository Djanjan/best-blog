<template>
  <app-layout title="Professions all">
    <template v-if="loading">
      <v-col v-for="(n, index) in limitPage" :key="index" cols="12" md="4">
        <v-skeleton-loader
          v-bind="{ boilerplate: true, elevation: 2 }"
          transition="scale-transition"
          type="card-avatar"
          height="100px"
        ></v-skeleton-loader>
      </v-col>
    </template>

    <template v-else>
      <v-col v-for="item in data" :key="item.id" cols="12" md="4">
        <profession-card
          isHoverAndRipple
          :title="item.title"
          :subTitle="item.description"
          :id="item._id"
        >
        </profession-card>
      </v-col>
    </template>
    <v-col cols="12" md="12">
      <v-row>
        <v-col cols="12" md="12">
          <v-pagination
            v-model="selectedPage"
            :length="maxPage"
            :total-visible="$vuetify.breakpoint.mdAndUp ? 7 : 5"
            color="secondary"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-col>
  </app-layout>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

import pagination from "../mixins/pagination.js";

export default {
  name: "professions-all-page",
  mixins: [pagination],
  components: {
    "app-layout": () => import("../components/AppLayout.vue"),
    "profession-card": () => import("../components/ProfessionCard.vue")
  },
  props: {
    limitPage: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      loading: true,
      data: []
    };
  },
  computed: {},
  created: function() {
    // console.log(this.avatar)
  },
  mounted: function() {
    //console.log(this.$router.currentRoute);
    this.fetchData(this.page);
  },
  methods: {
    fetchData: function(page) {
      this.loading = true;
      axios
        .get("/professions", {
          params: {
            limit: this.limitPage,
            page: page
          }
        })
        .then(response => {
          this.data = response.data.data;
          this.maxPage = response.data.maxPage;
          //console.log(response.data);
          this.loading = false;
        })
        .catch(error => {
          console.error(error);
          this.newError(error);
          this.loading = true;
        });
    },
    ...mapActions("error", ["newError"])
    /* toMovement: function () {
      this.$router.push({
        path: '/view',
        params: { id: this.movementId }
      })
    }, */
  }
};
</script>
