import { ADD_TO_COUNT } from "./constant"
import { REMOVE_FROM_COUNT } from "./constant"

export const addToCount =(data : any)=>{
  console.warn("action is called",data)
  return {
    type:ADD_TO_COUNT,
    data
  }
}
export const removeToCount =(data : any)=>{
  console.warn("action removeToCart",data)
  return {
    type:REMOVE_FROM_COUNT,
    data
  }
}

