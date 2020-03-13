<template>
  <app-card-simple
    :custom-class="customClass"
    :circleSize="80"
    :isAvatar="isAvatar"
    :avatar="avatar"
    :icon="icon"
    :title="autor"
  >
    <v-list-item two-line class="text-left" style="padding-left: 110px;">
      <v-list-item-content>
        <v-list-item-subtitle class="subtitle-2" style="white-space: normal;"
          >{{text}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
  </app-card-simple>
</template>

<script>
import AppCardSimple from '../components/AppCardSimple.vue'

export default {
  name: 'comment-card',
  props: {
    customClass: {
      type: String,
      default: ''
    },
    commentId: {
      type: String,
      default: ''
    },
    isAvatar: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: String,
      default: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    icon: {
      type: String,
      default: 'mdi-account-tie'
    },
    autor: {
      type: String,
      default: 'User'
    },
    text: {
      type: String,
      default: 'Greyhound divisely hello coldly fonwderfully'
    }
  },
  components: {
    'app-card-simple': AppCardSimple
  },
  data: () => ({
    comments: []
  }),
  computed: {},
  created: function () {
    // console.log(this.avatar)
    // this.fetchData()
  },
  methods: {
    toMovement: function () {
      this.$router.push({
        path: '/view',
        params: { id: this.movementId }
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
