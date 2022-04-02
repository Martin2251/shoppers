import { ActionTypes } from "../contants/action-types";

// take inituat state and action 
const initialState = {
    products:[{
        id: 1,
        title: "Martin",
    category: "programmer",
  },
],
};
export const productReducer = (state = initialState, {type, payload} ) => {
switch (type) {
    case ActionTypes.SET_PRODUCTS:
    return state;

    default:
        return state;
}
};