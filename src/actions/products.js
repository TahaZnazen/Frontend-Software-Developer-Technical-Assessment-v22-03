import axios from "axios";
import { productApi } from "../gateways/ProductApi";
import {
  CREATE_PRODUCT, DELETE_PRODUCT, RECEIVE_PRODUCTS, REQUEST_PRODUCTS, UPDATE_PRODUCT
} from "../types/productsTypes";

const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  productId: id,
});

export const updateProduct = (id, data) => ({
  type: UPDATE_PRODUCT,
  productId: id,
  data,
});

export const createProduct = (data) => ({
  type: CREATE_PRODUCT,
  data,
});

const receiveProducts = (json) => ({
  type: RECEIVE_PRODUCTS,
  products: json.map((product) => product),
});

export const fetchProducts = () => (dispatch) => {
  dispatch(requestProducts());
  const json = productApi.getProducts();
  dispatch(receiveProducts(json));
};

export const updateProductForm =
  (id, data) =>
  (dispatch, getState, { history }) => {
    dispatch(updateProduct(id, data));
    history.push("/");
  };

export const createProductForm =
  (data) =>
  (dispatch, getState, { history }) => {
    console.log("lanced");
    axios
      .post(`https://reqres.in/api/users`, data)
      .then((res) => {
        //im using a fake reqres api to return a valid api response
        dispatch(createProduct(data));
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
