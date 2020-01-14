import axios from 'axios'

//Constants
let initialData = {
    fetching: false,
    chars: [],
    episodes: [], 
    filterChars: []
}

let URL = "https://rickandmortyapi.com/api/character"

let GET_CHARACTERS = "GET_CHARACTERS"
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"

let FILTER_CHARACTERS = "FILTER_CHARACTERS"

//Reducer
export  default function reducer (state = initialData, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return {...state, fetching: true}
        case GET_CHARACTERS_SUCCESS:
            return {...state, fetching: false, chars: action.payload, filterChars: action.payload}
        case GET_CHARACTERS_ERROR:
            return {...state, fetching: false, error: action.payload}
        case FILTER_CHARACTERS:
            return {...state, filterChars: action.payload}
        default:
            return state
    }
}

//Action (Creators)
export let getCharactersAction = () => (dispatch, getState)=> {
    dispatch({
        type:GET_CHARACTERS
    })
    return axios.get(URL)
    .then(res => {
        dispatch({
            type:GET_CHARACTERS_SUCCESS,
            payload: res.data.results
        })
    })
    .catch(e=>{
        console.log(e)
        dispatch({
            type:GET_CHARACTERS_ERROR,
            payload: e.response.message
        })
    })
}

export let filterCharsAction = (event) => (dispatch, getState) => {
    let { chars } = getState().characters

    let filtered = []
    for (let i = 0; i < chars.length; i++) {
        if (chars[i].name.toLowerCase().includes(event.toLowerCase())) {
            filtered.push(chars[i])
        }
    }
    dispatch({
        type: FILTER_CHARACTERS,
        payload: filtered
    })
}