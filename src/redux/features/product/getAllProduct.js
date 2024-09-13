import { baseApi } from "../../api/baseApi";


const getAllProduct = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({
                url: "/product?limit=20",
                providesTags: ["product"],
            })
        }),
        overrideExisting: false,
    })
})

export const {useGetAllProductQuery} = getAllProduct;