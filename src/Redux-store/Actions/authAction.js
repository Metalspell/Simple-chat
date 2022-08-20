export const authAction = (userLogin) => async dispatch => {

  localStorage.setItem('userAuthInfo', JSON.stringify(userLogin));

  dispatch({
    type: 'AUTH',
    payload: userLogin
  })
}