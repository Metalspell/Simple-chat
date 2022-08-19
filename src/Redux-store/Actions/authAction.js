export const authAction = (userLogin) => async dispatch => {

  localStorage.setItem('user', JSON.stringify(userLogin));

  dispatch({
    type: 'AUTH',
    payload: userLogin
  })
}