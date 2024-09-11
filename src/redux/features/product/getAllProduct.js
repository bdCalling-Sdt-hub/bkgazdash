import { baseApi } from "../../api/baseApi";


const getAllProduct = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({
                url: "/product",
                providesTags: ["product"],
            })
        }),
        overrideExisting: false,
    })
})

export const {useGetAllProductQuery} = getAllProduct;