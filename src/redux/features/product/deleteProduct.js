import { baseApi } from "../../api/baseApi";


const deleteProduct = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type: "product"}],
        }),

    }),
    overrideExisting: false,
})

export const {useDeleteProductMutation} = deleteProduct;