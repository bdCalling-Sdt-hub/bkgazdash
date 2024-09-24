import { baseApi } from "../../api/baseApi";


const allOrder = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: () => "/order/all-orders",
            providesTags: [{type: "About"}]
        })
    })
})

export const {useGetAllOrderQuery} = allOrder;