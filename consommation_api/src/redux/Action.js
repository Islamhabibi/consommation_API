import axios from "axios";
import { DELET_DATA, GET_DATA, UPDATE_DATA } from "./Actiontype";

export const get_data = () => async (dispatch) => {
  try {
    const res = await axios
      .get("http://fakestoreapi.com/products")
      .then((res) =>
        dispatch({
          type: GET_DATA,
          payload: res.data,
        })
      );
  } catch (error) {
    console.log(error);
  }
};
export const delet_data = (id) => {
  return {
    type: DELET_DATA,
    payload: id,
  };
};
export const update_data = (id,data) => {
    return {
      type: UPDATE_DATA,
      payload: {id,data},
    };
  };
