import { combineReducers } from 'redux'
import productReducer from './product/product_reducer'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    productReducer
})

export default persistReducer(persistConfig, rootReducer)