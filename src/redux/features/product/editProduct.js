import { baseApi } from "../../api/baseApi";

const updateProduct = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateProduct: builder.mutation({
            query: ({data, id}) => ({
                url: `/product/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: [{type: "Product"}]
        })
    })
})


export const {useUpdateProductMutation} = updateProduct;