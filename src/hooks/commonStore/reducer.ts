import { ADD_TO_COUNT, REMOVE_FROM_COUNT } from "./constant";


const initialState:any = [];

export const countData =(data=initialState, action:any)=>{
 
  // if(action.type===ADD_TO_COUNT){
  //   return data;
  // }else{
  //   return "no action called";
  // }
  switch(action.type){
    case ADD_TO_COUNT:
      console.warn("reducer1 called",action);
      return [action.data,...data];
      case REMOVE_FROM_COUNT:
        console.warn("reducer2 called",action);
        return data.slice(0, data.length - 1);
    default:
      return data
  }
  
}