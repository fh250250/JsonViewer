export function dataType (stuff) {
  return Object.prototype.toString.call(stuff).slice(8, -1).toLowerCase()
}

export function expandable (stuff) {
  switch (dataType(stuff)) {
    case 'object':
      return Boolean(Object.keys(stuff).length)
    case 'array':
      return Boolean(stuff.length)
    default:
      return false
  }
}

export function cantExpandText (stuff) {
  switch (dataType(stuff)) {
    case 'object':
      return '{}'
    case 'array':
      return '[]'
    case 'string':
      return `"${stuff}"`
    case 'null':
      return 'null'
    default:
      return stuff
  }
}
