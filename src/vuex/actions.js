export function parseError ({ dispatch }) {
  dispatch('UPDATE_JSON', '{}')
  dispatch('UPDATE_ERROR', true)
}

export function parseSuccess ({ dispatch }, json) {
  dispatch('UPDATE_JSON', json)
  dispatch('UPDATE_ERROR', false)
}
