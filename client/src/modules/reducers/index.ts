import {combineReducers} from 'redux';
import userReducer from './reducer'

const rootReducer = combineReducers({
    userReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;