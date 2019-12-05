const changeTopNav = (payload) => {
  console.log(payload)
  return {
    type: 'CHANGE_TOP_NAV',
    payload
  }
}

export default {
  changeTopNav
}