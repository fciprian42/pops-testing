import { ordersConstants } from '../constants/odersConstants';

const initialState = { orders: [], types: [], page: 1 };

function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case ordersConstants.GET_ORDERS:
      return {...state, types: action.types, orders: action.orders};
    default:
      return state;
  }
}

export default ordersReducer;