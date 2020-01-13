import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import charsReducer, { getCharactersAction } from './charsDuck'
import episReducer, { getEpisodesAction } from './episDuck'

let rootReducer = combineReducers({
    characters: charsReducer,
    episodes: episReducer
})

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducer, 
        composeEnhancers(applyMiddleware(thunk))
    )
    getCharactersAction()(store.dispatch, store.getState)
    getEpisodesAction()(store.dispatch, store.getState)
    return store
}