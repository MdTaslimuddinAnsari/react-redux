
import { ADD_TO_CART } from "../Constant"
export const addToCart = (data) => {

  console.log("Action call", data)
  return {type:ADD_TO_CART, data:data}
}

export const removeToCart = (data) => {
  return {type:'Remove to Cart', data:data}
}