import {PRODUCT_LIST, SET_PRODUCT_LIST} from './constant'

export const productData = (data = [], action:any)=>{
  switch(action.type){
    case SET_PRODUCT_LIST:
      console.warn("product_list condition", action)
      return [...action.data]
    default:
      return data
  }
}