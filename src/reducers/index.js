import { combineReducers } from 'redux';

import user from './user.reducer';
import ideas from './ideas.reducer';

const rootReducer = combineReducers({
  user,
  ideas,
});

export default rootReducer;
