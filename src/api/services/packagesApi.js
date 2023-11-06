import { wrapperAPI } from "../helper/wrapperApi";

export const packagesApi = wrapperAPI.injectEndpoints({
  reducerPath: "categoryApi",
  tagTypes: ["category"],
  endpoints: (builder) => ({
    getAllCats: builder.query({
      providesTags: ["category"],
      query: () => ({
        url: `get_all_cats`,
        method: "GET",
      }),
    }),
    getPropertiesCats: builder.query({
      providesTags: ["Packages"],
      query: (id) => `properties?cat=${id}`,
    }),
    getOptionsCats: builder.query({
      providesTags: ["Packages"],
      query: (id) => `get-options-child/${id}`,
    }),
  }),
});

export const {
  useGetAllCatsQuery,
  useGetPropertiesCatsQuery,
  useGetOptionsCatsQuery,
} = packagesApi;
