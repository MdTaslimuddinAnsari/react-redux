import { ADD_TO_CART } from "../Constant"
const initialState = {
  cartData:[]
}
const cartItems = (state= [], action) => {
  // eslint-disable-next-line default-case
  switch(action.type){
    case ADD_TO_CART: 
    // console.log("Reducer Call", action);
      return [
        ...state, {cartData:action.data}
      ]
      break;
    default: return state
  }
}

export default cartItems
