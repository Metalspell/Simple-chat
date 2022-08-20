const initialStore = JSON.parse(localStorage.getItem('userAuthInfo')) || {
  userLogin: ''
}

export const authReducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'AUTH':
      return action.payload;
    default: return state
  }
}