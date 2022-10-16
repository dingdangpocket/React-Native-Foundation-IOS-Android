import {SET_USER_NAME,GET_DATA}from "./actions"
const initData={
    name:"默认名字",
    data:[]
}
function userReducer(state=initData,action){
    switch(action.type){
        case SET_USER_NAME:
            return {...state,name:action.payload}
        case GET_DATA:
            return {...state,data:action.payload}
        default:
            return state
    }
}
export default userReducer;