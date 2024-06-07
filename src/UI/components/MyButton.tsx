import React from "react";
import {addToCount, removeToCount} from '../../hooks/commonStore/action';
import { useDispatch } from "react-redux";
import {productList} from '../../hooks/commonStore/productAction';
import {useSelector} from 'react-redux';

function MyButton() {
  const dispatch = useDispatch();
  let data = useSelector((state:any)=>state.productData);
  console.warn("data in main component",data);
  const product = {
    name:'I Phone',
    category:'mobile',
    price:100000,
    color:'red'
  }
  return <div>
    <div>
    <button onClick={() => dispatch(addToCount(product))}> Add_to_Count </button>
    </div>
    <div>
    <button onClick={() => dispatch(removeToCount(product.name))}> Remove_from_Count </button>
    </div>
    <div>
    <button onClick={() => dispatch(productList())}> Call_Product_List </button>
    </div>
    </div>
}

export default MyButton;