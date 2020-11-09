import { combineReducers } from 'redux';
import authReducers from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducers,
});

export default rootReducer;
