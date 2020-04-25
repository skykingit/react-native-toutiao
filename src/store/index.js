import { createStore, applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import Common from './common/reduces'
import User from './user/reduces'

const RootReducer = combineReducers({
    Common,
    User
})

let store = createStore(RootReducer,applyMiddleware(thunk))

export default store