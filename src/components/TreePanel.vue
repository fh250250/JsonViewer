<template lang="jade">
.tree-panel
  .wrap
    .json-tree
      json-item(v-for="(key, val) of json", :key="key", :val="val")
    .error(v-if="error", transition="fade") Parse Error
</template>

<script>
import JsonItem from './JsonItem'

export default {
  components: { JsonItem },
  vuex: {
    getters: {
      json (state) {
        return JSON.parse(state.json)
      },
      error (state) {
        return state.error
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tree-panel
  width 50%
  padding 50px 50px 50px 25px
  box-sizing border-box
  .wrap
    position relative
    width 100%
    height 100%
    box-sizing border-box
    padding 20px
    box-shadow 0 0 10px rgba(0, 0, 0, .8)
    border-radius 5px
    overflow auto
  .error
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    background rgba(255, 255, 255, .8)
    color #c33
    z-index 10
    display flex
    justify-content center
    align-items center
    font-size 20px
  .fade-transition
    transition all .3s
    opacity 1
  .fade-enter
  .fade-leave
    opacity 0
</style>
