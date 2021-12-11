import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], {type, value}) => {
    switch(type){
        case 'ADD_CAR':
            return[...state, value]
        case 'REMOVE_CAR':
            let newState= [...state]
            newState.splice(value, 1)
            return newState
        default:
            return state;
    }
    
}

export default combineReducers({ user, cars })