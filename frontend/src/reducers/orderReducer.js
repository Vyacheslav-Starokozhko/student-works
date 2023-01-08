const SET_ORDER = "SET_ORDER";
const GET_ORDERS = "GET_ORDERS";

const defaultState = {
    orders: [],
};

export default function orderReducer(state = defaultState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export const setORDER = order => ({type: SET_ORDER, payload: order});
export const getOrders = () => ({type: GET_ORDERS});