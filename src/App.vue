<template lang="jade">
#app
  raw-panel
  tree-panel
</template>

<script>
import RawPanel from './components/RawPanel'
import TreePanel from './components/TreePanel'
import store from './vuex/store'

export default {
  store,
  components: { RawPanel, TreePanel }
}
</script>

<style src="normalize.css" lang="css"></style>
<style src="./assets/ionicons/ionicons.css" lang="css"></style>
<style src="./assets/source-code-pro/index.css" lang="css"></style>
<style lang="stylus">
html
body
  height 100%
  font-family 'Source Code Pro', monospace
  font-size 14px
  color #333
  line-height 1.6
  -webkit-font-smoothing antialiased

#app
  height 100%
  display flex
</style>
