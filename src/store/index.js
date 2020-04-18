import { createStore, applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import Common from './common/reduces'

const RootReducer = combineReducers({
    Common
})

let store = createStore(RootReducer,applyMiddleware(thunk))

export default store