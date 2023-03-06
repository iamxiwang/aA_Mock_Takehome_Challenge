import thunk from 'redux-thunk'
import postsReducer from './post'
import coffeesReducer from '/coffee'

const rootReducer = combineReducer({
    posts: postsReducer,
    coffees: coffeesReducer
})
