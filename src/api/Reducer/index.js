
import { wrapperAPI } from "../helper/wrapperApi";
import categorySlice from "../services/categorySlice";

export const reducer = {
  [wrapperAPI.reducerPath]: wrapperAPI.reducer,
  category: categorySlice,

};
