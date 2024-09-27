import { baseApi } from "../../api/baseApi";


const addProduct = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (data) => ({
                url: `/product`,
                method: "POST",
                body: data,
                
            }),
            invalidatesTags: [{ type: "Product" }],
        })
    })
})

export const { useAddProductMutation } = addProduct;
