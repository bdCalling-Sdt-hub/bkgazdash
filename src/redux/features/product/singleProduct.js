import { baseApi } from "../../api/baseApi";



const singleProduct = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        singleProduct: builder.query({
            query: (id) => `/product/${id}`
        })
    })
})

export const {useSingleProductQuery} = singleProduct;