<template>
<div>
  <template v-if="curectRouterName === 'comments'">
    <div>
    <tool-bar></tool-bar>
    <v-container fluid :class="customClass+($vuetify.breakpoint.mdAndUp ? 'px-10' : '')">
    <v-row align="center">
      <v-col>
        <h2 class="font-weight-medium">Comments {{ data.length }}</h2>
      </v-col>

      <v-col>
        <h4 class="text-right font-weight-medium">Write</h4>
      </v-col>
    </v-row>

    <v-row align="start" justify="space-between">
      <v-col cols="12" lg="12" v-for="item in data" :key="item.id">
        <comment-card
          :text="item.title"></comment-card>
      </v-col>
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
    </v-row>
    </v-container>
    </div>
  </template>
  <template v-else>
    <div>
    <tool-bar></tool-bar>
    <v-container fluid :class="customClass+($vuetify.breakpoint.mdAndUp ? 'px-10' : '')">
    <v-row align="center">
      <v-col>
        <h2 class="font-weight-medium">Comments {{ data.length }}</h2>
      </v-col>

      <v-col>
        <h4 class="text-right font-weight-medium">Write</h4>
      </v-col>
    </v-row>

    <v-row align="start" justify="space-between">
      <v-col cols="12" lg="12" v-for="item in data" :key="item.id">
        <comment-card
          :text="item.title"></comment-card>
      </v-col>
      <v-col cols="12" lg="12">
        <v-card-actions
          class="justify-center"
          v-if="curectRouterName === 'article'">
          <v-btn
            color="secondary"
            rounded
            large
            @click.stop="openCommentsPage()"
          >
            View All
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    </v-container>
    </div>
  </template>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'comments-page',
  props: {
    id: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  components: {
    'comment-card': () => import('../components/CommentCard.vue'),
    'tool-bar': () => import('../components/CommentsToolBar.vue')
  },
  data: () => ({
    comments: [],
    loading: true,
    page: 1,
    maxPage: 1,
    data: {}
  }),
  computed: {
    ...mapState('router', {
      curectRouterName: state => state.name
    }),
    selectedPage: {
      get () {
        return this.page
      },
      set (item) {
        if (item !== this.page) {
          this.page = item
          this.fetchData(item)
        }
      }
    },
    limitPage: function () {
      return this.curectRouterName === 'comments' ? 12 : 4
    }
  },
  created: function () {
    // console.log(this.avatar)
    // this.fetchData()
  },
  mounted: function () {
    this.fetchData(this.page)
  },
  methods: {
    openCommentsPage: function () {
      this.$router.push({
        name: 'comments',
        params: { id: this.id }
      })
    },
    fetchData: function (page) {
      this.loading = true
      axios
        .get('comments/post/' + this.id, {
          params: {
            limit: this.limitPage,
            page: page
          }
        })
        .then(response => {
          this.data = response.data.data.data
          this.maxPage = response.data.data.last_page
          // console.log(this.data)
          this.loading = false
        })
        .catch(error => {
          console.error(error)
          this.error = error
          this.loading = true
        })
    }
  }
}
</script>
