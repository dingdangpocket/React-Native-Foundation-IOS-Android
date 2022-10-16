export const SET_USER_NAME ="SET_USER_NAME"
export const GET_DATA ="GET_DATA"
const API_URL="https://mocki.io/v1/93cb2438-ca16-47ba-81b1-4a9c1c182658"
export const getData =()=>{
    try {
        return async dispatch =>{
            const res=await fetch(API_URL,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                }
            });
            const json=await res.json()
            console.log("请求的数据",json);
            if(json){
                dispatch({
                    type:GET_DATA,
                    payload:json
                })
            }
        }
    } catch (error) {
        console.log("请求错误");
    }
}
export const setName=name=>dispatch=>{
    dispatch({
        type:SET_USER_NAME,
        payload:name,
    })
}