import {combineReducers} from 'redux';
import {register} from './auth';

const reducer = combineReducers({
  register,
});

export default reducer;
