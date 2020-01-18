module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  publicPath: process.env.NODE_ENV === 'production'
    ? '/best-blog/'
    : '',

  lintOnSave: false
}
