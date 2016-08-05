<template lang="jade">
.raw-panel
  textarea(@input="handleInput", placeholder="Paste Your JSON Here")
</template>

<script>
import { parseSuccess, parseError } from '../vuex/actions'
import { isFolder } from '../utils'

export default {
  methods: {
    handleInput (ev) {
      let json = ev.target.value.trim()

      if (!json) { return this.parseSuccess('{}') }

      try {
        let obj = JSON.parse(json)

        if (!isFolder(obj)) { throw new Error('can\'t expand') }

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
</style>
