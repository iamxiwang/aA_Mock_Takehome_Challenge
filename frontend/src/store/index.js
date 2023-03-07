import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import postsReducer from './post'
import coffeesReducer from './coffee'

const rootReducer = combineReducers({
    posts: postsReducer,
    coffees: coffeesReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
}else{
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger))
}
const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore