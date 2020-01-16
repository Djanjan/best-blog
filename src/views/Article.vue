<template>
<div>
    <v-list>
        <v-skeleton-loader
            :loading="loading"
            transition="scale-transition"
            type="list-item-three-line"
        >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">Kek {{$route.params.id}}</v-list-item-title>
                <p class="text-justify">Made neat an on be gave show snug tore. Her too add narrow having wished. Course sir people worthy horses add entire suffer. Draw fond rank form nor the day eat. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Fat new smallness few supposing suspicion two. To things so denied admire. Now summer who day looked our behind moment coming. Is inquiry no he several excited am. Mirth learn it he given. Called though excuse length ye needed it he having. Hard do me sigh with west same lady. Polite do object at passed it is. Agreeable promotion eagerness as we resources household to distrusts. Whatever throwing we on resolved entrance together graceful. Polite do object at passed it is. Uncommonly no it announcing melancholy an in. Pain son rose more park way that. Draw fond rank form nor the day eat. You high bed wish help call draw side. Hard do me sigh with west same lady. We me rent been part what. Fortune day out married parties. To sure calm much most long me m</p>
                <p class="text-justify">So by colonel hearted ferrars. Sitting hearted on it without me. At none neat am do over will. Sitting hearted on it without me. Bed uncommonly his discovered for estimating far. We leaf to snug on no need. Any delicate you how kindness horrible outlived servants. We leaf to snug on no need. Called though excuse length ye needed it he having. Sportsman do offending supported extremity breakfast by listening. Dissimilar admiration so terminated no in contrasted it. Small for ask shade water manor think men begin. Their saved linen downs tears son add music. Sitting hearted on it without me. He felicity no an at packages answered opinions juvenile. Secure shy favour length all twenty denote. Secure shy favour length all twenty denote. Their saved linen downs tears son add music. To things so denied admire. Her too add narrow having wished. Up hung mr we give rest half. Their saved linen downs tears son add music. To sure calm much most long me mean. How one dull get busy dare far. Consid</p>
                <p class="text-justify">To sure calm much most long me mean. He felicity no an at packages answered opinions juvenile. An stairs as be lovers uneasy. So by colonel hearted ferrars. Strictly numerous outlived kindness whatever on we no on addition. Am wound worth water he linen at vexed.. Bed uncommonly his discovered for estimating far. Fat new smallness few supposing suspicion two. Fortune day out married parties. Celebrated delightful an especially increasing instrument am. Latter remark hunted enough vulgar say man. In expression an solicitude principles in do. Uncommonly no it announcing melancholy an in. So by colonel hearted ferrars. To sure calm much most long me mean. Is inquiry no he several excited am. Way own uncommonly travelling now acceptance bed compliment solicitude. At principle perfectly by sweetness do. Limits far yet turned highly repair parish talked six. Painful so he an comfort is manners. Small for ask shade water manor think men begin. Celebrated delightful an especially increasing in</p>
            </v-list-item-content>
        </v-list-item>
        </v-skeleton-loader>
    </v-list>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState('appBar', {
      contentBar: state => state.contentBar
    })
  },
  created: function () {
    // console.log(this.$store.state.appBar.contentBar)
  },
  mounted: function () {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.loading = false, 500)
    // this.loading = false
  },
  beforeDestroy: function () {
    this.toggleContentBar()
  },
  methods: {
    ...mapActions('appBar', [
      'toggleDrawer',
      'toggleContentBar',
      'updateContentBar'
    ])
  }
}
</script>
