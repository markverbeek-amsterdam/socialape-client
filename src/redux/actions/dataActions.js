import { SET_SCREAMS, LOADING_DATA, LIKE_SCREAM, UNLIKE_SCREAM } from '../types';
import axios from 'axios';

export const getScream = () => dispatch => {
    dispatch({type: LOADING_DATA});
    axios.get ('/screams')
    .then(res => {dispatch({
        type: SET_SCREAMS,
        payload: res.data
    })
})
    .catch(err => {
        dispatch({
            type: SET_SCREAMS,
            payload: []
        })
    })
}
