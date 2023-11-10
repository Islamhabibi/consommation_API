import { DELET_DATA, GET_DATA, UPDATE_DATA } from "./Actiontype"

const initialState = {product: []}

const reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_DATA:
    return { ...state, product: payload}
    case DELET_DATA:
    return { ...state, product: state.product
        .filter(e=>e.id !== payload)}
     case UPDATE_DATA:
        return { ...state, product: state.product
            .map(e=>e.id ===payload.id ?e=payload.data :e)}    
  default:
    return state
  }
}
export default reducer
