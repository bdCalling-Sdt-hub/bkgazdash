import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// http://170.64.139.81:8081/
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://207.154.253.179:8081/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      // console.log("9 baseApi", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Promotion", "Product", "Users", "Coupon", "About", "Category"],  

  endpoints: () => ({}),
});
