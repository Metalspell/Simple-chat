import { data } from "../Profile"

const initialState = JSON.parse(localStorage.getItem('correspondenceData')) || data;

export const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return state.map(contact => {
        if (contact.id === action.payload.selectContactId) {
          contact.correspondence = [action.payload.message, ...contact.correspondence]
          return contact
        } else {
          return contact
        }
      })
    case 'GET_ANSWER':
      return state.map(contact => {
        if (contact.id === action.payload.selectContactId) {
          contact.correspondence = [action.payload.answer, ...contact.correspondence]
          return contact
        } else {
          return contact
        }
      })
    default: return state
  }
}
