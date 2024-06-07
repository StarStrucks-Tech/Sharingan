import { ADD_TO_COUNT, REMOVE_FROM_COUNT } from "./constant";

export const countData =(data=[], action:any)=>{
 
  switch(action.type){
    case ADD_TO_COUNT:
      console.warn("reducer1 called",action);
      return [action.data,...data];
      case REMOVE_FROM_COUNT:
        console.warn("reducer2 called",action);

        data.length= data.length?data.length-1:0;
        return [...data];
    default:
      return data;
  }
  
}