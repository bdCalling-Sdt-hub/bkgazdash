import { baseApi } from "../../api/baseApi";


const allOrder = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: () => "/order/all-orders"
        })
    })
})

export const {useGetAllOrderQuery} = allOrder;