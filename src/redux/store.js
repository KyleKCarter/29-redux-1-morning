import { createStore } from 'redux';

const initialState = {
    title: '',
    img: '',
    text: '',
    posts: []
}

//constants
export const UPDATE_STATE = 'UPDATE_STATE';
export const ADD_POST = 'ADD_POST';

//reducer
function reducer(state=initialState, action) {
    const {type, payload, stateKey} = action
    switch(type) {
        case UPDATE_STATE:
            return {
                ...state,
                [stateKey]: payload
            };
        case ADD_POST:
            const {title, img, text} = state
            const post = {title, img, text}
            const newPost = [...state.posts, post]
            return {
                ...state,
                posts: newPost
            }
        default:
            return state;
    }
}

export default createStore(reducer)