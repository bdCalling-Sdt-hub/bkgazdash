// src/redux/api/services/productApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/public/' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => 'card.json', // Adjust the endpoint as per your API
    }),
  }),
});

// Export the auto-generated hooks
export const { useGetProductQuery } = productApi;