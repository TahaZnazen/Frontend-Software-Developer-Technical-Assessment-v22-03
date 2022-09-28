import moment from 'moment';
import { CREATE_PRODUCT, DELETE_PRODUCT, RECEIVE_PRODUCTS, UPDATE_PRODUCT } from "../types/productsTypes";
import { generateId } from '../utils';

export const isFeatured = ({rating, featured}) => rating > 8 || featured;

export function products(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return [
        ...action.products,
      ];
    case DELETE_PRODUCT:
      return state.filter((item) => item.id !== action.productId);
    case UPDATE_PRODUCT:
      return state.map((item) => {
        if (item.id === action.productId) {
          return {
            ...item,
            ...action.data,
            featured: isFeatured(action.data)
          }
        }
        return item;
      });
    case CREATE_PRODUCT:
      return state.concat([{
        ...action.data,
        id: generateId(),
        featured: isFeatured(action.data),
        createdAt: moment().format(),
      }]);
    default:
      return state;
  }
}

export function getProductById({products}, productId) {
  return products.find(({id}) => id === productId);
}
