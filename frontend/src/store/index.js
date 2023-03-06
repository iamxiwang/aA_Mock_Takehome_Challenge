import thunk from 'redux-thunk'
import postsReducer from './post'
import coffeesReducer from '/coffee'

const rootReducer = combineReducer({
    posts: postsReducer,
    coffees: coffeesReducer
})

let enhancer;

if(ProcessingInstruction.env.NODE_ENV === 'porduction'){
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