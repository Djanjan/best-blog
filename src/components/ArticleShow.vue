<template>
<div>
    <v-card-text class="pa-3 mb-5">
      <span>Style is</span>
      <v-switch v-model="selectedStyle" color="primary"></v-switch>
    </v-card-text>

    <template v-if="isStyle">
      <div v-html="compiledHtml"></div>
    </template>
    <template v-else>
      <div v-html="compiledHtmlStyle"></div>
    </template>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    isStyle: true,
    fileStyle: 'index.html',
    file: 'index1.html',
    inputfileStyle: '',
    inputfile: ''
  }),
  computed: {
    compiledHtmlStyle: function () {
      return this.inputfileStyle
    },
    compiledHtml: function () {
      return this.inputfile
    },
    selectedStyle: {
      get () {
        return this.value
      },
      set (item) {
        this.isStyle = !this.isStyle
      }
    }
  },
  created: function () {
    this.loadFile()
    this.loadFileStyle()
  },
  methods: {
    loadFileStyle () {
      axios({
        method: 'get',
        url: 'testPage/' + this.fileStyle
      })
        .then(result => {
          this.inputfileStyle = result.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          console.log('error getting file')
        })
    },
    loadFile () {
      axios({
        method: 'get',
        url: 'testPage/' + this.file
      })
        .then(result => {
          this.inputfile = result.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          console.log('error getting file')
        })
    }
  }
}
</script>

<style lang="scss">
.v-img-full {
  width: 100vh;
}
</style>
