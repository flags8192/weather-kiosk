import {
  applyMiddleware, compose, createStore,
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const middleware = [thunk];

if (process.env.REACT_APP_ENV !== 'production') {
  middleware.push(logger);
}

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

const store = createStore(rootReducer, enhancer)
window.store = store

export default store
