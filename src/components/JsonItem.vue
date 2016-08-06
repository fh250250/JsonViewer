<template lang="jade">
.json-item
  .normal-item(v-if="!canExpand")
    .key(v-text="key")
    | :
    .val(v-text="cantExpandText", :class="valType")
  .folder-item(v-if="canExpand")
    .expand
      .wrap(@click="toggle")
        .indicator.ion-arrow-right-b(:class="{ expanded: open }")
        .key(v-text="key")
        | :
        .val(v-text="expandText")
    .child(v-show="open")
      json-item(v-for="(k, v) of val", :key="k", :val="v")
      .close(v-text="closeText")
</template>

<script>
import { expandable, cantExpandText, dataType } from '../utils'

export default {
  name: 'JsonItem',
  props: ['key', 'val'],
  data () {
    return {
      open: false
    }
  },
  computed: {
    canExpand () {
      return expandable(this.val)
    },
    cantExpandText () {
      return cantExpandText(this.val)
    },
    valType () {
      return dataType(this.val)
    },
    expandText () {
      switch (this.valType) {
        case 'object':
          return this.open ? '{' : '{...}'
        case 'array':
          return this.open ? '[' : '[...]'
        default:
          return ''
      }
    },
    closeText () {
      switch (this.valType) {
        case 'object':
          return '}'
        case 'array':
          return ']'
        default:
          return ''
      }
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="stylus" scoped>
.json-item
  white-space nowrap
  .normal-item
    display flex
    padding-left 20px
    .key
      color #2973b7
    .val
      margin-left 10px
      &.string
        color #42b983
      &.boolean
      &.number
        color #ae81ff
      &.null
        color #ccc
  .folder-item
    .expand
      display flex
      .wrap
        display flex
        align-items center
        cursor pointer
        .indicator
          width 20px
          height @width
          text-align center
          color #999
          &.expanded
            transform rotate(90deg)
        .key
          color #2973b7
        .val
          margin-left 10px
    .child
      padding-left 1em
      .close
        padding-left 5px
</style>
