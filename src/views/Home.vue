<template>
  <div id="page_content">
    <list :mass="cards" />
    <hfooter />
  </div>
</template>

<script>
import list from '../components/List.vue'
import hfooter from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    list,
    hfooter
  },
  data: () => ({
    cards: [
      { id: 1, title: 'Pre-fab homess', src: 'https://picsum.photos/500/300?image=', flex: 12 },
      { id: 2, title: 'Favorite road trisps', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { id: 3, title: 'Best airlsines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { id: 4, title: 'Lol airlisnes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { id: 5, title: 'Favorite rstoad trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
      { id: 6, title: 'Pre-fab hosymes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 8 },
      { id: 7, title: 'Favorite rouasd trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2 },
      { id: 8, title: 'Pre-fab hosmes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { id: 9, title: 'Pre-sfab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
      { id: 10, title: 'Favorite rsoad trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2 },
      { id: 11, title: 'Lol airliness', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { id: 12, title: 'Pre-fabs homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { id: 13, title: 'Favorite roasd trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2 },
      { id: 14, title: 'Favorite road trsips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2 },
      { id: 15, title: 'Pre-fab homets', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
      { id: 16, title: 'Favorite roead trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
      { id: 17, title: 'Favorite road trrips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { id: 18, title: 'Pre-fab hqomes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 }
    ]
  })
}
</script>
