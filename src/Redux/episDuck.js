import axios from 'axios'

//Constants
let initialData = {
    fetching: false,
    episodes: []
}

let URL = "https://rickandmortyapi.com/api/episode"

let GET_EPISODES = "GET_EPISODES"
let GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS"
let GET_EPISODES_ERROR = "GET_EPISODES_ERROR"

//Reducer
export default function reducer(state=initialData, action){
    switch (action.type) {
        case GET_EPISODES:
            return {...state, fetching: true}
        case GET_EPISODES_SUCCESS:
            return {...state, fetching: false, episodes: action.payload}
        case GET_EPISODES_ERROR:
            return {...state, fetching: false, error: action.payload}
        default:
            return state
    }
}

//Action (Creators)
export let getEpisodesAction = () => (dispatch, getState) => {
    dispatch({
        type: GET_EPISODES
    })
    return axios.get(URL)
    .then(res=>{
        dispatch({
            type: GET_EPISODES_SUCCESS,
            payload: res.data.results
        })
    })
    .catch(e=>{
        console.log(e)
        dispatch({
            type: GET_EPISODES_ERROR,
            payload: e.response.message
        })
    })
} 