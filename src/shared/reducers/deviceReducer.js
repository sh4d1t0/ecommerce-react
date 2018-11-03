// @flow
export default function deviceReducer(state: { isMobile?: any } = {}): any {
  let isMobile = false

  if (state.isMobile === 'true') {
    isMobile = true
  }

  return {
    ...state,
    isMobile
  }
}
