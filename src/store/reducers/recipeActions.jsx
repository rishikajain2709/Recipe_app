import {toast} from "react-toastify"

import {addrecipe} from "../reducers/recipeSlice"

export const asyncgetrecipes=()=>(dispatch,getState)=>{
try{
let data=JSON.parse(localStorage.getItem("recipes"))|| [];
dispatch(addrecipe(data))
}
catch(err)
{
toast.error(err)
}
}