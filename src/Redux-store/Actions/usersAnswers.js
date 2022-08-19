export const newMessageAction = (newMessage) => ({
  type: 'NEW_MESSAGE',
  payload: newMessage
})

export const answerAction = (selectContactId) => async dispatch => {
  const answer = await fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .catch(err => alert(err))
  dispatch({
    type: 'GET_ANSWER',
    payload: {
      selectContactId,
      answer: {
        myMessage: false,
        message: answer.value,
        date: new Date().toString()
      }
    }
  })
}