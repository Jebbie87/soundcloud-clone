// ------------------------------------
// Constants
// ------------------------------------
const SIGNUP_CLICKED = 'SIGNUP_CLICKED'

// ------------------------------------
// Actions
// ------------------------------------
export const signupClicked = (value) => {
  return {
    type: SIGNUP_CLICKED,
    payload: value
  }
}


export const actions = {
  signupClicked
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNUP_CLICKED]: (state, { payload }) => {
    return {...state, signupModal: payload}
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  signupModal: false,
  signinModal: false,
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
