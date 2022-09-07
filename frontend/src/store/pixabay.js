
import csrfFetch from "./csrf"



const RECEIVE_IMAGES = 'pixabay/RECEIVE_IMAGES'

export const importImages = (pixaData) => ({
    type: RECEIVE_IMAGES, payload: pixaData
})

export const fetchPixaImages = () => async dispatch => {
    const res = await csrfFetch(
        `https://pixabay.com/api/?key=29586262-1339a0a7737b5aaf9ceacde9d&q=camp%20-holocaust&image_type=photo&category=nature&per_page=100`
        )
    if(res.ok) {
        const pixaData = await res.json()
        dispatch(importImages(pixaData.hits));
    }
    else {
        throw res
    }

}

const pixaReducer = (state={}, action) =>{
    const newState = {...state}
    switch (action.type) {
        case RECEIVE_IMAGES:
            return action.payload
        default:
            return newState
    }
}

export default pixaReducer