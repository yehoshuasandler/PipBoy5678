const initialState = {
  currentHealth: 100,
  maxHealth: 120,
  topNavSelection: 'STAT'
}

function rootReducer (state = initialState, action) {
  if (action.type === 'CHANGE_TOP_NAV') {
    return Object.assign({}, state, {
      topNavSelection: action.payload
    })
  }
  return state
}
export default rootReducer