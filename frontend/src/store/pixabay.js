import pixaData from "../pixabay_images"



const RECEIVE_IMAGES = 'pixabay/RECEIVE_IMAGES'

export const importImages = () => ({
    type: RECEIVE_IMAGES, payload: pixaData.hits
})

const pixaReducer = (state={}, action) =>{
    const newState = {...state}
    switch (action.type) {
        case RECEIVE_IMAGES:
            console.log(action.payload)
        action.payload.forEach(image => {
          return   newState[image.id]= image;            
        });

        default:
            return newState
    }
}

export default pixaReducer