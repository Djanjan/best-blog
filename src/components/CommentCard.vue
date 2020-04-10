<template>
<div>
  <template v-if="!loading">
  <app-card-simple
    :custom-class="customClass"
    :circleSize="80"
    :isAvatar="isAvatar"
    :avatar="avatar"
    :icon="icon"
    :title="userName"
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

  <template v-else>
    <v-skeleton-loader
          transition="scale-transition"
          type="card"
          width="100%"
          height="100%">
      </v-skeleton-loader>
  </template>
</div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

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
    userId: {
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
      default: ''
    }
  },
  components: {
    'app-card-simple': AppCardSimple
  },
  data: () => ({
    loading: true,
    userName: '',
    dataUser: {}
  }),
  computed: {
  },
  created: function () {
    // console.log(this.avatar)
    this.fetchUserData()
  },
  methods: {
    ...mapActions('error', [ 'newError' ]),
    fetchUserData: function () {
      this.loading = true
      axios
        .get('/user/' + this.userId)
        .then(response => {
          this.dataUser = response.data.data
          // console.log(this.dataUser)
          this.userName = this.dataUser.name

          this.loading = false
        })
        .catch(error => {
          console.error(error)
          this.newError(error)
          this.loading = true
        })
    }
  }
}
</script>
