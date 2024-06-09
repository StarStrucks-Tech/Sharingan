import React from "react";
import {useSelector} from 'react-redux';

const Header =()=>{
  const result = useSelector((state:any)=>state.countData);
  console.warn("data in header", result);
  return(
    <div>
      <span>{result.length}</span>
    </div>
  )
}
export default Header;