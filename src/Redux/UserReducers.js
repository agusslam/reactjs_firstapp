let UserDataReducers = {
    loginStatus: false,
    userData: null
}

const DataReducer = ( state = UserDataReducers, action ) => {
    switch(action.type){
        case "LOGIN_STATUS" : {
            return {
                ...state,
                loginStatus: true,
            }
        }
        case "USER_DATA_CHANGE": {
            return {
                ...state,
                userData: action.payload
            }
        }
        default: return state
    }
}

export default DataReducer