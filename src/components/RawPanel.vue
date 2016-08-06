<template lang="jade">
.raw-panel
  .wrap
    textarea(@input="handleInput", placeholder="Paste Your JSON Here")
    .tag Raw
</template>

<script>
import { parseSuccess, parseError } from '../vuex/actions'

export default {
  methods: {
    handleInput (ev) {
      let json = ev.target.value.trim()

      if (!json) { return this.parseSuccess('""') }

      try {
        JSON.parse(json)
        this.parseSuccess(json)
      } catch (e) {
        this.parseError()
      }
    }
  },
  vuex: {
    actions: { parseSuccess, parseError }
  }
}
</script>

<style lang="stylus" scoped>
.raw-panel
  width 50%
  padding 50px 25px 50px 50px
  box-sizing border-box
  .wrap
    position relative
    width 100%
    height 100%
  textarea
    display block
    width 100%
    height 100%
    margin 0
    border none
    box-sizing border-box
    padding 20px
    outline none
    resize none
    box-shadow 0 0 10px rgba(0, 0, 0, .8)
    border-radius 5px
  .tag
    position absolute
    top 0
    right 0
    color white
    background #2973b7
    padding 0 1em
    border-top-right-radius 5px
    border-bottom-left-radius 5px
</style>
