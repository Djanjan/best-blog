<template>
<div>
    <tool-bar></tool-bar>
    <v-container fluid :class="customClass+($vuetify.breakpoint.mdAndUp ? 'px-10' : '')">
    <v-row align="center">
      <v-col>
        <h2 class="font-weight-medium">Comments {{ id }}</h2>
      </v-col>

      <v-col>
        <h4 class="text-right font-weight-medium">count {{ 5 }}</h4>
      </v-col>
    </v-row>

    <v-row align="start" justify="space-between">
      <v-col cols="12" lg="12">
        <comment-card></comment-card>
      </v-col>
      <v-col cols="12" lg="12">
        <comment-card></comment-card>
      </v-col>
      <v-col cols="12" lg="12">
        <comment-card></comment-card>
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

<script>
import { mapState } from 'vuex'

import CommentCard from './CommentCard.vue'
import ToolBar from './CommentsToolBar.vue'

export default {
  name: 'comments-layout',
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
    'comment-card': CommentCard,
    'tool-bar': ToolBar
  },
  data: () => ({
    comments: []
  }),
  computed: {
    ...mapState('router', {
      curectRouterName: state => state.name
    })
  },
  created: function () {
    // console.log(this.avatar)
    // this.fetchData()
  },
  methods: {
    openCommentsPage: function () {
      this.$router.push({
        name: 'comments',
        params: { id: this.id }
      })
    }
    /* fetchData() {
      this.error = this.post = null
      this.loading = true
      // замените `getPost` используемым методом получения данных / доступа к API
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    } */
  }
}
</script>
