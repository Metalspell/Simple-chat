import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './Reducers/authReducer';
import { usersReducers } from './Reducers/usersReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducers
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;