<template lang="jade">
.json-item
  .item
    .key(v-text="key")
    .val(v-if="!isFolder(val)", v-text="val")
  .child(v-if="expanded")
    json-item(v-for="(k, v) of val", :key="k", :val="v")
</template>

<script>
import { isFolder } from '../utils'

export default {
  name: 'JsonItem',
  props: ['key', 'val'],
  data () {
    return {
      open: false
    }
  },
  computed: {
    expanded () {
      return isFolder(this.val) && this.open
    }
  }
}
</script>

<style lang="stylus" scoped>
.json-item
  .item
    display flex
    .key
      margin-right 1em
      &::after
        content ':'
  .child
    padding-left 1em
</style>
