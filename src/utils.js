export function isFolder (stuff) {
  let t = Object.prototype.toString.call(stuff)
  return ['[object Array]', '[object Object]'].some(i => t === i)
}
