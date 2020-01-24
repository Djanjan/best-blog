<template>
  <v-container fluid>
    <v-row justify="space-between">
      <v-col cols="12" md="4" class="pa-5">
        <v-col>
          <v-list-item-title class="title font-weight-black pa-0 mb-4">Category</v-list-item-title>
          <p class="font-weight-light body-2" v-for="i in 6" :key="i">Category {{i}}</p>
        </v-col>
        <v-col>
          <v-list-item-title class="title font-weight-black pa-0">Popular Articles</v-list-item-title>
          <v-container fluid style="padding:0">
          <v-row>
            <v-col
              v-for="n in 9"
              :key="n"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 25 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 25 + 10}`"
                  aspect-ratio="1"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        </v-col>
        <v-col>
          <v-list-item-title class="title font-weight-black pa-0 mb-4">Tags</v-list-item-title>
              <v-chip
                class="ma-2"
                label
                v-for="i in 12" :key="i"
              >
                tags {{i}}
              </v-chip>
        </v-col>
      </v-col>

      <v-col md="8" cols="12">
        <list/>
      </v-col>
    </v-row>

    <hfooter />
  </v-container>
</template>

<script>
import list from '../components/ListExpand.vue'
import hfooter from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    'list': list,
    hfooter
  },
  data: () => ({
    cards: '',
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }
    ]
  })
}
</script>
