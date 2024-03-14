import {combineReducers} from 'redux';
import cartItems from './Reducer'
 
export default combineReducers({cart: cartItems}); // combine reducers
